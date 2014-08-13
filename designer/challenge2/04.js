stage.getObject(14, 6).eat = undefined;
stage.getObject(13, 7).eat = undefined;
stage.getObject(13, 8).eat = undefined;
stage.getObject(13, 9).eat = undefined;
stage.getObject(13, 10).eat = undefined;
stage.getObject(13, 6).onPick = function(player) {
	var stage = player.stage;
	stage.destroyObject(14, 6);
	stage.destroyObject(13, 7);
	stage.getObject(13, 8).eat = true;
	stage.getObject(13, 9).eat = true;
	stage.getObject(13, 10).eat = true;
}
