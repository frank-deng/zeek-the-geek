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

/*

//Demon related
{OBJECT_SPACER, 0x30, 0, {0 * CELL_W, 0 * CELL_H, CELL_W, CELL_H}},
{OBJECT_SPACER, 0x31, 0, {0 * CELL_W, 1 * CELL_H, CELL_W, CELL_H}},
{OBJECT_SPACER, 0x32, 0, {0 * CELL_W, 2 * CELL_H, CELL_W, CELL_H}},
{OBJECT_SPACER, 0x33, 0, {0 * CELL_W, 4 * CELL_H, CELL_W, CELL_H}},
{OBJECT_SPACER, 0x34, 0, {0 * CELL_W, 3 * CELL_H, CELL_W, CELL_H}},
{OBJECT_SPACER, 0x35, 0, {0 * CELL_W, 5 * CELL_H, CELL_W, CELL_H}},
{OBJECT_SPACER, 0x36, 0, {0 * CELL_W, 9 * CELL_H, CELL_W, CELL_H}},
{OBJECT_SPACER, 0x37, 0, {0 * CELL_W, 10 * CELL_H, CELL_W, CELL_H}},
{OBJECT_SPACER, 0x38, 0, {0 * CELL_W, 11 * CELL_H, CELL_W, CELL_H}},
{OBJECT_SPACER, 0x39, 0, {0 * CELL_W, 7 * CELL_H, CELL_W, CELL_H}},
{OBJECT_SPACER, 0x3A, 0, {0 * CELL_W, 6 * CELL_H, CELL_W, CELL_H}},
{OBJECT_SPACER, 0x3B, 0, {0 * CELL_W, 8 * CELL_H, CELL_W, CELL_H}},

//Misc
{OBJECT_SPACER, 0x40, 1, {0 * CELL_W, 11 * CELL_H, CELL_W, CELL_H}},

//Girl Player walking
{OBJECT_SPACER, 0x50, 3, {0 * CELL_W, 5 * CELL_H, CELL_W, CELL_H}},
{OBJECT_SPACER, 0x51, 3, {0 * CELL_W, 6 * CELL_H, CELL_W, CELL_H}},
{OBJECT_SPACER, 0x52, 3, {0 * CELL_W, 7 * CELL_H, CELL_W, CELL_H}},
{OBJECT_SPACER, 0x53, 3, {0 * CELL_W, 0 * CELL_H, CELL_W, CELL_H}},
{OBJECT_SPACER, 0x54, 3, {0 * CELL_W, 8 * CELL_H, CELL_W, CELL_H}},
{OBJECT_SPACER, 0x55, 3, {0 * CELL_W, 9 * CELL_H, CELL_W, CELL_H}},
{OBJECT_SPACER, 0x56, 3, {1 * CELL_W, 12 * CELL_H, CELL_W, CELL_H}},
{OBJECT_SPACER, 0x57, 3, {1 * CELL_W, 13 * CELL_H, CELL_W, CELL_H}},
{OBJECT_SPACER, 0x58, 3, {1 * CELL_W, 14 * CELL_H, CELL_W, CELL_H}},
{OBJECT_SPACER, 0x59, 3, {0 * CELL_W, 11 * CELL_H, CELL_W, CELL_H}},
{OBJECT_SPACER, 0x5A, 3, {0 * CELL_W, 10 * CELL_H, CELL_W, CELL_H}},
{OBJECT_SPACER, 0x5B, 3, {0 * CELL_W, 12 * CELL_H, CELL_W, CELL_H}},

//Girl Player poisoned
{OBJECT_SPACER, 0x60, 3, {1 * CELL_W, 0 * CELL_H, CELL_W, CELL_H}},
{OBJECT_SPACER, 0x61, 3, {1 * CELL_W, 1 * CELL_H, CELL_W, CELL_H}},
{OBJECT_SPACER, 0x62, 3, {1 * CELL_W, 2 * CELL_H, CELL_W, CELL_H}},
{OBJECT_SPACER, 0x63, 3, {1 * CELL_W, 3 * CELL_H, CELL_W, CELL_H}},
{OBJECT_SPACER, 0x64, 3, {1 * CELL_W, 4 * CELL_H, CELL_W, CELL_H}},
{OBJECT_SPACER, 0x65, 3, {1 * CELL_W, 5 * CELL_H, CELL_W, CELL_H}},
{OBJECT_SPACER, 0x66, 3, {1 * CELL_W, 6 * CELL_H, CELL_W, CELL_H}},
{OBJECT_SPACER, 0x67, 3, {1 * CELL_W, 7 * CELL_H, CELL_W, CELL_H}},
{OBJECT_SPACER, 0x68, 3, {1 * CELL_W, 8 * CELL_H, CELL_W, CELL_H}},
{OBJECT_SPACER, 0x69, 3, {1 * CELL_W, 9 * CELL_H, CELL_W, CELL_H}},
{OBJECT_SPACER, 0x6A, 3, {1 * CELL_W, 10 * CELL_H, CELL_W, CELL_H}},
{OBJECT_SPACER, 0x6B, 3, {1 * CELL_W, 11 * CELL_H, CELL_W, CELL_H}},

*/

