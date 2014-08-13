for (var i in stage.demon) {
	stage.demon[i].turning = randomSelection;
}
stage.getObject(13, 7).onDestroy = function(){
	stage.destroyObject(13, 5);
	stage.destroyObject(13, 6);
	stage.destroyObject(13, 8);
	stage.destroyObject(13, 9);
	stage.destroyObject(13, 10);
}
