function Apple(){
	this.onTick = function(stage, col, row){
		if (this.leaving) {
			this.destroy = false;
		}
	}
	this.type = 'Apple';
	this.push = this.eat = this.destroy = true;
	this.onDraw = function(ctx, col, row){
		drawImage(image[this.type], ctx, col, row);
	}
}
function AppleRotten(){
	this.type = 'AppleRotten';
	this.push = this.eat = this.destroy = true;

	this.timer = 1;
	this.img_index = 0;
	this.onDraw = function(ctx, col, row){
		this.timer++;
		if (0 == (this.timer % 2)){
			this.img_index = (0 == this.img_index ? 1 : 0);
		}
		drawImage(image[this.type][this.img_index], ctx, col, row);
	}
}
function Ball(){
	this.type = 'Ball';
	this.push = true;
	this.onDraw = function(ctx, col, row){
		drawImage(image[this.type], ctx, col, row);
	}
}
function Bomb(){
	this.type = 'Bomb';
	this.push = true;
	this.timeout = -1;
	this.detonated = false;

	this.doActivate = function() {
		if (this.timeout < 0) {
			this.timeout = 160;
		}
	}
	this.doDetonate = function(stage, col, row) {
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
		delete neighbour;

		playAudio('detonate');
	}
	this.onTick = function(stage, col, row) {
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
	this.onDraw = function(ctx, col, row){
		if (this.timeout < 0) {
			drawImage(image[this.type]['normal'], ctx, col, row);
		} else if (this.detonated) {
			drawImage(image[this.type]['detonate'], ctx, col, row);
		} else {
			drawImage(image[this.type]['ticking'][this.timeout % 2], ctx, col, row);
		}
	}
}
function Crystal(){
	this.type = 'Crystal';
	this.push = true;

	this.triggered = -1;
	this.TRIGGER = 35;
	this.trigger = function(){
		if (-1 == this.triggered) {
			this.triggered = this.TRIGGER;
			this.push = undefined;
		}
	}
	this.onTick = function(stage, col, row){
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
			delete neighbour;
		}
	}
	this.onDraw = function(ctx, col, row){
		if (this.triggered > 0) {
			drawImage(image[this.type][this.triggered % 3], ctx, col, row);
		} else {
			drawImage(image[this.type][0], ctx, col, row);
		}
	}
}
function Door(){
	this.type = 'Door';
	this.destroy = true;
	this.onPick = function(player) {
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
	this.onDraw = function(ctx, col, row){
		drawImage(image[this.type], ctx, col, row);
	}
}
function Egg() {
	this.type = 'Egg';
	this.pick = this.eat = this.destroy = true;
	this.onPick = function(player) {
		var len = player.stage.data.length;
		for (var i = 0; i < len; i++) {
			var object = player.stage.data[i];
			if (undefined != object && 'Flower' == object.type) {
				object.poisonous = !object.poisonous;
			}
		}
		player.stage.score += 100;
	}
	this.onDraw = function(ctx, col, row) {
		drawImage(image[this.type], ctx, col, row);
	}
	this.blackArea = function(stage, col, row) {
		return [{col:col, row: row}];
	}
}
function Flower(poisonous) {
	this.type = 'Flower';
	this.pick = this.eat = this.destroy = true;
	this.poisonous = poisonous;
	this.onPick = function(player) {
		if (this.poisonous) {
			player.poisoned = true;
		} else {
			player.stage.score += 50;
		}
	}
	this.onDraw = function(ctx, col, row) {
		if (this.poisonous) {
			drawImage(image[this.type][1], ctx, col, row);
		} else {
			drawImage(image[this.type][0], ctx, col, row);
		}
	}
	this.blackArea = function(stage, col, row) {
		if (this.poisonous) {
			return [{col:col, row: row}];
		}
		return [];
	}
}
function Key(){
	this.type = 'Key';
	this.pick = this.destroy = true;
	this.onPick = function(player) {
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
	this.onDraw = function(ctx, col, row){
		drawImage(image[this.type], ctx, col, row);
	}
}
function LaserGun() {
	this.type = 'LaserGun';
	this.destroy = true;
	this.detectedPos = new Array();
	this.blackAreaDetected = new Array();

	this.doDetect = function(stage, col, row) {
		var result = new Array();
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
	this.setupLaser = function(stage, col, row, posDetected){
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
	this.onTick = function(stage, col, row) {
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
	this.onDraw = function(ctx, col, row){
		drawImage(image[this.type], ctx, col, row);
	}
	this.blackArea = function(stage, col, row) {
		return this.blackAreaDetected;
	}
}
function Mushroom(poisonous) {
	this.type = 'Mushroom';
	this.pick = this.eat = this.destroy = true;
	this.poisonous = poisonous;
	this.onPick = function(player) {
		if (this.poisonous) {
			player.poisoned = true;
		} else {
			player.stage.score += 500;
			player.finished = true;
		}
	}
	this.onDraw = function(ctx, col, row) {
		if (poisonous) {
			drawImage(image[this.type][1], ctx, col, row);
		} else {
			drawImage(image[this.type][0], ctx, col, row);
		}
	}
	this.blackArea = function(stage, col, row) {
		if (this.poisonous) {
			return [{col:col, row: row}];
		}
		return [];
	}
}
function PFlower(opened) {
	this.type = 'PFlower';
	this.eat = this.destroy = true;

	/* Values of this.status:
	 * 'C' : Flower closed
	 * 'o' : Flower opening
	 * 'O' : Flower opened
	 * 'G' : Flower grabbing object
	 * 'D' : Flower digesting
	 */
	this.status = (opened ? 'O' : 'C');
	this.open = 0;
	this.digest = 0;
	this.grab = {
		type: undefined,
		dir: undefined,
		timeout: 0,
		spacerCol: undefined,
		spacerRow: undefined,
	};

	this.doOpen = function() {
		if ('C' == this.status) {
			this.open = image[this.type]['open'].length;
			this.status = 'o';
		}
	}
	this.doDigest = function(stage, col, row) {
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
	this.doDetect = function(stage, col, row, type) {
		var result = undefined;
		//Check whether a player is nearby
		var neighbour = stage.getNeighbour(col, row);
		var len = neighbour.length;
		for (var i = 0; i < len; i++) {
			var object = stage.getObject(neighbour[i].col, neighbour[i].row);
			if (undefined != object && object.type == type){
				if (type == 'SpacerPlayer') {
					player = object.src;
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
		delete neighbour;
		return result;
	}
	this.doGrab = function(stage, col, row, detected) {
		this.status = 'G';
		stage.setObject(detected.col, detected.row, new SpacerPFlower(detected.dir, detected.type));
		this.grab.type = detected.type;
		this.grab.dir = detected.dir;
		this.grab.spacerCol = detected.col;
		this.grab.spacerRow = detected.row;
		this.grab.timeout = 4;
		playAudio('grab');
	}
	this.onTick = function(stage, col, row) {
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
	this.onDraw = function(ctx, col, row) {
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
	this.blackArea = function(stage, col, row) {
		var result = new Array();
		var neighbour = stage.getNeighbour(col, row, undefined);
		for (var i = 0; i < neighbour.length; i++) {
			result.push({col:neighbour[i].col, row:neighbour[i].row});
		}
		result.push({col:col, row: row});

		neighbour.splice(0, neighbour.length);
		delete neighbour;

		return result;
	}
}
function Pill() {
	this.type = 'Pill';
	this.pick = this.eat = this.destroy = true;
	this.onPick = function(player) {
		player.invisible += 200;
	}
	this.onDraw = function(ctx, col, row) {
		drawImage(image[this.type], ctx, col, row);
	}
}

function SpacerDemon(src){
	this.type = 'SpacerDemon';
	this.destroy = true;
	this.src = src;
	this.leaving = false;

	this.onDestroy = function(stage, col, row) {
		if (!this.leaving) {
			var demon = this.src;
			if (undefined != demon.Moveable.colPrev
				&& undefined != demon.Moveable.rowPrev) {
				stage.setObject(demon.Moveable.colPrev, demon.Moveable.rowPrev, undefined);
			}
			stage.destroyDemon(demon);
		}
	}
	this.onTick = function(stage, col, row){
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
function SpacerLaser(dir) {
	this.type = 'SpacerLaser';
	this.dir = dir;
	this.timeout = 3;
	this.onTick = function(stage, col, row) {
		this.timeout--;
		if (this.timeout <= 0) {
			stage.setObject(col, row, undefined);
		}
	}
	this.onDraw = function(ctx, col, row) {
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
function SpacerObject(src){
	this.type = 'SpacerObject';
	this.src = src;
}
function SpacerPFlower(dir, type) {
	this.type = 'SpacerPFlower';
	this.dir = dir;
	this.typeGrabbed = type;
	this.timeout = 24;
	this.onTick = function(stage, col, row) {
		this.timeout--;
		if (this.timeout <= 0) {
			stage.setObject(col, row, undefined);
		}
	}
	this.onDraw = function(ctx, col, row) {
		var img;
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
function SpacerPlayer(src){
	this.type = 'SpacerPlayer';
	this.eat = this.destroy = true;
	this.src = src;
	this.leaving = false;

	this.onEat = function(demon, stage, col, row) {
		playAudio('bitten');
		if (!this.leaving) {
			this.src.poisoned = true;
		}
	}
	this.onDestroy = function(stage, col, row) {
		var player = this.src;
		if (undefined != player.Moveable.colPrev
			&& undefined != player.Moveable.rowPrev) {
			stage.setObject(player.Moveable.colPrev, player.Moveable.rowPrev, undefined);
		}
		stage.destroyPlayer(player);
	}
	this.onTick = function(stage, col, row){
		if (this.leaving) {
			this.destroy = this.eat = false;
		} else {
			this.destroy = this.eat = true;
		}
	}
}
function SpacerPlayerPoisoned(player) {
	this.type = 'SpacerPlayerPoisoned';
	this.dir = player.Moveable.dir;
	this.timeout = 30;
	this.onTick = function(stage, col, row) {
		if (0 == this.timeout) {
			stage.destroyObject(col, row);
			return;
		}
		this.timeout--;
	}
	this.onDraw = function(ctx, col, row){
		var __type = (player.girl ? 'PlayerGirl' : 'Player');
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
function Treasure(poisonous) {
	this.type = 'Treasure';
	this.pick = this.destroy = true;
	this.onPick = function(player) {
		player.stage.score += 1000;
	}
	this.onDraw = function(ctx, col, row) {
		drawImage(image[this.type], ctx, col, row);
	}
}
function Wall(style) {
	this.type = 'Wall';
	this.style = style;
	this.onDraw = function(ctx, col, row){
		drawImage(image[this.type][this.style], ctx, col, row);
	}
}

