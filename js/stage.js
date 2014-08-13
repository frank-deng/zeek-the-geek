function Stage(initfunc){
	this.name = '';
	this.cols = 17;
	this.rows = 12;

	this.data = new Array(this.rows * this.cols);
	this.player = new Array();
	this.demon = new Array();

	this.posDestroyed = new Array();
	this.finished = false;
	this.score = 0;

	this.getObject = function(col, row){
		return this.data[row * this.cols + col];
	}
	this.setObject = function(col, row, object){
		delete this.data[row * this.cols + col];
		this.data[row * this.cols + col] = object;
	}
	this.destroyObject = function(col, row){
		var object = this.getObject(col, row);
		if (undefined != object) {
			if (undefined != object.onDestroy) {
				object.onDestroy(this, col, row);
			}
			this.posDestroyed.push([col, row]);
			this.setObject(col, row, undefined);
		}
	}
	this.destroyPlayer = function(playerObj) {
		this.player[this.player.indexOf(playerObj)] = null;
		this.player[this.player.indexOf(playerObj)] = undefined;
		delete playerObj;
		playerObj = null;
	}
	this.destroyDemon = function(demonObj) {
		this.demon[this.demon.indexOf(demonObj)] = null;
		this.demon[this.demon.indexOf(demonObj)] = undefined;
		delete demonObj;
		demonObj = null;
	}

	this.getNeighbour = function(col, row, dir) {
		switch (dir) {
			case DIR_NORTH:
				if (row > 0) {
					return {col:col, row:(row - 1)};
				} else {
					return undefined;
				}
			break;
			case DIR_EAST:
				if (col < (this.cols - 1)) {
					return {col:(col + 1), row:row};
				} else {
					return undefined;
				}
			break;
			case DIR_WEST:
				if (col > 0) {
					return {col:(col - 1), row:row};
				} else {
					return undefined;
				}
			break;
			case DIR_SOUTH:
				if (row < (this.rows - 1)) {
					return {col:col, row:(row + 1)};
				} else {
					return undefined;
				}
			break;
			default:
				var result = new Array();
				//North
				if (row > 0) {
					result.push({col:col, row:(row - 1), dir:DIR_NORTH});
				}
				//East
				if (col < (this.cols - 1)) {
					result.push({col:(col + 1), row:row, dir:DIR_EAST});
				}
				//West
				if (col > 0) {
					result.push({col:(col - 1), row:row, dir:DIR_WEST});
				}
				//South
				if (row < (this.rows - 1)) {
					result.push({col:col, row:(row + 1), dir:DIR_SOUTH});
				}

				return result;
			break;
		}
	}

	this.tick = function(ctx) {
		//Players
		var len = this.player.length;
		for (var i = 0; i < len; i++) {
			if (undefined != this.player[i]) {
				this.player[i].onTick(this);
			}
		}

		//Demons
		var len = this.demon.length;
		for (var i = 0; i < len; i++) {
			if (undefined != this.demon[i]) {
				this.demon[i].onTick(this);
			}
		}

		//Objects on the stage
		for (var row = 0; row < this.rows; row++) {
			for (var col = 0; col < this.cols; col++) {
				object = this.data[row * this.cols + col];
				if (undefined != object && undefined != object.onTick) {
					object.onTick(this, col, row);
				}
			}
		}
	}
	this.draw = function(ctx) {
		//Draw objects on the stage
		for (var row = 0; row < this.rows; row++) {
			for (var col = 0; col < this.cols; col++) {
				object = this.data[row * this.cols + col];
				if (undefined == object || undefined == object.onDraw) {
					drawImage(image[undefined], ctx, col, row);
				} else {
					object.onDraw(ctx, col, row);
				}
			}
		}

		//Draw destroyed objects
		var len = this.posDestroyed.length;
		for (var i = 0; i < len; i++) {
			col = this.posDestroyed[i][0];
			row = this.posDestroyed[i][1];
			drawImage(image['Destroyed'], ctx, col, row);
		}
		delete this.posDestoryed;
		this.posDestroyed = [];

		//Draw player and demon
		var len = this.demon.length;
		for (var i = 0; i < len; i++) {
			if (undefined != this.demon[i]) {
				this.demon[i].onDraw(ctx);
			}
		}
		var len = this.player.length;
		for (var i = 0; i < len; i++) {
			if (undefined != this.player[i]) {
				this.player[i].onDraw(ctx);
			}
		}
	}
	this.reset = function(){
		delete this.data;
		delete this.player;
		delete this.demon;
		delete this.posDestoryed;
		this.data = new Array(this.rows * this.cols);
		this.player = new Array();
		this.demon = new Array();
		this.posDestroyed = new Array();
		this.finished = false;
		this.score = 0;
		if (undefined != initfunc) {
			initfunc(this);
		}
	}

	//Init the stage
	if (undefined != initfunc) {
		initfunc(this);
	}
}

