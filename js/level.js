function getDirFromRoute(player, playerRoute) {
	var nextDir = undefined;

	//Process playerRoute
	while (playerRoute.length > 0
		&& player.Moveable.col == playerRoute[0].col
		&& player.Moveable.row == playerRoute[0].row) {
		playerRoute.splice(0, 1);
	}

	//Get direction from playerRoute
	if (playerRoute.length > 0) {
		var dir = getDir(player.Moveable.col, player.Moveable.row,
			playerRoute[0].col, playerRoute[0].row);
		if (undefined != dir) {
			nextDir = dir;
		} else {
			var solved = mazeSolver(player.stage, player,
				playerRoute[0].col, playerRoute[0].row);
			if (undefined != solved) {
				len = solved.length
				for (var i = len - 1; i >= 0; i--) {
					playerRoute.splice(0, 0, solved[i]);
				}
				solved.splice(0, solved.length);
				delete solved;

				nextDir = getDir(player.Moveable.col, player.Moveable.row, playerRoute[0].col, playerRoute[0].row);
			}
		}
	}
	return nextDir;
}
class Level{
	score = 0;
	speed = 100;
	paused = false;
	dirKeyPressed = [undefined, undefined];
	nextDir = [undefined, undefined];
	playerRoute = [new Array(), new Array()];
	playerRouteInUse = 0;
	constructor(stage, ctx){
		this.stage=stage;
		this.ctx=ctx;
		document.addEventListener('keydown',this.keydownHandler);
		document.addEventListener('keyup',this.keyupHandler);
		document.querySelector('canvas#stage').addEventListener('mousedown',this.mousedownHandler);
		//Play this level
		window.setTimeout(this.timeoutFunc, this.speed);
	}
	onFinish(func){
		this._onFinish=func;
	}
	callOnFinish(score){
		if(this._onFinish){
			this._onFinish(score);
		}
	}
	timeoutFunc=()=>{
		try{
			if (!this.paused) {
				var player = this.stage.player;

				//Decide which direction to go next
				for (var i in player) {
					if (!player[i] || player[i].Moveable.isMoving()) {
						continue;
					}
					if (undefined != this.dirKeyPressed[i]) {
						player[i].move(this.dirKeyPressed[i]);
						this.playerRoute[i]=[];
					} else if (undefined != this.nextDir[i]) {
						if (player[i].Moveable.dir != this.nextDir[i]) {
							player[i].move(this.nextDir[i]);
						}
						this.playerRoute[i]=[];
						this.nextDir[i] = undefined;
					} else {
						var dir = getDirFromRoute(player[i], this.playerRoute[i]);
						if (undefined != dir) {
							player[i].move(dir);
						}
					}
				}

				//Power the whole game
				this.stage.tick(this.ctx);
				this.stage.draw(this.ctx);

				//Display and misceallanous things
				document.querySelector('div#paused').style.display='none';
				document.querySelector('span#score').innerHTML=this.stage.score;
			} else {
				document.querySelector('div#paused').style.display=null;
			}

			//Level finished or continue
			if (this.stage.finished) {
				this.score = this.stage.score;
				this.stage.reset();
				document.removeEventListener('keydown',this.keydownHandler);
				document.removeEventListener('keyup',this.keyupHandler);
				document.querySelector('canvas#stage').removeEventListener('mousedown',this.mousedownHandler);
				this.callOnFinish(this.score);
			} else {
				window.setTimeout(this.timeoutFunc, this.speed);
			}
		}catch(e){
			console.error(e);
			window.setTimeout(this.timeoutFunc, this.speed);
		}
	}
	keydownHandler=(event)=>{
		document.querySelector('input#enableSound').blur();
		if (!this.paused) {
			let nextDir=this.nextDir, dirKeyPressed=this.dirKeyPressed;
			switch (event.keyCode) {
				case 37:	//Left
					nextDir[0] = dirKeyPressed[0] = DIR_WEST;
				break;
				case 38:	//Up
					nextDir[0] = dirKeyPressed[0] = DIR_NORTH;
				break;
				case 39:	//Right
					nextDir[0] = dirKeyPressed[0] = DIR_EAST;
				break;
				case 40:	//Down
					nextDir[0] = dirKeyPressed[0] = DIR_SOUTH;
				break;
				case 65:	//A
					nextDir[1] = dirKeyPressed[1] = DIR_WEST;
				break;
				case 87:   //W
					nextDir[1] = dirKeyPressed[1] = DIR_NORTH;
				break;
				case 68:   //D
					nextDir[1] = dirKeyPressed[1] = DIR_EAST;
				break;
				case 83:   //S
					nextDir[1] = dirKeyPressed[1] = DIR_SOUTH;
				break;
			}
		}
		switch (event.keyCode) {
			case 48:	//9
				this.playerRouteInUse = 0;
			break;
			case 57:	//0
				this.playerRouteInUse = 1;
			break;
			case 80:	//P: Pause
				this.paused = !this.paused;
			break;
			case 82:	//R: Restart
				for (var i in this.nextDir) {
					this.nextDir[i] = undefined;
				}
				for (var i in this.dirKeyPressed) {
					this.dirKeyPressed[i] = undefined;
				}
				for (var i in this.playerRoute) {
					this.playerRoute[i]=[];
				}
				this.stage.reset();
				this.paused = false;
			break;
			case 32:	//Space: speed up the game
				this.speed = 20;
			break;
		}
	}
	keyupHandler=(event)=>{
		if (!this.paused) {
			switch (event.keyCode) {
				case 37:	//Left
				case 38:	//Up
				case 39:	//Right
				case 40:	//Down
					this.dirKeyPressed[0] = undefined;
				break;
				case 65:	//A
				case 87:	//W
				case 68:	//D
				case 83:	//S
					this.dirKeyPressed[1] = undefined;
				break;
			}
		}
		switch (event.keyCode) {
			case 32:
				this.speed = 100;
			break;
		}
	}
	mousedownHandler=(e)=>{
		if (this.paused) {
			return;
		}
		let xpos = e.offsetX;
		let ypos = e.offsetY;
		let col = Math.floor(xpos/IMAGE_W);
		let row = Math.floor(ypos/IMAGE_H);
		if (e.shiftKey) {
			this.playerRoute[this.playerRouteInUse].push({col:col, row:row});
		} else {
			this.playerRoute[this.playerRouteInUse] = [{col:col, row:row}];
		}
	}
}
