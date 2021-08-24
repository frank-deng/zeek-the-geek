import { playAudio } from "./misc";
import {image,drawImage} from './image';

export class Apple{
	type='Apple';
	push=true;
	eat=true;
	destroy=true;
	onTick(stage, col, row){
		if (this.leaving) {
			this.destroy = false;
		}
	}
	onDraw(ctx, col, row){
		drawImage(image[this.type], ctx, col, row);
	}
}
export class AppleRotten{
	type='AppleRotten';
	push=true;
	eat=true;
	destroy=true;
	timer = 1;
	img_index = 0;
	onDraw(ctx, col, row){
		this.timer++;
		if (0 == (this.timer % 2)){
			this.img_index = (0 == this.img_index ? 1 : 0);
		}
		drawImage(image[this.type][this.img_index], ctx, col, row);
	}
}
export class Ball{
	type='Ball';
	push = true;
	onDraw(ctx, col, row){
		drawImage(image[this.type], ctx, col, row);
	}
}
export class Bomb{
	type = 'Bomb';
	push = true;
	timeout = -1;
	detonated = false;
	doActivate() {
		if (this.timeout < 0) {
			this.timeout = 160;
		}
	}
	doDetonate(stage, col, row) {
		this.push = undefined;
		this.detonated = true;
		var neighbour = stage.getNeighbour(col, row);
		var len = neighbour.length;
		for (var i = 0; i < len; i++) {
			var ncol = neighbour[i].col;
			var nrow = neighbour[i].row;
			var object = stage.getObject(ncol, nrow);
			if (undefined != object) {
				if (object.destroy) {
					stage.destroyObject(ncol, nrow);
				} else if (object.type == this.type) {
					object.doActivate();
				}
			}
		}
		neighbour.splice(0, neighbour.length);
		//delete neighbour;

		playAudio('detonate');
	}
	onTick(stage, col, row) {
		var moving = false;
		if (col < 0 || row < 0) {
			moving = true;
		}

		if (moving && this.timeout < 0) {
			this.doActivate();
		} else if (this.timeout > 0) {
			this.timeout --;
		}

		if (0 == this.timeout) {
			if (this.detonated) {
				stage.setObject(col, row, undefined);
			} else if (!moving){
				this.doDetonate(stage, col, row);
			}
		}
	}
	onDraw(ctx, col, row){
		if (this.timeout < 0) {
			drawImage(image[this.type]['normal'], ctx, col, row);
		} else if (this.detonated) {
			drawImage(image[this.type]['detonate'], ctx, col, row);
		} else {
			drawImage(image[this.type]['ticking'][this.timeout % 2], ctx, col, row);
		}
	}
}
export class Crystal{
	type = 'Crystal';
	push = true;
	triggered = -1;
	TRIGGER = 35;
	trigger(){
		if (-1 == this.triggered) {
			this.triggered = this.TRIGGER;
			this.push = undefined;
		}
	}
	onTick(stage, col, row){
		if (0 == this.triggered) {
			stage.destroyObject(col, row);
			stage.score += 200;
			playAudio('crystal');
			return;
		} else if (this.triggered > 0) {
			(this.triggered)--;
		} else {
			var neighbour = stage.getNeighbour(col, row);
			var len = neighbour.length;
			for (var i = 0; i < len; i++) {
				var object = stage.getObject(neighbour[i].col, neighbour[i].row);
				if (undefined != object && object.type == this.type) {
					if (object.triggered == -1 || object.triggered == this.TRIGGER){
						this.trigger();
					}
					break;
				}
			}
			neighbour.splice(0, neighbour.length);
		}
	}
	onDraw(ctx, col, row){
		if (this.triggered > 0) {
			drawImage(image[this.type][this.triggered % 3], ctx, col, row);
		} else {
			drawImage(image[this.type][0], ctx, col, row);
		}
	}
}
export class Door{
	type = 'Door';
	destroy = true;
	onPick(player) {
		var len = player.stage.data.length;
		for (var i = 0; i < len; i++) {
			var object = player.stage.data[i];
			if (undefined == object) {
				continue;
			}
			switch (object.type){
				case 'Key':
					object.pick = true;
				break;
				case 'Door':
					object.pick = undefined;
				break;
			}
		}
	}
	onDraw(ctx, col, row){
		drawImage(image[this.type], ctx, col, row);
	}
}
export class Egg{
	type = 'Egg';
	pick = true;
	eat = true;
	destroy = true;
	onPick(player) {
		var len = player.stage.data.length;
		for (var i = 0; i < len; i++) {
			var object = player.stage.data[i];
			if (undefined != object && 'Flower' == object.type) {
				object.poisonous = !object.poisonous;
			}
		}
		player.stage.score += 100;
	}
	onDraw(ctx, col, row) {
		drawImage(image[this.type], ctx, col, row);
	}
	blackArea(stage, col, row) {
		return [{col:col, row: row}];
	}
}
export class Flower{
	type = 'Flower';
	pick = true;
	eat = true;
	destroy = true;
	constructor(poisonous){
		this.poisonous = poisonous;
	}
	onPick(player) {
		if (this.poisonous) {
			player.poisoned = true;
		} else {
			player.stage.score += 50;
		}
	}
	onDraw(ctx, col, row) {
		if (this.poisonous) {
			drawImage(image[this.type][1], ctx, col, row);
		} else {
			drawImage(image[this.type][0], ctx, col, row);
		}
	}
	blackArea(stage, col, row) {
		if (this.poisonous) {
			return [{col:col, row: row}];
		}
		return [];
	}
}
export class Key{
	type = 'Key';
	pick = true;
	destroy = true;
	onPick(player) {
		var len = player.stage.data.length;
		for (var i = 0; i < len; i++) {
			var object = player.stage.data[i];
			if (undefined == object) {
				continue;
			}
			switch (object.type){
				case 'Key':
					object.pick = undefined;
				break;
				case 'Door':
					object.pick = true;
				break;
			}
		}
	}
	onDraw(ctx, col, row){
		drawImage(image[this.type], ctx, col, row);
	}
}
export class LaserGun{
	type = 'LaserGun';
	destroy = true;
	detectedPos = new Array();
	blackAreaDetected = new Array();

	doDetect(stage, col, row) {
		let result = new Array();
		this.blackAreaDetected.splice(0, this.blackAreaDetected.length);

		//North
		for (var __row = row - 1; __row >= 0; __row--) {
			var object = stage.getObject(col, __row);
			this.blackAreaDetected.push({col:col, row:__row});
			if (undefined != object) {
				result.push({col:col, row:__row, dir:DIR_NORTH});
				break;
			}
		}

		//East
		for (var __col = col + 1; __col < stage.cols; __col++) {
			var object = stage.getObject(__col, row);
			this.blackAreaDetected.push({col:__col, row:row});
			if (undefined != object) {
				result.push({col:__col, row:row, dir:DIR_EAST});
				break;
			}
		}

		//West
		for (var __col = col - 1; __col >= 0; __col--) {
			var object = stage.getObject(__col, row);
			this.blackAreaDetected.push({col:__col, row:row});
			if (undefined != object) {
				result.push({col:__col, row:row, dir:DIR_WEST});
				break;
			}
		}

		//South
		for (var __row = row + 1; __row < stage.rows; __row++) {
			var object = stage.getObject(col, __row);
			this.blackAreaDetected.push({col:col, row:__row});
			if (undefined != object) {
				result.push({col:col, row:__row, dir:DIR_SOUTH});
				break;
			}
		}

		return (result.length > 0 ? result : undefined);
	}
	setupLaser(stage, col, row, posDetected){
		switch (posDetected.dir) {
			case DIR_NORTH:
				for (var y = row - 1; y > posDetected.row; y--) {
					stage.setObject(col, y, new SpacerLaser(DIR_NORTH));
				}
			break;
			case DIR_EAST:
				for (var x = col + 1; x < posDetected.col; x++) {
					stage.setObject(x, row, new SpacerLaser(DIR_EAST));
				}
			break;
			case DIR_WEST:
				for (var x = col - 1; x > posDetected.col; x--) {
					stage.setObject(x, row, new SpacerLaser(DIR_WEST));
				}
			break;
			case DIR_SOUTH:
				for (var y = row + 1; y < posDetected.row; y++) {
					stage.setObject(col, y, new SpacerLaser(DIR_SOUTH));
				}
			break;
		}
		playAudio('lasershot');
	}
	onTick(stage, col, row) {
		this.detectedPos = this.doDetect(stage, col, row);
		if (undefined != this.detectedPos) {
			for (var i = 0; i < this.detectedPos.length; i++) {
				var pos = this.detectedPos[i];
				var object = stage.getObject(pos.col, pos.row);
				if (undefined != object && 'SpacerPlayer' == object.type
					&& object.src.invisible <= 0
					&& !object.leaving && !object.src.Moveable.isMoving()) {
					stage.setObject(pos.col, pos.row,
						new SpacerPlayerPoisoned(object.src));
					stage.destroyPlayer(object.src);
					this.setupLaser(stage, col, row, pos);
				}
			}
		}
		this.detectedPos.splice(0, this.detectedPos.length);
	}
	onDraw(ctx, col, row){
		drawImage(image[this.type], ctx, col, row);
	}
	blackArea(stage, col, row) {
		return this.blackAreaDetected;
	}
}
export class Mushroom{
	type = 'Mushroom';
	pick = true;
	eat = true;
	destroy = true;
	constructor(poisonous){
		this.poisonous = poisonous;
	}
	onPick(player) {
		if (this.poisonous) {
			player.poisoned = true;
		} else {
			player.stage.score += 500;
			player.finished = true;
		}
	}
	onDraw(ctx, col, row) {
		if (this.poisonous) {
			drawImage(image[this.type][1], ctx, col, row);
		} else {
			drawImage(image[this.type][0], ctx, col, row);
		}
	}
	blackArea(stage, col, row) {
		if (this.poisonous) {
			return [{col:col, row:row}];
		}
		return [];
	}
}
export class PFlower{
	type = 'PFlower';
	eat = true;
	destroy = true;
	open = 0;
	digest = 0;
	grab = {
		type: undefined,
		dir: undefined,
		timeout: 0,
		spacerCol: undefined,
		spacerRow: undefined,
	};
	constructor(opened){
		/* Values of this.status:
		 * 'C' : Flower closed
		 * 'o' : Flower opening
		 * 'O' : Flower opened
		 * 'G' : Flower grabbing object
		 * 'D' : Flower digesting
		 */
		this.status = (opened ? 'O' : 'C');
	}
	doOpen(){
		if ('C' == this.status) {
			this.open = image[this.type]['open'].length;
			this.status = 'o';
		}
	}
	doDigest(stage, col, row) {
		this.status = 'D';
		stage.setObject(this.grab.spacerCol, this.grab.spacerRow, undefined);
		switch (this.grab.type) {
			case 'Player':
				this.digest = -1;
			break;
			case 'Apple':
				this.digest = 160;
			break;
			case 'AppleRotten':
				this.digest = 1600;
			break;
		}
	}
	doDetect(stage, col, row, type) {
		var result = undefined;
		//Check whether a player is nearby
		var neighbour = stage.getNeighbour(col, row);
		var len = neighbour.length;
		for (var i = 0; i < len; i++) {
			var object = stage.getObject(neighbour[i].col, neighbour[i].row);
			if (undefined != object && object.type == type){
				if (type == 'SpacerPlayer') {
					let player = object.src;
					if (player.invisible <= 0) {
						result = {
							type: object.type,
							object: object,
							col: neighbour[i].col,
							row: neighbour[i].row,
							dir: neighbour[i].dir,
						};
					}
				} else {
					result = {
						type: object.type,
						object: object,
						col: neighbour[i].col,
						row: neighbour[i].row,
						dir: neighbour[i].dir,
					};
				}
				break;
			}
		}
		neighbour.splice(0, neighbour.length);
		return result;
	}
	doGrab(stage, col, row, detected) {
		this.status = 'G';
		stage.setObject(detected.col, detected.row, new SpacerPFlower(detected.dir, detected.type));
		this.grab.type = detected.type;
		this.grab.dir = detected.dir;
		this.grab.spacerCol = detected.col;
		this.grab.spacerRow = detected.row;
		this.grab.timeout = 4;
		playAudio('grab');
	}
	onTick(stage, col, row) {
		switch (this.status) {
			case 'C':
				var detected = this.doDetect(stage, col, row, 'SpacerPlayer');
				if (undefined != detected && !detected.object.src.Moveable.isMoving()) {
					this.doOpen();
				}
			break;
			case 'o':
				this.open--;
				if (this.open <= 0) {
					this.status = 'O';
				}
			break;
			case 'O':
				var detected = undefined;
				do {
					detected = this.doDetect(stage, col, row, 'SpacerPlayer');
					if (undefined != detected
						&& !detected.object.leaving
						&& !detected.object.src.Moveable.isMoving()) {
						stage.destroyPlayer(detected.object.src);
						break;
					}
					detected = this.doDetect(stage, col, row, 'Apple');
					if (undefined != detected) {
						break;
					}
					detected = this.doDetect(stage, col, row, 'AppleRotten');
					if (undefined != detected) {
						break;
					}

					//Nothing valuable detected
					detected = undefined;
				}while(0);
				if (undefined != detected) {
					this.doGrab(stage, col, row, detected);
				}
			break;
			case 'G':
				this.grab.timeout--;
				if (0 == this.grab.timeout) {
					this.doDigest(stage, col, row);
				}
			break;
			case 'D':
				if (this.digest > 0) {
					this.digest--;
					if (0 == this.digest) {
						this.status = 'C';
					}
				}
			break;
		}
	}
	onDraw(ctx, col, row) {
		var img, frameCount, frameSpace, frame;
		switch (this.status) {
			case 'C':
				img = image[this.type]['digest'][0];
			break;
			case 'o':
				frameCount = image[this.type]['open'].length;
				frame = (this.open >= 0 ? this.open : 0);
				frame = (frame < frameCount ? frame : frameCount - 1);
				img = image[this.type]['open'][frame];
			break;
			case 'O':
				img = image[this.type]['open'][0];
			break;
			case 'G':
				img = image[this.type]['grab'][this.grab.dir];
			break;
			case 'D':
				frameCount = image[this.type]['digest'].length;
				switch (this.grab.type) {
					case 'Apple':
						frame = Math.ceil(this.digest / 40);
						frame = (frame < frameCount ? frame : frameCount - 1);
						img = image[this.type]['digest'][frame];
					break;
					case 'AppleRotten':
						frame = Math.ceil(this.digest / 400);
						frame = (frame < frameCount ? frame : frameCount - 1);
						img = image[this.type]['digest'][frame];
					break;
					default:
						frame = Math.floor(Math.random() * 3);
						img = image[this.type]['player'][frame];
					break;
				}
			break;
		}

		//Finally draw the image
		drawImage(img, ctx, col, row);
	}
	blackArea(stage, col, row) {
		var result = new Array();
		var neighbour = stage.getNeighbour(col, row, undefined);
		for (var i = 0; i < neighbour.length; i++) {
			result.push({col:neighbour[i].col, row:neighbour[i].row});
		}
		result.push({col:col, row: row});
		neighbour.splice(0, neighbour.length);
		return result;
	}
}
export class Pill {
	type = 'Pill';
	pick = true;
	eat = true;
	destroy = true;
	onPick(player) {
		player.invisible += 200;
	}
	onDraw(ctx, col, row) {
		drawImage(image[this.type], ctx, col, row);
	}
}
export class SpacerDemon{
	type = 'SpacerDemon';
	destroy = true;
	leaving = false;
	constructor(src){
		this.src = src;
	}
	onDestroy(stage, col, row) {
		if (!this.leaving) {
			var demon = this.src;
			if (undefined != demon.Moveable.colPrev
				&& undefined != demon.Moveable.rowPrev) {
				stage.setObject(demon.Moveable.colPrev, demon.Moveable.rowPrev, undefined);
			}
			stage.destroyDemon(demon);
		}
	}
	onTick(stage, col, row){
		if (this.leaving) {
			this.destroy = false;
		}
	}
	/*
	this.onDraw = function (ctx, col, row) {
		if (this.leaving){
			drawImage(image['AppleRotten'][0], ctx, col, row);
		} else {
			drawImage(image['Apple'], ctx, col, row);
		}
	}
	*/
}
export class SpacerLaser{
	type = 'SpacerLaser';
	timeout = 3;
	constructor(dir){
		this.dir=dir;
	}
	onTick(stage, col, row) {
		this.timeout--;
		if (this.timeout <= 0) {
			stage.setObject(col, row, undefined);
		}
	}
	onDraw(ctx, col, row) {
		var img;
		switch(this.dir) {
			case DIR_NORTH:
			case DIR_SOUTH:
				drawImage(image[this.type][1], ctx, col, row);
			break;
			case DIR_EAST:
			case DIR_WEST:
				drawImage(image[this.type][0], ctx, col, row);
			break;
		}
	}
}
export class SpacerObject{
	type = 'SpacerObject';
	constructor(src){
		this.src = src;
	}
}
export class SpacerPFlower{
	type = 'SpacerPFlower';
	timeout = 24;
	constructor(dir, type){
		this.dir = dir;
		this.typeGrabbed = type;
	}
	onTick(stage, col, row) {
		this.timeout--;
		if (this.timeout <= 0) {
			stage.setObject(col, row, undefined);
		}
	}
	onDraw(ctx, col, row) {
		let img;
		switch (this.typeGrabbed) {
			case 'SpacerPlayer':
				img = image[this.type]['grabPlayer'][this.dir];
			break;
			case 'Apple':
			case 'AppleRotten':
				img = image[this.type]['grabApple'][this.dir];
			break;
		}
		drawImage(img, ctx, col, row);
	}
}
export class SpacerPlayer{
	type = 'SpacerPlayer';
	eat = true;
	destroy = true;
	leaving = false;
	constructor(src){
		this.src = src;
	}
	onEat(demon, stage, col, row) {
		if (!this.leaving) {
			if(!this.src.poisoned){
				playAudio('bitten');
			}
			this.src.poisoned = true;
		}
	}
	onDestroy(stage, col, row) {
		var player = this.src;
		if (undefined != player.Moveable.colPrev
			&& undefined != player.Moveable.rowPrev) {
			stage.setObject(player.Moveable.colPrev, player.Moveable.rowPrev, undefined);
		}
		stage.destroyPlayer(player);
	}
	onTick(stage, col, row){
		if (this.leaving) {
			this.destroy = this.eat = false;
		} else {
			this.destroy = this.eat = true;
		}
	}
}
export class SpacerPlayerPoisoned{
	type = 'SpacerPlayerPoisoned';
	timeout = 30;
	constructor(player){
		this.player=player;
		this.dir = player.Moveable.dir;
	}
	onTick(stage, col, row) {
		if (0 == this.timeout) {
			stage.destroyObject(col, row);
			return;
		}
		this.timeout--;
	}
	onDraw(ctx, col, row){
		var __type = (this.player.girl ? 'PlayerGirl' : 'Player');
		if (this.timeout > 20) {
			drawImage(image[__type][this.dir][0], ctx, col, row);
		} else {
			drawImage(image[__type]['poisoned'][this.timeout > 12 ? 12 : this.timeout], ctx, col, row);
		}

		if (20 == this.timeout) {
			playAudio('poisoned');
		}
	}
}
export class Treasure{
	type = 'Treasure';
	pick = true;
	destroy = true;
	onPick(player) {
		player.stage.score += 1000;
	}
	onDraw(ctx, col, row) {
		drawImage(image[this.type], ctx, col, row);
	}
}
export class Wall{
	type = 'Wall';
	constructor(style){
		this.style=style;
	}
	onDraw(ctx, col, row){
		drawImage(image[this.type][this.style], ctx, col, row);
	}
}
