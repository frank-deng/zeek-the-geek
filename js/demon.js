function leftFirst(demon) {
	var dir = demon.Moveable.dir;
	return [
		dir,
		switchDir(dir, DIR_LEFT),
		switchDir(dir, DIR_RIGHT),
		switchDir(dir, DIR_BACK),
	];
}
function rightFirst(demon) {
	var dir = demon.Moveable.dir;
	return [
		dir,
		switchDir(dir, DIR_RIGHT),
		switchDir(dir, DIR_LEFT),
		switchDir(dir, DIR_BACK),
	];
}
function randomSelection(demon) {
	var dir = demon.Moveable.dir;
	if (Math.random() >= 0.5) {
		return [
			dir,
			switchDir(dir, DIR_LEFT),
			switchDir(dir, DIR_RIGHT),
			switchDir(dir, DIR_BACK),
		];
	} else {
		return [
			dir,
			switchDir(dir, DIR_RIGHT),
			switchDir(dir, DIR_LEFT),
			switchDir(dir, DIR_BACK),
		];
	}
}
function randomTurn(demon) {
	var result = [DIR_NORTH, DIR_EAST, DIR_WEST, DIR_SOUTH];
	for (var i = 1; i < result.length; i++) {
		var irand = Math.floor(Math.random() * (i + 1));
		var temp = result[irand];
		result[irand] = result[i];
		result[i] = temp;
	}
	return result;
}
class Demon{
	type = 'Demon';
	turning = leftFirst;
	constructor(stage, col, row, initDir){
		this.Moveable = new Moveable(col, row, initDir);
		this.stage = stage;
		this.stage.setObject(col, row, new SpacerDemon(this));
		this.regexpSpacer = new RegExp('Spacer.*');
		this.dir = initDir;
	}
	move(dir){
		//Demon is already moving
		if (this.Moveable.step > 0) {
			return false;
		}
		
		//Change the direction of the demon
		this.Moveable.dir = dir;

		//Finally move the daemon
		this.Moveable.move(dir);
		this.stage.setObject(this.Moveable.col, this.Moveable.row, new SpacerDemon(this));
		this.stage.getObject(this.Moveable.colPrev, this.Moveable.rowPrev).leaving = true;
		return true;
	}
	onTick(stage) {
		if (this.Moveable.isMoving()){
			var result = this.Moveable.onTick();
			this.dir = this.Moveable.dir;
			if (undefined != result) {	//Demon has just finished moving
				this.stage.setObject(result.colPrev, result.rowPrev, undefined);
			}
		} else {
			var dirArray = this.turning(this);
			for (var i in dirArray) {
				this.dir = dirArray[i];
				var pos = stage.getNeighbour(this.Moveable.col, this.Moveable.row, dirArray[i]);
				//Edge reached
				if (undefined == pos) {
					continue;
				}

				var object = stage.getObject(pos.col, pos.row);
				if (undefined != object) {
					//If a spacer is in front, the demon will stop until the spacer disappears, Except demon
					if (this.regexpSpacer.test(object.type)) {
						//Execute trigger onEat()
						if (true == object.eat && undefined != object.onEat) {
							object.onEat(this, stage, pos.col, pos.row);
						}
						if (object.type != 'SpacerDemon') {
							break;
						}
					}

					//The object detected is not eatable
					if (true != object.eat) {
						continue;
					}

					//Execute trigger onEat()
					if (undefined != object.onEat) {
						object.onEat(this, stage, pos.col, pos.row);
					}
					//Destroy the object!!!
					stage.destroyObject(pos.col, pos.row);
				}
				if (this.move(dirArray[i])) {
					this.Moveable.step--;
					break;
				}
			}
		}
	}
	onDraw(ctx) {
		var idx_img = [0, 1, 0, 2, 0, 1, 0, 2, 0];
		var img = image[this.type][this.dir][idx_img[this.Moveable.step]];
		this.Moveable.onDraw(img, ctx);
	}
}

