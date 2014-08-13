stage.getObject(13, 5).onEat = function(demon, stage, col, row){
	stage.destroyObject(14, 4);
	stage.destroyObject(14, 5);
};
stage.getObject(13, 7).onEat = function(demon, stage, col, row){
	stage.destroyObject(14, 6);
	stage.destroyObject(14, 7);
};
stage.getObject(13, 9).onEat = function(demon, stage, col, row){
	stage.destroyObject(14, 8);
	stage.destroyObject(14, 9);
};
stage.getObject(13, 10).onEat = function(demon, stage, col, row){
	stage.destroyObject(14, 10);
};

