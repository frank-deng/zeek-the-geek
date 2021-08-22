IMAGE_W = IMAGE_H = 36;
function drawImage(__image, ctx, col, row) {
	ctx.drawImage(__image.img,
		(__image.x * IMAGE_W), (__image.y * IMAGE_H), IMAGE_W, IMAGE_H,
		Math.floor(col * IMAGE_W), Math.floor(row * IMAGE_H), IMAGE_W, IMAGE_H);
}

var imageObj = new Array();
imageObj[0] = new Image();
imageObj[0].src = 'image/1.gif';
imageObj[1] = new Image();
imageObj[1].src = 'image/2.gif';
imageObj[2] = new Image();
imageObj[2].src = 'image/3.gif';
imageObj[3] = new Image();
imageObj[3].src = 'image/4.gif';

image = new Array();
image[undefined] = {img:imageObj[0], x:1, y:11};
image['Apple'] = {img:imageObj[1], x:1, y:0};
image['AppleRotten'] = [
	{img:imageObj[0], x:1, y:0},
	{img:imageObj[0], x:1, y:1},
];
image['Ball'] = {img:imageObj[1], x:1, y:1};
image['Bomb'] = {
	normal: {img:imageObj[0], x:1, y:2},
	ticking: [
		{img:imageObj[0], x:1, y:3},
		{img:imageObj[0], x:1, y:4},
	],
	detonate: {img:imageObj[1], x:0, y:12},
};
image['Crystal'] = [
	{img:imageObj[0], x:1, y:5},
	{img:imageObj[0], x:1, y:6},
	{img:imageObj[0], x:1, y:7},
];
image['Demon'] = {
	'N':[
		{img:imageObj[0], x:0, y:7},
		{img:imageObj[0], x:0, y:6},
		{img:imageObj[0], x:0, y:8},
	],
	'E':[
		{img:imageObj[0], x:0, y:0},
		{img:imageObj[0], x:0, y:1},
		{img:imageObj[0], x:0, y:2},
	],
	'W':[
		{img:imageObj[0], x:0, y:9},
		{img:imageObj[0], x:0, y:10},
		{img:imageObj[0], x:0, y:11},
	],
	'S':[
		{img:imageObj[0], x:0, y:4},
		{img:imageObj[0], x:0, y:3},
		{img:imageObj[0], x:0, y:5},
	],
};
image['Destroyed'] = {img:imageObj[1], x:0, y:11};
image['Door'] = {img:imageObj[1], x:1, y:3};
image['Egg'] = {img:imageObj[1], x:1, y:4};
image['Flower'] = [
	{img:imageObj[1], x:1, y:6},
	{img:imageObj[1], x:1, y:5},
];
image['Key'] = {img:imageObj[1], x:1, y:7};
image['LaserGun'] = {img:imageObj[1], x:1, y:8};
image['Mushroom'] = [
	{img:imageObj[1], x:1, y:9},
	{img:imageObj[1], x:1, y:10},
];
image['Player'] = {
	'N':[
		{img:imageObj[1], x:2, y:11},
		{img:imageObj[1], x:2, y:10},
		{img:imageObj[1], x:2, y:12},
	],
	'E':[
		{img:imageObj[1], x:2, y:5},
		{img:imageObj[1], x:2, y:6},
		{img:imageObj[1], x:2, y:7},
	],
	'W':[
		{img:imageObj[1], x:3, y:12},
		{img:imageObj[1], x:3, y:13},
		{img:imageObj[1], x:3, y:14},
	],
	'S':[
		{img:imageObj[1], x:2, y:0},
		{img:imageObj[1], x:2, y:8},
		{img:imageObj[1], x:2, y:9},
	],
	'sleepy':[
		{img:imageObj[1], x:2, y:0},
		{img:imageObj[1], x:2, y:1},
		{img:imageObj[1], x:2, y:2},
		{img:imageObj[1], x:2, y:3},
		{img:imageObj[1], x:2, y:4},
	],
	'poisoned': [
		{img:imageObj[1], x:3, y:0},
		{img:imageObj[1], x:3, y:1},
		{img:imageObj[1], x:3, y:2},
		{img:imageObj[1], x:3, y:3},
		{img:imageObj[1], x:3, y:4},
		{img:imageObj[1], x:3, y:5},
		{img:imageObj[1], x:3, y:6},
		{img:imageObj[1], x:3, y:7},
		{img:imageObj[1], x:3, y:8},
		{img:imageObj[1], x:3, y:9},
		{img:imageObj[1], x:3, y:10},
		{img:imageObj[1], x:3, y:11},
		{img:imageObj[1], x:2, y:0},
	],
};
image['PlayerGirl'] = {
	'N':[
		{img:imageObj[3], x:0, y:11},
		{img:imageObj[3], x:0, y:10},
		{img:imageObj[3], x:0, y:12},
	],
	'E':[
		{img:imageObj[3], x:0, y:5},
		{img:imageObj[3], x:0, y:6},
		{img:imageObj[3], x:0, y:7},
	],
	'W':[
		{img:imageObj[3], x:1, y:12},
		{img:imageObj[3], x:1, y:13},
		{img:imageObj[3], x:1, y:14},
	],
	'S':[
		{img:imageObj[3], x:0, y:0},
		{img:imageObj[3], x:0, y:8},
		{img:imageObj[3], x:0, y:9},
	],
	'sleepy':[
		{img:imageObj[3], x:0, y:0},
		{img:imageObj[3], x:0, y:1},
		{img:imageObj[3], x:0, y:2},
		{img:imageObj[3], x:0, y:3},
		{img:imageObj[3], x:0, y:4},
	],
	'poisoned': [
		{img:imageObj[3], x:1, y:0},
		{img:imageObj[3], x:1, y:1},
		{img:imageObj[3], x:1, y:2},
		{img:imageObj[3], x:1, y:3},
		{img:imageObj[3], x:1, y:4},
		{img:imageObj[3], x:1, y:5},
		{img:imageObj[3], x:1, y:6},
		{img:imageObj[3], x:1, y:7},
		{img:imageObj[3], x:1, y:8},
		{img:imageObj[3], x:1, y:9},
		{img:imageObj[3], x:1, y:10},
		{img:imageObj[3], x:1, y:11},
		{img:imageObj[3], x:0, y:0},
	],
};
image['PFlower'] = {
	digest: [
		{img:imageObj[0], x:2, y:0},
		{img:imageObj[0], x:2, y:7},
		{img:imageObj[0], x:2, y:6},
		{img:imageObj[0], x:2, y:5},
		{img:imageObj[0], x:2, y:4},
	],
	open: [
		{img:imageObj[0], x:2, y:3},
		{img:imageObj[0], x:2, y:2},
		{img:imageObj[0], x:2, y:1},
		{img:imageObj[0], x:2, y:0},
	],
	player: [
		{img:imageObj[0], x:1, y:8},
		{img:imageObj[0], x:1, y:9},
		{img:imageObj[0], x:1, y:10},
	],
	grab: {
		'N': {img:imageObj[2], x:0, y:1},
		'E': {img:imageObj[2], x:0, y:3},
		'W': {img:imageObj[2], x:1, y:2},
		'S': {img:imageObj[2], x:1, y:0},
	},
};
image['Pill'] = {img:imageObj[1], x:1, y:11};
image['SpacerLaser'] = [
	{img:imageObj[0], x:2, y:8},
	{img:imageObj[0], x:2, y:9},
];
image['SpacerPFlower'] = {
	grabApple: {
		'N': {img:imageObj[2], x:0, y:0},
		'E': {img:imageObj[2], x:1, y:3},
		'W': {img:imageObj[2], x:0, y:2},
		'S': {img:imageObj[2], x:1, y:1},
	},
	grabPlayer: {
		'N': {img:imageObj[2], x:2, y:0},
		'E': {img:imageObj[2], x:3, y:3},
		'W': {img:imageObj[2], x:2, y:2},
		'S': {img:imageObj[2], x:3, y:1},
	},
};
image['Treasure'] = {img:imageObj[1], x:0, y:10},
image['Wall'] = [
	{img:imageObj[1], x:0, y:0},
	{img:imageObj[1], x:0, y:1},
	{img:imageObj[1], x:0, y:2},
	{img:imageObj[1], x:0, y:3},
	{img:imageObj[1], x:0, y:4},
	{img:imageObj[1], x:0, y:5},
	{img:imageObj[1], x:0, y:6},
	{img:imageObj[1], x:0, y:7},
	{img:imageObj[1], x:0, y:8},
	{img:imageObj[1], x:0, y:9},
	{img:imageObj[1], x:1, y:2},
]
