stage.getObject(14, 4).eat = undefined;
stage.getObject(14, 5).eat = undefined;
stage.getObject(14, 7).eat = undefined;
stage.getObject(14, 5).onDestroy = function(stage, col, row) {
	stage.destroyObject(14, 4);
}
