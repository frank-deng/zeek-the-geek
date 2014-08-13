stage.getObject(2, 1).eat = undefined;
stage.getObject(4, 1).onDestroy = function(player) {
	stage.getObject(2, 1).eat = true;
}
