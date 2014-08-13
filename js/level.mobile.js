$.mobile.buttonMarkup.hoverDelay = "false";
var tap_timestamp = (new Date()).valueOf();
var col_last = undefined;
var row_last = undefined;

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
function Level(stage, ctx) {
	var score = 0;

	var speed = 70;
	var paused = false;

	var dirKeyPressed = [undefined, undefined];
	var nextDir = [undefined, undefined];
	var playerRoute = [new Array(), new Array()];
	var playerRouteInUse = 0;

	//Easter egg relevant
	$(document).bind('enterEgg', function(event, src) {
		paused = true;
		$('canvas#stage').hide();
		$('iframe#egg').attr('src', src);
		$('iframe#egg').show();
	});
	$(document).bind('leaveEgg', function() {
		$('iframe#egg').attr('src', null);
		$('iframe#egg').hide();
		$('canvas#stage').show();
	});

	//Pause button handler
	$('div#paused input[type=button]').tap(function(){
		$(document).trigger('leaveEgg');
		paused = !paused;
	});
	$('input#reset').tap(function(){
		for (var i in nextDir) {
			nextDir[i] = undefined;
		}
		for (var i in dirKeyPressed) {
			dirKeyPressed[i] = undefined;
		}
		for (var i in playerRoute) {
			playerRoute[i].splice(0, playerRoute[i].length);
		}
		stage.reset();
		paused = false;
		$(document).trigger('leaveEgg');
	});
	
	//Tap event handler
	$('canvas#stage').bind('tap', function(event){
		if (!paused) {
			var e = event;
			xpos = (e.offsetX != undefined ? e.offsetX :
				e.pageX - $(e.target).offset().left);
			ypos = (e.offsetY != undefined ? e.offsetY :
				e.pageY - $(e.target).offset().top);
			col = Math.floor(xpos/IMAGE_W);
			row = Math.floor(ypos/IMAGE_H);
			console.log((new Date()).valueOf() - tap_timestamp);
			if (((new Date()).valueOf() - tap_timestamp) < 300
				&& col_last == col && row_last == row) {
				playerRoute[playerRouteInUse] = [{col:col, row:row}];
			} else {
				playerRoute[playerRouteInUse].push({col:col, row:row});
			}

			col_last = col;
			row_last = row;
			tap_timestamp = (new Date()).valueOf();
		}
	});

	//Play this level
	window.setTimeout(function(){
		if (!paused) {
			var player = stage.player;

			//Decide which direction to go next
			for (var i in player) {
				if (undefined != player[i] && !player[i].Moveable.isMoving()) {
					if (undefined != dirKeyPressed[i]) {
						player[i].move(dirKeyPressed[i]);
						playerRoute[i].splice(0, playerRoute[i].length);
					} else if (undefined != nextDir[i]) {
						if (player[i].Moveable.dir != nextDir[i]) {
							player[i].move(nextDir[i]);
						}
						playerRoute[i].splice(0, playerRoute[i].length);
						nextDir[i] = undefined;
					} else {
						var dir = getDirFromRoute(player[i], playerRoute[i]);
						if (undefined != dir) {
							player[i].move(dir);
						}
					}
				}
			}

			//Power the whole game
			stage.tick(ctx);
			stage.draw(ctx);

			//Display and misceallanous things
			$('div#paused input[type=button]').attr('value', 'Pause');
			$('span#score').html(stage.score);
		} else {
			$('div#paused input[type=button]').attr('value', 'Resume');
		}

		//Level finished or continue
		if (stage.finished) {
			score = stage.score;
			stage.reset();
			$(document).unbind('keydown keyup');
			$('canvas#stage').unbind('mousedown');
			$(document).trigger('levelFinished', [score]);
		} else {
			window.setTimeout(arguments.callee, speed);
		}
	}, speed);
}
