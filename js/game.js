function puzzlePackFinished(packName, totalScore){
	document.querySelector('canvas#stage').style.display='none';
	document.querySelector('div#footer').style.display='none';
	document.querySelector('div#gamefinished').style.display='block';
	document.querySelector('div#gamefinished h1#totalscore').innerHTML=totalScore;
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
	var ctx = document.querySelector('canvas#stage').getContext('2d');
	var totalScore = 0;
	var levelNum = 0;

	//Disable sound by default
	document.querySelector('input#enableSound').checked = false;
	document.querySelector('input#enableSound').addEventListener('change',(e)=>{
		let settingData=localStorage.getItem('gameSetting');
		settingData = settingData ? JSON.parse(settingData) : {};
		settingData.soundOn=e.target.checked;
		localStorage.setItem('gameSetting',JSON.stringify(settingData));
		e.target.blur();
	});

	//Read sound on/off from localStorage
	try{
		let settingData=localStorage.getItem('gameSetting');
		if(settingData){
			settingData=JSON.parse(settingData);
			document.querySelector('input#enableSound').checked = settingData.soundOn;
		}
	}catch(e){
		console.error(e);
	}

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
		puzzlePackFinished(packName, totalScore);
		return;
	} 

	//Start game
	var level = new Level(levelData[levelNum], ctx);
	document.querySelector('span#level').innerHTML=(levelNum + 1);
	const onFinish=function(levelScore){
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
			level.onFinish(onFinish);
			document.querySelector('span#level').innerHTML=(levelNum + 1);
		} else {
			//Game finished
			level = undefined;
			puzzlePackFinished(packName, totalScore);
		}
	}
	level.onFinish(onFinish);
}
