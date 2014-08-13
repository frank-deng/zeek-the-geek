function puzzlePackFinished(totalScore) {
	$(document).unbind('levelFinished');
	$('canvas#stage').hide();
	$('div#footer').hide();
	$('div#gamefinished').show();
	$('div#gamefinished h1#totalscore').html(totalScore);
	//Replay puzzle pack
	$('input#replay').bind('click', function(event){
		$.cookie(packName + '_Level', null, {expires: -1});
		$.cookie(packName + '_Score', null, {expires: -1});
		location = location;	//Refresh page
	});
}
function Game(packName, levelData) {
	var ctx = $('canvas#stage')[0].getContext('2d');
	var totalScore = 0;
	var levelNum = 0;

	//Disable sound by default
	$('input#enableSound')[0].checked = false;

	//Get puzzle pack stored data
	totalScore = $.cookie(packName + '_Score');
	if (undefined != totalScore && !isNaN(totalScore)) {
		totalScore = Number(totalScore);
	}
	levelNum = $.cookie(packName + '_Level');
	if (undefined != levelNum && !isNaN(levelNum)) {
		levelNum = Number(levelNum);
	} else {
		levelNum = totalScore = 0;
	}

	//Game already finished
	if (levelNum >= levelData.length) {
		puzzlePackFinished(totalScore);
		return;
	} 

	//Start game
	var level = new Level(levelData[levelNum], ctx);
	$('span#level').html(levelNum + 1);

	$(document).bind('levelFinished', function(event, levelScore){
		totalScore += levelScore;
		levelNum++;
		$.cookie(packName + '_Level', levelNum, {expires: 3650});
		$.cookie(packName + '_Score', totalScore, {expires: 3650});
		if (levelNum < levelData.length) {
			//Next level
			level = new Level(levelData[levelNum], ctx);
			$('span#level').html(levelNum + 1);
		} else {
			//Game finished
			level = undefined;
			puzzlePackFinished(totalScore);
		}
	});
}
