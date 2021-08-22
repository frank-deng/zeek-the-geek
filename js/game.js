function puzzlePackFinished(totalScore) {
	$(document).unbind('levelFinished');
	$('canvas#stage').hide();
	$('div#footer').hide();
	$('div#gamefinished').show();
	$('div#gamefinished h1#totalscore').html(totalScore);
	//Replay puzzle pack
	try{
		let storageData=localStorage.getItem('puzzleProcess');
		if(storageData){
			storageData=JSON.parse(storageData);
			delete storageData[packName + '_Level'];
			delete storageData[packName + '_Score'];
			localStorage.setItem('puzzleProcess',JSON.stringify(storageData));
		}
	}catch(e){
		console.error(e);
	}
}
function Game(packName, levelData) {
	var ctx = $('canvas#stage')[0].getContext('2d');
	var totalScore = 0;
	var levelNum = 0;

	//Disable sound by default
	$('input#enableSound')[0].checked = false;

	//Get puzzle pack stored data
	try{
		let storageData=localStorage.getItem('puzzleProcess');
		if(storageData){
			storageData=JSON.parse(storageData);
			totalScore=storageData[packName + '_Score'] || undefined;
			levelNum=storageData[packName + '_Level'] || undefined;
		}
	}catch(e){
		console.error(e);
	}
	if (undefined != totalScore && !isNaN(totalScore)) {
		totalScore = Number(totalScore);
	}
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
		try{
			let storageData=localStorage.getItem('puzzleProcess');
			if(storageData){
				storageData=JSON.parse(storageData);
			}else{
				storageData={};
			}
			storageData[packName + '_Level']=levelNum;
			storageData[packName + '_Score']=totalScore;
			localStorage.setItem('puzzleProcess',JSON.stringify(storageData));
		}catch(e){
			console.error(e);
		}
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
