#!/usr/bin/python

import sys, os;
import tkinter;
import tkinter as tk;
from tkinter import *;
from tkinter import messagebox as tkMessageBox;
from tkinter import filedialog as tkFileDialog;
import xml.dom.minidom as minidom;
import webbrowser;
import traceback;

# The index number of objectInfo can be treated as "objectInfo_id" :P
objectInfo = [
	{
		'type':'Apple',
		'img':'image/0.gif',
		'export':'stage.setObject(%d, %d, new Apple());',
	},
	{
		'type':'AppleRotten',
		'img':'image/1.gif',
		'export':'stage.setObject(%d, %d, new AppleRotten());',
	},
	{
		'type':'Ball',
		'img':'image/2.gif',
		'export':'stage.setObject(%d, %d, new Ball());',
	},
	{
		'type':'Bomb',
		'img':'image/3.gif',
		'export':'stage.setObject(%d, %d, new Bomb());',
	},
	{
		'type':'Crystal',
		'img':'image/4.gif',
		'export':'stage.setObject(%d, %d, new Crystal());',
	},
	{
		'type':'Door',
		'img':'image/5.gif',
		'export':'stage.setObject(%d, %d, new Door());',
	},
	{
		'type':'DemonNorth',
		'img':'image/6.gif',
		'export':'stage.demon.push(new Demon(stage, %d, %d, DIR_NORTH));',
	},
	{
		'type':'DemonEast',
		'img':'image/7.gif',
		'export':'stage.demon.push(new Demon(stage, %d, %d, DIR_EAST));',
	},
	{
		'type':'DemonWest',
		'img':'image/8.gif',
		'export':'stage.demon.push(new Demon(stage, %d, %d, DIR_WEST));',
	},
	{
		'type':'DemonSouth',
		'img':'image/9.gif',
		'export':'stage.demon.push(new Demon(stage, %d, %d, DIR_SOUTH));',
	},
	{
		'type':'Egg',
		'img':'image/10.gif',
		'export':'stage.setObject(%d, %d, new Egg());',
	},
	{
		'type':'Flower',
		'img':'image/11.gif',
		'export':'stage.setObject(%d, %d, new Flower(false));',
	},
	{
		'type':'FlowerPoisonous',
		'img':'image/12.gif',
		'export':'stage.setObject(%d, %d, new Flower(true));',
	},
	{
		'type':'Key',
		'img':'image/13.gif',
		'export':'stage.setObject(%d, %d, new Key());',
	},
	{
		'type':'LaserGun',
		'img':'image/14.gif',
		'export':'stage.setObject(%d, %d, new LaserGun());',
	},
	{
		'type':'Mushroom',
		'img':'image/15.gif',
		'export':'stage.setObject(%d, %d, new Mushroom(false));',
	},
	{
		'type':'MushroomPoisonous',
		'img':'image/16.gif',
		'export':'stage.setObject(%d, %d, new Mushroom(true));',
	},
	{
		'type':'PFlowerClose',
		'img':'image/17.gif',
		'export':'stage.setObject(%d, %d, new PFlower(false));',
	},
	{
		'type':'PFlowerOpen',
		'img':'image/18.gif',
		'export':'stage.setObject(%d, %d, new PFlower(true));',
	},
	{
		'type':'Pill',
		'img':'image/19.gif',
		'export':'stage.setObject(%d, %d, new Pill());',
	},
	{
		'type':'Player',
		'img':'image/20.gif',
		'export':'stage.player.push(new Player(stage, %d, %d));',
	},
	{
		'type':'PlayerGirl',
		'img':'image/21.gif',
		'export':'stage.player.push(new Player(stage, %d, %d, true));',
	},
	{
		'type':'Treasure',
		'img':'image/22.gif',
		'export':'stage.setObject(%d, %d, new Treasure());',
	},
	{
		'type':'Wall0',
		'img':'image/23.gif',
		'export':'stage.setObject(%d, %d, new Wall(0));',
	},
	{
		'type':'Wall1',
		'img':'image/24.gif',
		'export':'stage.setObject(%d, %d, new Wall(1));',
	},
	{
		'type':'Wall2',
		'img':'image/25.gif',
		'export':'stage.setObject(%d, %d, new Wall(2));',
	},
	{
		'type':'Wall3',
		'img':'image/26.gif',
		'export':'stage.setObject(%d, %d, new Wall(3));',
	},
	{
		'type':'Wall4',
		'img':'image/27.gif',
		'export':'stage.setObject(%d, %d, new Wall(4));',
	},
	{
		'type':'Wall5',
		'img':'image/28.gif',
		'export':'stage.setObject(%d, %d, new Wall(5));',
	},
	{
		'type':'Wall6',
		'img':'image/29.gif',
		'export':'stage.setObject(%d, %d, new Wall(6));',
	},
	{
		'type':'Wall7',
		'img':'image/30.gif',
		'export':'stage.setObject(%d, %d, new Wall(7));',
	},
	{
		'type':'Wall8',
		'img':'image/31.gif',
		'export':'stage.setObject(%d, %d, new Wall(8));',
	},
	{
		'type':'Wall9',
		'img':'image/32.gif',
		'export':'stage.setObject(%d, %d, new Wall(9));',
	},
	{
		'type':'Wall10',
		'img':'image/33.gif',
		'export':'stage.setObject(%d, %d, new Wall(10));',
	},
	{
		'type':'Wall11',
		'img':'image/34.gif',
		'export':'stage.setObject(%d, %d, new Wall(11));',
	}
];

class Stage:
	imgWidth = imgHeight = 36;
	data = None;
	objectInfo = objectInfo;

	def get(self, col, row):
		return self.data[col + self.cols * row];

	def set(self, col, row, obj):
		self.data[col + self.cols * row] = obj;
	
	def clear(self):
		if (None != self.data):
			del self.data;

	def new(self, cols, rows):
		#Clear original data
		self.clear();

		#Set up stage size
		self.cols = cols;
		self.rows = rows;
		self.data = [None] * (cols * rows);

	def load(self, file):
		doc = minidom.parse(file);

		levelNode = doc.documentElement;
		cols = int(levelNode.getAttributeNode('width').value);
		rows = int(levelNode.getAttributeNode('height').value);
		self.new(cols, rows);

		#Set up objects
		for objNode in levelNode.getElementsByTagName('object'):
			objType = objNode.getAttributeNode('type').value;
			col = int(objNode.getAttributeNode('col').value);
			row = int(objNode.getAttributeNode('row').value);
			for obj in self.objectInfo:
				if (obj['type'] == objType):
					self.set(col, row, obj);
					break;

	def save(self, file):
		doc = minidom.Document();
		levelNode = doc.createElement('level');
		levelNode.setAttribute('width', str(self.cols));
		levelNode.setAttribute('height', str(self.rows));
		doc.appendChild(levelNode);
		for row in range(self.rows):
			for col in range(self.cols):
				obj = self.data[col + row * self.cols];
				if (None != obj):
					objNode = doc.createElement('object');
					objNode.setAttribute('type', obj['type']);
					objNode.setAttribute('col', str(col));
					objNode.setAttribute('row', str(row));
					levelNode.appendChild(objNode);
		f = open(file, 'w');
		doc.writexml(f, "", "\t", "\n", encoding = "utf-8");
		f.close();

def export(filelist, destfile):
	#Process Javascript Data file
	stage = Stage();
	levelNum = 1;
	f = open(destfile, 'w');

	#Start of Data
	f.write("levelData = [\n");
	for filename in filelist:
		stage.load(filename);
		#Start of level
		f.write("\t/* Level %d */\n"%levelNum);
		f.write("\tnew Stage(function(stage){\n");
		for row in range(stage.rows):
			#Objects
			f.write("\t\t//Row %d\n"%row);
			for col in range(stage.cols):
				obj = stage.get(col, row);
				if (None != obj):
					f.write("\t\t"+obj['export']%(col, row) + "\n");
			f.write("\n");

		#Custom Code
		base, ext = os.path.splitext(os.path.basename(filename));
		customScriptPath = os.path.dirname(filename) + '/' + base + '.js';
		print(customScriptPath);
		if (os.path.isfile(customScriptPath)):
			f.write("\t\t/* Custom script */\n");
			__fcs = open(customScriptPath, 'r');
			for __line in __fcs.readlines():
				f.write("\t\t" + __line);
			__fcs.close();

		#End of level
		f.write("\t}),\n");
		levelNum += 1;

	#End of Data
	f.write("];\n");
	base, ext = os.path.splitext(os.path.basename(destfile));
	f.write("document.title='%s';\n"%(base));
	f.write("new Game('%s',levelData);\n"%(base));
	f.close();

	#Get the base name of output file,
	#then generate the corresponding HTML file.
	'''
	pwd = os.path.dirname(destfile);
	base, ext = os.path.splitext(os.path.basename(destfile));
	pageFile = pwd + os.sep + base + '.html';
	if (False == os.path.isfile(pageFile)):
		ftemp = open('template.html', 'r');
		fdest = open(pageFile, 'w');
		fdest.write(ftemp.read().replace('%PACKNAME%', base));
		ftemp.close();
		fdest.close();

	return pageFile;
'''

class Export(tkinter.Tk):
	def moveUp(self, pos):
		if pos == 0:
			return;
		text = self.fileLB.get(pos);
		self.fileLB.delete(pos);
		self.fileLB.insert(pos - 1, text);
		self.fileLB.select_set(pos - 1);

	def moveDown(self, pos):
		if pos >= self.fileLB.size() - 1:
			return;
		text = self.fileLB.get(pos);
		self.fileLB.delete(pos);
		self.fileLB.insert(pos + 1, text);
		self.fileLB.select_set(pos + 1);

	def doGetFiles(self):
		try:
			files = tkFileDialog.askopenfilenames(
				title='Choose files to export',
				filetypes = [
					('Zeek Level File', '*.zlv'),
					('XML document', '*.xml'),
				],
				defaultextension = '.zlv',
			);
			if (files not in (None, '') and len(files) > 0):
				files = list(self.tk.splitlist(files));
				for filename in files:
					self.fileLB.insert(END, filename);
				self.fileLB.xview_moveto(1.0);
		except:
			traceback.print_exc();
			tkMessageBox.showerror('Error', 'Failed to load files.');
		finally:
			self.lift();

	def doMoveUp(self):
		__sel = self.fileLB.curselection();
		if (len(__sel) > 0):
			self.moveUp(int(__sel[0]));

	def doMoveDown(self):
		__sel = self.fileLB.curselection();
		if (len(__sel) > 0):
			self.moveDown(int(__sel[0]));

	def doExport(self):
		try:
			if(len(self.fileLB.get(0, END)) <= 0):
				tkMessageBox.showerror('Error', 'Please add files first.');
				return;
			destfile = tkFileDialog.asksaveasfilename(
				filetypes = [
					('Level data', '*.js'),
				],
				defaultextension = '.js',
				title = 'Output file'
			);
			if (destfile not in (None, '')):
				export(self.fileLB.get(0, END), destfile);
				#webbrowser.open(export(self.fileLB.get(0, END), destfile));
		except:
			traceback.print_exc();
			tkMessageBox.showerror('Error', 'Export failed.');
		finally:
			self.lift();

	def doQuit(self):
		self.destroy();

	def __initUI__(self):
		#Listbox & its scrollbars
		self.fileLB = tk.Listbox(self, selectmode = tk.SINGLE);
		self.fileLB.configure(width = 30);
		self.fileLB.grid(column = 0, row = 0, rowspan = 8, sticky = N+S+E+W);

		self.fileLBScrollX = Scrollbar(self, orient = HORIZONTAL);
		self.fileLBScrollX.config(command = self.fileLB.xview);
		self.fileLB.config(xscrollcommand = self.fileLBScrollX.set);
		self.fileLBScrollX.grid(column = 0, row = 9, sticky = tk.EW);

		self.fileLBScrollY = Scrollbar(self);
		self.fileLBScrollY.config(command = self.fileLB.yview);
		self.fileLB.config(yscrollcommand = self.fileLBScrollY.set);
		self.fileLBScrollY.grid(column = 1, row = 0, rowspan = 8, sticky = tk.NS);

		#Buttons
		self.btn_add = tk.Button(self, text='Add...', command = self.doGetFiles);
		self.btn_add.grid(column = 2, row = 0, padx = 2, pady = 2, ipadx = 10, ipady = 2, sticky = tk.EW);
		self.btn_del = tk.Button(self, text='Remove', command = lambda:self.fileLB.delete(tk.ANCHOR));
		self.btn_del.grid(column = 2, row = 1, padx = 2, pady = 2, ipadx = 10, ipady = 2, sticky = tk.EW);
		self.btn_add = tk.Button(self, text='Move Up', command = self.doMoveUp);
		self.btn_add.grid(column = 2, row = 2, padx = 2, pady = 2, ipadx = 10, ipady = 2, sticky = tk.EW);
		self.btn_add = tk.Button(self, text='Move Down', command = self.doMoveDown);
		self.btn_add.grid(column = 2, row = 3, padx = 2, pady = 2, ipadx = 10, ipady = 2, sticky = tk.EW);
		self.btn_add = tk.Button(self, text='Export', command = self.doExport);
		self.btn_add.grid(column = 2, row = 4, padx = 2, pady = 2, ipadx = 10, ipady = 2, sticky = tk.EW);
		self.btn_exit = tk.Button(self, text='Exit', command = self.doQuit);
		self.btn_exit.grid(column = 2, row = 5, padx = 2, pady = 2, ipadx = 10, ipady = 2, sticky = tk.EW);

	def __init__(self):
		tkinter.Tk.__init__(self);
		#self.resizable(False, False);	#Disable resizing
		self.title('Export');
		Grid.columnconfigure(self,0,weight=1);
		Grid.rowconfigure(self,7,weight=1);
		self.__initUI__();
		self.lift();
		self.mainloop();

def doExport(event):
	Export();

if __name__ == '__main__':
	doExport(None);

