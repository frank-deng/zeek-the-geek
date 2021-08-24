levelData = [
	new Stage(function(stage){
		//Init player
		stage.player.push(new Player(stage, 0, 0));
		stage.player.push(new Player(stage, 0, 11, true));

		//Border
		stage.setObject(1, 0, new Mushroom(true));
		stage.setObject(1, 1, new Mushroom(true));
		stage.setObject(1, 2, new Mushroom(true));
		for (i = 1; i < stage.cols; i++) {
			stage.setObject(i, 3, new Mushroom(true));
			stage.setObject(i, 7, new Mushroom(true));
		}
		stage.setObject(1, 8, new Mushroom(true));
		stage.setObject(1, 9, new Mushroom(true));
		stage.setObject(1, 10, new Mushroom(true));
		stage.setObject(1, 11, new Mushroom(true));

		//Purple flowers
		for (i = 0; i < stage.cols - 2; i++) {
			stage.setObject(i, 5, new PFlower(false));
		}

		stage.setObject(stage.cols - 2, 5, new AppleRotten());
		stage.setObject(stage.cols - 1, 5, new Mushroom(false));

		//Flowers & Eggs
		stage.setObject(1, 4, new Egg());
		stage.setObject(3, 4, new Flower(true));
		stage.setObject(5, 4, new Flower(false));
		stage.setObject(7, 4, new Egg());
		stage.setObject(9, 4, new Flower(true));
		stage.setObject(11, 4, new Flower(false));
		stage.setObject(13, 4, new Egg());
		stage.setObject(15, 4, new Flower(true));

		stage.setObject(2, 6, new Flower(true));
		stage.setObject(4, 6, new Egg());
		stage.setObject(6, 6, new Flower(false));
		stage.setObject(8, 6, new Flower(true));
		stage.setObject(10, 6, new Egg());
		stage.setObject(12, 6, new Flower(false));
		stage.setObject(14, 6, new Flower(true));
	}),
	new Stage(function(stage){
		//Init player
		stage.player.push(new Player(stage, 0, 0));
		stage.player.push(new Player(stage, 0, 11, true));

		//Border
		stage.setObject(1, 0, new Mushroom(true));
		stage.setObject(1, 1, new Mushroom(true));
		stage.setObject(1, 2, new Mushroom(true));
		for (i = 1; i < stage.cols; i++) {
			stage.setObject(i, 3, new Mushroom(true));
			stage.setObject(i, 7, new Mushroom(true));
		}
		stage.setObject(1, 8, new Mushroom(true));
		stage.setObject(1, 9, new Mushroom(true));
		stage.setObject(1, 10, new Mushroom(true));
		stage.setObject(1, 11, new Mushroom(true));

		//Purple flowers
		for (i = 0; i < stage.cols - 2; i++) {
			stage.setObject(i, 5, new PFlower(true));
		}
		stage.setObject(stage.cols - 2, 5, new Mushroom(true));
		stage.setObject(stage.cols - 1, 5, new Mushroom(false));
		stage.setObject(0, 4, new Pill());
		stage.setObject(0, 6, new Pill());

		//Flowers & Eggs
		stage.setObject(1, 4, new Egg());
		stage.setObject(3, 4, new Flower(true));
		stage.setObject(5, 4, new Flower(false));
		stage.setObject(7, 4, new Egg());
		stage.setObject(9, 4, new Flower(true));
		stage.setObject(11, 4, new Flower(false));
		stage.setObject(13, 4, new Egg());
		stage.setObject(15, 4, new Flower(true));

		stage.setObject(2, 6, new Flower(true));
		stage.setObject(4, 6, new Egg());
		stage.setObject(6, 6, new Flower(false));
		stage.setObject(8, 6, new Flower(true));
		stage.setObject(10, 6, new Egg());
		stage.setObject(12, 6, new Flower(false));
		stage.setObject(14, 6, new Flower(true));
	}),
	new Stage(function(stage){
		//Init player
		stage.player.push(new Player(stage, 4, 9));
		stage.player.push(new Player(stage, 5, 9, true));

		//Row 0
		stage.setObject(0, 0, new Mushroom(true));
		stage.setObject(1, 0, new Wall(10));
		stage.setObject(2, 0, new Ball());
		stage.setObject(3, 0, new Mushroom(false));
		stage.setObject(4, 0, new PFlower(true));
		stage.setObject(5, 0, new Flower(false));
		stage.setObject(6, 0, new PFlower(false));
		stage.setObject(7, 0, new Apple());
		stage.setObject(8, 0, new Door());
		stage.setObject(9, 0, new Key());
		stage.setObject(10, 0, new Crystal());
		stage.setObject(11, 0, new Bomb());
		stage.setObject(12, 0, new Treasure());
		stage.setObject(13, 0, new Mushroom(false));
		stage.setObject(14, 0, new PFlower(true));
		stage.setObject(15, 0, new Flower(false));
		stage.setObject(16, 0, new PFlower(false));

		//Row 1
		stage.setObject(0, 1, new PFlower(true));
		stage.setObject(1, 1, new Flower(false));
		stage.setObject(2, 1, new PFlower(false));
		stage.setObject(3, 1, new Apple());
		stage.setObject(4, 1, new Door());
		stage.setObject(5, 1, new Key());
		stage.setObject(6, 1, new Crystal());
		stage.setObject(7, 1, new Bomb());
		stage.setObject(8, 1, new Treasure());
		stage.setObject(9, 1, new Mushroom(false));
		stage.setObject(10, 1, new PFlower(true));
		stage.setObject(11, 1, new Flower(false));
		stage.setObject(12, 1, new PFlower(false));
		stage.setObject(13, 1, new Apple());
		stage.setObject(14, 1, new Door());
		stage.setObject(15, 1, new Key());
		stage.setObject(16, 1, new Mushroom(true));

		//Row 2
		stage.setObject(0, 2, new Door());
		stage.setObject(1, 2, new Key());
		stage.setObject(2, 2, new Crystal());
		stage.setObject(3, 2, new Bomb());
		stage.setObject(4, 2, new Treasure());
		stage.setObject(5, 2, new Mushroom(false));
		stage.setObject(6, 2, new PFlower(true));
		stage.setObject(7, 2, new Flower(false));
		stage.setObject(8, 2, new PFlower(false));
		stage.setObject(9, 2, new Apple());
		stage.setObject(10, 2, new Door());
		stage.setObject(11, 2, new Key());
		stage.setObject(12, 2, new Mushroom(true));
		stage.setObject(13, 2, new Wall(10));
		stage.setObject(14, 2, new Ball());
		stage.setObject(15, 2, new Mushroom(false));
		stage.setObject(16, 2, new PFlower(true));

		//Side wall
		for (var i = 0; i < stage.cols; i++) {
			stage.setObject(i, 3, new Wall(2));
			stage.setObject(i, 11, new Wall(2));
		}
		for (var i = 5; i < stage.rows - 2; i++) {
			stage.setObject(0, i, new Wall(2));
			stage.setObject(1, i, new Wall(1));
			stage.setObject(15, i, new Wall(1));
			stage.setObject(16, i, new Wall(2));
		}
		stage.setObject(0, 4, new Wall(2));
		stage.setObject(0, 10, new Wall(2));
		for (var i = 1; i < stage.cols - 1; i++) {
			stage.setObject(i, 4, new Wall(1));
			stage.setObject(i, 10, new Wall(1));
		}
		stage.setObject(16, 4, new Wall(2));
		stage.setObject(16, 10, new Wall(2));

		//Row 5
		stage.setObject(5, 5, new Flower(false));
		stage.setObject(7, 5, new Flower(false));
		stage.setObject(11, 5, new Flower(false));

		//Row 6
		for (var i = 3; i <= 13; i++) {
			stage.setObject(i, 6, new Wall(0));
		}
		stage.setObject(8, 6, new PFlower(false));

		//Row 7
		stage.setObject(3, 7, new PFlower(false));
		stage.setObject(5, 7, new Wall(0));
		stage.setObject(6, 7, new Mushroom(false));
		stage.setObject(7, 7, new Wall(0));
		stage.setObject(11, 7, new Apple());
		stage.setObject(14, 7, new Flower(false));

		//Row 8
		stage.setObject(3, 8, new Wall(0));
		stage.setObject(6, 8, new Door());
		stage.setObject(7, 8, new Wall(0));
		stage.setObject(9, 8, new Wall(0));
		stage.setObject(10, 8, new Wall(0));
		stage.setObject(11, 8, new Wall(0));
		stage.setObject(12, 8, new Wall(0));
		stage.setObject(13, 8, new Wall(0));

		//Row 9
		stage.setObject(2, 9, new Flower(false));
		stage.setObject(6, 9, new Flower(false));
		stage.setObject(7, 9, new Wall(0));
		stage.setObject(8, 9, new Flower(false));
		stage.setObject(9, 9, new Flower(false));
		stage.setObject(11, 9, new Flower(false));
		stage.setObject(12, 9, new Key());
		stage.setObject(13, 9, new Treasure());

		//Row 10
		stage.setObject(14, 10, new PFlower(true));
	}),
];

document.title='Valentine 1';
new Game('valentine1', levelData);
