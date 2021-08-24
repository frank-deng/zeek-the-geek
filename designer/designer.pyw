#!/usr/bin/python
import sys, os;
import tkinter;
import tkinter as tk;
from tkinter import *;
from tkinter import messagebox as tkMessageBox;
from tkinter import filedialog as tkFileDialog;
#import tkMessageBox, tkFileDialog;
import xml.dom.minidom as minidom;
import webbrowser;

import traceback;
import zeekExport;

TEXT_ABOUT = "\
Author: Frank\n\
27-FEB-2014\
";

class Stage(zeekExport.Stage):
	canvasItem = None;

	def __init__(self, canvas):
		self.canvas = canvas;
		#Load image
		for object_id in range(len(self.objectInfo)):
			obj = self.objectInfo[object_id];
			obj['img'] = PhotoImage(file = obj['img']);

	def get(self, col, row):
		return (self.data[col + self.cols * row], self.canvasItem[col + self.cols * row]);

	def set(self, col, row, obj):
		self.data[col + self.cols * row] = obj;

		#Deal with canvas item
		item = self.canvasItem[col + self.cols * row];
		self.canvas.delete(item);
		self.canvasItem[col + self.cols * row] = None;
		drawPos = (col * self.imgWidth + 2, row * self.imgHeight + 2);
		if (None != obj):
			self.canvasItem[col + self.cols * row] =\
				self.canvas.create_image(drawPos[0], drawPos[1], anchor = NW, image = obj['img']);
	
	def clear(self):
		if (None != self.data):
			del self.data;
		if (None != self.canvasItem):
			for item in self.canvasItem:
				if (None != item):
					self.canvas.delete(item);
			del self.canvasItem;

	def new(self, cols, rows):
		#Clear original data
		self.clear();

		#Set up stage size
		self.cols = cols;
		self.rows = rows;
		self.data = [None] * (cols * rows);
		self.canvasItem = [None] * (cols * rows);

		#Set up position of the objects
		col = row = 0;
		for obj in self.objectInfo:
			obj['sel'] = (col, row);
			row += 1;
			if row >= self.rows:
				col, row = col + 1, 0;

		#Set up canvas
		self.canvas.configure(
			width = self.imgWidth * self.cols,
			height = self.imgHeight * self.rows);

class ZeekDesigner(tkinter.Tk):
	modified = False;
	stage = None;
	objSelected = None;
	rectSelected = None;

	#Editing
	def selectObj(self, pos):
		__objSelected = None;
		posOrig = self.objSelected['sel'];
		for obj in self.stage.objectInfo:
			if (obj['sel'] == pos):
				__objSelected = obj;
				break;
		if (None == __objSelected):
			return None;

		self.objSelected = __objSelected;
		self.toolbox.move(self.rectSelected,
			(pos[0] - posOrig[0]) * self.stage.imgWidth,
			(pos[1] - posOrig[1]) * self.stage.imgHeight,
		);
		return __objSelected;

	def doSelect(self, event):
		pos = (int(event.x / 36), int(event.y / 36));
		self.selectObj(pos);

	def doSetObj(self, event):
		self.modified = True;
		pos = (int(event.x / self.stage.imgWidth), int(event.y / self.stage.imgHeight));
		if (pos[0] < 0 or pos[0] >= self.stage.cols or pos[1] < 0 or pos[1] >= self.stage.rows):
			return;

		#print '%X'%event.state;
		if (0x04 & event.state):
			self.stage.set(pos[0], pos[1], None);
		else:
			self.stage.set(pos[0], pos[1], self.objSelected);

	def doErase(self, event):
		self.modified = True;
		pos = (int(event.x / self.stage.imgWidth), int(event.y / self.stage.imgHeight));
		if (pos[0] < 0 or pos[0] >= self.stage.cols or pos[1] < 0 or pos[1] >= self.stage.rows):
			return;
		self.stage.set(pos[0], pos[1], None);

	def doShowPos(self, event):
		pos = (event.x / self.stage.imgWidth, event.y / self.stage.imgHeight);
		self.status.set('(%d, %d)'%pos);
	#ENDS Editing

	#File handler
	def loadFile(self, filename):
		self.modified = False;
		self.filename = filename;
		if (None != filename):
			self.stage.load(filename);
			self.title(filename + ' - Zeek the Geek Designer');
		else:
			self.stage.new(17, 12);
			self.title('Zeek the Geek Designer');

		#Prepare toolbox
		self.toolbox.configure(
			width = self.stage.imgWidth * (len(self.stage.objectInfo) / self.stage.rows + 1),
			height = self.stage.imgHeight * self.stage.rows);
		for obj in self.stage.objectInfo:
			self.toolbox.create_image(
				obj['sel'][0] * self.stage.imgWidth + 2,
				obj['sel'][1] * self.stage.imgHeight + 2,
				anchor = NW, image = obj['img']);
		self.objSelected = self.stage.objectInfo[0];
		self.rectSelected = self.toolbox.create_rectangle(
			self.objSelected['sel'][0] * self.stage.imgWidth + 2,
			self.objSelected['sel'][1] * self.stage.imgHeight + 2,
			(self.objSelected['sel'][0] + 1) * self.stage.imgWidth + 2,
			(self.objSelected['sel'][1] + 1) * self.stage.imgHeight + 2,
			outline = '#000000', fill = None);

	def doNew(self, event):
		if (self.modified and False == tkMessageBox.askokcancel('File not saved', "You haven't saved your file yet.\nCreate new file Anyway?")):
				return;
		self.loadFile(None);
	
	def doOpen(self, event):
		try:
			if (self.modified and False == tkMessageBox.askokcancel('File not saved', "You haven't saved your file yet.\nContinue to load file Anyway?")):
					return;
			filename = tkFileDialog.askopenfilename(
				filetypes = [
					('Zeek Level File', '*.zlv'),
					('XML document', '*.xml'),
				],
				defaultextension = '.zlv',
				title = 'Open'
			);
			print(filename);
			if (filename not in (None, '') and len(filename) > 0):
				self.loadFile(filename);
		except:
			traceback.print_exc();
			tkMessageBox.showerror('Error', 'Failed to open file.');
	
	def doSave(self, event):
		try:
			filename = self.filename;
			if (None == filename):
				filename = tkFileDialog.asksaveasfilename(
					filetypes = [
						('XML document', '*.xml'),
						('Zeek Level File', '*.zlv'),
					],
					defaultextension = '.zlv',
					title = 'Save'
				);
			if (filename not in (None, '') and len(filename) > 0):
				self.filename = filename;
				self.stage.save(self.filename);
				self.title(filename + ' - Zeek the Geek Designer');
				self.modified = False;
		except:
			traceback.print_exc();
			tkMessageBox.showerror('Error', 'Failed to save file.');

	def doSaveAs(self, event):
		try:
			filename = tkFileDialog.asksaveasfilename(
				filetypes = [
					('XML document', '*.xml'),
					('Zeek Level File', '*.zlv'),
				],
				defaultextension = '.zlv',
				title = 'Save As'
			);
			if (filename not in (None, '') and len(filename) > 0):
				self.filename = filename;
				self.stage.save(filename);
				self.title(filename + ' - Zeek the Geek Designer');
				self.modified = False;
		except:
			traceback.print_exc();
			tkMessageBox.showerror('Error', 'Failed to save file.');
	#ENDS File handler
	def help(self, event):
		webbrowser.open('help.html');
	
	def about(self):
		w_about = tk.Toplevel(self);
		w_about.wm_title('About Zeek the Geek Designer');
		w_about.resizable(False, False);	#Disable resizing
		l_about = tkinter.Label(w_about, text = TEXT_ABOUT);
		l_about.grid(row = 0, column = 0, padx = 20, pady = 10);
		btn_ok = tkinter.Button(w_about, text = 'OK', command = w_about.destroy);
		btn_ok.grid(row = 1, column = 0, padx = 5, pady = 5, ipadx = 10, ipady = 3);
		btn_ok.focus();
		self.wait_window(w_about);

	def quit(self, event):
		if (self.modified and False == tkMessageBox.askokcancel('File not saved', "You haven't saved your file yet.\nExit Anyway?")):
				return;
		self.destroy();
		sys.exit(0);

	def __initUI__(self):
		#Init menu
		menubar = Menu(self);
		menu_file = Menu(menubar, tearoff = 0);
		menu_file.add_command(label = 'New', underline = 0, accelerator = 'Ctrl+N', command = lambda:self.doNew(None));
		self.bind_all('<Control-n>', self.doNew);
		menu_file.add_command(label = 'Open...', underline = 0, accelerator = 'Ctrl+O', command = lambda:self.doOpen(None));
		self.bind_all('<Control-o>', self.doOpen);
		menu_file.add_command(label = 'Save...', underline = 0, accelerator = 'Ctrl+S', command = lambda:self.doSave(None));
		self.bind_all('<Control-s>', self.doSave);
		menu_file.add_command(label = 'Save As...', underline = 5, accelerator = 'Ctrl+Shift+S', command = lambda:self.doSaveAs(None));
		self.bind_all('<Control-S>', self.doSaveAs);
		menu_file.add_separator();
		menu_file.add_command(label = 'Exit', underline = 1, accelerator='Ctrl+Q', command = lambda:self.quit(None));
		self.bind_all('<Control-q>', self.quit);
		menu_tool = Menu(menubar, tearoff = 0);
		menu_tool.add_command(label = 'Export...', underline = 1, accelerator='Ctrl+E', command = lambda:zeekExport.doExport(None));
		self.bind_all('<Control-e>', zeekExport.doExport);
		menu_help = Menu(menubar, tearoff = 0);
		menu_help.add_command(label = 'Help...', underline = 0, command = lambda:self.help(None));
		menu_help.add_separator();
		menu_help.add_command(label = 'About...', underline = 0, command = self.about);
		menubar.add_cascade(label = 'File', underline = 0, menu = menu_file);
		menubar.add_cascade(label = 'Tools', underline = 0, menu = menu_tool);
		menubar.add_cascade(label = 'Help', underline = 0, menu = menu_help);
		self.configure(menu = menubar);
		self.protocol("WM_DELETE_WINDOW", lambda:self.quit(None));

		#Toolbox
		self.toolbox = Canvas(self, bg='#FFFFFF', bd = 0);
		self.toolbox.grid(column = 0, row = 0);
		self.toolbox.bind('<Button-1>', self.doSelect);

		#Canvas
		self.canvas = Canvas(self, bg='#FFFFFF', bd = 0);
		self.canvas.grid(column = 1, row = 0);
		self.canvas.bind('<ButtonPress-1>', self.doSetObj);
		self.canvas.bind('<B1-Motion>', self.doSetObj);
		self.canvas.bind('<ButtonPress-3>', self.doErase);
		self.canvas.bind('<B3-Motion>', self.doErase);
		self.canvas.bind('<Motion>', self.doShowPos);

		#Additional code

		#StatusBar
		self.status = tk.StringVar();
		statusBar = Label(self, bd = 1, relief = tk.SUNKEN, anchor = tk.W, textvariable = self.status);
		statusBar.grid(column = 0, row = 1, columnspan = 2, ipadx = 0, ipady = 0, sticky = EW);

	def __init__(self, filename = None):
		self.filename = filename;

		tkinter.Tk.__init__(self);
		self.title('Zeek the Geek Designer');
		if (None != filename):
			self.title(filename + ' - Zeek the Geek Designer');
		self.resizable(False, False);	#Disable resizing

		self.__initUI__();

		self.stage = Stage(self.canvas);
		self.loadFile(self.filename);

if __name__ == '__main__':
	filename = None;
	if (len(sys.argv) > 1):
		filename = sys.argv[1];
	zeekDesigner = ZeekDesigner(filename);
	zeekDesigner.mainloop();

