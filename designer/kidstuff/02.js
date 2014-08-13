stage.getObject(14, 4).eat = undefined;

//:P
stage.getObject(5, 6).onPick = function(player) {
	player.stage.score += 1000;
	$(document).trigger('enterEgg', ['egg/002.html']);
}
