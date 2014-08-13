//Random Objects
var candidate = [
	{object: Apple, param: undefined},
	{object: AppleRotten, param: undefined},
	{object: Egg, param: undefined},
	{object: Flower, param: false},
	{object: Flower, param: true},
	{object: Mushroom, param: false},
	{object: Mushroom, param: true},
	{object: PFlower, param: false},
	{object: PFlower, param: true},
	{object: Pill, param: true},
];
for (var y = 9; y <= 10; y++) {
	for (var x = 3; x <= 13; x++) {
		var i = Math.floor(Math.random() * candidate.length);
		stage.setObject(x, y,
			new candidate[i].object(candidate[i].param));
	}
}
//Close Purple flowers near an apple
for (var y = 9; y <= 10; y++) {
	for (var x = 3; x <= 13; x++) {
		object = stage.getObject(x, y);
		if (undefined == object || 'PFlower' != object.type) {
			continue;
		}
		var __apple = object.doDetect(stage, x, y, 'Apple');
		var __appleRotten = object.doDetect(stage, x, y, 'AppleRotten');
		if (__apple != undefined || __appleRotten != undefined) {
			stage.getObject(x, y).status = 'C';
		}
	}
}

