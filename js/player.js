import {image,drawImage} from './image';
import { playAudio,Moveable } from "./misc";
import { SpacerPlayer, SpacerObject, SpacerPlayerPoisoned } from "./object";

export default class Player{
	type = 'Player';
	finished = false;
	poisoned = false;
	objectPushing = undefined;
	invisible = 0;
	sleepy = 0;
	constructor(stage, col, row, isGirl){
		this.Moveable = new Moveable(col, row, DIR_SOUTH);
		this.girl = isGirl;
		this.stage = stage;
		this.stage.setObject(col, row, new SpacerPlayer(this));
	}
	onTick(stage) {
		var result = this.Moveable.onTick();
		if (undefined != result) {	//Player has just finished moving
			this.stage.setObject(result.colPrev, result.rowPrev, undefined);
			if (undefined != this.objectPushing) {
				var objectPos = this.stage.getNeighbour(
					this.Moveable.col, this.Moveable.row, this.Moveable.dir);
				this.stage.setObject(objectPos.col, objectPos.row , this.objectPushing);
				this.objectPushing = undefined;
			}
		}
		if (undefined != result || !this.Moveable.isMoving()) {
			//Player is poisoned
			if (this.poisoned == true) {
				this.stage.setObject(this.Moveable.col, this.Moveable.row,
					new SpacerPlayerPoisoned(this));
				this.stage.destroyPlayer(this);
				return;
			}

			//Player finished
			if (this.finished) {
				this.stage.finished = true;
			}
		}

		if (undefined != this.objectPushing
			&& undefined != this.objectPushing.onTick) {
			this.objectPushing.onTick(this.stage, -1, -1);
		}

		//Other thigs
		if (this.invisible > 0) {
			this.invisible--;
		}
	}
	move(dir){
		//Player is moving
		if (this.Moveable.step > 0) {
			return false;
		}
		
		//Change the direction of the player
		this.Moveable.dir = dir;

		//Test whether the edge is in front of the player.
		var nextPos = this.stage.getNeighbour(this.Moveable.col, this.Moveable.row, dir);
		if (undefined == nextPos) {
			return false;
		}

		//Test the object in front of the player.
		var nextPosObject = this.stage.getObject(nextPos.col, nextPos.row);
		if (nextPosObject != undefined){
			if (nextPosObject.pick == true){
				if (undefined != nextPosObject.onPick) {
					nextPosObject.onPick(this);
				}
				this.stage.destroyObject(nextPos.col, nextPos.row);
				playAudio('pick');
			} else if (nextPosObject.push == true) {
				let nextPos2 = this.stage.getNeighbour(nextPos.col, nextPos.row, dir);
				if (undefined == nextPos2
					|| undefined != this.stage.getObject(nextPos2.col, nextPos2.row)) {
					return false;
				}
				this.objectPushing = nextPosObject;
				this.stage.setObject(nextPos2.col, nextPos2.row, new SpacerObject(nextPosObject));
			} else {
				return false;
			}
		}

		//Finally move the player
		this.Moveable.move(dir);
		this.stage.setObject(this.Moveable.col, this.Moveable.row, new SpacerPlayer(this));
		this.stage.getObject(this.Moveable.colPrev, this.Moveable.rowPrev).leaving = true;
		return true;
	}
	onDrawMoving(ctx) {
		var idx_img = [0, 1, 0, 2, 0, 1, 0, 2];
		var __type = (this.girl ? this.type + 'Girl' : this.type);
		var img = (this.invisible > 0 ? image[undefined]
			: image[__type][this.Moveable.dir][idx_img[this.Moveable.step]]);
		this.Moveable.onDraw(img, ctx);
		if (this.Moveable.step % 2) {
			playAudio('step');
		}

		//Draw the object player is pushing
		if (undefined != this.objectPushing) {
			var _col, _row;
			switch (this.Moveable.dir){
				case DIR_NORTH:
					_col = this.Moveable.col;
					_row = this.Moveable.row - 1 + this.Moveable.step / this.Moveable.stepMax;
				break;
				case DIR_EAST:
					_col = this.Moveable.col + 1 - this.Moveable.step / this.Moveable.stepMax;
					_row = this.Moveable.row;
				break;
				case DIR_WEST:
					_col = this.Moveable.col - 1 + this.Moveable.step / this.Moveable.stepMax;
					_row = this.Moveable.row;
				break;
				case DIR_SOUTH:
					_col = this.Moveable.col;
					_row = this.Moveable.row + 1 - this.Moveable.step / this.Moveable.stepMax;
				break;
			}
			this.objectPushing.onDraw(ctx, _col, _row);
		}
	}
	onDrawSleepy(ctx) {
		if (this.invisible > 0) {
			this.Moveable.onDraw(image[undefined], ctx);
			return;
		}

		var img;
		var __type = (this.girl ? this.type + 'Girl' : this.type);
		if (this.sleepy < 50) {
			this.onDrawMoving(ctx);
			return;
		} else if (this.sleepy < 100) {
			img = image[__type]['sleepy'][0];
		} else if (this.sleepy < 300) {
			img = image[__type]['sleepy'][this.sleepy % 50 ? 0 : 1];
		} else if (this.sleepy < 400) {
			img = image[__type]['sleepy'][this.sleepy % 50 ? 2 : 3];
		} else {
			img = image[__type]['sleepy'][4];
		}
		this.Moveable.onDraw(img, ctx);
	}
	onDraw(ctx) {
		if (this.Moveable.isMoving()) {
			this.sleepy = 0;
			this.onDrawMoving(ctx);
		} else {
			this.sleepy++;
			this.onDrawSleepy(ctx);
		}
	}
}

