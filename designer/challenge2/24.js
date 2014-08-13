stage.getObject(1, 2).eat = undefined;
stage.getObject(1, 3).onEat = function(demon, stage, col, row) {
	stage.destroyObject(1, 2);
}
