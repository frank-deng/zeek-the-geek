levelData = [
	new Stage(function(stage){
		//Init player
		stage.player.push(new Player(stage, 2, 5));

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
		stage.setObject(6, 7, new Mushroom(false));
		stage.setObject(7, 7, new Wall(0));
		stage.setObject(11, 7, new Apple());
		stage.setObject(14, 7, new Flower(false));

		//Row 8
		stage.setObject(3, 8, new Wall(0));
		stage.setObject(5, 8, new Wall(0));
		stage.setObject(7, 8, new Wall(0));
		stage.setObject(9, 8, new Wall(0));
		stage.setObject(10, 8, new Wall(0));
		stage.setObject(11, 8, new Wall(0));
		stage.setObject(12, 8, new Wall(0));
		stage.setObject(13, 8, new Wall(0));

		//Row 9
		stage.setObject(2, 9, new Flower(false));
		stage.setObject(5, 9, new Wall(0));
		stage.setObject(6, 9, new Flower(false));
		stage.setObject(8, 9, new Flower(false));
		stage.setObject(9, 9, new Flower(false));
		stage.setObject(11, 9, new Flower(false));

		//Row 10
		stage.setObject(14, 10, new PFlower(true));

		//:P
		/*
		stage.getObject(11, 9).onPick = function(player) {
			player.stage.score += 100;
			$(document).trigger('enterEgg', ['egg/001.html']);
		}
		*/
	}),
	new Stage(function(stage){
		//Init player
		stage.player.push(new Player(stage, 1, 4));

		//Row 0
		stage.setObject(0, 0, new Mushroom(false));
		stage.setObject(1, 0, new PFlower(true));
		stage.setObject(2, 0, new Crystal());
		stage.setObject(3, 0, new Apple());
		stage.setObject(4, 0, new Door());
		stage.setObject(5, 0, new Key());
		stage.setObject(6, 0, new Bomb());
		stage.setObject(7, 0, new Flower(false));
		stage.setObject(8, 0, new Treasure());
		stage.setObject(9, 0, new Mushroom(true));
		stage.setObject(10, 0, new Wall(10));
		stage.setObject(11, 0, new PFlower(false));
		stage.setObject(12, 0, new Ball());
		stage.setObject(13, 0, new Mushroom(false));
		stage.setObject(14, 0, new PFlower(true));
		stage.setObject(15, 0, new Crystal());
		stage.setObject(16, 0, new Apple());

		//Row 1
		stage.setObject(0, 1, new Ball());
		stage.setObject(1, 1, new Mushroom(false));
		stage.setObject(2, 1, new PFlower(true));
		stage.setObject(3, 1, new Crystal());
		stage.setObject(4, 1, new Apple());
		stage.setObject(5, 1, new Door());
		stage.setObject(6, 1, new Key());
		stage.setObject(7, 1, new Bomb());
		stage.setObject(8, 1, new Flower(false));
		stage.setObject(9, 1, new Treasure());
		stage.setObject(10, 1, new Mushroom(true));
		stage.setObject(11, 1, new Wall(10));
		stage.setObject(12, 1, new PFlower(false));
		stage.setObject(13, 1, new Ball());
		stage.setObject(14, 1, new Mushroom(false));
		stage.setObject(15, 1, new PFlower(true));
		stage.setObject(16, 1, new Crystal());

		//Row 2
		stage.setObject(0, 2, new PFlower(false));
		stage.setObject(1, 2, new Ball());
		stage.setObject(2, 2, new Mushroom(false));
		stage.setObject(3, 2, new PFlower(true));
		stage.setObject(4, 2, new Crystal());
		stage.setObject(5, 2, new Apple());
		stage.setObject(6, 2, new Door());
		stage.setObject(7, 2, new Key());
		stage.setObject(8, 2, new Bomb());
		stage.setObject(9, 2, new Flower(false));
		stage.setObject(10, 2, new Treasure());
		stage.setObject(11, 2, new Mushroom(true));
		stage.setObject(12, 2, new Wall(10));
		stage.setObject(13, 2, new PFlower(false));
		stage.setObject(14, 2, new Ball());
		stage.setObject(15, 2, new Mushroom(false));
		stage.setObject(16, 2, new PFlower(true));

		//Side wall
		for (var i = 0; i < stage.cols; i++) {
			stage.setObject(i, 3, new Wall(4));
			stage.setObject(i, 11, new Wall(4));
		}
		for (var i = 4; i < stage.rows - 1; i++) {
			stage.setObject(0, i, new Wall(4));
			stage.setObject(16, i, new Wall(4));
		}

		//Row 4
		stage.setObject(4, 4, new Flower(false));
		stage.setObject(6, 4, new Flower(false));
		stage.setObject(11, 4, new Flower(false));
		stage.setObject(13, 4, new Flower(false));

		//Row 5
		for (var i = 0; i < stage.cols; i++) {
			stage.setObject(i, 5, new Wall(4));
		}
		stage.setObject(1, 5, undefined);
		stage.setObject(8, 5, undefined);
		stage.setObject(15, 5, undefined);

		//Row 6
		stage.setObject(2, 6, new PFlower(true));
		stage.setObject(7, 6, new Wall(4));
		stage.setObject(9, 6, new Wall(4));
		stage.setObject(13, 6, new PFlower(false));
		stage.setObject(14, 6, new PFlower(false));

		//Row 7
		stage.setObject(2, 7, new Wall(4));
		stage.setObject(3, 7, new Wall(4));
		stage.setObject(5, 7, new Wall(4));
		stage.setObject(7, 7, new Wall(4));
		stage.setObject(9, 7, new Wall(4));
		stage.setObject(11, 7, new Wall(4));
		stage.setObject(13, 7, new Wall(4));
		stage.setObject(14, 7, new Wall(4));

		//Row 8
		stage.setObject(2, 8, new Wall(4));
		stage.setObject(3, 8, new Flower(false));
		stage.setObject(5, 8, new Wall(4));
		stage.setObject(7, 8, new Wall(4));
		stage.setObject(8, 8, new Ball());
		stage.setObject(9, 8, new Wall(4));
		stage.setObject(11, 8, new Wall(4));
		stage.setObject(13, 8, new Wall(4));
		stage.setObject(14, 8, new Treasure());

		//Row 9
		stage.setObject(2, 9, new Wall(4));
		stage.setObject(3, 9, new Wall(4));
		stage.setObject(7, 9, new Ball());
		stage.setObject(9, 9, new Ball());
		stage.setObject(13, 9, new Wall(4));
		stage.setObject(14, 9, new Wall(4));

		//Row 10
		stage.setObject(1, 10, new Mushroom(false));
		stage.setObject(5, 10, new Wall(4));
		stage.setObject(6, 8, new Flower(false));
		stage.setObject(7, 10, new Wall(4));
		stage.setObject(9, 10, new Wall(4));
		stage.setObject(10, 8, new Flower(false));
		stage.setObject(11, 10, new Wall(4));
	}),
	new Stage(function(stage){
		//Player
		stage.player.push(new Player(stage, 4, 4));

		//Border
		for (var i = 0; i < stage.cols; i++) {
			stage.setObject(i, 0, new Wall(9));
			stage.setObject(i, 3, new Wall(9));
			stage.setObject(i, 11, new Wall(9));
		}
		for (var i = 1; i < stage.rows-1; i++) {
			stage.setObject(0, i, new Wall(9));
			stage.setObject(16, i, new Wall(9));
		}

		//Row 1
		stage.setObject(1, 1, new Treasure());
		stage.setObject(2, 1, new Crystal());
		stage.setObject(5, 1, new Flower(false));
		stage.setObject(8, 1, new Flower(false));
		stage.setObject(10, 1, new Crystal());
		stage.setObject(11, 1, new Apple());
		stage.setObject(12, 1, new Bomb());
		stage.setObject(15, 1, new PFlower(true));

		//Row 2
		stage.setObject(1, 2, new Treasure());
		stage.setObject(2, 2, new Wall(9));
		stage.setObject(3, 2, new Flower(false));
		stage.setObject(5, 2, new Apple());
		stage.setObject(7, 2, new PFlower(true));
		stage.setObject(9, 2, new Bomb());
		stage.setObject(12, 2, new Flower(false));
		stage.setObject(13, 2, new Wall(9));
		stage.setObject(14, 2, new PFlower(true));
		stage.setObject(15, 2, new Treasure());

		//Row 3
		stage.setObject(3, 3, new Crystal());

		//Row 4
		stage.setObject(1, 4, new Flower(false));
		stage.setObject(3, 4, new Flower(false));
		stage.setObject(6, 4, new PFlower(true));
		stage.setObject(8, 4, new Wall(9));
		stage.setObject(9, 4, new Flower(false));
		stage.setObject(12, 4, new Crystal());
		stage.setObject(15, 4, new Crystal());

		//Row 5
		stage.setObject(4, 5, new Wall(9));
		stage.setObject(12, 5, new Wall(9));
		stage.setObject(13, 5, new Wall(9));
		stage.setObject(14, 5, new Wall(9));

		//Row 6
		stage.setObject(1, 6, new Wall(9));
		stage.setObject(2, 6, new Apple());
		stage.setObject(3, 6, new Wall(9));
		stage.setObject(4, 6, new Wall(9));
		stage.setObject(5, 6, new Flower(false));
		stage.setObject(7, 6, new Flower(false));
		stage.setObject(8, 6, new Wall(9));
		stage.setObject(9, 6, new Flower(false));
		stage.setObject(11, 6, new Flower(false));
		stage.setObject(12, 6, new Wall(9));
		stage.setObject(15, 6, new Bomb());

		//Row 7
		stage.setObject(3, 7, new Flower(false));
		for (var i = 4; i <= 12; i++) {
			stage.setObject(i, 7, new Wall(9));
		}
		stage.setObject(14, 7, new PFlower(true));

		//Row 8
		stage.setObject(1, 8, new Flower(false));
		stage.setObject(4, 8, new Wall(9));
		stage.setObject(6, 8, new Flower(false));
		stage.setObject(10, 8, new Flower(false));
		stage.setObject(12, 8, new Wall(9));
		stage.setObject(14, 8, new Crystal());
		stage.setObject(15, 8, new PFlower(true));

		//Row 9
		stage.setObject(3, 9, new Flower(false));
		stage.setObject(7, 9, new Flower(false));
		stage.setObject(8, 9, new PFlower(true));
		stage.setObject(12, 9, new Bomb());
		stage.setObject(13, 9, new Crystal());

		//Row 10
		stage.setObject(2, 10, new Flower(false));
		stage.setObject(4, 10, new Wall(9));
		stage.setObject(5, 10, new Flower(false));
		stage.setObject(6, 10, new Wall(9));
		stage.setObject(8, 10, new Mushroom(false));
		stage.setObject(10, 10, new Wall(9));
		stage.setObject(11, 10, new Flower(false));
		stage.setObject(12, 10, new Wall(9));
		stage.setObject(14, 10, new Crystal());
		stage.setObject(15, 10, new Flower(false));
	}),
	new Stage(function(stage){
		//Init player
		stage.player.push(new Player(stage, 12, 8));

		//Border
		for (var i = 0; i < stage.cols; i++) {
			stage.setObject(i, 0, new Wall(3));
			stage.setObject(i, 3, new Wall(3));
			stage.setObject(i, 11, new Wall(3));
		}
		for (var i = 0; i < stage.rows; i++) {
			stage.setObject(0, i, new Wall(3));
			stage.setObject(16, i, new Wall(3));
		}
		for (var i = 2; i < stage.cols - 2; i++) {
			stage.setObject(i, 5, new Wall(3));
			stage.setObject(i, 9, new Wall(3));
		}
		for (var i = 5; i <= 9; i++) {
			stage.setObject(2, i, new Wall(3));
			stage.setObject(7, i, new Wall(3));
			stage.setObject(9, i, new Wall(3));
			stage.setObject(14, i, new Wall(3));
		}

		//Row 1
		stage.setObject(1, 1, new Treasure());
		stage.setObject(2, 1, new Treasure());
		stage.setObject(3, 1, new Flower(false));
		stage.setObject(10, 1, new Apple());
		stage.setObject(13, 1, new Flower(false));
		stage.setObject(14, 1, new Apple());
		stage.setObject(15, 1, new Treasure());

		//Row 2
		stage.setObject(1, 2, new PFlower(true));
		stage.setObject(5, 2, new Flower(false));
		stage.setObject(6, 2, new Apple());
		stage.setObject(8, 2, new PFlower(false));
		stage.setObject(10, 2, new Flower(false));
		stage.setObject(12, 2, new PFlower(false));
		stage.setObject(15, 2, new Treasure());

		//Row 3
		stage.setObject(2, 3, undefined);
		stage.setObject(11, 3, undefined);

		//Row 4
		stage.setObject(1, 4, new Flower(false));
		stage.setObject(5, 4, new Flower(false));
		stage.setObject(7, 4, new Mushroom(true));
		stage.setObject(8, 4, new Wall(3));
		stage.setObject(9, 4, new Mushroom(false));
		stage.setObject(12, 4, new Flower(false));
		stage.setObject(15, 4, new Flower(false));

		//Row 6
		stage.setObject(4, 6, new Treasure());
		stage.setObject(5, 6, new Wall(10));
		stage.setObject(6, 6, new Mushroom(true));
		stage.setObject(8, 6, new Mushroom(true));
		stage.setObject(10, 6, new Key());
		stage.setObject(11, 6, new PFlower(false));

		//Row 7
		stage.setObject(3, 7, new Key());
		stage.setObject(4, 7, new Wall(10));
		stage.setObject(5, 7, new PFlower(true));
		stage.setObject(7, 7, new Door());
		stage.setObject(9, 7, new Door());
		stage.setObject(11, 7, new Apple());
		stage.setObject(12, 7, new Apple());
		stage.setObject(15, 7, new Flower(false));

		//Row 8
		stage.setObject(8, 8, new Flower(false));
		stage.setObject(10, 8, new Key());

		//Row 9
		stage.setObject(1, 9, new Flower(false));
		stage.setObject(8, 9, new Door());

		//Row 10
		stage.setObject(2, 10, new Flower(false));
		stage.setObject(6, 10, new Flower(false));
		stage.setObject(11, 10, new Flower(false));
		stage.setObject(14, 10, new Flower(false));
	}),
	new Stage(function(stage){
		//Init player
		stage.player.push(new Player(stage, 5, 2));

		//Border
		for (var i = 0; i < stage.cols; i++) {
			stage.setObject(i, 0, new Wall(5));
			stage.setObject(i, 3, new Wall(5));
			stage.setObject(i, 11, new Wall(5));
		}
		for (var i = 0; i < stage.rows; i++) {
			stage.setObject(0, i, new Wall(5));
			stage.setObject(16, i, new Wall(5));
		}
		for (var i = 5; i <= 9; i++) {
			stage.setObject(9, i, new Wall(5));
		}
		for (var i = 9; i <= 15; i++) {
			stage.setObject(i, 6, new Wall(5));
		}
		for (var i = 1; i <= 7; i++) {
			stage.setObject(i, 5, new Wall(5));
			stage.setObject(i, 7, new Wall(5));
			stage.setObject(i, 9, new Wall(5));
		}

		//Row 1
		stage.setObject(1, 1, new Flower(false));
		stage.setObject(2, 1, new Flower(false));
		stage.setObject(4, 1, new Wall(5));
		stage.setObject(5, 1, new Mushroom(true));
		stage.setObject(9, 1, new Flower(false));
		stage.setObject(13, 1, new Flower(false));
		stage.setObject(15, 1, new Flower(false));

		//Row 2
		stage.setObject(4, 2, new Apple());
		stage.setObject(6, 2, new Flower(false));
		stage.setObject(8, 2, new PFlower(true));
		stage.setObject(9, 2, new Wall(5));
		stage.setObject(11, 2, new Crystal());
		stage.setObject(12, 2, new Mushroom(true));
		stage.setObject(14, 2, new Bomb());

		//Row 3
		stage.setObject(10, 3, new Crystal());

		//Row 4
		stage.setObject(2, 4, new Flower(false));
		stage.setObject(5, 4, new Flower(false));
		stage.setObject(9, 4, new Door());
		stage.setObject(10, 4, new Ball());
		stage.setObject(12, 4, new Bomb());
		stage.setObject(15, 4, new Mushroom(true));

		//Row 5
		stage.setObject(1, 5, new Key());
		stage.setObject(3, 5, new PFlower(false));
		stage.setObject(8, 5, new Flower(false));
		stage.setObject(12, 5, new Flower(false));
		stage.setObject(14, 5, new Mushroom(true));
		stage.setObject(15, 5, new Key());

		//Row 6
		stage.setObject(2, 6, new Apple());
		stage.setObject(4, 6, new Flower(false));
		stage.setObject(7, 6, new Flower(false));

		//Row 7
		stage.setObject(5, 7, new PFlower(false));
		stage.setObject(8, 7, new Door());
		stage.setObject(10, 7, new Flower(false));
		stage.setObject(11, 7, new Apple());
		stage.setObject(13, 7, new Bomb());
		stage.setObject(15, 7, new Mushroom(false));

		//Row 8
		stage.setObject(1, 8, new Flower(false));
		stage.setObject(3, 8, new Wall(5));
		stage.setObject(4, 8, new Key());
		stage.setObject(5, 8, new Apple());
		stage.setObject(7, 8, new Flower(false));
		stage.setObject(12, 8, new PFlower(true));
		stage.setObject(14, 8, new Wall(10));
		stage.setObject(15, 8, new Mushroom(false));

		//Row 9
		stage.setObject(1, 9, undefined);
		stage.setObject(2, 9, new Crystal());
		stage.setObject(11, 9, new Flower(false));
		stage.setObject(14, 9, new Wall(10));
		stage.setObject(15, 9, new Wall(10));

		stage.setObject(1, 10, new Flower(false));
		stage.setObject(3, 10, new Flower(false));
		stage.setObject(6, 10, new Flower(false));
		stage.setObject(7, 10, new Door());
		stage.setObject(9, 10, new Crystal());
		stage.setObject(10, 10, new Flower(false));
		stage.setObject(11, 10, new Wall(10));
		stage.setObject(13, 10, new Flower(false));
		stage.setObject(15, 10, new Treasure());
	}),
	new Stage(function(stage){
		//Init player
		stage.player.push(new Player(stage, 2, 1));

		//Border
		for (var i = 0; i < stage.cols; i++) {
			stage.setObject(i, 0, new Wall(6));
			stage.setObject(i, 8, new Wall(6));
			stage.setObject(i, 11, new Wall(6));
		}
		for (var i = 0; i < stage.rows; i++) {
			stage.setObject(0, i, new Wall(6));
			stage.setObject(16, i, new Wall(6));
		}
		for (var i = 1; i <= 6; i++) {
			stage.setObject(8, i, new Wall(6));
			stage.setObject(12, i, new Wall(6));
		}

		//Balls
		for (var i = 0; i < 7; i++) {
			for (j = 0; j < 7; j++) {
				if (!((j * 7 + i) % 2)) {
					stage.setObject(j + 1, i + 1, new Ball());
				}
			}
		}

		//Bombs
		for (var i = 0; i < 5; i++) {
			for (j = 0; j < 3; j++) {
				if (!((j * 7 + i) % 2)) {
					stage.setObject(j + 9, i + 2, new Bomb());
				}
			}
		}

		//Apples
		for (var i = 0; i < 4; i++) {
			for (j = 0; j < 3; j++) {
				if (!((j * 7 + i) % 2)) {
					stage.setObject(j + 13, i + 4, new Apple());
				}
			}
		}

		//Treasure
		stage.setObject(10, 1, new Treasure());
		stage.setObject(13, 1, new Treasure());
		stage.setObject(14, 1, new PFlower(true));
		stage.setObject(14, 2, new Flower(false));
		stage.setObject(13, 3, new Wall(6));
		stage.setObject(14, 3, new Wall(6));

		//Row 8
		stage.setObject(15, 8, undefined);

		//Row 9
		stage.setObject(2, 9, new PFlower(true));
		stage.setObject(6, 9, new Door());
		stage.setObject(8, 9, new Apple());
		stage.setObject(10, 9, new Apple());

		//Row 10
		stage.setObject(1, 10, new Mushroom(false));
		stage.setObject(3, 10, new Apple());
		stage.setObject(5, 10, new PFlower(true));
		stage.setObject(6, 10, new Wall(6));
		stage.setObject(9, 10, new Flower(false));
		stage.setObject(12, 10, new Key());
		stage.setObject(13, 10, new PFlower(false));
		stage.setObject(14, 10, new Wall(6));
		stage.setObject(15, 10, new PFlower(true));
	}),
	new Stage(function(stage){
		//Init player
		stage.player.push(new Player(stage, 5, 1));

		//Border
		for (var i = 0; i < stage.cols; i++) {
			stage.setObject(i, 0, new Wall(9));
			stage.setObject(i, 11, new Wall(9));
		}
		for (var i = 1; i < stage.rows - 1; i++) {
			stage.setObject(0, i, new Wall(9));
			stage.setObject(16, i, new Wall(9));
		}

		//Row 1
		stage.setObject(2, 1, new Flower(false));
		stage.setObject(3, 1, new Flower(false));
		stage.setObject(4, 1, new Wall(9));
		stage.setObject(6, 1, new Flower(false));
		stage.setObject(7, 1, new Flower(false));
		stage.setObject(8, 1, new Ball());
		stage.setObject(9, 1, new Ball());
		stage.setObject(10, 1, new Flower(false));
		stage.setObject(12, 1, new Flower(false));
		stage.setObject(13, 1, new Wall(9));
		stage.setObject(14, 1, new Treasure());

		//Row 2
		stage.setObject(1, 2, new Ball());
		stage.setObject(4, 2, new Crystal());
		stage.setObject(6, 2, new Ball());
		stage.setObject(7, 2, new Ball());
		stage.setObject(8, 2, new Ball());
		stage.setObject(10, 2, new Ball());
		stage.setObject(12, 2, new Flower(false));
		stage.setObject(13, 2, new Wall(9));
		stage.setObject(14, 2, new Flower(false));
		stage.setObject(15, 2, new Flower(false));

		//Row 3
		stage.setObject(3, 3, new Wall(9));
		stage.setObject(4, 3, new Wall(9));
		stage.setObject(6, 3, new Flower(false));
		stage.setObject(7, 3, new Flower(false));
		stage.setObject(10, 3, new Wall(9));
		stage.setObject(11, 3, new Door());
		stage.setObject(12, 3, new Wall(9));
		stage.setObject(13, 3, new Wall(9));
		stage.setObject(14, 3, new Wall(9));
		stage.setObject(15, 3, new Door());

		//Row 4
		stage.setObject(1, 4, new Ball());
		stage.setObject(2, 4, new Flower(false));
		stage.setObject(3, 4, new Key());
		stage.setObject(4, 4, new Wall(9));
		stage.setObject(5, 4, new Flower(false));
		stage.setObject(7, 4, new Flower(false));
		stage.setObject(8, 4, new Flower(false));
		stage.setObject(10, 4, new Wall(9));
		stage.setObject(12, 4, new Crystal());
		stage.setObject(14, 4, new Wall(9));

		//Row 5
		stage.setObject(1, 5, new Wall(9));
		stage.setObject(2, 5, new Wall(9));
		stage.setObject(3, 5, new Wall(9));
		stage.setObject(4, 5, new Wall(9));
		stage.setObject(5, 5, new Ball());
		stage.setObject(6, 5, new Ball());
		stage.setObject(7, 5, new Ball());
		stage.setObject(8, 5, new Ball());
		stage.setObject(9, 5, new Ball());
		stage.setObject(10, 5, new Wall(9));
		stage.setObject(11, 5, new Wall(9));
		stage.setObject(12, 5, new Wall(9));
		stage.setObject(13, 5, new Door());
		stage.setObject(14, 5, new Wall(9));
		stage.setObject(15, 5, new Flower(false));

		//Row 6
		stage.setObject(1, 6, new PFlower(true));
		stage.setObject(3, 6, new Apple());
		stage.setObject(5, 6, new Ball());
		stage.setObject(7, 6, new PFlower(false));
		stage.setObject(8, 6, new Ball());
		stage.setObject(10, 6, new Flower(false));
		stage.setObject(11, 6, new PFlower(false));
		stage.setObject(12, 6, new Wall(9));
		stage.setObject(13, 6, new Ball());
		stage.setObject(14, 6, new Flower(false));

		//Row 7
		stage.setObject(1, 7, new Treasure());
		stage.setObject(2, 7, new Flower(false));
		stage.setObject(3, 7, new Ball());
		stage.setObject(4, 7, new Flower(false));
		stage.setObject(5, 7, new Ball());
		stage.setObject(10, 7, new Flower(false));
		stage.setObject(11, 7, new Flower(false));
		stage.setObject(12, 7, new Wall(9));
		stage.setObject(14, 7, new Ball());
		stage.setObject(15, 7, new Flower(false));

		//Row 8
		stage.setObject(2, 8, new PFlower(true));
		stage.setObject(3, 8, new Ball());
		stage.setObject(5, 8, new Flower(false));
		stage.setObject(7, 8, new Ball());
		stage.setObject(8, 8, new Ball());
		stage.setObject(9, 8, new Flower(false));
		stage.setObject(10, 8, new Flower(false));
		stage.setObject(11, 8, new Flower(false));
		stage.setObject(12, 8, new Wall(9));
		stage.setObject(15, 8, new Ball());

		//Row 9
		stage.setObject(1, 9, new Apple());
		stage.setObject(3, 9, new Ball());
		stage.setObject(5, 9, new Flower(false));
		stage.setObject(6, 9, new PFlower(false));
		stage.setObject(7, 9, new Ball());
		stage.setObject(8, 9, new Ball());
		stage.setObject(9, 9, new Flower(false));
		stage.setObject(10, 9, new Flower(false));
		stage.setObject(11, 9, new Flower(false));
		stage.setObject(12, 9, new Wall(9));
		stage.setObject(13, 9, new Ball());
		stage.setObject(14, 9, new Key());
		stage.setObject(15, 9, new Flower(false));

		//Row 10
		stage.setObject(2, 10, new Key());
		stage.setObject(3, 10, new Flower(false));
		stage.setObject(5, 10, new PFlower(true));
		stage.setObject(6, 10, new Ball());
		stage.setObject(7, 10, new Ball());
		stage.setObject(8, 10, new Ball());
		stage.setObject(9, 10, new Ball());
		stage.setObject(10, 10, new Flower(false));
		stage.setObject(11, 10, new Apple());
		stage.setObject(12, 10, new Wall(9));
		stage.setObject(13, 10, new Flower(false));
		stage.setObject(14, 10, new Flower(false));
		stage.setObject(15, 10, new Mushroom(false));
	}),
	new Stage(function(stage){
		//Init player
		stage.player.push(new Player(stage, 4, 1));

		//Border
		for (var i = 0; i < stage.cols; i++) {
			stage.setObject(i, 0, new Wall(8));
			stage.setObject(i, 11, new Wall(8));
		}
		for (var i = 1; i < stage.rows - 1; i++) {
			stage.setObject(0, i, new Wall(8));
			stage.setObject(16, i, new Wall(8));
		}

		//Row 1
		stage.setObject(1, 1, new Flower(false));
		stage.setObject(2, 1, new Flower(false));
		stage.setObject(3, 1, new Flower(false));
		stage.setObject(8, 1, new Flower(false));
		stage.setObject(10, 1, new Ball());
		stage.setObject(12, 1, new Flower(false));
		stage.setObject(13, 1, new Wall(8));
		stage.setObject(14, 1, new Mushroom(true));
		stage.setObject(15, 1, new PFlower(false));

		//Row 2
		stage.setObject(1, 2, new Flower(false));
		stage.setObject(2, 2, new Apple());
		stage.setObject(3, 2, new Flower(false));
		stage.setObject(4, 2, new Flower(false));
		stage.setObject(5, 2, new Wall(8));
		stage.setObject(6, 2, new Wall(8));
		stage.setObject(7, 2, new Wall(8));
		stage.setObject(8, 2, new Wall(8));
		stage.setObject(9, 2, new PFlower(true));
		stage.setObject(10, 2, new Ball());
		stage.setObject(11, 2, new Flower(false));
		stage.setObject(13, 2, new Door());
		stage.setObject(14, 2, new Treasure());
		stage.setObject(15, 2, new Key());

		//Row 3
		for (var i = 1; i <= 7; i++) {
			stage.setObject(i, 3, new Flower(false));
		}
		stage.setObject(8, 3, new Wall(8));
		stage.setObject(12, 3, new Flower(false));
		stage.setObject(13, 3, new Wall(8));
		stage.setObject(14, 3, new Wall(8));
		stage.setObject(15, 3, new Wall(8));

		//Row 4
		for (var i = 1; i <= 9; i++) {
			stage.setObject(i, 4, new Wall(8));
		}
		stage.setObject(11, 4, new Wall(8));
		stage.setObject(12, 4, new Wall(8));
		stage.setObject(13, 4, new Wall(8));
		stage.setObject(14, 4, new PFlower(false));

		//Row 5
		stage.setObject(2, 5, new Ball());
		stage.setObject(4, 5, new Ball());
		stage.setObject(6, 5, new Ball());
		stage.setObject(8, 5, new Ball());
		stage.setObject(9, 5, new Door());
		stage.setObject(15, 5, new Apple());

		//Row 6
		stage.setObject(1, 6, new Ball());
		stage.setObject(3, 6, new Ball());
		stage.setObject(6, 6, new Ball());
		stage.setObject(8, 6, new Ball());
		stage.setObject(9, 6, new Wall(8));
		stage.setObject(10, 6, new Wall(8));
		stage.setObject(11, 6, new Wall(8));
		stage.setObject(12, 6, new Wall(8));
		stage.setObject(13, 6, new Wall(8));
		stage.setObject(15, 6, new Key());

		//Row 7
		stage.setObject(1, 7, new Flower(false));
		stage.setObject(2, 7, new Ball());
		stage.setObject(5, 7, new Ball());
		stage.setObject(6, 7, new Ball());
		stage.setObject(7, 7, new Ball());
		stage.setObject(9, 7, new Wall(8));
		stage.setObject(10, 7, new Flower(false));
		stage.setObject(11, 7, new Flower(false));
		stage.setObject(12, 7, new Key());
		stage.setObject(13, 7, new Wall(8));
		stage.setObject(14, 7, new Wall(8));
		stage.setObject(15, 7, new Wall(8));

		//Row 8
		stage.setObject(3, 8, new Ball());
		stage.setObject(4, 8, new Ball());
		stage.setObject(6, 8, new Flower(false));
		stage.setObject(7, 8, new Flower(false));
		stage.setObject(8, 8, new Wall(8));
		stage.setObject(9, 8, new Wall(8));
		stage.setObject(10, 8, new Key());
		stage.setObject(11, 8, new Wall(8));
		stage.setObject(12, 8, new Wall(8));
		stage.setObject(13, 8, new Wall(8));
		stage.setObject(14, 8, new Wall(8));
		stage.setObject(15, 8, new Mushroom(false));

		//Row 9
		stage.setObject(2, 9, new Ball());
		stage.setObject(3, 9, new Ball());
		stage.setObject(4, 9, new Flower(false));
		stage.setObject(5, 9, new Ball());
		stage.setObject(7, 9, new Flower(false));
		stage.setObject(8, 9, new Wall(8));
		stage.setObject(9, 9, new PFlower(false));
		stage.setObject(14, 9, new Wall(8));
		stage.setObject(15, 9, new Door());

		//Row 10
		stage.setObject(4, 10, new Ball());
		stage.setObject(8, 10, new Flower(false));
		stage.setObject(12, 10, new Apple());
		stage.setObject(14, 10, new Door());
		stage.setObject(15, 10, new Flower(false));
	}),
	new Stage(function(stage){
		//Init player
		stage.player.push(new Player(stage, 8, 6));

		//Border
		for (var i = 0; i < stage.cols; i++) {
			stage.setObject(i, 0, new Wall(3));
			stage.setObject(i, 3, new Wall(3));
			stage.setObject(i, 11, new Wall(3));
		}
		for (var i = 1; i < stage.rows - 1; i++) {
			stage.setObject(0, i, new Wall(3));
			stage.setObject(16, i, new Wall(3));
		}

		//Walls in the stage
		for (var i = 7; i < stage.cols; i++) {
			stage.setObject(i, 5, new Wall(3));
			stage.setObject(i, 7, new Wall(3));
			stage.setObject(i, 9, new Wall(3));
		}

		//Row 1
		stage.setObject(1, 1, new Flower(false));
		stage.setObject(3, 1, new Flower(false));
		stage.setObject(5, 1, new Apple());
		stage.setObject(10, 1, new Bomb());
		stage.setObject(13, 1, new PFlower(true));
		stage.setObject(15, 1, new Treasure());

		//Row 2
		stage.setObject(1, 2, new Flower(false));
		stage.setObject(2, 2, new Flower(false));
		stage.setObject(4, 2, new Apple());
		stage.setObject(5, 2, new Apple());
		stage.setObject(7, 2, new Flower(false));
		stage.setObject(8, 2, new PFlower(true));
		stage.setObject(10, 2, new Flower(false));
		stage.setObject(12, 2, new PFlower(true));
		stage.setObject(13, 2, new Mushroom(true));
		stage.setObject(15, 2, new Treasure());

		//Row 3
		stage.setObject(2, 3, new Crystal());

		//Row 4
		stage.setObject(2, 4, new Flower(false));
		stage.setObject(5, 4, new Flower(false));
		stage.setObject(9, 4, new Bomb());
		stage.setObject(10, 4, new Bomb());
		stage.setObject(11, 4, new Bomb());
		stage.setObject(12, 4, new Bomb());
		stage.setObject(13, 4, new Mushroom(false));
		stage.setObject(15, 4, new Flower(false));

		//Row 5
		stage.setObject(1, 5, new Flower(false));
		stage.setObject(3, 5, new Flower(false));
		stage.setObject(6, 5, new Flower(false));
		stage.setObject(11, 5, new PFlower(true));
		stage.setObject(15, 5, undefined);

		//Row 6
		stage.setObject(3, 6, new Bomb());
		stage.setObject(5, 6, new Flower(false));
		stage.setObject(7, 6, new Wall(3));
		stage.setObject(12, 6, new Flower(false));
		stage.setObject(15, 6, new Flower(false));

		//Row 7
		stage.setObject(1, 7, new Flower(false));
		stage.setObject(5, 7, new Crystal());
		stage.setObject(8, 7, undefined);

		//Row 8
		stage.setObject(2, 8, new Flower(false));
		stage.setObject(4, 8, new Flower(false));
		stage.setObject(5, 8, new Wall(3));
		stage.setObject(6, 8, new Wall(3));
		stage.setObject(7, 8, new Wall(3));
		stage.setObject(8, 8, new Flower(false));
		stage.setObject(10, 8, new Flower(false));
		stage.setObject(12, 8, new Flower(false));
		stage.setObject(14, 8, new Flower(false));

		//Row 9
		stage.setObject(1, 9, new Flower(false));
		stage.setObject(3, 9, new Flower(false));
		stage.setObject(5, 9, new Wall(3));
		stage.setObject(6, 9, new PFlower(false));
		stage.setObject(15, 9, new Flower(false));

		//Row 10
		for (var i = 2; i <= 14; i++) {
			if (!(i % 2)) {
				stage.setObject(i, 10, new Flower(false));
			}
		}
	}),
	new Stage(function(stage){
		//Init player
		stage.player.push(new Player(stage, 1, 1));

		//Row 0
		stage.setObject(0, 0, new PFlower(false));
		stage.setObject(1, 0, new Apple());
		stage.setObject(2, 0, new PFlower(false));
		stage.setObject(3, 0, new PFlower(false));
		stage.setObject(4, 0, new Flower(false));
		stage.setObject(5, 0, new PFlower(false));
		stage.setObject(6, 0, new PFlower(false));
		stage.setObject(7, 0, new PFlower(false));
		stage.setObject(8, 0, new PFlower(false));
		stage.setObject(9, 0, new Flower(false));
		stage.setObject(10, 0, new PFlower(false));
		stage.setObject(11, 0, new Flower(false));
		stage.setObject(12, 0, new PFlower(false));
		stage.setObject(13, 0, new Flower(false));
		stage.setObject(14, 0, new PFlower(false));
		stage.setObject(15, 0, new PFlower(false));
		stage.setObject(16, 0, new Flower(false));

		//Row 1
		stage.setObject(0, 1, new Flower(false));
		stage.setObject(3, 1, new Flower(false));
		stage.setObject(6, 1, new Flower(false));
		stage.setObject(8, 1, new Flower(false));
		stage.setObject(10, 1, new Flower(false));
		stage.setObject(12, 1, new Flower(false));
		stage.setObject(13, 1, new PFlower(false));
		stage.setObject(14, 1, new Flower(false));
		stage.setObject(15, 1, new Flower(false));
		stage.setObject(16, 1, new PFlower(false));

		//Row 2
		stage.setObject(0, 2, new PFlower(false));
		stage.setObject(2, 2, new PFlower(false));
		stage.setObject(3, 2, new Flower(false));
		stage.setObject(4, 2, new PFlower(false));
		stage.setObject(5, 2, new PFlower(false));
		stage.setObject(6, 2, new Flower(false));
		stage.setObject(7, 2, new Flower(false));
		stage.setObject(8, 2, new PFlower(false));
		stage.setObject(10, 2, new PFlower(false));
		stage.setObject(11, 2, new Flower(false));
		stage.setObject(13, 2, new PFlower(false));
		stage.setObject(14, 2, new Flower(false));
		stage.setObject(16, 2, new PFlower(false));

		//Row 3
		stage.setObject(0, 3, new Flower(false));
		stage.setObject(2, 3, new Flower(false));
		stage.setObject(5, 3, new PFlower(false));
		stage.setObject(6, 3, new Flower(false));
		stage.setObject(8, 3, new PFlower(false));
		stage.setObject(9, 3, new Flower(false));
		stage.setObject(12, 3, new Flower(false));
		stage.setObject(13, 3, new Flower(false));
		stage.setObject(14, 3, new PFlower(false));
		stage.setObject(15, 3, new PFlower(false));
		stage.setObject(16, 3, new Flower(false));

		//Row 4
		stage.setObject(0, 4, new PFlower(false));
		stage.setObject(1, 4, new Flower(false));
		stage.setObject(2, 4, new PFlower(false));
		stage.setObject(3, 4, new Flower(false));
		stage.setObject(5, 4, new Flower(false));
		stage.setObject(7, 4, new Flower(false));
		stage.setObject(10, 4, new Flower(false));
		stage.setObject(11, 4, new Flower(false));
		stage.setObject(12, 4, new Flower(false));
		stage.setObject(13, 4, new Flower(false));
		stage.setObject(14, 4, new Flower(false));
		stage.setObject(15, 4, new Flower(false));
		stage.setObject(16, 4, new PFlower(false));

		//Row 5
		stage.setObject(0, 5, new PFlower(false));
		stage.setObject(2, 5, new Flower(false));
		stage.setObject(4, 5, new Flower(false));
		stage.setObject(5, 5, new PFlower(false));
		stage.setObject(6, 5, new Flower(false));
		stage.setObject(7, 5, new PFlower(false));
		stage.setObject(8, 5, new PFlower(false));
		stage.setObject(9, 5, new PFlower(true));
		stage.setObject(10, 5, new Flower(false));
		stage.setObject(11, 5, new PFlower(false));
		stage.setObject(12, 5, new PFlower(false));
		stage.setObject(13, 5, new Flower(false));
		stage.setObject(14, 5, new PFlower(false));
		stage.setObject(16, 5, new PFlower(false));

		//Row 6
		stage.setObject(0, 6, new PFlower(false));
		stage.setObject(1, 6, new Flower(false));
		stage.setObject(2, 6, new PFlower(false));
		stage.setObject(3, 6, new Flower(false));
		stage.setObject(5, 6, new Flower(false));
		stage.setObject(8, 6, new Flower(false));
		stage.setObject(10, 6, new Flower(false));
		stage.setObject(12, 6, new PFlower(false));
		stage.setObject(14, 6, new Flower(false));
		stage.setObject(15, 6, new Flower(false));
		stage.setObject(16, 6, new PFlower(false));

		//Row 7
		stage.setObject(0, 7, new Flower(false));
		stage.setObject(2, 7, new Flower(false));
		stage.setObject(4, 7, new PFlower(false));
		stage.setObject(5, 7, new PFlower(false));
		stage.setObject(6, 7, new Flower(false));
		stage.setObject(8, 7, new Flower(false));
		stage.setObject(9, 7, new Flower(false));
		stage.setObject(11, 7, new Flower(false));
		stage.setObject(12, 7, new Flower(false));
		stage.setObject(13, 7, new PFlower(false));
		stage.setObject(14, 7, new Flower(false));
		stage.setObject(16, 7, new Flower(false));

		//Row 8
		stage.setObject(0, 8, new PFlower(false));
		stage.setObject(1, 8, new Flower(false));
		stage.setObject(2, 8, new PFlower(false));
		stage.setObject(3, 8, new Flower(false));
		stage.setObject(4, 8, new Flower(false));
		stage.setObject(5, 8, new PFlower(false));
		stage.setObject(7, 8, new Flower(false));
		stage.setObject(8, 8, new Flower(false));
		stage.setObject(9, 8, new Flower(false));
		stage.setObject(11, 8, new Flower(false));
		stage.setObject(15, 8, new Flower(false));
		stage.setObject(16, 8, new PFlower(false));

		//Row 9
		stage.setObject(0, 9, new Flower(false));
		stage.setObject(1, 9, new Flower(false));
		stage.setObject(2, 9, new PFlower(false));
		stage.setObject(5, 9, new Flower(false));
		stage.setObject(6, 9, new Flower(false));
		stage.setObject(7, 9, new PFlower(false));
		stage.setObject(8, 9, new PFlower(false));
		stage.setObject(9, 9, new PFlower(false));
		stage.setObject(11, 9, new PFlower(false));
		stage.setObject(13, 9, new Mushroom(true));
		stage.setObject(14, 9, new Mushroom(true));
		stage.setObject(16, 9, new Flower(false));

		//Row 10
		stage.setObject(0, 10, new PFlower(false));
		stage.setObject(2, 10, new Flower(false));
		stage.setObject(4, 10, new Flower(false));
		stage.setObject(5, 10, new Flower(false));
		stage.setObject(7, 10, new Flower(false));
		stage.setObject(9, 10, new Flower(false));
		stage.setObject(10, 10, new Flower(false));
		stage.setObject(12, 10, new Mushroom(true));
		stage.setObject(13, 10, new Mushroom(false));
		stage.setObject(15, 10, new Flower(false));
		stage.setObject(16, 10, new PFlower(false));

		//Row 11
		stage.setObject(0, 11, new Flower(false));
		stage.setObject(1, 11, new Flower(false));
		stage.setObject(2, 11, new PFlower(false));
		stage.setObject(3, 11, new Flower(false));
		stage.setObject(4, 11, new PFlower(false));
		stage.setObject(5, 11, new Flower(false));
		stage.setObject(6, 11, new PFlower(false));
		stage.setObject(7, 11, new PFlower(false));
		stage.setObject(8, 11, new Flower(false));
		stage.setObject(9, 11, new PFlower(false));
		stage.setObject(10, 11, new Flower(false));
		stage.setObject(11, 11, new PFlower(false));
		stage.setObject(12, 11, new PFlower(true));
		stage.setObject(13, 11, new Flower(false));
		stage.setObject(14, 11, new PFlower(false));
		stage.setObject(15, 11, new Flower(false));
		stage.setObject(16, 11, new PFlower(false));
	}),
	new Stage(function(stage){
		//Init player
		stage.player.push(new Player(stage, 8, 5));

		//Border
		for (var i = 0; i < stage.cols; i++) {
			stage.setObject(i, 0, new Wall(1));
			stage.setObject(i, 11, new Wall(1));
		}
		for (var i = 0; i < stage.rows; i++) {
			stage.setObject(0, i, new Wall(1));
			stage.setObject(16, i, new Wall(1));
		}

		//Row 1
		stage.setObject(2, 1, new Flower(false));
		stage.setObject(4, 1, new Flower(false));
		stage.setObject(6, 1, new Flower(false));
		stage.setObject(7, 1, new Flower(false));
		stage.setObject(9, 1, new Flower(false));
		stage.setObject(13, 1, new Flower(false));
		stage.setObject(14, 1, new Flower(false));

		//Row 2
		stage.setObject(2, 2, new Mushroom(true));
		stage.setObject(3, 2, new Mushroom(true));
		stage.setObject(4, 2, new PFlower(false));
		stage.setObject(5, 2, new Mushroom(true));
		stage.setObject(6, 2, new Mushroom(true));
		stage.setObject(7, 2, new Flower(false));
		stage.setObject(8, 2, new Flower(false));
		stage.setObject(9, 2, new Mushroom(true));
		stage.setObject(10, 2, new Flower(false));
		stage.setObject(11, 2, new PFlower(false));
		stage.setObject(13, 2, new Mushroom(true));
		stage.setObject(14, 2, new PFlower(true));
		stage.setObject(15, 2, new Flower(false));

		//Row 3
		stage.setObject(1, 3, new Flower(false));
		stage.setObject(3, 3, new Flower(false));
		stage.setObject(5, 3, new Flower(false));
		stage.setObject(6, 3, new Mushroom(false));
		stage.setObject(7, 3, new Apple());
		stage.setObject(9, 3, new Mushroom(true));
		stage.setObject(10, 3, new Flower(false));
		stage.setObject(11, 3, new Flower(false));
		stage.setObject(12, 3, new Flower(false));
		stage.setObject(13, 3, new Mushroom(true));
		stage.setObject(14, 3, new Mushroom(true));

		//Row 4
		for (var i = 1; i <= 7; i++) {
			stage.setObject(i, 4, new Wall(1));
		}
		stage.setObject(6, 4, new Flower(false));
		stage.setObject(8, 4, new Flower(false));
		stage.setObject(9, 4, new PFlower(false));
		stage.setObject(11, 4, new Mushroom(true));
		stage.setObject(13, 4, new PFlower(true));
		stage.setObject(15, 4, new Flower(false));

		//Row 5
		stage.setObject(1, 5, new PFlower(true));
		stage.setObject(3, 5, new PFlower(false));
		stage.setObject(5, 5, new Wall(1));
		stage.setObject(7, 5, new Wall(1));
		stage.setObject(9, 5, new Mushroom(true));
		stage.setObject(10, 5, new Flower(false));
		stage.setObject(11, 5, new Bomb());

		//Row 6
		stage.setObject(5, 6, new Wall(1));
		stage.setObject(7, 6, new Wall(1));
		stage.setObject(9, 6, new Mushroom(true));
		stage.setObject(10, 6, new Flower(false));
		stage.setObject(11, 6, new Mushroom(true));
		stage.setObject(13, 6, new Apple());

		//Row 7
		stage.setObject(3, 7, new Apple());
		stage.setObject(4, 7, new Key());
		stage.setObject(5, 7, new Wall(1));
		stage.setObject(6, 7, new Door());
		stage.setObject(7, 7, new Wall(1));
		stage.setObject(8, 7, new Flower(false));
		stage.setObject(9, 7, new Mushroom(true));
		stage.setObject(10, 7, new Flower(false));
		stage.setObject(11, 7, new Mushroom(true));
		stage.setObject(12, 7, new Mushroom(true));
		stage.setObject(13, 7, new Mushroom(true));
		stage.setObject(14, 7, new Mushroom(true));
		stage.setObject(15, 7, new Flower(false));

		//Row 8
		stage.setObject(1, 8, new Apple());
		for (var i = 2; i <= 7; i++) {
			stage.setObject(i, 8, new Wall(1));
		}
		stage.setObject(6, 8, new Door());
		stage.setObject(9, 8, new Mushroom(true));
		stage.setObject(11, 8, new Apple());
		stage.setObject(13, 8, new Mushroom(true));

		//Row 9
		stage.setObject(1, 9, new Key());
		stage.setObject(2, 9, new Flower(false));
		stage.setObject(5, 9, new Flower(false));
		stage.setObject(8, 9, new Flower(false));
		stage.setObject(9, 9, new Mushroom(true));
		stage.setObject(10, 9, new PFlower(false));
		stage.setObject(12, 9, new Flower(false));
		stage.setObject(13, 9, new Mushroom(true));
		stage.setObject(14, 9, new Flower(false));
		stage.setObject(15, 9, new PFlower(false));

		//Row 10
		stage.setObject(1, 10, new PFlower(false));
		stage.setObject(2, 10, new Apple());
		stage.setObject(6, 10, new PFlower(false));
		stage.setObject(7, 10, new Apple());
		stage.setObject(9, 10, new Flower(false));
		stage.setObject(10, 10, new Flower(false));
		stage.setObject(12, 10, new Flower(false));
		stage.setObject(13, 10, new Apple());
		stage.setObject(14, 10, new Treasure());
	}),
	new Stage(function(stage){
		//Init player
		stage.player.push(new Player(stage, 2, 1));

		//Border
		for (var i = 0; i < stage.cols; i++) {
			stage.setObject(i, 0, new Wall(4));
			stage.setObject(i, 4, new Wall(4));
			stage.setObject(i, 11, new Wall(4));
		}
		for (var i = 0; i < stage.rows; i++) {
			stage.setObject(0, i, new Wall(4));
			stage.setObject(16, i, new Wall(4));
		}

		//Row 1
		stage.setObject(1, 1, new Flower(false));
		stage.setObject(4, 1, new Wall(4));
		stage.setObject(5, 1, new Mushroom(false));
		stage.setObject(7, 1, new Door());
		stage.setObject(8, 1, new Door());
		stage.setObject(9, 1, new Flower(false));
		stage.setObject(12, 1, new Flower(false));
		stage.setObject(13, 1, new Wall(4));
		stage.setObject(14, 1, new Treasure());

		//Row 2
		stage.setObject(3, 2, new Flower(false));
		for (var i = 4; i <= 8; i++) {
			stage.setObject(i, 2, new Wall(4));
		}
		stage.setObject(11, 2, new Wall(4));
		stage.setObject(13, 2, new Wall(4));
		stage.setObject(15, 2, new Flower(false));

		//Row 3
		stage.setObject(1, 3, new Flower(false));
		stage.setObject(2, 3, new Ball());
		stage.setObject(4, 3, new Wall(4));
		stage.setObject(5, 3, new Treasure());
		stage.setObject(6, 3, new Key());
		stage.setObject(9, 3, new Flower(false));
		stage.setObject(11, 3, new Wall(4));
		stage.setObject(13, 3, new Wall(4));
		stage.setObject(14, 3, new Wall(4));

		//Row 4
		stage.setObject(2, 4, undefined);
		stage.setObject(10, 4, new Door());
		stage.setObject(12, 4, undefined);
		stage.setObject(14, 4, new Key());
		stage.setObject(15, 4, new Flower(false));

		//Row 5
		stage.setObject(1, 5, new PFlower(false));
		stage.setObject(4, 5, new Apple());
		stage.setObject(6, 5, new Wall(4));
		stage.setObject(7, 5, new PFlower(true));
		stage.setObject(8, 5, new Wall(4));
		stage.setObject(9, 5, new PFlower(true));
		stage.setObject(11, 5, new PFlower(true));

		//Row 6
		stage.setObject(3, 6, new Ball());
		stage.setObject(8, 6, new Wall(4));
		stage.setObject(11, 6, new Wall(4));
		stage.setObject(12, 6, new Wall(4));
		stage.setObject(14, 6, new Flower(false));

		//Row 7
		stage.setObject(1, 7, new Apple());
		stage.setObject(3, 7, new Ball());
		stage.setObject(6, 7, new Wall(4));
		stage.setObject(8, 7, new Wall(4));
		stage.setObject(9, 7, new Apple());
		stage.setObject(11, 7, new Flower(false));
		stage.setObject(12, 7, new Wall(4));
		stage.setObject(13, 7, new Flower(false));
		stage.setObject(15, 7, new Treasure());

		//Row 8
		stage.setObject(3, 8, new Ball());
		stage.setObject(4, 8, new Ball());
		stage.setObject(5, 8, new Ball());
		stage.setObject(6, 8, new Wall(4));
		stage.setObject(7, 8, new Flower(false));
		stage.setObject(8, 8, new Wall(4));
		stage.setObject(11, 8, new Apple());
		stage.setObject(12, 8, new Wall(4));
		stage.setObject(13, 8, new Wall(4));
		stage.setObject(14, 8, new Wall(4));
		stage.setObject(15, 8, new Wall(4));

		//Row 9
		stage.setObject(1, 9, new Flower(false));
		stage.setObject(5, 9, new Flower(false));
		stage.setObject(6, 9, new Wall(4));
		stage.setObject(8, 9, new Wall(4));
		stage.setObject(9, 9, new Flower(false));
		stage.setObject(15, 9, new Flower(false));

		//Row 10
		stage.setObject(3, 10, new Flower(false));
		stage.setObject(6, 10, new Wall(4));
		stage.setObject(8, 10, new Flower(false));
		stage.setObject(12, 10, new Wall(4));
		stage.setObject(13, 10, new Flower(false));
		stage.setObject(15, 10, new Key());
	}),
	new Stage(function(stage) {
		//Init player
		stage.player.push(new Player(stage, 4, 1));

		//Border
		for (var i = 0; i < stage.cols; i++) {
			stage.setObject(i, 0, new Wall(0));
			stage.setObject(i, 3, new Wall(0));
			stage.setObject(i, 11, new Wall(0));
		}
		for (var i = 0; i < stage.rows; i++) {
			stage.setObject(0, i, new Wall(0));
			stage.setObject(16, i, new Wall(0));
		}

		//Row 1
		stage.setObject(1, 1, new Key());
		stage.setObject(5, 1, new Flower(false));
		stage.setObject(6, 1, new Apple());
		for (var i = 7; i <= 12; i++) {
			stage.setObject(i, 1, new Flower(false));
		}
		stage.setObject(13, 1, new Apple());
		stage.setObject(14, 1, new Apple());
		stage.setObject(15, 1, new PFlower(false));
		
		//Row 2
		stage.setObject(1, 2, new Flower(false));
		stage.setObject(2, 2, new PFlower(true));
		stage.setObject(3, 2, new PFlower(false));
		stage.setObject(4, 2, new Ball());
		for (var i = 5; i <= 12; i++) {
			stage.setObject(i, 2, new Flower(false));
		}

		//Row 3
		stage.setObject(1, 3, new Door());
		stage.setObject(4, 3, new PFlower(false));

		//Row 4
		stage.setObject(2, 4, new Wall(0));
		stage.setObject(3, 4, new Flower(false));
		stage.setObject(4, 4, new Flower(false));
		stage.setObject(5, 4, new Flower(false));
		stage.setObject(6, 4, new Flower(false));
		stage.setObject(7, 4, new Wall(0));
		stage.setObject(8, 4, new Key());
		stage.setObject(9, 4, new Flower(false));
		stage.setObject(10, 4, new Wall(0));
		stage.setObject(11, 4, new PFlower(true));
		stage.setObject(12, 4, new Flower(false));
		stage.setObject(13, 4, new Flower(false));
		stage.setObject(14, 4, new Flower(false));
		stage.setObject(15, 4, new Mushroom(false));

		//Row 5
		stage.setObject(2, 5, new Ball());
		stage.setObject(6, 5, new Flower(false));
		stage.setObject(7, 5, new Wall(0));
		stage.setObject(8, 5, new Flower(false));
		stage.setObject(9, 5, new Flower(false));
		stage.setObject(10, 5, new Wall(0));
		stage.setObject(12, 5, new Flower(false));
		stage.setObject(13, 5, new Wall(0));
		stage.setObject(14, 5, new Wall(0));
		stage.setObject(15, 5, new Wall(0));

		//Row 6
		stage.setObject(1, 6, new Wall(0));
		stage.setObject(2, 6, new Door());
		stage.setObject(3, 6, new Wall(0));
		stage.setObject(4, 6, new Wall(0));
		stage.setObject(6, 6, new Wall(0));
		stage.setObject(7, 6, new Wall(0));
		stage.setObject(8, 6, new Apple());
		stage.setObject(9, 6, new Flower(false));
		stage.setObject(10, 6, new Wall(0));
		stage.setObject(11, 6, new Flower(false));
		stage.setObject(12, 6, new Flower(false));
		stage.setObject(13, 6, new Flower(false));
		stage.setObject(14, 6, new Flower(false));
		stage.setObject(15, 6, new Flower(false));
		stage.setObject(16, 6, new PFlower(false));

		//Row 7
		stage.setObject(1, 7, new Key());
		stage.setObject(2, 7, new Flower(false));
		stage.setObject(3, 7, new Flower(false));
		stage.setObject(4, 7, new Wall(0));
		stage.setObject(5, 7, new Flower(false));
		stage.setObject(6, 7, new Flower(false));
		stage.setObject(7, 7, new Flower(false));
		stage.setObject(10, 7, new Wall(0));
		stage.setObject(11, 7, new Flower(false));
		stage.setObject(12, 7, new Flower(false));
		stage.setObject(13, 7, new Flower(false));
		stage.setObject(14, 7, new Apple());
		stage.setObject(15, 7, new Apple());

		//Row 8
		stage.setObject(1, 8, new Key());
		stage.setObject(2, 8, new Apple());
		stage.setObject(3, 8, new Flower(false));
		stage.setObject(4, 8, new Wall(0));
		stage.setObject(5, 8, new Flower(false));
		stage.setObject(6, 8, new PFlower(false));
		stage.setObject(9, 8, new Flower(false));
		stage.setObject(10, 8, new Wall(0));
		stage.setObject(11, 8, new Wall(0));
		stage.setObject(12, 8, new Wall(0));
		stage.setObject(13, 8, new Flower(false));

		//Row 9
		stage.setObject(1, 9, new Flower(false));
		stage.setObject(2, 9, new Flower(false));
		stage.setObject(3, 9, new Flower(false));
		for (var i = 4; i <= 10; i++) {
			stage.setObject(i, 9, new Wall(0));
		}
		stage.setObject(11, 9, new PFlower(false));
		stage.setObject(12, 9, new PFlower(false));
		stage.setObject(13, 9, new Flower(false));
		stage.setObject(14, 9, new Flower(false));
		stage.setObject(15, 9, new PFlower(false));

		//Row 10
		for (var i = 1; i <= 8; i++) {
			stage.setObject(i, 10, new Flower(false));
		}
		stage.setObject(9, 10, new Door());
		stage.setObject(10, 10, new Door());
		stage.setObject(13, 10, new Apple());
		stage.setObject(15, 10, new PFlower(true));
	}),
	new Stage(function(stage){
		//Border
		for (var i = 0; i < stage.cols; i++) {
			stage.setObject(i, 2, new Ball());
			stage.setObject(i, 3, new Ball());
			stage.setObject(i, 11, new Ball());
		}
		for (var i = 4; i < stage.rows - 1; i++) {
			stage.setObject(0, i, new Ball());
			stage.setObject(1, i, new Ball());
			stage.setObject(9, i, new Ball());
			stage.setObject(10, i, new Ball());
		}

		//Row 0
		stage.setObject(0, 0, new Key());
		stage.setObject(5, 0, new Flower(false));
		stage.setObject(6, 0, new Flower(false));
		stage.setObject(7, 0, new Flower(false));
		stage.setObject(8, 0, new Flower(false));
		stage.setObject(9, 0, new Flower(false));
		stage.setObject(10, 0, new Flower(false));
		stage.setObject(11, 0, new Flower(false));
		stage.setObject(16, 0, new Key());

		//Row 1
		stage.setObject(1, 1, new PFlower(true));
		stage.setObject(2, 1, new PFlower(true));
		stage.setObject(13, 1, new PFlower(true));
		stage.setObject(14, 1, new PFlower(true));

		//Row 2, 3
		stage.setObject(4, 2, undefined);
		stage.setObject(4, 3, new Apple());

		//Row 4
		stage.setObject(3, 4, new Apple());
		stage.setObject(5, 4, new Apple());
		stage.setObject(12, 4, new Apple());

		//Row 5
		stage.setObject(7, 5, new Flower(false));
		stage.setObject(14, 5, new PFlower(true));
		stage.setObject(16, 5, new PFlower(true));

		//Row 6
		stage.setObject(12, 6, new Apple());
		stage.setObject(14, 6, new Wall(7));
		stage.setObject(15, 6, new Door());
		stage.setObject(16, 6, new Wall(7));

		//Row 7
		stage.setObject(3, 7, new Ball());
		stage.setObject(4, 7, new Ball());
		stage.setObject(5, 7, new Ball());
		stage.setObject(6, 7, new Ball());
		stage.setObject(9, 7, undefined);
		stage.setObject(10, 7, new Apple());
		stage.setObject(14, 7, new Wall(7));
		stage.setObject(15, 7, new Door());
		stage.setObject(16, 7, new Wall(7));

		//Row 8
		stage.setObject(4, 8, new Apple());
		stage.setObject(6, 8, new Ball());
		stage.setObject(7, 8, new Apple());
		stage.setObject(12, 8, new Apple());
		stage.setObject(14, 8, new Ball());
		stage.setObject(15, 8, new Treasure());
		stage.setObject(16, 8, new Ball());

		//Row 9
		stage.setObject(3, 9, new Ball());
		stage.setObject(4, 9, new Ball());
		stage.setObject(6, 9, new Ball());
		stage.setObject(12, 9, new Flower(false));
		stage.setObject(14, 9, new Ball());
		stage.setObject(15, 9, new Treasure());
		stage.setObject(16, 9, new Ball());

		//Row 10
		stage.setObject(1, 10, new PFlower(true));
		stage.setObject(6, 10, new Ball());
		stage.setObject(14, 10, new Ball());
		stage.setObject(15, 10, new Mushroom(false));
		stage.setObject(16, 10, new Ball());

		//Init player
		stage.player.push(new Player(stage, 4, 2));
	}),
	new Stage(function(stage){
		//Border
		for (var i = 0; i < stage.cols; i++) {
			stage.setObject(i, 0, new Wall(2));
			stage.setObject(i, 4, new Wall(2));
			stage.setObject(i, 11, new Wall(2));
		}
		for (var i = 0; i < stage.rows; i++) {
			stage.setObject(0, i, new Wall(2));
			stage.setObject(16, i, new Wall(2));
		}

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
		for (var y = 1; y <= 3; y++) {
			for (var x = 1; x <= 15; x++) {
				if(2==y && 6==x){
					continue;
				}
				var i = Math.floor(Math.random() * candidate.length);
				stage.setObject(x, y,
					new candidate[i].object(candidate[i].param));
			}
		}
		//Close Purple flowers near an apple
		for (var y = 1; y <= 3; y++) {
			for (var x = 1; x <= 15; x++) {
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
		//Place laser gun
		stage.setObject(7, 1, new LaserGun());
		stage.setObject(9, 3, new LaserGun());

		//Init player
		stage.player.push(new Player(stage, 1, 10));

		//Init Daemon
		stage.demon.push(new Demon(stage, 6, 1, DIR_EAST));


		//Row 5
		stage.setObject(1, 5, new PFlower(true));
		stage.setObject(5, 5, new Wall(2));
		stage.setObject(6, 5, new Mushroom(true));
		stage.setObject(7, 5, new Mushroom(true));
		stage.setObject(8, 5, new Key());
		stage.setObject(9, 5, new Mushroom(true));
		stage.setObject(12, 5, new Flower());

		//Row 6
		stage.setObject(2, 6, new Flower());
		stage.setObject(3, 6, new Apple());
		stage.setObject(4, 6, new Key());
		stage.setObject(5, 6, new Wall(2));
		stage.setObject(7, 6, new Mushroom(true));
		stage.setObject(8, 6, new Mushroom(true));
		stage.setObject(9, 6, new Mushroom(true));
		stage.setObject(10, 6, new Wall(0));
		stage.setObject(11, 6, new Door());
		stage.setObject(12, 6, new Wall(0));
		stage.setObject(13, 6, new Wall(0));
		stage.setObject(14, 6, new PFlower(false));

		//Row 7
		stage.setObject(1, 7, new Wall(2));
		stage.setObject(2, 7, new Crystal());
		stage.setObject(3, 7, new Wall(2));
		stage.setObject(4, 7, new Wall(2));
		stage.setObject(5, 7, new Wall(2));
		stage.setObject(6, 7, new Bomb());
		stage.setObject(10, 7, new Wall(0));
		stage.setObject(11, 7, new Treasure());
		stage.setObject(12, 7, new Mushroom(false));
		stage.setObject(13, 7, new Wall(0));

		//Row 8
		stage.setObject(3, 8, new Apple());
		stage.setObject(5, 8, new Door());
		stage.setObject(6, 8, new Flower(false));
		stage.setObject(10, 8, new Wall(0));
		stage.setObject(11, 8, new Treasure());
		stage.setObject(12, 8, new Treasure());
		stage.setObject(13, 8, new Wall(0));
		stage.setObject(14, 8, new Flower(false));
		stage.setObject(15, 8, new Apple());

		//Row 9
		stage.setObject(2, 9, new Crystal());
		stage.setObject(5, 9, new Wall(2));
		stage.setObject(6, 9, new Bomb());
		stage.setObject(8, 9, new Flower(false));
		stage.setObject(9, 9, new PFlower(true));
		stage.setObject(10, 9, new Wall(0));
		stage.setObject(11, 9, new Wall(0));
		stage.setObject(12, 9, new Wall(0));
		stage.setObject(13, 9, new Wall(0));
		stage.setObject(14, 9, new Crystal());
		stage.setObject(15, 9, new Flower(false));

		//Row 10
		stage.setObject(2, 10, new Apple());
		stage.setObject(4, 10, new PFlower(true));
		stage.setObject(5, 10, new Wall(2));
		stage.setObject(6, 10, new Flower(false));
		stage.setObject(8, 10, new Crystal());
		stage.setObject(15, 10, new Crystal());
	}),
];

document.title='Zeek 1';
new Game('zeek1', levelData);
