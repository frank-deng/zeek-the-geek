DIR_NORTH='N';
DIR_EAST='E';
DIR_WEST='W';
DIR_SOUTH='S';

DIR_LEFT='L';
DIR_RIGHT='R';
DIR_BACK='B';

function switchDir(dir, sw) {
	var expr;
	switch (dir) {
		case DIR_NORTH:
			expr = {'L':DIR_WEST, 'R':DIR_EAST, 'B':DIR_SOUTH};
		break;
		case DIR_EAST:
			expr = {'L':DIR_NORTH, 'R':DIR_SOUTH, 'B':DIR_WEST};
		break;
		case DIR_WEST:
			expr = {'L':DIR_SOUTH, 'R':DIR_NORTH, 'B':DIR_EAST};
		break;
		case DIR_SOUTH:
			expr = {'L':DIR_EAST, 'R':DIR_WEST, 'B':DIR_NORTH};
		break;
		default:
			throw TypeError;
		break;
	}
	if (undefined == expr[sw]) {
		throw TypeError;
	}
	return expr[sw];
}
function getDir(col0, row0, col1, row1){
	if (row0 == row1 && col0 == col1) {
		return undefined;
	}
	if (row0 == row1) {
		return (col0 < col1 ? DIR_EAST : DIR_WEST);
	} else if (col0 == col1) {
		return (row0 < row1 ? DIR_SOUTH : DIR_NORTH);
	} else {
		return undefined;
	}
}
class Moveable{
	stepMax = 8;
	colPrev = undefined;
	rowPrev = undefined;
	step = 0;

	constructor(col, row, dir){
		this.col = col;
		this.row = row;
		this.dir = dir;
	}

	isMoving(){
		if (this.step > 0) {
			return true;
		} else {
			return false;
		}
	}
	move(dir){
		if (this.isMoving()) {
			return false;
		}

		this.dir = dir;
		this.step = this.stepMax;
		this.colPrev = this.col;
		this.rowPrev = this.row;
		switch(dir) {
			case DIR_NORTH:
				this.row--;
			break;
			case DIR_EAST:
				this.col++;
			break;
			case DIR_WEST:
				this.col--;
			break;
			case DIR_SOUTH:
				this.row++;
			break;
		}
		return true;
	}
	onTick(){
		var result = undefined;
		if (this.isMoving()) {
			this.step--;
			if (!this.isMoving()) {
				result = {colPrev: this.colPrev, rowPrev: this.rowPrev};
				this.colPrev = this.rowPrev = undefined;
			}
		}
		return result;
	}
	onDraw(img, ctx){
		switch (this.dir){
			case DIR_NORTH:
				drawImage(img, ctx, this.col, this.row + this.step / this.stepMax);
			break;
			case DIR_EAST:
				drawImage(img, ctx, this.col - this.step / this.stepMax, this.row);
			break;
			case DIR_WEST:
				drawImage(img, ctx, this.col + this.step / this.stepMax, this.row);
			break;
			case DIR_SOUTH:
				drawImage(img, ctx, this.col, this.row - this.step / this.stepMax);
			break;
		}
	}
}

//Handle sound via WebAudioAPI
const audioContext=new window.AudioContext();
async function loadSound(fileList){
	let taskList=[], result={};
	for(let fileName of fileList){
		(function(fileName){
			taskList.push({
				fileName,
				task:new Promise(async(resolve)=>{
					let resp=await fetch(`./audio/${fileName}.wav`);
					if(!resp.ok){
						console.error(`Failed to load ${fileName}.wav: ${resp.statusText}`);
						resolve(null);
						return;
					}
					audioContext.decodeAudioData(await resp.arrayBuffer(),resolve);
				})
			});
		})(fileName);
	}
	let respAll=await Promise.all(taskList.map(item=>item.task));
	taskList.forEach((task,idx)=>{
		result[task.fileName]=respAll[idx] || null;
	});
	return result;
}
let audioTable={
	bitten:null,
	crystal:null,
	detonate:null,
	grab:null,
	lasershot:null,
	pick:null,
	poisoned:null,
	step:null
};
loadSound(Object.keys(audioTable)).then((data)=>{
	audioTable=data;
});
function playAudio(audioFile) {
	if(!$('input#enableSound')[0].checked || !audioTable[audioFile]){
		return;
	}
	let source = audioContext.createBufferSource();
    source.buffer = audioTable[audioFile];
    source.loop = false;
    source.connect(audioContext.destination);
	source.start();
	/*
	if (!$('input#enableSound')[0].checked){
		return;
	}
	$('span#audio').append(
		'<audio autoplay="autoplay">'
		+ '<source src="audio/' + audioFile + '.wav" type="audio/wav"/>'
		+ '</audio>');
	$('span#audio audio').bind('ended', function(event){
		event.target.remove();
	});
	*/
}

