stage.getObject(7, 2).onPick = function(player) {
	player.stage.destroyObject(7, 1);
}
stage.getObject(8, 7).onPick = function(player) {
	player.stage.destroyObject(8, 8);
}
