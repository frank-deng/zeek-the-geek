for (var i in stage.demon) {
	stage.demon[i].turning = randomTurn;
}
stage.getObject(13, 7).onDestroy = function(stage, col, row){
	stage.destroyObject(13, 5);
	stage.destroyObject(13, 6);
	stage.destroyObject(13, 8);
	stage.destroyObject(13, 9);
	stage.destroyObject(13, 10);
}

