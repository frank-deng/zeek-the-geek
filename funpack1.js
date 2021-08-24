levelData = [
	/* Level 1 */
	new Stage(function(stage){
		//Row 0
		stage.setObject(0, 0, new Wall(1));
		stage.setObject(1, 0, new Wall(1));
		stage.setObject(2, 0, new Wall(1));
		stage.setObject(3, 0, new Wall(1));
		stage.setObject(4, 0, new Wall(1));
		stage.setObject(5, 0, new Wall(1));
		stage.setObject(6, 0, new Wall(1));
		stage.setObject(7, 0, new Wall(1));
		stage.setObject(8, 0, new Wall(1));
		stage.setObject(9, 0, new Wall(1));
		stage.setObject(10, 0, new Wall(1));
		stage.setObject(11, 0, new Wall(1));
		stage.setObject(12, 0, new Wall(1));
		stage.setObject(13, 0, new Wall(1));
		stage.setObject(14, 0, new Wall(1));
		stage.setObject(15, 0, new Wall(1));
		stage.setObject(16, 0, new Wall(1));

		//Row 1
		stage.setObject(0, 1, new Wall(1));
		stage.setObject(1, 1, new Flower(false));
		stage.setObject(3, 1, new Flower(false));
		stage.setObject(6, 1, new PFlower(false));
		stage.setObject(7, 1, new AppleRotten());
		stage.setObject(8, 1, new Crystal());
		stage.demon.push(new Demon(stage, 9, 1, DIR_EAST));
		stage.setObject(12, 1, new PFlower(true));
		stage.setObject(15, 1, new Mushroom(true));
		stage.setObject(16, 1, new Wall(1));

		//Row 2
		stage.setObject(0, 2, new Wall(1));
		stage.setObject(1, 2, new Flower(false));
		stage.setObject(2, 2, new PFlower(true));
		stage.setObject(4, 2, new Flower(false));
		stage.setObject(5, 2, new Flower(false));
		stage.setObject(7, 2, new Crystal());
		stage.setObject(8, 2, new PFlower(true));
		stage.setObject(9, 2, new Flower(false));
		stage.setObject(11, 2, new Flower(false));
		stage.setObject(14, 2, new Flower(false));
		stage.setObject(16, 2, new Wall(1));

		//Row 3
		stage.setObject(0, 3, new Wall(1));
		stage.setObject(1, 3, new Wall(1));
		stage.setObject(2, 3, new Wall(1));
		stage.setObject(3, 3, new Door());
		stage.setObject(4, 3, new Wall(1));
		stage.setObject(5, 3, new Wall(1));
		stage.setObject(6, 3, new Wall(1));
		stage.setObject(7, 3, new Wall(1));
		stage.setObject(8, 3, new Crystal());
		stage.setObject(9, 3, new Wall(1));
		stage.setObject(10, 3, new Wall(1));
		stage.setObject(11, 3, new Wall(1));
		stage.setObject(12, 3, new Wall(1));
		stage.setObject(13, 3, new Wall(1));
		stage.setObject(14, 3, new Wall(1));
		stage.setObject(15, 3, new Wall(1));
		stage.setObject(16, 3, new Wall(1));

		//Row 4
		stage.setObject(0, 4, new Wall(1));
		stage.setObject(1, 4, new AppleRotten());
		stage.setObject(2, 4, new PFlower(false));
		stage.setObject(4, 4, new Flower(false));
		stage.setObject(5, 4, new Flower(false));
		stage.setObject(8, 4, new AppleRotten());
		stage.setObject(9, 4, new AppleRotten());
		stage.setObject(10, 4, new Flower(false));
		stage.setObject(11, 4, new Flower(false));
		stage.setObject(13, 4, new PFlower(false));
		stage.setObject(14, 4, new Apple());
		stage.setObject(15, 4, new Egg());
		stage.setObject(16, 4, new Wall(1));

		//Row 5
		stage.setObject(0, 5, new Wall(1));
		stage.setObject(1, 5, new AppleRotten());
		stage.setObject(2, 5, new PFlower(false));
		stage.setObject(3, 5, new Flower(false));
		stage.setObject(5, 5, new Flower(false));
		stage.setObject(6, 5, new Flower(false));
		stage.player.push(new Player(stage, 8, 5));
		stage.setObject(10, 5, new Flower(false));
		stage.setObject(12, 5, new Flower(false));
		stage.setObject(13, 5, new Flower(false));
		stage.setObject(15, 5, new Key());
		stage.setObject(16, 5, new Wall(1));

		//Row 6
		stage.setObject(0, 6, new Wall(0));
		stage.setObject(1, 6, new Wall(0));
		stage.setObject(2, 6, new Wall(0));
		stage.setObject(3, 6, new Wall(0));
		stage.setObject(4, 6, new Wall(0));
		stage.setObject(5, 6, new Wall(0));
		stage.setObject(6, 6, new Flower(false));
		stage.setObject(7, 6, new Wall(0));
		stage.setObject(8, 6, new Flower(false));
		stage.setObject(9, 6, new Wall(2));
		stage.setObject(10, 6, new Wall(2));
		stage.setObject(11, 6, new Flower(true));
		stage.setObject(12, 6, new Wall(2));
		stage.setObject(13, 6, new Wall(2));
		stage.setObject(14, 6, new Wall(2));
		stage.setObject(15, 6, new Wall(2));
		stage.setObject(16, 6, new Wall(2));

		//Row 7
		stage.setObject(0, 7, new Wall(0));
		stage.setObject(1, 7, new Flower(false));
		stage.setObject(2, 7, new Flower(false));
		stage.setObject(3, 7, new Flower(false));
		stage.setObject(4, 7, new AppleRotten());
		stage.setObject(7, 7, new Wall(0));
		stage.setObject(9, 7, new PFlower(true));
		stage.setObject(10, 7, new Wall(2));
		stage.setObject(11, 7, new Flower(true));
		stage.setObject(13, 7, new Flower(true));
		stage.setObject(14, 7, new Flower(true));
		stage.setObject(15, 7, new Flower(true));
		stage.setObject(16, 7, new Wall(2));

		//Row 8
		stage.setObject(0, 8, new Wall(0));
		stage.setObject(2, 8, new AppleRotten());
		stage.setObject(3, 8, new AppleRotten());
		stage.setObject(5, 8, new AppleRotten());
		stage.setObject(6, 8, new Flower(false));
		stage.setObject(7, 8, new Wall(0));
		stage.setObject(8, 8, new Treasure());
		stage.setObject(9, 8, new Treasure());
		stage.setObject(10, 8, new Wall(2));
		stage.setObject(11, 8, new PFlower(false));
		stage.setObject(12, 8, new PFlower(false));
		stage.setObject(13, 8, new PFlower(false));
		stage.setObject(14, 8, new PFlower(false));
		stage.setObject(15, 8, new Flower(true));
		stage.setObject(16, 8, new Wall(2));

		//Row 9
		stage.setObject(0, 9, new Wall(0));
		stage.setObject(1, 9, new Flower(false));
		stage.setObject(2, 9, new PFlower(false));
		stage.setObject(3, 9, new PFlower(false));
		stage.setObject(4, 9, new PFlower(false));
		stage.setObject(5, 9, new PFlower(false));
		stage.setObject(7, 9, new Wall(0));
		stage.setObject(8, 9, new Treasure());
		stage.setObject(9, 9, new Treasure());
		stage.setObject(10, 9, new Wall(2));
		stage.setObject(11, 9, new AppleRotten());
		stage.setObject(12, 9, new AppleRotten());
		stage.setObject(13, 9, new AppleRotten());
		stage.setObject(14, 9, new AppleRotten());
		stage.setObject(16, 9, new Wall(2));

		//Row 10
		stage.setObject(0, 10, new Wall(0));
		stage.setObject(1, 10, new Flower(false));
		stage.setObject(2, 10, new Flower(false));
		stage.setObject(3, 10, new Flower(false));
		stage.setObject(5, 10, new Flower(false));
		stage.setObject(6, 10, new Flower(false));
		stage.setObject(7, 10, new Wall(0));
		stage.setObject(8, 10, new Treasure());
		stage.setObject(9, 10, new Treasure());
		stage.setObject(10, 10, new Wall(2));
		stage.setObject(11, 10, new Mushroom(false));
		stage.setObject(12, 10, new AppleRotten());
		stage.setObject(13, 10, new PFlower(false));
		stage.setObject(14, 10, new PFlower(false));
		stage.setObject(15, 10, new AppleRotten());
		stage.setObject(16, 10, new Wall(2));

		//Row 11
		stage.setObject(0, 11, new Wall(0));
		stage.setObject(1, 11, new Wall(0));
		stage.setObject(2, 11, new Wall(0));
		stage.setObject(3, 11, new Wall(0));
		stage.setObject(4, 11, new Wall(0));
		stage.setObject(5, 11, new Wall(0));
		stage.setObject(6, 11, new Wall(0));
		stage.setObject(7, 11, new Wall(0));
		stage.setObject(8, 11, new Wall(1));
		stage.setObject(9, 11, new Wall(2));
		stage.setObject(10, 11, new Wall(2));
		stage.setObject(11, 11, new Wall(2));
		stage.setObject(12, 11, new Wall(2));
		stage.setObject(13, 11, new Wall(2));
		stage.setObject(14, 11, new Wall(2));
		stage.setObject(15, 11, new Wall(2));
		stage.setObject(16, 11, new Wall(2));

	}),
	/* Level 2 */
	new Stage(function(stage){
		//Row 0
		stage.setObject(0, 0, new Wall(6));
		stage.setObject(1, 0, new Wall(6));
		stage.setObject(2, 0, new Wall(6));
		stage.setObject(3, 0, new Wall(6));
		stage.setObject(4, 0, new Wall(6));
		stage.setObject(5, 0, new Wall(6));
		stage.setObject(6, 0, new Wall(6));
		stage.setObject(7, 0, new Wall(6));
		stage.setObject(8, 0, new Wall(6));
		stage.setObject(9, 0, new Wall(6));
		stage.setObject(10, 0, new Wall(6));
		stage.setObject(11, 0, new Wall(6));
		stage.setObject(12, 0, new Wall(6));
		stage.setObject(13, 0, new Wall(6));
		stage.setObject(14, 0, new Wall(6));
		stage.setObject(15, 0, new Wall(6));
		stage.setObject(16, 0, new Wall(6));

		//Row 1
		stage.setObject(0, 1, new Wall(6));
		stage.setObject(1, 1, new PFlower(false));
		stage.setObject(2, 1, new Key());
		stage.setObject(3, 1, new PFlower(false));
		stage.setObject(4, 1, new Wall(6));
		stage.setObject(5, 1, new LaserGun());
		stage.setObject(6, 1, new Wall(6));
		stage.setObject(7, 1, new Wall(6));
		stage.setObject(8, 1, new Wall(6));
		stage.setObject(10, 1, new Treasure());
		stage.setObject(11, 1, new Treasure());
		stage.setObject(12, 1, new Treasure());
		stage.setObject(13, 1, new Wall(6));
		stage.setObject(14, 1, new Treasure());
		stage.setObject(15, 1, new Treasure());
		stage.setObject(16, 1, new Wall(6));

		//Row 2
		stage.setObject(0, 2, new Wall(6));
		stage.setObject(1, 2, new Wall(6));
		stage.setObject(2, 2, new Flower(false));
		stage.setObject(3, 2, new Wall(6));
		stage.setObject(4, 2, new Wall(6));
		stage.setObject(5, 2, new PFlower(false));
		stage.setObject(6, 2, new AppleRotten());
		stage.demon.push(new Demon(stage, 7, 2, DIR_EAST));
		stage.setObject(8, 2, new Wall(6));
		stage.setObject(9, 2, new Flower(false));
		stage.setObject(10, 2, new Treasure());
		stage.setObject(11, 2, new Treasure());
		stage.setObject(12, 2, new Treasure());
		stage.setObject(13, 2, new Wall(6));
		stage.setObject(14, 2, new Treasure());
		stage.setObject(15, 2, new AppleRotten());
		stage.setObject(16, 2, new Wall(6));

		//Row 3
		stage.setObject(0, 3, new Wall(6));
		stage.setObject(1, 3, new PFlower(true));
		stage.setObject(6, 3, new Wall(6));
		stage.setObject(7, 3, new Wall(6));
		stage.setObject(8, 3, new Wall(6));
		stage.setObject(9, 3, new Flower(false));
		stage.setObject(10, 3, new Wall(6));
		stage.setObject(11, 3, new Wall(6));
		stage.setObject(12, 3, new Wall(6));
		stage.setObject(13, 3, new Wall(6));
		stage.setObject(14, 3, new Flower(false));
		stage.setObject(15, 3, new PFlower(false));
		stage.setObject(16, 3, new Wall(6));

		//Row 4
		stage.setObject(0, 4, new Wall(6));
		stage.setObject(1, 4, new Wall(6));
		stage.setObject(2, 4, new AppleRotten());
		stage.setObject(3, 4, new Wall(6));
		stage.setObject(4, 4, new Wall(6));
		stage.setObject(5, 4, new Flower(false));
		stage.setObject(6, 4, new Wall(6));
		stage.setObject(8, 4, new Flower(false));
		stage.setObject(9, 4, new Flower(false));
		stage.setObject(10, 4, new Wall(6));
		stage.setObject(11, 4, new Mushroom(false));
		stage.setObject(12, 4, new Door());
		stage.setObject(13, 4, new Flower(false));
		stage.setObject(14, 4, new Flower(false));
		stage.setObject(15, 4, new PFlower(false));
		stage.setObject(16, 4, new Wall(6));

		//Row 5
		stage.setObject(0, 5, new Wall(6));
		stage.setObject(1, 5, new PFlower(false));
		stage.setObject(2, 5, new Flower(false));
		stage.setObject(3, 5, new PFlower(false));
		stage.setObject(4, 5, new Wall(6));
		stage.setObject(5, 5, new Flower(false));
		stage.setObject(6, 5, new Flower(false));
		stage.setObject(7, 5, new Flower(false));
		stage.setObject(8, 5, new Wall(6));
		stage.setObject(9, 5, new PFlower(true));
		stage.setObject(10, 5, new Wall(6));
		stage.setObject(11, 5, new Wall(6));
		stage.setObject(12, 5, new Wall(6));
		stage.setObject(13, 5, new PFlower(false));
		stage.setObject(14, 5, new AppleRotten());
		stage.setObject(15, 5, new AppleRotten());
		stage.setObject(16, 5, new Wall(6));

		//Row 6
		stage.setObject(0, 6, new Wall(6));
		stage.setObject(1, 6, new Wall(6));
		stage.setObject(2, 6, new Flower(false));
		stage.setObject(3, 6, new Wall(6));
		stage.setObject(4, 6, new Wall(6));
		stage.setObject(6, 6, new Wall(6));
		stage.setObject(7, 6, new Wall(6));
		stage.setObject(8, 6, new Wall(6));
		stage.setObject(10, 6, new Wall(6));
		stage.setObject(11, 6, new AppleRotten());
		stage.setObject(12, 6, new AppleRotten());
		stage.setObject(13, 6, new Flower(false));
		stage.setObject(14, 6, new Flower(false));
		stage.setObject(15, 6, new AppleRotten());
		stage.setObject(16, 6, new Wall(6));

		//Row 7
		stage.setObject(0, 7, new Wall(6));
		stage.setObject(1, 7, new PFlower(false));
		stage.setObject(2, 7, new Flower(false));
		stage.setObject(3, 7, new PFlower(false));
		stage.setObject(4, 7, new Wall(6));
		stage.setObject(5, 7, new Flower(false));
		stage.setObject(6, 7, new Door());
		stage.setObject(7, 7, new Flower(false));
		stage.setObject(8, 7, new Flower(false));
		stage.setObject(9, 7, new AppleRotten());
		stage.setObject(10, 7, new Wall(6));
		stage.setObject(11, 7, new PFlower(false));
		stage.setObject(12, 7, new PFlower(false));
		stage.setObject(13, 7, new PFlower(false));
		stage.setObject(14, 7, new AppleRotten());
		stage.setObject(15, 7, new PFlower(false));
		stage.setObject(16, 7, new Wall(6));

		//Row 8
		stage.setObject(0, 8, new Wall(6));
		stage.setObject(1, 8, new Wall(6));
		stage.setObject(2, 8, new Flower(false));
		stage.setObject(3, 8, new Wall(6));
		stage.setObject(4, 8, new Wall(6));
		stage.setObject(6, 8, new Wall(6));
		stage.setObject(8, 8, new Flower(false));
		stage.setObject(9, 8, new Flower(false));
		stage.setObject(16, 8, new Wall(6));

		//Row 9
		stage.setObject(0, 9, new Wall(6));
		stage.setObject(1, 9, new PFlower(false));
		stage.setObject(2, 9, new Flower(false));
		stage.setObject(3, 9, new PFlower(false));
		stage.setObject(4, 9, new Wall(6));
		stage.setObject(5, 9, new AppleRotten());
		stage.setObject(6, 9, new Ball());
		stage.setObject(7, 9, new Flower(false));
		stage.setObject(8, 9, new Flower(false));
		stage.setObject(9, 9, new AppleRotten());
		stage.setObject(10, 9, new Wall(6));
		stage.setObject(11, 9, new PFlower(false));
		stage.setObject(12, 9, new PFlower(false));
		stage.setObject(13, 9, new PFlower(false));
		stage.setObject(14, 9, new Flower(false));
		stage.setObject(15, 9, new PFlower(true));
		stage.setObject(16, 9, new Wall(6));

		//Row 10
		stage.setObject(0, 10, new Wall(6));
		stage.setObject(1, 10, new Wall(6));
		stage.player.push(new Player(stage, 2, 10));
		stage.setObject(3, 10, new Wall(6));
		stage.setObject(4, 10, new Wall(6));
		stage.setObject(5, 10, new LaserGun());
		stage.setObject(6, 10, new Wall(6));
		stage.setObject(7, 10, new Flower(false));
		stage.setObject(9, 10, new Flower(false));
		stage.setObject(10, 10, new Wall(6));
		stage.setObject(11, 10, new AppleRotten());
		stage.setObject(12, 10, new AppleRotten());
		stage.setObject(13, 10, new AppleRotten());
		stage.setObject(14, 10, new Flower(false));
		stage.setObject(15, 10, new Key());
		stage.setObject(16, 10, new Wall(6));

		//Row 11
		stage.setObject(0, 11, new Wall(6));
		stage.setObject(1, 11, new Wall(6));
		stage.setObject(2, 11, new Wall(6));
		stage.setObject(3, 11, new Wall(6));
		stage.setObject(4, 11, new Wall(6));
		stage.setObject(5, 11, new Wall(6));
		stage.setObject(6, 11, new Wall(6));
		stage.setObject(7, 11, new Wall(6));
		stage.setObject(8, 11, new Wall(6));
		stage.setObject(9, 11, new Wall(6));
		stage.setObject(10, 11, new Wall(6));
		stage.setObject(11, 11, new Wall(6));
		stage.setObject(12, 11, new Wall(6));
		stage.setObject(13, 11, new Wall(6));
		stage.setObject(14, 11, new Wall(6));
		stage.setObject(15, 11, new Wall(6));
		stage.setObject(16, 11, new Wall(6));

	}),
	/* Level 3 */
	new Stage(function(stage){
		//Row 0
		stage.setObject(0, 0, new Wall(9));
		stage.setObject(1, 0, new Wall(9));
		stage.setObject(2, 0, new Wall(9));
		stage.setObject(3, 0, new Wall(9));
		stage.setObject(4, 0, new Wall(9));
		stage.setObject(5, 0, new Wall(9));
		stage.setObject(6, 0, new Wall(9));
		stage.setObject(7, 0, new Wall(9));
		stage.setObject(8, 0, new Wall(9));
		stage.setObject(9, 0, new Wall(9));
		stage.setObject(10, 0, new Wall(9));
		stage.setObject(11, 0, new Wall(9));
		stage.setObject(12, 0, new Wall(9));
		stage.setObject(13, 0, new Wall(9));
		stage.setObject(14, 0, new Wall(9));
		stage.setObject(15, 0, new Wall(9));
		stage.setObject(16, 0, new Wall(9));

		//Row 1
		stage.setObject(0, 1, new Wall(9));
		stage.setObject(1, 1, new Treasure());
		stage.setObject(2, 1, new Treasure());
		stage.setObject(4, 1, new Flower(false));
		stage.setObject(6, 1, new Door());
		stage.setObject(7, 1, new Flower(false));
		stage.setObject(8, 1, new Flower(false));
		stage.setObject(10, 1, new Wall(9));
		stage.setObject(11, 1, new PFlower(true));
		stage.setObject(12, 1, new Mushroom(true));
		stage.setObject(13, 1, new PFlower(false));
		stage.setObject(14, 1, new AppleRotten());
		stage.setObject(15, 1, new Mushroom(false));
		stage.setObject(16, 1, new Wall(9));

		//Row 2
		stage.setObject(0, 2, new Wall(9));
		stage.setObject(1, 2, new Treasure());
		stage.setObject(2, 2, new Treasure());
		stage.setObject(3, 2, new Flower(false));
		stage.setObject(5, 2, new PFlower(true));
		stage.setObject(6, 2, new Wall(9));
		stage.setObject(8, 2, new AppleRotten());
		stage.setObject(9, 2, new Flower(false));
		stage.setObject(10, 2, new Door());
		stage.setObject(12, 2, new Flower(false));
		stage.setObject(14, 2, new Flower(false));
		stage.setObject(15, 2, new Flower(false));
		stage.setObject(16, 2, new Wall(9));

		//Row 3
		stage.setObject(0, 3, new Wall(9));
		stage.setObject(1, 3, new Wall(9));
		stage.setObject(2, 3, new Wall(9));
		stage.setObject(3, 3, new Wall(9));
		stage.setObject(4, 3, new Wall(9));
		stage.setObject(5, 3, new Wall(9));
		stage.setObject(6, 3, new Wall(9));
		stage.setObject(7, 3, new Door());
		stage.setObject(8, 3, new Wall(9));
		stage.setObject(9, 3, new Wall(9));
		stage.setObject(10, 3, new Wall(9));
		stage.setObject(11, 3, new Wall(9));
		stage.setObject(12, 3, new Wall(9));
		stage.setObject(13, 3, new Wall(9));
		stage.setObject(14, 3, new Wall(9));
		stage.setObject(15, 3, new Wall(9));
		stage.setObject(16, 3, new Wall(9));

		//Row 4
		stage.setObject(0, 4, new Wall(9));
		stage.demon.push(new Demon(stage, 1, 4, DIR_EAST));
		stage.setObject(4, 4, new PFlower(true));
		stage.setObject(5, 4, new Flower(false));
		stage.setObject(8, 4, new Flower(false));
		stage.setObject(10, 4, new Flower(false));
		stage.setObject(11, 4, new PFlower(true));
		stage.setObject(12, 4, new Flower(false));
		stage.setObject(14, 4, new Mushroom(true));
		stage.demon.push(new Demon(stage, 15, 4, DIR_EAST));
		stage.setObject(16, 4, new Wall(9));

		//Row 5
		stage.setObject(0, 5, new Wall(9));
		stage.setObject(1, 5, new Wall(9));
		stage.setObject(2, 5, new Wall(9));
		stage.setObject(3, 5, new Flower(false));
		stage.setObject(6, 5, new Flower(false));
		stage.player.push(new Player(stage, 8, 5));
		stage.setObject(10, 5, new Flower(false));
		stage.setObject(13, 5, new Flower(false));
		stage.setObject(14, 5, new Apple());
		stage.setObject(15, 5, new Wall(9));
		stage.setObject(16, 5, new Wall(9));

		//Row 6
		stage.setObject(0, 6, new Wall(9));
		stage.setObject(1, 6, new Key());
		stage.setObject(3, 6, new AppleRotten());
		stage.setObject(5, 6, new Flower(false));
		stage.setObject(6, 6, new PFlower(true));
		stage.setObject(7, 6, new Flower(false));
		stage.setObject(9, 6, new AppleRotten());
		stage.setObject(11, 6, new PFlower(true));
		stage.setObject(14, 6, new PFlower(false));
		stage.demon.push(new Demon(stage, 15, 6, DIR_EAST));
		stage.setObject(16, 6, new Wall(9));

		//Row 7
		stage.setObject(0, 7, new Wall(9));
		stage.setObject(1, 7, new Wall(9));
		stage.setObject(2, 7, new Wall(9));
		stage.setObject(3, 7, new Flower(false));
		stage.setObject(4, 7, new Flower(false));
		stage.setObject(7, 7, new Flower(false));
		stage.setObject(10, 7, new Flower(false));
		stage.setObject(12, 7, new Flower(false));
		stage.setObject(13, 7, new Mushroom(true));
		stage.setObject(14, 7, new Flower(true));
		stage.setObject(15, 7, new Wall(9));
		stage.setObject(16, 7, new Wall(9));

		//Row 8
		stage.setObject(0, 8, new Wall(9));
		stage.setObject(1, 8, new Key());
		stage.setObject(2, 8, new Flower(false));
		stage.setObject(5, 8, new AppleRotten());
		stage.setObject(8, 8, new PFlower(true));
		stage.setObject(9, 8, new Flower(false));
		stage.setObject(11, 8, new Flower(false));
		stage.setObject(12, 8, new PFlower(true));
		stage.setObject(14, 8, new PFlower(true));
		stage.demon.push(new Demon(stage, 15, 8, DIR_EAST));
		stage.setObject(16, 8, new Wall(9));

		//Row 9
		stage.setObject(0, 9, new Wall(9));
		stage.setObject(1, 9, new Wall(9));
		stage.setObject(2, 9, new Wall(9));
		stage.setObject(3, 9, new Flower(false));
		stage.setObject(5, 9, new Flower(false));
		stage.setObject(6, 9, new Flower(false));
		stage.setObject(9, 9, new Flower(false));
		stage.setObject(11, 9, new Flower(false));
		stage.setObject(12, 9, new Flower(false));
		stage.setObject(13, 9, new Flower(false));
		stage.setObject(14, 9, new Pill());
		stage.setObject(15, 9, new Wall(9));
		stage.setObject(16, 9, new Wall(9));

		//Row 10
		stage.setObject(0, 10, new Wall(9));
		stage.setObject(1, 10, new Key());
		stage.setObject(3, 10, new Flower(false));
		stage.setObject(4, 10, new Flower(false));
		stage.setObject(6, 10, new PFlower(true));
		stage.setObject(8, 10, new AppleRotten());
		stage.setObject(10, 10, new PFlower(true));
		stage.setObject(13, 10, new Mushroom(true));
		stage.setObject(14, 10, new Egg());
		stage.setObject(15, 10, new Flower(false));
		stage.setObject(16, 10, new Wall(9));

		//Row 11
		stage.setObject(0, 11, new Wall(9));
		stage.setObject(1, 11, new Wall(9));
		stage.setObject(2, 11, new Wall(9));
		stage.setObject(3, 11, new Wall(9));
		stage.setObject(4, 11, new Wall(9));
		stage.setObject(5, 11, new Wall(9));
		stage.setObject(6, 11, new Wall(9));
		stage.setObject(7, 11, new Wall(9));
		stage.setObject(8, 11, new Wall(9));
		stage.setObject(9, 11, new Wall(9));
		stage.setObject(10, 11, new Wall(9));
		stage.setObject(11, 11, new Wall(9));
		stage.setObject(12, 11, new Wall(9));
		stage.setObject(13, 11, new Wall(9));
		stage.setObject(14, 11, new Wall(9));
		stage.setObject(15, 11, new Wall(9));
		stage.setObject(16, 11, new Wall(9));

	}),
	/* Level 4 */
	new Stage(function(stage){
		//Row 0
		stage.setObject(0, 0, new Wall(3));
		stage.setObject(1, 0, new Wall(3));
		stage.setObject(2, 0, new Wall(3));
		stage.setObject(3, 0, new Wall(3));
		stage.setObject(4, 0, new Wall(3));
		stage.setObject(5, 0, new Wall(3));
		stage.setObject(6, 0, new Wall(3));
		stage.setObject(7, 0, new Wall(3));
		stage.setObject(8, 0, new Wall(3));
		stage.setObject(9, 0, new Wall(3));
		stage.setObject(10, 0, new Wall(3));
		stage.setObject(11, 0, new Wall(3));
		stage.setObject(12, 0, new Wall(3));
		stage.setObject(13, 0, new Wall(3));
		stage.setObject(14, 0, new Wall(3));
		stage.setObject(15, 0, new Wall(3));
		stage.setObject(16, 0, new Wall(3));

		//Row 1
		stage.setObject(0, 1, new Wall(3));
		stage.setObject(1, 1, new Flower(false));
		stage.setObject(2, 1, new Flower(false));
		stage.setObject(3, 1, new LaserGun());
		stage.setObject(4, 1, new Wall(3));
		stage.setObject(5, 1, new Treasure());
		stage.setObject(6, 1, new Treasure());
		stage.setObject(7, 1, new Treasure());
		stage.setObject(8, 1, new Wall(3));
		stage.setObject(9, 1, new Mushroom(false));
		stage.setObject(10, 1, new AppleRotten());
		stage.setObject(11, 1, new AppleRotten());
		stage.setObject(12, 1, new Flower(false));
		stage.setObject(13, 1, new Door());
		stage.setObject(14, 1, new Flower(false));
		stage.setObject(15, 1, new Flower(false));
		stage.setObject(16, 1, new Wall(3));

		//Row 2
		stage.setObject(0, 2, new Wall(3));
		stage.setObject(2, 2, new Bomb());
		stage.setObject(4, 2, new Wall(3));
		stage.setObject(6, 2, new Flower(false));
		stage.setObject(7, 2, new Flower(false));
		stage.setObject(8, 2, new Wall(3));
		stage.setObject(9, 2, new Crystal());
		stage.setObject(11, 2, new Flower(false));
		stage.setObject(12, 2, new Flower(false));
		stage.setObject(13, 2, new Wall(3));
		stage.setObject(14, 2, new Flower(false));
		stage.setObject(15, 2, new Treasure());
		stage.setObject(16, 2, new Wall(3));

		//Row 3
		stage.setObject(0, 3, new Wall(3));
		stage.player.push(new Player(stage, 1, 3));
		stage.setObject(3, 3, new Flower(false));
		stage.setObject(4, 3, new Wall(3));
		stage.setObject(5, 3, new PFlower(true));
		stage.setObject(7, 3, new Flower(false));
		stage.setObject(8, 3, new Wall(3));
		stage.setObject(9, 3, new Key());
		stage.setObject(10, 3, new Flower(false));
		stage.setObject(11, 3, new Crystal());
		stage.setObject(13, 3, new Wall(3));
		stage.setObject(14, 3, new Wall(3));
		stage.setObject(15, 3, new Wall(3));
		stage.setObject(16, 3, new Wall(3));

		//Row 4
		stage.setObject(0, 4, new Wall(3));
		stage.setObject(1, 4, new Wall(3));
		stage.setObject(2, 4, new Wall(3));
		stage.setObject(3, 4, new Bomb());
		stage.setObject(4, 4, new Wall(3));
		stage.setObject(5, 4, new Wall(3));
		stage.setObject(6, 4, new Crystal());
		stage.setObject(7, 4, new Wall(3));
		stage.setObject(8, 4, new Wall(3));
		stage.setObject(9, 4, new Wall(3));
		stage.setObject(10, 4, new Wall(3));
		stage.setObject(11, 4, new Wall(3));
		stage.setObject(12, 4, new Door());
		stage.setObject(13, 4, new Wall(3));
		stage.setObject(14, 4, new Pill());
		stage.setObject(15, 4, new LaserGun());
		stage.setObject(16, 4, new Wall(3));

		//Row 5
		stage.setObject(0, 5, new Wall(3));
		stage.setObject(1, 5, new Flower(false));
		stage.setObject(2, 5, new Flower(false));
		stage.setObject(4, 5, new Flower(false));
		stage.setObject(5, 5, new Wall(3));
		stage.setObject(6, 5, new Egg());
		stage.setObject(8, 5, new Flower(true));
		stage.setObject(9, 5, new Wall(3));
		stage.setObject(11, 5, new Bomb());
		stage.setObject(13, 5, new Flower(true));
		stage.setObject(14, 5, new Flower(true));
		stage.setObject(16, 5, new Wall(3));

		//Row 6
		stage.setObject(0, 6, new Wall(3));
		stage.setObject(1, 6, new LaserGun());
		stage.setObject(5, 6, new Wall(3));
		stage.setObject(7, 6, new Flower(true));
		stage.setObject(9, 6, new Wall(3));
		stage.setObject(10, 6, new Flower(true));
		stage.setObject(12, 6, new Flower(true));
		stage.setObject(13, 6, new Flower(true));
		stage.setObject(14, 6, new Flower(true));
		stage.setObject(16, 6, new Wall(3));

		//Row 7
		stage.setObject(0, 7, new Wall(3));
		stage.setObject(1, 7, new Wall(3));
		stage.setObject(2, 7, new Wall(3));
		stage.setObject(4, 7, new Wall(3));
		stage.setObject(5, 7, new Wall(3));
		stage.setObject(6, 7, new Flower(false));
		stage.setObject(8, 7, new Flower(true));
		stage.setObject(9, 7, new Flower(true));
		stage.setObject(11, 7, new Flower(true));
		stage.setObject(12, 7, new Flower(true));
		stage.setObject(13, 7, new Flower(true));
		stage.setObject(15, 7, new Flower(true));
		stage.setObject(16, 7, new Wall(3));

		//Row 8
		stage.setObject(0, 8, new Wall(3));
		stage.setObject(1, 8, new Flower(false));
		stage.setObject(2, 8, new Flower(false));
		stage.setObject(4, 8, new Flower(false));
		stage.setObject(5, 8, new Wall(3));
		stage.setObject(6, 8, new PFlower(true));
		stage.setObject(8, 8, new Crystal());
		stage.setObject(9, 8, new Wall(3));
		stage.setObject(10, 8, new Bomb());
		stage.setObject(12, 8, new Flower(true));
		stage.setObject(14, 8, new PFlower(false));
		stage.setObject(15, 8, new Flower(true));
		stage.setObject(16, 8, new Wall(3));

		//Row 9
		stage.setObject(0, 9, new Wall(3));
		stage.setObject(2, 9, new Apple());
		stage.setObject(3, 9, new Bomb());
		stage.setObject(8, 9, new Flower(true));
		stage.setObject(9, 9, new Wall(3));
		stage.setObject(11, 9, new Flower(true));
		stage.setObject(13, 9, new PFlower(false));
		stage.setObject(14, 9, new PFlower(false));
		stage.setObject(16, 9, new Wall(3));

		//Row 10
		stage.setObject(0, 10, new Wall(3));
		stage.setObject(1, 10, new Flower(false));
		stage.setObject(3, 10, new Flower(false));
		stage.setObject(4, 10, new Flower(false));
		stage.setObject(5, 10, new Wall(3));
		stage.setObject(6, 10, new PFlower(true));
		stage.setObject(7, 10, new Flower(true));
		stage.setObject(9, 10, new Wall(3));
		stage.setObject(10, 10, new LaserGun());
		stage.setObject(12, 10, new Flower(true));
		stage.setObject(14, 10, new Egg());
		stage.setObject(15, 10, new Key());
		stage.setObject(16, 10, new Wall(3));

		//Row 11
		stage.setObject(0, 11, new Wall(3));
		stage.setObject(1, 11, new Wall(3));
		stage.setObject(2, 11, new Wall(3));
		stage.setObject(3, 11, new Wall(3));
		stage.setObject(4, 11, new Wall(3));
		stage.setObject(5, 11, new Wall(3));
		stage.setObject(6, 11, new Wall(3));
		stage.setObject(7, 11, new Wall(3));
		stage.setObject(8, 11, new Wall(3));
		stage.setObject(9, 11, new Wall(3));
		stage.setObject(10, 11, new Wall(3));
		stage.setObject(11, 11, new Wall(3));
		stage.setObject(12, 11, new Wall(3));
		stage.setObject(13, 11, new Wall(3));
		stage.setObject(14, 11, new Wall(3));
		stage.setObject(15, 11, new Wall(3));
		stage.setObject(16, 11, new Wall(3));

	}),
	/* Level 5 */
	new Stage(function(stage){
		//Row 0
		stage.setObject(0, 0, new Wall(7));
		stage.setObject(1, 0, new Wall(7));
		stage.setObject(2, 0, new Wall(7));
		stage.setObject(3, 0, new Wall(7));
		stage.setObject(4, 0, new Wall(7));
		stage.setObject(5, 0, new Wall(7));
		stage.setObject(6, 0, new Wall(7));
		stage.setObject(7, 0, new Wall(7));
		stage.setObject(8, 0, new Wall(7));
		stage.setObject(9, 0, new Wall(7));
		stage.setObject(10, 0, new Wall(7));
		stage.setObject(11, 0, new Wall(7));
		stage.setObject(12, 0, new Wall(7));
		stage.setObject(13, 0, new Wall(7));
		stage.setObject(14, 0, new Wall(7));
		stage.setObject(15, 0, new Wall(7));
		stage.setObject(16, 0, new Wall(7));

		//Row 1
		stage.setObject(0, 1, new Wall(7));
		stage.player.push(new Player(stage, 1, 1));
		stage.setObject(4, 1, new AppleRotten());
		stage.setObject(7, 1, new LaserGun());
		stage.setObject(8, 1, new Wall(7));
		stage.setObject(9, 1, new PFlower(true));
		stage.setObject(10, 1, new Mushroom(false));
		stage.setObject(11, 1, new Wall(7));
		stage.demon.push(new Demon(stage, 12, 1, DIR_NORTH));
		stage.setObject(13, 1, new Wall(7));
		stage.setObject(14, 1, new Wall(2));
		stage.setObject(15, 1, new Wall(2));
		stage.setObject(16, 1, new Wall(7));

		//Row 2
		stage.setObject(0, 2, new Wall(7));
		stage.setObject(2, 2, new PFlower(false));
		stage.setObject(3, 2, new AppleRotten());
		stage.setObject(4, 2, new Wall(7));
		stage.setObject(6, 2, new PFlower(true));
		stage.setObject(7, 2, new Wall(7));
		stage.setObject(8, 2, new Wall(7));
		stage.setObject(10, 2, new Treasure());
		stage.setObject(11, 2, new Wall(7));
		stage.setObject(13, 2, new Wall(7));
		stage.setObject(14, 2, new Wall(2));
		stage.setObject(15, 2, new Wall(2));
		stage.setObject(16, 2, new Wall(7));

		//Row 3
		stage.setObject(0, 3, new Wall(7));
		stage.setObject(1, 3, new Key());
		stage.setObject(2, 3, new Wall(7));
		stage.setObject(3, 3, new LaserGun());
		stage.setObject(4, 3, new Wall(7));
		stage.setObject(5, 3, new AppleRotten());
		stage.setObject(6, 3, new Pill());
		stage.setObject(8, 3, new Door());
		stage.setObject(10, 3, new Wall(7));
		stage.setObject(11, 3, new Wall(7));
		stage.setObject(13, 3, new Wall(7));
		stage.setObject(14, 3, new Wall(7));
		stage.setObject(15, 3, new Wall(7));
		stage.setObject(16, 3, new Wall(7));

		//Row 4
		stage.setObject(0, 4, new Wall(7));
		stage.setObject(1, 4, new Wall(7));
		stage.setObject(2, 4, new Wall(7));
		stage.setObject(3, 4, new LaserGun());
		stage.setObject(4, 4, new PFlower(true));
		stage.setObject(6, 4, new Wall(7));
		stage.setObject(7, 4, new Wall(7));
		stage.setObject(8, 4, new Wall(7));
		stage.setObject(9, 4, new Flower(false));
		stage.setObject(10, 4, new Flower(false));
		stage.setObject(12, 4, new Ball());
		stage.setObject(16, 4, new Wall(7));

		//Row 5
		stage.setObject(0, 5, new Wall(7));
		stage.setObject(1, 5, new Flower(false));
		stage.setObject(2, 5, new Wall(7));
		stage.setObject(3, 5, new Wall(7));
		stage.setObject(4, 5, new Wall(7));
		stage.setObject(5, 5, new LaserGun());
		stage.setObject(11, 5, new Flower(false));
		stage.setObject(12, 5, new Flower(false));
		stage.setObject(14, 5, new Flower(false));
		stage.setObject(15, 5, new Flower(false));
		stage.setObject(16, 5, new Wall(7));

		//Row 6
		stage.setObject(0, 6, new Wall(7));
		stage.setObject(2, 6, new Flower(false));
		stage.setObject(3, 6, new Flower(false));
		stage.setObject(4, 6, new Wall(7));
		stage.setObject(5, 6, new Wall(7));
		stage.setObject(6, 6, new Wall(7));
		stage.setObject(7, 6, new Wall(7));
		stage.setObject(8, 6, new Wall(7));
		stage.setObject(9, 6, new Wall(7));
		stage.setObject(10, 6, new Wall(7));
		stage.setObject(11, 6, new Wall(7));
		stage.setObject(12, 6, new Wall(7));
		stage.setObject(13, 6, new Flower(false));
		stage.setObject(14, 6, new Wall(7));
		stage.setObject(15, 6, new Wall(7));
		stage.setObject(16, 6, new Wall(7));

		//Row 7
		stage.setObject(0, 7, new Wall(7));
		stage.setObject(1, 7, new Flower(false));
		stage.setObject(2, 7, new AppleRotten());
		stage.setObject(4, 7, new Flower(false));
		stage.setObject(6, 7, new Flower(false));
		stage.setObject(7, 7, new Flower(true));
		stage.setObject(8, 7, new Flower(true));
		stage.setObject(9, 7, new Key());
		stage.setObject(14, 7, new AppleRotten());
		stage.demon.push(new Demon(stage, 15, 7, DIR_EAST));
		stage.setObject(16, 7, new Wall(7));

		//Row 8
		stage.setObject(0, 8, new Wall(7));
		stage.setObject(1, 8, new Wall(7));
		stage.setObject(3, 8, new Flower(false));
		stage.setObject(5, 8, new Flower(false));
		stage.setObject(8, 8, new Wall(7));
		stage.setObject(9, 8, new Ball());
		stage.setObject(10, 8, new Wall(7));
		stage.setObject(11, 8, new Wall(7));
		stage.setObject(12, 8, new Wall(7));
		stage.setObject(14, 8, new PFlower(false));
		stage.setObject(15, 8, new Wall(7));
		stage.setObject(16, 8, new Wall(7));

		//Row 9
		stage.setObject(0, 9, new Wall(7));
		stage.setObject(1, 9, new Wall(7));
		stage.setObject(2, 9, new Wall(7));
		stage.setObject(3, 9, new Wall(7));
		stage.setObject(4, 9, new Door());
		stage.setObject(5, 9, new Wall(7));
		stage.setObject(6, 9, new Flower(false));
		stage.setObject(7, 9, new Flower(false));
		stage.setObject(8, 9, new Flower(false));
		stage.setObject(11, 9, new Flower(false));
		stage.setObject(13, 9, new Flower(false));
		stage.setObject(16, 9, new Wall(7));

		//Row 10
		stage.setObject(0, 10, new Wall(7));
		stage.setObject(1, 10, new Treasure());
		stage.setObject(2, 10, new Treasure());
		stage.setObject(3, 10, new Treasure());
		stage.setObject(5, 10, new Wall(7));
		stage.setObject(7, 10, new Flower(false));
		stage.setObject(8, 10, new Wall(7));
		stage.setObject(10, 10, new Wall(7));
		stage.setObject(12, 10, new Flower(false));
		stage.setObject(14, 10, new Flower(false));
		stage.setObject(16, 10, new Wall(7));

		//Row 11
		stage.setObject(0, 11, new Wall(7));
		stage.setObject(1, 11, new Wall(7));
		stage.setObject(2, 11, new Wall(7));
		stage.setObject(3, 11, new Wall(7));
		stage.setObject(4, 11, new Wall(7));
		stage.setObject(5, 11, new Wall(7));
		stage.setObject(6, 11, new Wall(7));
		stage.setObject(7, 11, new Wall(7));
		stage.setObject(8, 11, new Wall(7));
		stage.setObject(9, 11, new Wall(7));
		stage.setObject(10, 11, new Wall(7));
		stage.setObject(11, 11, new Wall(7));
		stage.setObject(12, 11, new Wall(7));
		stage.setObject(13, 11, new Wall(7));
		stage.setObject(14, 11, new Wall(7));
		stage.setObject(15, 11, new Wall(7));
		stage.setObject(16, 11, new Wall(7));

	}),
];
document.title='Fun Pack 1';
new Game('funpack1',levelData);
