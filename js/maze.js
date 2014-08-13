function Maze(w, h, initfunc) {
	this.w = w;
	this.h = h;
	this.SPACE = undefined;
	this.WALL = 1;
	this.FOOTPRINT = 2;

	this.data = new Array(this.w * this.h);
	this.goal = undefined;
	this.footPrint = new Array();

	this.get = function(x, y) {
		return this.data[x + y * this.w];
	}
	this.set = function(x, y, element){
		delete this.data[x + y * this.w];
		this.data[x + y * this.w] = element;
	}
	this.getDir = function(x0, y0, x1, y1) {
		var goal = this.goal;
		var dx = x1 - x0;
		var dy = y1 - y0;

		if (dx == 0 && dy == 0) {
			return [];
		} else if (dx >= 0 && dy < 0) {
			if (dx >= -dy) {
				return ['E', 'N', 'S', 'W'];
			} else {
				return ['N', 'E', 'W', 'S'];
			}
		} else if (dx < 0 && dy < 0) {
			if (-dx >= -dy) {
				return ['W', 'N', 'S', 'E'];
			} else {
				return ['N', 'W', 'E', 'S'];
			}
		} else if (dx < 0 && dy >= 0) {
			if (-dx >= dy) {
				return ['W', 'S', 'N', 'E'];
			} else {
				return ['S', 'W', 'E', 'N'];
			}
		} else if (dx >= 0 && dy >= 0) {
			if (dx >= dy) {
				return ['E', 'S', 'N', 'W'];
			} else {
				return ['S', 'E', 'W', 'N'];
			}
		}
	}
	this.reachable = function(x, y) {
		if (x < 0 || x >= this.w || y < 0 || y >= this.h) {
			return false;
		} else if (this.SPACE != this.get(x, y)) {
			return false;
		}
		return true;
	}
	this.getPosByDir = function(x, y, dir) {
		var result;
		switch (dir) {
			case 'N':
				result = {x:x, y:y-1};
			break;
			case 'E':
				result = {x:x+1, y:y};
			break;
			case 'W':
				result = {x:x-1, y:y};
			break;
			case 'S':
				result = {x:x, y:y+1};
			break;
		}
		return result;
	}
	this.next = function() {
		if (0 == this.footPrint.length) {
			return false;
		}
		var currentPos = this.footPrint[this.footPrint.length - 1];
		if (currentPos.x == this.goal.x && currentPos.y == this.goal.y) {
			return false;
		}

		var dirCandidate = this.getDir(currentPos.x, currentPos.y, this.goal.x, this.goal.y);
		for (var i in dirCandidate) {
			var nextPos = this.getPosByDir(currentPos.x, currentPos.y, dirCandidate[i]);
			if (this.reachable(nextPos.x, nextPos.y)) {
				this.footPrint.push(nextPos);
				this.set(nextPos.x, nextPos.y, this.FOOTPRINT);
				return true;
			}
		}

		//None of the directions reachable
		var posBlock = this.footPrint.pop();
		return true;
	}

	//Init
	if (undefined != initfunc) {
		initfunc(this);
	}
}
function mazeSolver(stage, player, destCol, destRow) {
	var result = new Array();
	var maze = new Maze(stage.cols, stage.rows, function(maze){
		var col, row;
		for (row = 0; row < stage.rows; row++) {
			for (col = 0; col < stage.cols; col++) {
				object = stage.getObject(col, row);
				if (undefined == object) {
					continue;
				}

				//Trigger blackArea()
				if (undefined != object.blackArea) {
					var posList = object.blackArea(stage, col, row);
					for (var i = 0; i < posList.length; i++) {
						maze.set(posList[i].col, posList[i].row, maze.WALL);
					}
					posList.splice(0, posList.length);
					delete posList;
				} else if (true != object.pick) { //Non-pickable objects
					maze.set(col, row, maze.WALL);
				}
			}
		}
		maze.goal = {x:destCol, y:destRow};
		maze.footPrint = [{x:player.Moveable.col, y:player.Moveable.row}];
	});

	//Solve 
	while(maze.next());

	//Process the result
	var resultRaw = maze.footPrint;
	if (0 == maze.footPrint.length) {
		result = undefined;
	} else {
		for (var i in maze.footPrint) {
			result.push({col:resultRaw[i].x, row:resultRaw[i].y});
		}
	}
	maze.footPrint.splice(0, maze.footPrint.length);
	delete maze.footPrint;
	delete maze;
	return result;
}

