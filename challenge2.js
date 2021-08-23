levelData = [
	/* Level 1 */
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
		stage.setObject(3, 1, new Door());
		stage.setObject(5, 1, new Flower(false));
		stage.setObject(6, 1, new Flower(false));
		stage.setObject(9, 1, new Flower(false));
		stage.setObject(10, 1, new Egg());
		stage.setObject(11, 1, new Flower(false));
		stage.setObject(12, 1, new Treasure());
		stage.setObject(13, 1, new Wall(9));
		stage.setObject(14, 1, new Mushroom(true));
		stage.setObject(15, 1, new Apple());
		stage.setObject(16, 1, new Wall(9));

		//Row 2
		stage.setObject(0, 2, new Wall(9));
		stage.demon.push(new Demon(stage, 2, 2, DIR_WEST));
		stage.setObject(3, 2, new Wall(9));
		stage.player.push(new Player(stage, 4, 2));
		stage.setObject(6, 2, new Apple());
		stage.setObject(7, 2, new Flower(false));
		stage.setObject(8, 2, new Key());
		stage.setObject(10, 2, new Flower(false));
		stage.setObject(12, 2, new PFlower(true));
		stage.setObject(13, 2, new Wall(9));
		stage.setObject(14, 2, new PFlower(true));
		stage.setObject(15, 2, new PFlower(false));
		stage.setObject(16, 2, new Wall(9));

		//Row 3
		stage.setObject(0, 3, new Wall(9));
		stage.setObject(1, 3, new Wall(9));
		stage.setObject(2, 3, new Wall(9));
		stage.setObject(3, 3, new Wall(9));
		stage.setObject(4, 3, new Flower(false));
		stage.setObject(5, 3, new Wall(9));
		stage.setObject(6, 3, new Wall(9));
		stage.setObject(7, 3, new Wall(9));
		stage.setObject(8, 3, new Wall(9));
		stage.setObject(9, 3, new Wall(9));
		stage.setObject(10, 3, new Wall(9));
		stage.setObject(11, 3, new Flower(true));
		stage.setObject(12, 3, new Wall(9));
		stage.setObject(13, 3, new Wall(9));
		stage.setObject(14, 3, new Wall(9));
		stage.setObject(15, 3, new Treasure());
		stage.setObject(16, 3, new Wall(9));

		//Row 4
		stage.setObject(0, 4, new Wall(9));
		stage.setObject(1, 4, new Flower(false));
		stage.setObject(3, 4, new PFlower(false));
		stage.setObject(5, 4, new Wall(9));
		stage.setObject(6, 4, new Flower(false));
		stage.setObject(8, 4, new Wall(9));
		stage.setObject(9, 4, new Flower(false));
		stage.setObject(11, 4, new Flower(false));
		stage.setObject(12, 4, new Flower(true));
		stage.setObject(14, 4, new Wall(9));
		stage.setObject(15, 4, new Treasure());
		stage.setObject(16, 4, new Wall(9));

		//Row 5
		stage.setObject(0, 5, new Wall(9));
		stage.setObject(1, 5, new PFlower(false));
		stage.setObject(2, 5, new Flower(false));
		stage.setObject(3, 5, new Key());
		stage.setObject(4, 5, new Flower(false));
		stage.setObject(5, 5, new Wall(9));
		stage.setObject(7, 5, new Flower(false));
		stage.setObject(8, 5, new Wall(9));
		stage.setObject(9, 5, new Flower(false));
		stage.setObject(10, 5, new Wall(10));
		stage.setObject(11, 5, new Flower(true));
		stage.setObject(12, 5, new AppleRotten());
		stage.setObject(13, 5, new Flower(true));
		stage.setObject(14, 5, new Crystal());
		stage.setObject(15, 5, new Treasure());
		stage.setObject(16, 5, new Wall(9));

		//Row 6
		stage.setObject(0, 6, new Wall(9));
		stage.setObject(1, 6, new Wall(9));
		stage.setObject(2, 6, new Door());
		stage.setObject(3, 6, new Wall(9));
		stage.setObject(4, 6, new Wall(9));
		stage.setObject(5, 6, new Wall(9));
		stage.setObject(6, 6, new Crystal());
		stage.setObject(7, 6, new Flower(false));
		stage.setObject(8, 6, new Crystal());
		stage.setObject(9, 6, new Flower(false));
		stage.setObject(10, 6, new Apple());
		stage.setObject(12, 6, new Wall(9));
		stage.setObject(13, 6, new Wall(9));
		stage.setObject(14, 6, new Wall(9));
		stage.setObject(15, 6, new Flower(false));
		stage.setObject(16, 6, new Wall(9));

		//Row 7
		stage.setObject(0, 7, new Wall(9));
		stage.setObject(1, 7, new Flower(false));
		stage.setObject(2, 7, new Egg());
		stage.setObject(3, 7, new Egg());
		stage.setObject(4, 7, new Flower(false));
		stage.setObject(5, 7, new Wall(9));
		stage.setObject(6, 7, new Flower(false));
		stage.setObject(8, 7, new Wall(9));
		stage.setObject(9, 7, new Egg());
		stage.setObject(11, 7, new Flower(true));
		stage.setObject(12, 7, new Flower(true));
		stage.setObject(14, 7, new Flower(false));
		stage.setObject(15, 7, new PFlower(false));
		stage.setObject(16, 7, new Wall(9));

		//Row 8
		stage.setObject(0, 8, new Wall(9));
		stage.setObject(2, 8, new Flower(true));
		stage.setObject(3, 8, new Crystal());
		stage.setObject(4, 8, new Apple());
		stage.setObject(5, 8, new Apple());
		stage.setObject(8, 8, new Wall(9));
		stage.setObject(9, 8, new PFlower(false));
		stage.setObject(10, 8, new Wall(9));
		stage.setObject(11, 8, new Flower(true));
		stage.setObject(12, 8, new Wall(9));
		stage.setObject(13, 8, new Wall(9));
		stage.setObject(14, 8, new Wall(9));
		stage.setObject(15, 8, new PFlower(true));
		stage.setObject(16, 8, new Wall(9));

		//Row 9
		stage.setObject(0, 9, new Wall(9));
		stage.setObject(1, 9, new AppleRotten());
		stage.setObject(2, 9, new PFlower(false));
		stage.setObject(3, 9, new Flower(false));
		stage.setObject(4, 9, new PFlower(false));
		stage.setObject(5, 9, new Wall(9));
		stage.setObject(7, 9, new Flower(false));
		stage.setObject(8, 9, new Wall(9));
		stage.setObject(9, 9, new PFlower(false));
		stage.setObject(10, 9, new Flower(false));
		stage.setObject(11, 9, new Flower(false));
		stage.setObject(12, 9, new Flower(false));
		stage.setObject(13, 9, new Mushroom(false));
		stage.setObject(14, 9, new Wall(9));
		stage.setObject(15, 9, new Flower(false));
		stage.setObject(16, 9, new Wall(9));

		//Row 10
		stage.setObject(0, 10, new Wall(9));
		stage.setObject(1, 10, new Flower(true));
		stage.setObject(2, 10, new Flower(true));
		stage.setObject(4, 10, new Apple());
		stage.setObject(5, 10, new Wall(9));
		stage.setObject(6, 10, new Flower(false));
		stage.setObject(8, 10, new Flower(false));
		stage.setObject(9, 10, new AppleRotten());
		stage.setObject(10, 10, new Flower(false));
		stage.setObject(12, 10, new PFlower(true));
		stage.setObject(13, 10, new Flower(false));
		stage.setObject(14, 10, new Wall(9));
		stage.setObject(15, 10, new Apple());
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
	/* Level 2 */
	new Stage(function(stage){
		//Row 0
		stage.setObject(0, 0, new Wall(4));
		stage.setObject(1, 0, new Wall(4));
		stage.setObject(2, 0, new Wall(4));
		stage.setObject(3, 0, new Wall(4));
		stage.setObject(4, 0, new Wall(4));
		stage.setObject(5, 0, new Wall(4));
		stage.setObject(6, 0, new Wall(4));
		stage.setObject(7, 0, new Wall(4));
		stage.setObject(8, 0, new Wall(4));
		stage.setObject(9, 0, new Wall(4));
		stage.setObject(10, 0, new Wall(4));
		stage.setObject(11, 0, new Wall(4));
		stage.setObject(12, 0, new Wall(4));
		stage.setObject(13, 0, new Wall(4));
		stage.setObject(14, 0, new Wall(4));
		stage.setObject(15, 0, new Wall(4));
		stage.setObject(16, 0, new Wall(4));

		//Row 1
		stage.setObject(0, 1, new Wall(4));
		stage.setObject(1, 1, new Flower(false));
		stage.setObject(2, 1, new Flower(true));
		stage.setObject(3, 1, new Flower(true));
		stage.setObject(4, 1, new Flower(true));
		stage.setObject(6, 1, new Apple());
		stage.setObject(7, 1, new LaserGun());
		stage.setObject(8, 1, new Crystal());
		stage.setObject(10, 1, new Crystal());
		stage.player.push(new Player(stage, 11, 1));
		stage.setObject(12, 1, new Flower(false));
		stage.setObject(13, 1, new Flower(false));
		stage.setObject(14, 1, new Flower(false));
		stage.setObject(15, 1, new Flower(false));
		stage.setObject(16, 1, new Wall(4));

		//Row 2
		stage.setObject(0, 2, new Wall(4));
		stage.setObject(1, 2, new Flower(false));
		stage.setObject(2, 2, new Egg());
		stage.setObject(3, 2, new Wall(10));
		stage.setObject(5, 2, new Bomb());
		stage.setObject(6, 2, new Wall(4));
		stage.setObject(8, 2, new Wall(4));
		stage.setObject(9, 2, new Wall(4));
		stage.setObject(10, 2, new Apple());
		stage.setObject(11, 2, new Wall(4));
		stage.setObject(12, 2, new Wall(4));
		stage.setObject(13, 2, new Wall(4));
		stage.setObject(14, 2, new Flower(false));
		stage.setObject(15, 2, new Egg());
		stage.setObject(16, 2, new Wall(4));

		//Row 3
		stage.setObject(0, 3, new Wall(4));
		stage.setObject(1, 3, new Flower(false));
		stage.setObject(2, 3, new Flower(false));
		stage.setObject(3, 3, new Treasure());
		stage.setObject(4, 3, new Wall(4));
		stage.setObject(6, 3, new Wall(4));
		stage.setObject(7, 3, new Flower(true));
		stage.setObject(8, 3, new Key());
		stage.setObject(9, 3, new Wall(4));
		stage.setObject(12, 3, new Egg());
		stage.setObject(13, 3, new Wall(4));
		stage.setObject(14, 3, new Wall(4));
		stage.setObject(15, 3, new Wall(4));
		stage.setObject(16, 3, new Wall(4));

		//Row 4
		stage.setObject(0, 4, new Wall(4));
		stage.setObject(1, 4, new Egg());
		stage.setObject(2, 4, new Flower(true));
		stage.setObject(3, 4, new Treasure());
		stage.setObject(4, 4, new Wall(4));
		stage.setObject(5, 4, new Flower(true));
		stage.setObject(6, 4, new Wall(4));
		stage.setObject(7, 4, new Bomb());
		stage.setObject(8, 4, new AppleRotten());
		stage.setObject(9, 4, new Wall(4));
		stage.setObject(11, 4, new PFlower(true));
		stage.setObject(13, 4, new Apple());
		stage.setObject(15, 4, new LaserGun());
		stage.setObject(16, 4, new Wall(4));

		//Row 5
		stage.setObject(0, 5, new Wall(4));
		stage.setObject(1, 5, new Wall(4));
		stage.setObject(2, 5, new Wall(4));
		stage.setObject(3, 5, new Wall(4));
		stage.setObject(4, 5, new Wall(4));
		stage.setObject(5, 5, new Flower(true));
		stage.setObject(6, 5, new Wall(4));
		stage.setObject(7, 5, new Bomb());
		stage.setObject(9, 5, new Wall(4));
		stage.setObject(10, 5, new LaserGun());
		stage.setObject(11, 5, new Wall(4));
		stage.setObject(12, 5, new Wall(4));
		stage.setObject(13, 5, new Flower(true));
		stage.setObject(14, 5, new PFlower(true));
		stage.setObject(15, 5, new Wall(4));
		stage.setObject(16, 5, new Wall(4));

		//Row 6
		stage.setObject(0, 6, new Wall(4));
		stage.setObject(1, 6, new LaserGun());
		stage.setObject(2, 6, new Crystal());
		stage.setObject(4, 6, new Crystal());
		stage.setObject(5, 6, new Flower(true));
		stage.setObject(6, 6, new Flower(true));
		stage.setObject(8, 6, new Flower(false));
		stage.setObject(11, 6, new PFlower(true));
		stage.setObject(12, 6, new Wall(4));
		stage.setObject(16, 6, new Wall(4));

		//Row 7
		stage.setObject(0, 7, new Wall(4));
		stage.setObject(1, 7, new Wall(4));
		stage.setObject(2, 7, new Wall(4));
		stage.setObject(3, 7, new Wall(4));
		stage.setObject(4, 7, new Door());
		stage.setObject(5, 7, new Wall(4));
		stage.setObject(6, 7, new Wall(4));
		stage.setObject(8, 7, new Bomb());
		stage.setObject(9, 7, new Flower(false));
		stage.setObject(11, 7, new Egg());
		stage.setObject(12, 7, new Wall(4));
		stage.setObject(13, 7, new Egg());
		stage.setObject(16, 7, new Wall(4));

		//Row 8
		stage.setObject(0, 8, new Wall(4));
		stage.setObject(2, 8, new Flower(true));
		stage.setObject(3, 8, new Flower(false));
		stage.setObject(4, 8, new Bomb());
		stage.setObject(5, 8, new PFlower(false));
		stage.setObject(6, 8, new Wall(4));
		stage.setObject(8, 8, new Flower(false));
		stage.setObject(9, 8, new Wall(4));
		stage.setObject(10, 8, new Apple());
		stage.setObject(11, 8, new Wall(4));
		stage.setObject(12, 8, new Wall(4));
		stage.setObject(13, 8, new PFlower(true));
		stage.setObject(14, 8, new Wall(4));
		stage.setObject(15, 8, new Flower(true));
		stage.setObject(16, 8, new Wall(4));

		//Row 9
		stage.setObject(0, 9, new Wall(4));
		stage.setObject(1, 9, new Flower(true));
		stage.setObject(2, 9, new Apple());
		stage.setObject(3, 9, new Flower(true));
		stage.setObject(5, 9, new PFlower(false));
		stage.setObject(6, 9, new Wall(4));
		stage.setObject(7, 9, new Flower(false));
		stage.setObject(8, 9, new Apple());
		stage.setObject(9, 9, new Wall(4));
		stage.setObject(11, 9, new Treasure());
		stage.setObject(12, 9, new LaserGun());
		stage.setObject(14, 9, new Apple());
		stage.setObject(16, 9, new Wall(4));

		//Row 10
		stage.setObject(0, 10, new Wall(4));
		stage.setObject(2, 10, new Flower(true));
		stage.setObject(3, 10, new Egg());
		stage.setObject(4, 10, new Bomb());
		stage.setObject(5, 10, new Mushroom(false));
		stage.setObject(6, 10, new Wall(4));
		stage.setObject(8, 10, new Flower(false));
		stage.setObject(9, 10, new Wall(4));
		stage.setObject(13, 10, new Pill());
		stage.setObject(15, 10, new Apple());
		stage.setObject(16, 10, new Wall(4));

		//Row 11
		stage.setObject(0, 11, new Wall(4));
		stage.setObject(1, 11, new Wall(4));
		stage.setObject(2, 11, new Wall(4));
		stage.setObject(3, 11, new Wall(4));
		stage.setObject(4, 11, new Wall(4));
		stage.setObject(5, 11, new Wall(4));
		stage.setObject(6, 11, new Wall(4));
		stage.setObject(7, 11, new Wall(4));
		stage.setObject(8, 11, new Wall(4));
		stage.setObject(9, 11, new Wall(4));
		stage.setObject(10, 11, new Wall(4));
		stage.setObject(11, 11, new Wall(4));
		stage.setObject(12, 11, new Wall(4));
		stage.setObject(13, 11, new Wall(4));
		stage.setObject(14, 11, new Wall(4));
		stage.setObject(15, 11, new Wall(4));
		stage.setObject(16, 11, new Wall(4));

	}),
	/* Level 3 */
	new Stage(function(stage){
		//Row 0
		stage.setObject(0, 0, new Wall(0));
		stage.setObject(1, 0, new Wall(0));
		stage.setObject(2, 0, new Wall(0));
		stage.setObject(3, 0, new Wall(0));
		stage.setObject(4, 0, new Wall(0));
		stage.setObject(5, 0, new Wall(0));
		stage.setObject(6, 0, new Wall(0));
		stage.setObject(7, 0, new Wall(0));
		stage.setObject(8, 0, new Wall(0));
		stage.setObject(9, 0, new Wall(0));
		stage.setObject(10, 0, new Wall(0));
		stage.setObject(11, 0, new Wall(0));
		stage.setObject(12, 0, new Wall(0));
		stage.setObject(13, 0, new Wall(0));
		stage.setObject(14, 0, new Wall(0));
		stage.setObject(15, 0, new Wall(0));
		stage.setObject(16, 0, new Wall(0));

		//Row 1
		stage.setObject(0, 1, new Wall(0));
		stage.setObject(1, 1, new Treasure());
		stage.setObject(2, 1, new Treasure());
		stage.setObject(3, 1, new Wall(0));
		stage.setObject(4, 1, new PFlower(true));
		stage.setObject(5, 1, new Flower(false));
		stage.setObject(6, 1, new Flower(false));
		stage.setObject(8, 1, new Ball());
		stage.setObject(11, 1, new Egg());
		stage.setObject(12, 1, new Flower(true));
		stage.setObject(13, 1, new Wall(0));
		stage.setObject(14, 1, new Flower(true));
		stage.setObject(15, 1, new Treasure());
		stage.setObject(16, 1, new Wall(0));

		//Row 2
		stage.setObject(0, 2, new Wall(0));
		stage.setObject(1, 2, new Mushroom(false));
		stage.setObject(2, 2, new Flower(false));
		stage.setObject(3, 2, new Door());
		stage.setObject(4, 2, new Flower(false));
		stage.setObject(5, 2, new PFlower(false));
		stage.setObject(6, 2, new AppleRotten());
		stage.setObject(7, 2, new Wall(0));
		stage.setObject(8, 2, new Flower(false));
		stage.setObject(9, 2, new Flower(false));
		stage.setObject(10, 2, new Flower(false));
		stage.setObject(11, 2, new Wall(0));
		stage.setObject(13, 2, new Flower(true));
		stage.setObject(15, 2, new Flower(true));
		stage.setObject(16, 2, new Wall(0));

		//Row 3
		stage.setObject(0, 3, new Wall(0));
		stage.setObject(1, 3, new Wall(0));
		stage.setObject(2, 3, new Wall(0));
		stage.setObject(3, 3, new Wall(0));
		stage.setObject(4, 3, new Flower(false));
		stage.setObject(5, 3, new Flower(false));
		stage.setObject(6, 3, new Flower(false));
		stage.setObject(7, 3, new Wall(0));
		stage.setObject(8, 3, new Wall(0));
		stage.setObject(9, 3, new Wall(0));
		stage.setObject(10, 3, new Wall(0));
		stage.setObject(11, 3, new Wall(0));
		stage.setObject(12, 3, new Flower(true));
		stage.setObject(13, 3, new Wall(0));
		stage.setObject(14, 3, new Wall(0));
		stage.setObject(15, 3, new Wall(0));
		stage.setObject(16, 3, new Wall(0));

		//Row 4
		stage.setObject(0, 4, new Wall(0));
		stage.setObject(2, 4, new PFlower(true));
		stage.setObject(3, 4, new Treasure());
		stage.setObject(4, 4, new Flower(false));
		stage.setObject(5, 4, new Crystal());
		stage.setObject(6, 4, new Flower(false));
		stage.setObject(7, 4, new Flower(false));
		stage.setObject(8, 4, new PFlower(false));
		stage.setObject(9, 4, new Apple());
		stage.setObject(10, 4, new LaserGun());
		stage.setObject(13, 4, new Key());
		stage.setObject(14, 4, new Crystal());
		stage.setObject(16, 4, new Wall(0));

		//Row 5
		stage.setObject(0, 5, new Wall(0));
		stage.setObject(1, 5, new Apple());
		stage.setObject(2, 5, new Crystal());
		stage.setObject(6, 5, new Crystal());
		stage.setObject(8, 5, new Apple());
		stage.setObject(9, 5, new Flower(true));
		stage.setObject(10, 5, new Ball());
		stage.setObject(11, 5, new Wall(0));
		stage.setObject(12, 5, new Flower(true));
		stage.setObject(13, 5, new Crystal());
		stage.setObject(15, 5, new Crystal());
		stage.setObject(16, 5, new Wall(0));

		//Row 6
		stage.setObject(0, 6, new Wall(0));
		stage.setObject(2, 6, new PFlower(true));
		stage.setObject(3, 6, new Treasure());
		stage.setObject(4, 6, new Flower(false));
		stage.setObject(6, 6, new Flower(false));
		stage.setObject(7, 6, new Flower(false));
		stage.setObject(8, 6, new Flower(false));
		stage.setObject(9, 6, new Flower(false));
		stage.setObject(10, 6, new Crystal());
		stage.setObject(11, 6, new Wall(0));
		stage.setObject(12, 6, new Apple());
		stage.setObject(14, 6, new Flower(true));
		stage.setObject(15, 6, new Flower(true));
		stage.setObject(16, 6, new Wall(0));

		//Row 7
		stage.setObject(0, 7, new Wall(0));
		stage.player.push(new Player(stage, 1, 7));
		stage.setObject(2, 7, new Wall(0));
		stage.setObject(3, 7, new Wall(0));
		stage.setObject(4, 7, new Wall(0));
		stage.setObject(5, 7, new Wall(0));
		stage.setObject(6, 7, new Crystal());
		stage.setObject(7, 7, new Wall(0));
		stage.setObject(8, 7, new Wall(0));
		stage.setObject(9, 7, new Wall(0));
		stage.setObject(10, 7, new Door());
		stage.setObject(11, 7, new Wall(0));
		stage.setObject(12, 7, new PFlower(false));
		stage.setObject(13, 7, new Flower(true));
		stage.setObject(14, 7, new PFlower(false));
		stage.setObject(15, 7, new Wall(0));
		stage.setObject(16, 7, new Wall(0));

		//Row 8
		stage.setObject(0, 8, new Wall(0));
		stage.setObject(1, 8, new Apple());
		stage.setObject(2, 8, new Flower(false));
		stage.setObject(3, 8, new Flower(false));
		stage.setObject(4, 8, new Flower(true));
		stage.setObject(5, 8, new Crystal());
		stage.setObject(6, 8, new Flower(false));
		stage.setObject(7, 8, new PFlower(false));
		stage.setObject(8, 8, new Apple());
		stage.setObject(9, 8, new Wall(0));
		stage.setObject(10, 8, new Flower(false));
		stage.setObject(11, 8, new Wall(0));
		stage.setObject(12, 8, new Flower(true));
		stage.setObject(14, 8, new Apple());
		stage.setObject(15, 8, new LaserGun());
		stage.setObject(16, 8, new Wall(0));

		//Row 9
		stage.setObject(0, 9, new Wall(0));
		stage.setObject(2, 9, new Apple());
		stage.setObject(4, 9, new PFlower(false));
		stage.setObject(5, 9, new Apple());
		stage.setObject(6, 9, new Flower(true));
		stage.setObject(7, 9, new PFlower(false));
		stage.setObject(8, 9, new Apple());
		stage.setObject(9, 9, new Wall(0));
		stage.setObject(10, 9, new Flower(false));
		stage.setObject(11, 9, new Wall(0));
		stage.setObject(13, 9, new Wall(0));
		stage.setObject(14, 9, new Wall(0));
		stage.setObject(15, 9, new Wall(0));
		stage.setObject(16, 9, new Wall(0));

		//Row 10
		stage.setObject(0, 10, new Wall(0));
		stage.setObject(2, 10, new Flower(false));
		stage.setObject(3, 10, new Flower(false));
		stage.setObject(4, 10, new Flower(true));
		stage.setObject(5, 10, new Flower(false));
		stage.setObject(6, 10, new Flower(false));
		stage.setObject(7, 10, new Flower(false));
		stage.setObject(8, 10, new Key());
		stage.setObject(9, 10, new Wall(0));
		stage.setObject(10, 10, new Flower(false));
		stage.setObject(11, 10, new Egg());
		stage.setObject(12, 10, new Flower(true));
		stage.setObject(13, 10, new PFlower(false));
		stage.setObject(14, 10, new Apple());
		stage.demon.push(new Demon(stage, 15, 10, DIR_WEST));
		stage.setObject(16, 10, new Wall(0));

		//Row 11
		stage.setObject(0, 11, new Wall(0));
		stage.setObject(1, 11, new Wall(0));
		stage.setObject(2, 11, new Wall(0));
		stage.setObject(3, 11, new Wall(0));
		stage.setObject(4, 11, new Wall(0));
		stage.setObject(5, 11, new Wall(0));
		stage.setObject(6, 11, new Wall(0));
		stage.setObject(7, 11, new Wall(0));
		stage.setObject(8, 11, new Wall(0));
		stage.setObject(9, 11, new Wall(0));
		stage.setObject(10, 11, new Wall(0));
		stage.setObject(11, 11, new Wall(0));
		stage.setObject(12, 11, new Wall(0));
		stage.setObject(13, 11, new Wall(0));
		stage.setObject(14, 11, new Wall(0));
		stage.setObject(15, 11, new Wall(0));
		stage.setObject(16, 11, new Wall(0));

		/* Custom script */
		stage.getObject(14, 10).eat = undefined;
	}),
	/* Level 4 */
	new Stage(function(stage){
		//Row 0
		stage.setObject(0, 0, new Wall(8));
		stage.setObject(1, 0, new Wall(8));
		stage.setObject(2, 0, new Wall(8));
		stage.setObject(3, 0, new Wall(8));
		stage.setObject(4, 0, new Wall(8));
		stage.setObject(5, 0, new Wall(8));
		stage.setObject(6, 0, new Wall(8));
		stage.setObject(7, 0, new Wall(8));
		stage.setObject(8, 0, new Wall(8));
		stage.setObject(9, 0, new Wall(8));
		stage.setObject(10, 0, new Wall(8));
		stage.setObject(11, 0, new Wall(8));
		stage.setObject(12, 0, new Wall(8));
		stage.setObject(13, 0, new Wall(8));
		stage.setObject(14, 0, new Wall(8));
		stage.setObject(15, 0, new Wall(8));
		stage.setObject(16, 0, new Wall(8));

		//Row 1
		stage.setObject(0, 1, new Wall(8));
		stage.setObject(1, 1, new Flower(false));
		stage.setObject(3, 1, new Flower(false));
		stage.setObject(5, 1, new Flower(true));
		stage.setObject(6, 1, new Flower(true));
		stage.setObject(8, 1, new Wall(8));
		stage.setObject(9, 1, new Flower(false));
		stage.setObject(11, 1, new Flower(false));
		stage.setObject(12, 1, new Crystal());
		stage.setObject(13, 1, new Wall(8));
		stage.demon.push(new Demon(stage, 14, 1, DIR_EAST));
		stage.demon.push(new Demon(stage, 15, 1, DIR_SOUTH));
		stage.setObject(16, 1, new Wall(8));

		//Row 2
		stage.setObject(0, 2, new Wall(8));
		stage.setObject(1, 2, new Mushroom(true));
		stage.setObject(2, 2, new Apple());
		stage.setObject(3, 2, new Mushroom(true));
		stage.setObject(4, 2, new Flower(true));
		stage.setObject(5, 2, new Mushroom(true));
		stage.setObject(6, 2, new Apple());
		stage.setObject(7, 2, new Flower(false));
		stage.setObject(8, 2, new Door());
		stage.setObject(10, 2, new Wall(8));
		stage.setObject(11, 2, new Wall(8));
		stage.setObject(13, 2, new Wall(8));
		stage.demon.push(new Demon(stage, 14, 2, DIR_EAST));
		stage.demon.push(new Demon(stage, 15, 2, DIR_SOUTH));
		stage.setObject(16, 2, new Wall(8));

		//Row 3
		stage.setObject(0, 3, new Wall(8));
		stage.setObject(1, 3, new PFlower(false));
		stage.setObject(3, 3, new PFlower(false));
		stage.setObject(5, 3, new Egg());
		stage.setObject(6, 3, new Bomb());
		stage.setObject(7, 3, new Egg());
		stage.setObject(8, 3, new Wall(8));
		stage.setObject(9, 3, new Flower(false));
		stage.setObject(10, 3, new Wall(8));
		stage.setObject(11, 3, new Wall(8));
		stage.setObject(12, 3, new Crystal());
		stage.setObject(13, 3, new Wall(8));
		stage.setObject(14, 3, new Wall(8));
		stage.demon.push(new Demon(stage, 15, 3, DIR_SOUTH));
		stage.setObject(16, 3, new Wall(8));

		//Row 4
		stage.setObject(0, 4, new Wall(8));
		stage.setObject(1, 4, new Wall(8));
		stage.player.push(new Player(stage, 2, 4));
		stage.setObject(3, 4, new Wall(8));
		stage.setObject(4, 4, new Wall(8));
		stage.setObject(5, 4, new Wall(8));
		stage.setObject(6, 4, new Wall(8));
		stage.setObject(7, 4, new Bomb());
		stage.setObject(8, 4, new Wall(8));
		stage.setObject(9, 4, new Wall(8));
		stage.setObject(10, 4, new Wall(8));
		stage.setObject(11, 4, new Key());
		stage.setObject(13, 4, new Flower(false));
		stage.setObject(14, 4, new Wall(8));
		stage.demon.push(new Demon(stage, 15, 4, DIR_SOUTH));
		stage.setObject(16, 4, new Wall(8));

		//Row 5
		stage.setObject(0, 5, new Wall(8));
		stage.setObject(2, 5, new Flower(false));
		stage.setObject(6, 5, new Flower(true));
		stage.setObject(7, 5, new Bomb());
		stage.setObject(9, 5, new LaserGun());
		stage.setObject(10, 5, new Wall(8));
		stage.setObject(11, 5, new Wall(8));
		stage.setObject(12, 5, new Wall(8));
		stage.setObject(14, 5, new Wall(8));
		stage.demon.push(new Demon(stage, 15, 5, DIR_SOUTH));
		stage.setObject(16, 5, new Wall(8));

		//Row 6
		stage.setObject(0, 6, new Wall(8));
		stage.setObject(1, 6, new Flower(false));
		stage.setObject(3, 6, new Flower(false));
		stage.setObject(4, 6, new Flower(true));
		stage.setObject(5, 6, new Flower(true));
		stage.setObject(6, 6, new Flower(true));
		stage.setObject(7, 6, new Wall(8));
		stage.setObject(8, 6, new Wall(8));
		stage.setObject(9, 6, new Wall(8));
		stage.setObject(10, 6, new Wall(8));
		stage.setObject(11, 6, new Flower(true));
		stage.setObject(12, 6, new Egg());
		stage.setObject(13, 6, new Treasure());
		stage.setObject(14, 6, new Mushroom(true));
		stage.demon.push(new Demon(stage, 15, 6, DIR_SOUTH));
		stage.setObject(16, 6, new Wall(8));

		//Row 7
		stage.setObject(0, 7, new Wall(8));
		stage.setObject(4, 7, new Wall(8));
		stage.setObject(5, 7, new Door());
		stage.setObject(6, 7, new Wall(8));
		stage.setObject(7, 7, new Wall(8));
		stage.setObject(8, 7, new Egg());
		stage.setObject(10, 7, new Crystal());
		stage.setObject(11, 7, new Apple());
		stage.setObject(13, 7, new Mushroom(true));
		stage.demon.push(new Demon(stage, 14, 7, DIR_WEST));
		stage.demon.push(new Demon(stage, 15, 7, DIR_WEST));
		stage.setObject(16, 7, new Wall(8));

		//Row 8
		stage.setObject(0, 8, new Wall(8));
		stage.setObject(1, 8, new Egg());
		stage.setObject(2, 8, new PFlower(false));
		stage.setObject(4, 8, new Wall(8));
		stage.setObject(5, 8, new Mushroom(false));
		stage.setObject(6, 8, new Wall(8));
		stage.setObject(7, 8, new Wall(8));
		stage.setObject(8, 8, new Wall(8));
		stage.setObject(9, 8, new Crystal());
		stage.setObject(10, 8, new Wall(8));
		stage.setObject(11, 8, new PFlower(false));
		stage.setObject(12, 8, new PFlower(true));
		stage.setObject(13, 8, new Mushroom(true));
		stage.demon.push(new Demon(stage, 14, 8, DIR_WEST));
		stage.demon.push(new Demon(stage, 15, 8, DIR_WEST));
		stage.setObject(16, 8, new Wall(8));

		//Row 9
		stage.setObject(0, 9, new Wall(8));
		stage.setObject(1, 9, new Wall(8));
		stage.setObject(2, 9, new Wall(8));
		stage.setObject(3, 9, new Flower(false));
		stage.setObject(4, 9, new Wall(8));
		stage.setObject(5, 9, new Wall(8));
		stage.setObject(6, 9, new Wall(8));
		stage.setObject(8, 9, new Flower(false));
		stage.setObject(10, 9, new Wall(8));
		stage.setObject(11, 9, new PFlower(true));
		stage.setObject(12, 9, new PFlower(true));
		stage.setObject(13, 9, new Mushroom(true));
		stage.demon.push(new Demon(stage, 14, 9, DIR_WEST));
		stage.demon.push(new Demon(stage, 15, 9, DIR_WEST));
		stage.setObject(16, 9, new Wall(8));

		//Row 10
		stage.setObject(0, 10, new Wall(8));
		stage.setObject(1, 10, new Key());
		stage.setObject(5, 10, new Door());
		stage.setObject(6, 10, new Flower(false));
		stage.setObject(8, 10, new Wall(8));
		stage.setObject(9, 10, new Key());
		stage.setObject(10, 10, new Wall(8));
		stage.setObject(11, 10, new PFlower(true));
		stage.setObject(12, 10, new PFlower(true));
		stage.setObject(13, 10, new Mushroom(true));
		stage.demon.push(new Demon(stage, 14, 10, DIR_WEST));
		stage.demon.push(new Demon(stage, 15, 10, DIR_WEST));
		stage.setObject(16, 10, new Wall(8));

		//Row 11
		stage.setObject(0, 11, new Wall(8));
		stage.setObject(1, 11, new Wall(8));
		stage.setObject(2, 11, new Wall(8));
		stage.setObject(3, 11, new Wall(8));
		stage.setObject(4, 11, new Wall(8));
		stage.setObject(5, 11, new Wall(8));
		stage.setObject(6, 11, new Wall(8));
		stage.setObject(7, 11, new Wall(8));
		stage.setObject(8, 11, new Wall(8));
		stage.setObject(9, 11, new Wall(8));
		stage.setObject(10, 11, new Wall(8));
		stage.setObject(11, 11, new Wall(8));
		stage.setObject(12, 11, new Wall(8));
		stage.setObject(13, 11, new Wall(8));
		stage.setObject(14, 11, new Wall(8));
		stage.setObject(15, 11, new Wall(8));
		stage.setObject(16, 11, new Wall(8));

		/* Custom script */
		stage.getObject(14, 6).eat = undefined;
		stage.getObject(13, 7).eat = undefined;
		stage.getObject(13, 8).eat = undefined;
		stage.getObject(13, 9).eat = undefined;
		stage.getObject(13, 10).eat = undefined;
		stage.getObject(13, 6).onPick = function(player) {
			var stage = player.stage;
			stage.destroyObject(14, 6);
			stage.destroyObject(13, 7);
			stage.getObject(13, 8).eat = true;
			stage.getObject(13, 9).eat = true;
			stage.getObject(13, 10).eat = true;
		}
	}),
	/* Level 5 */
	new Stage(function(stage){
		//Row 0
		stage.setObject(0, 0, new Wall(5));
		stage.setObject(1, 0, new Wall(5));
		stage.setObject(2, 0, new Wall(5));
		stage.setObject(3, 0, new Wall(5));
		stage.setObject(4, 0, new Wall(5));
		stage.setObject(5, 0, new Wall(5));
		stage.setObject(6, 0, new Wall(5));
		stage.setObject(7, 0, new Wall(5));
		stage.setObject(8, 0, new Wall(5));
		stage.setObject(9, 0, new Wall(5));
		stage.setObject(10, 0, new Wall(5));
		stage.setObject(11, 0, new Wall(5));
		stage.setObject(12, 0, new Wall(5));
		stage.setObject(13, 0, new Wall(5));
		stage.setObject(14, 0, new Wall(5));
		stage.setObject(15, 0, new Wall(5));
		stage.setObject(16, 0, new Wall(5));

		//Row 1
		stage.setObject(0, 1, new Wall(5));
		stage.setObject(1, 1, new Egg());
		stage.setObject(3, 1, new Flower(false));
		stage.setObject(5, 1, new Egg());
		stage.setObject(7, 1, new Flower(true));
		stage.setObject(8, 1, new Egg());
		stage.setObject(9, 1, new Wall(5));
		stage.setObject(13, 1, new Wall(5));
		stage.setObject(14, 1, new Treasure());
		stage.setObject(15, 1, new Flower(true));
		stage.setObject(16, 1, new Wall(5));

		//Row 2
		stage.setObject(0, 2, new Wall(5));
		stage.setObject(2, 2, new Flower(false));
		stage.setObject(4, 2, new Flower(false));
		stage.setObject(6, 2, new Flower(true));
		stage.setObject(7, 2, new Flower(true));
		stage.setObject(9, 2, new Wall(5));
		stage.setObject(11, 2, new PFlower(true));
		stage.setObject(13, 2, new Wall(5));
		stage.setObject(14, 2, new Flower(true));
		stage.setObject(16, 2, new Wall(5));

		//Row 3
		stage.setObject(0, 3, new Wall(5));
		stage.setObject(1, 3, new Flower(false));
		stage.setObject(2, 3, new Bomb());
		stage.setObject(3, 3, new Flower(false));
		stage.setObject(4, 3, new Flower(false));
		stage.setObject(5, 3, new Flower(false));
		stage.setObject(6, 3, new Flower(true));
		stage.setObject(7, 3, new Crystal());
		stage.setObject(8, 3, new Flower(true));
		stage.setObject(9, 3, new Crystal());
		stage.setObject(11, 3, new Wall(5));
		stage.setObject(12, 3, new Apple());
		stage.setObject(13, 3, new Wall(5));
		stage.setObject(14, 3, new Wall(5));
		stage.setObject(15, 3, new Flower(true));
		stage.setObject(16, 3, new Wall(5));

		//Row 4
		stage.setObject(0, 4, new Wall(5));
		stage.setObject(1, 4, new Flower(false));
		stage.setObject(2, 4, new Bomb());
		stage.player.push(new Player(stage, 3, 4));
		stage.setObject(4, 4, new Bomb());
		stage.setObject(5, 4, new Flower(false));
		stage.setObject(7, 4, new Flower(true));
		stage.setObject(8, 4, new Flower(true));
		stage.setObject(9, 4, new Flower(true));
		stage.setObject(10, 4, new Wall(5));
		stage.setObject(11, 4, new Wall(5));
		stage.setObject(13, 4, new Flower(false));
		stage.setObject(14, 4, new Flower(true));
		stage.setObject(15, 4, new Treasure());
		stage.setObject(16, 4, new Wall(5));

		//Row 5
		stage.setObject(0, 5, new Wall(5));
		stage.setObject(1, 5, new Wall(5));
		stage.setObject(2, 5, new Wall(5));
		stage.setObject(4, 5, new Wall(5));
		stage.setObject(5, 5, new Wall(5));
		stage.setObject(6, 5, new Wall(5));
		stage.setObject(7, 5, new Crystal());
		stage.setObject(8, 5, new Wall(5));
		stage.setObject(9, 5, new Wall(5));
		stage.setObject(10, 5, new Wall(5));
		stage.setObject(11, 5, new Flower(true));
		stage.setObject(13, 5, new Flower(false));
		stage.setObject(14, 5, new Flower(true));
		stage.setObject(15, 5, new Flower(true));
		stage.setObject(16, 5, new Wall(5));

		//Row 6
		stage.setObject(0, 6, new Wall(5));
		stage.setObject(1, 6, new LaserGun());
		stage.setObject(8, 6, new Wall(5));
		stage.setObject(9, 6, new LaserGun());
		stage.setObject(10, 6, new Wall(5));
		stage.setObject(11, 6, new Flower(true));
		stage.setObject(13, 6, new Flower(false));
		stage.setObject(14, 6, new Flower(false));
		stage.setObject(15, 6, new Flower(false));
		stage.setObject(16, 6, new Wall(5));

		//Row 7
		stage.setObject(0, 7, new Wall(5));
		stage.setObject(1, 7, new Wall(5));
		stage.setObject(2, 7, new Wall(5));
		stage.setObject(3, 7, new Wall(5));
		stage.setObject(4, 7, new Wall(5));
		stage.setObject(5, 7, new Wall(5));
		stage.setObject(6, 7, new Wall(5));
		stage.setObject(8, 7, new Wall(5));
		stage.setObject(10, 7, new PFlower(true));
		stage.setObject(11, 7, new Egg());
		stage.setObject(14, 7, new Flower(true));
		stage.setObject(15, 7, new Crystal());
		stage.setObject(16, 7, new Wall(5));

		//Row 8
		stage.setObject(0, 8, new Wall(5));
		stage.setObject(1, 8, new Key());
		stage.setObject(2, 8, new Wall(5));
		stage.setObject(3, 8, new Flower(false));
		stage.setObject(4, 8, new Apple());
		stage.setObject(5, 8, new Flower(true));
		stage.setObject(6, 8, new Apple());
		stage.setObject(8, 8, new Apple());
		stage.setObject(14, 8, new Wall(5));
		stage.setObject(15, 8, new Egg());
		stage.setObject(16, 8, new Wall(5));

		//Row 9
		stage.setObject(0, 9, new Wall(5));
		stage.setObject(1, 9, new Flower(true));
		stage.setObject(2, 9, new Wall(5));
		stage.setObject(3, 9, new Flower(false));
		stage.setObject(4, 9, new Apple());
		stage.setObject(5, 9, new Flower(false));
		stage.setObject(6, 9, new Apple());
		stage.setObject(8, 9, new Apple());
		stage.setObject(9, 9, new Apple());
		stage.setObject(10, 9, new Wall(5));
		stage.setObject(11, 9, new Flower(false));
		stage.setObject(12, 9, new Flower(false));
		stage.setObject(14, 9, new Wall(5));
		stage.setObject(15, 9, new Door());
		stage.setObject(16, 9, new Wall(5));

		//Row 10
		stage.setObject(0, 10, new Wall(5));
		stage.setObject(1, 10, new Flower(false));
		stage.setObject(3, 10, new Flower(true));
		stage.setObject(5, 10, new Flower(false));
		stage.setObject(9, 10, new Flower(true));
		stage.setObject(10, 10, new Wall(5));
		stage.setObject(12, 10, new Flower(false));
		stage.setObject(13, 10, new Flower(false));
		stage.setObject(14, 10, new Wall(5));
		stage.setObject(15, 10, new Mushroom(false));
		stage.setObject(16, 10, new Wall(5));

		//Row 11
		stage.setObject(0, 11, new Wall(5));
		stage.setObject(1, 11, new Wall(5));
		stage.setObject(2, 11, new Wall(5));
		stage.setObject(3, 11, new Wall(5));
		stage.setObject(4, 11, new Wall(5));
		stage.setObject(5, 11, new Wall(5));
		stage.setObject(6, 11, new Wall(5));
		stage.setObject(7, 11, new Wall(5));
		stage.setObject(8, 11, new Wall(5));
		stage.setObject(9, 11, new Wall(5));
		stage.setObject(10, 11, new Wall(5));
		stage.setObject(11, 11, new Wall(5));
		stage.setObject(12, 11, new Wall(5));
		stage.setObject(13, 11, new Wall(5));
		stage.setObject(14, 11, new Wall(5));
		stage.setObject(15, 11, new Wall(5));
		stage.setObject(16, 11, new Wall(5));

	}),
	/* Level 6 */
	new Stage(function(stage){
		//Row 0
		stage.setObject(0, 0, new Wall(2));
		stage.setObject(1, 0, new Wall(2));
		stage.setObject(2, 0, new Wall(2));
		stage.setObject(3, 0, new Wall(2));
		stage.setObject(4, 0, new Wall(2));
		stage.setObject(5, 0, new Wall(2));
		stage.setObject(6, 0, new Wall(2));
		stage.setObject(7, 0, new Wall(2));
		stage.setObject(8, 0, new Wall(2));
		stage.setObject(9, 0, new Wall(2));
		stage.setObject(10, 0, new Wall(2));
		stage.setObject(11, 0, new Wall(2));
		stage.setObject(12, 0, new Wall(2));
		stage.setObject(13, 0, new Wall(2));
		stage.setObject(14, 0, new Wall(2));
		stage.setObject(15, 0, new Wall(2));
		stage.setObject(16, 0, new Wall(2));

		//Row 1
		stage.setObject(0, 1, new Wall(2));
		stage.setObject(2, 1, new Crystal());
		stage.setObject(3, 1, new Flower(false));
		stage.setObject(5, 1, new Flower(false));
		stage.setObject(6, 1, new Flower(false));
		stage.setObject(8, 1, new Flower(false));
		stage.setObject(9, 1, new Wall(2));
		stage.setObject(10, 1, new PFlower(true));
		stage.setObject(12, 1, new Flower(false));
		stage.setObject(13, 1, new Wall(2));
		stage.setObject(14, 1, new Flower(false));
		stage.setObject(15, 1, new Treasure());
		stage.setObject(16, 1, new Wall(2));

		//Row 2
		stage.setObject(0, 2, new Wall(2));
		stage.setObject(1, 2, new Crystal());
		stage.setObject(9, 2, new Door());
		stage.setObject(11, 2, new Flower(false));
		stage.setObject(13, 2, new Wall(2));
		stage.setObject(14, 2, new Treasure());
		stage.setObject(15, 2, new Flower(false));
		stage.setObject(16, 2, new Wall(2));

		//Row 3
		stage.setObject(0, 3, new Wall(2));
		stage.setObject(1, 3, new Key());
		stage.setObject(2, 3, new PFlower(true));
		stage.setObject(4, 3, new Apple());
		stage.setObject(5, 3, new Flower(false));
		stage.setObject(8, 3, new Flower(false));
		stage.setObject(9, 3, new Wall(2));
		stage.setObject(10, 3, new Flower(false));
		stage.setObject(12, 3, new Flower(false));
		stage.setObject(13, 3, new Wall(2));
		stage.setObject(14, 3, new Flower(false));
		stage.setObject(15, 3, new Treasure());
		stage.setObject(16, 3, new Wall(2));

		//Row 4
		stage.setObject(0, 4, new Wall(2));
		stage.setObject(1, 4, new Wall(2));
		stage.setObject(2, 4, new Wall(2));
		stage.setObject(3, 4, new Wall(2));
		stage.setObject(4, 4, new Wall(2));
		stage.setObject(5, 4, new Wall(2));
		stage.setObject(6, 4, new Wall(2));
		stage.setObject(7, 4, new LaserGun());
		stage.setObject(8, 4, new Wall(2));
		stage.setObject(9, 4, new Wall(2));
		stage.setObject(10, 4, new Crystal());
		stage.setObject(11, 4, new Wall(2));
		stage.setObject(12, 4, new Wall(2));
		stage.setObject(13, 4, new Wall(2));
		stage.setObject(14, 4, new Treasure());
		stage.setObject(15, 4, new Flower(false));
		stage.setObject(16, 4, new Wall(2));

		//Row 5
		stage.setObject(0, 5, new Wall(2));
		stage.setObject(1, 5, new LaserGun());
		stage.setObject(2, 5, new Flower(true));
		stage.setObject(3, 5, new Bomb());
		stage.setObject(4, 5, new Bomb());
		stage.setObject(5, 5, new Bomb());
		stage.setObject(6, 5, new Bomb());
		stage.setObject(8, 5, new Wall(2));
		stage.setObject(9, 5, new Crystal());
		stage.setObject(11, 5, new Wall(2));
		stage.setObject(12, 5, new Egg());
		stage.setObject(13, 5, new Wall(2));
		stage.setObject(14, 5, new Wall(2));
		stage.setObject(15, 5, new Crystal());
		stage.setObject(16, 5, new Wall(2));

		//Row 6
		stage.setObject(0, 6, new Wall(2));
		stage.setObject(1, 6, new Wall(2));
		stage.setObject(2, 6, new Wall(2));
		stage.setObject(3, 6, new Wall(2));
		stage.setObject(4, 6, new Wall(2));
		stage.setObject(5, 6, new Wall(2));
		stage.setObject(6, 6, new Wall(2));
		stage.setObject(7, 6, new Bomb());
		stage.setObject(8, 6, new Wall(2));
		stage.setObject(9, 6, new PFlower(false));
		stage.setObject(11, 6, new Wall(2));
		stage.setObject(12, 6, new PFlower(true));
		stage.setObject(15, 6, new Flower(true));
		stage.setObject(16, 6, new Wall(2));

		//Row 7
		stage.setObject(0, 7, new Wall(2));
		stage.setObject(2, 7, new Flower(false));
		stage.setObject(4, 7, new Flower(false));
		stage.setObject(6, 7, new Flower(false));
		stage.setObject(8, 7, new Wall(2));
		stage.setObject(9, 7, new Apple());
		stage.setObject(10, 7, new Crystal());
		stage.setObject(11, 7, new Wall(2));
		stage.setObject(12, 7, new Flower(false));
		stage.setObject(14, 7, new Bomb());
		stage.setObject(16, 7, new Wall(2));

		//Row 8
		stage.setObject(0, 8, new Wall(2));
		stage.setObject(1, 8, new Flower(false));
		stage.setObject(2, 8, new Apple());
		stage.setObject(3, 8, new AppleRotten());
		stage.player.push(new Player(stage, 4, 8));
		stage.setObject(5, 8, new AppleRotten());
		stage.setObject(6, 8, new Apple());
		stage.setObject(7, 8, new Flower(false));
		stage.setObject(8, 8, new Wall(2));
		stage.setObject(9, 8, new Egg());
		stage.setObject(11, 8, new Crystal());
		stage.setObject(14, 8, new Flower(false));
		stage.setObject(15, 8, new Flower(true));
		stage.setObject(16, 8, new Wall(2));

		//Row 9
		stage.setObject(0, 9, new Wall(2));
		stage.setObject(2, 9, new Flower(false));
		stage.setObject(3, 9, new Crystal());
		stage.setObject(4, 9, new Flower(false));
		stage.setObject(5, 9, new Crystal());
		stage.setObject(6, 9, new Flower(false));
		stage.setObject(8, 9, new Wall(2));
		stage.setObject(9, 9, new Wall(2));
		stage.setObject(10, 9, new Crystal());
		stage.setObject(11, 9, new Wall(2));
		stage.setObject(12, 9, new Flower(false));
		stage.setObject(13, 9, new Flower(false));
		stage.setObject(14, 9, new Wall(2));
		stage.setObject(15, 9, new Door());
		stage.setObject(16, 9, new Wall(2));

		//Row 10
		stage.setObject(0, 10, new Wall(2));
		stage.setObject(1, 10, new Flower(false));
		stage.setObject(3, 10, new Flower(false));
		stage.setObject(5, 10, new Flower(false));
		stage.setObject(7, 10, new Flower(false));
		stage.setObject(8, 10, new Wall(2));
		stage.setObject(9, 10, new Key());
		stage.setObject(10, 10, new Flower(false));
		stage.setObject(11, 10, new Wall(2));
		stage.setObject(12, 10, new Flower(true));
		stage.setObject(13, 10, new Wall(2));
		stage.setObject(14, 10, new Mushroom(false));
		stage.setObject(15, 10, new Flower(false));
		stage.setObject(16, 10, new Wall(2));

		//Row 11
		stage.setObject(0, 11, new Wall(2));
		stage.setObject(1, 11, new Wall(2));
		stage.setObject(2, 11, new Wall(2));
		stage.setObject(3, 11, new Wall(2));
		stage.setObject(4, 11, new Wall(2));
		stage.setObject(5, 11, new Wall(2));
		stage.setObject(6, 11, new Wall(2));
		stage.setObject(7, 11, new Wall(2));
		stage.setObject(8, 11, new Wall(2));
		stage.setObject(9, 11, new Wall(2));
		stage.setObject(10, 11, new Wall(2));
		stage.setObject(11, 11, new Wall(2));
		stage.setObject(12, 11, new Wall(2));
		stage.setObject(13, 11, new Wall(2));
		stage.setObject(14, 11, new Wall(2));
		stage.setObject(15, 11, new Wall(2));
		stage.setObject(16, 11, new Wall(2));

	}),
	/* Level 7 */
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
		stage.setObject(1, 1, new LaserGun());
		stage.setObject(2, 1, new Crystal());
		stage.setObject(3, 1, new Flower(false));
		stage.setObject(4, 1, new Treasure());
		stage.setObject(5, 1, new Flower(false));
		stage.setObject(6, 1, new Wall(7));
		stage.setObject(7, 1, new Flower(false));
		stage.setObject(8, 1, new Flower(false));
		stage.setObject(9, 1, new Wall(7));
		stage.setObject(10, 1, new Flower(false));
		stage.setObject(11, 1, new Flower(false));
		stage.setObject(12, 1, new Flower(false));
		stage.setObject(13, 1, new Wall(7));
		stage.setObject(14, 1, new Egg());
		stage.setObject(15, 1, new Mushroom(false));
		stage.setObject(16, 1, new Wall(7));

		//Row 2
		stage.setObject(0, 2, new Wall(7));
		stage.setObject(2, 2, new PFlower(true));
		stage.setObject(3, 2, new Flower(false));
		stage.setObject(4, 2, new Flower(false));
		stage.setObject(5, 2, new PFlower(true));
		stage.setObject(6, 2, new Wall(7));
		stage.setObject(7, 2, new Flower(false));
		stage.setObject(8, 2, new Flower(false));
		stage.setObject(9, 2, new Crystal());
		stage.setObject(10, 2, new Flower(false));
		stage.setObject(11, 2, new Apple());
		stage.setObject(12, 2, new Flower(false));
		stage.setObject(13, 2, new Wall(7));
		stage.setObject(14, 2, new Flower(true));
		stage.setObject(15, 2, new Flower(true));
		stage.setObject(16, 2, new Wall(7));

		//Row 3
		stage.setObject(0, 3, new Wall(7));
		stage.setObject(2, 3, new Key());
		stage.setObject(3, 3, new AppleRotten());
		stage.setObject(6, 3, new Flower(false));
		stage.setObject(7, 3, new Flower(false));
		stage.setObject(8, 3, new Flower(false));
		stage.setObject(9, 3, new Wall(7));
		stage.setObject(10, 3, new Wall(7));
		stage.setObject(11, 3, new Wall(7));
		stage.setObject(12, 3, new Wall(7));
		stage.setObject(13, 3, new Wall(7));
		stage.setObject(14, 3, new Flower(true));
		stage.setObject(15, 3, new Flower(true));
		stage.setObject(16, 3, new Wall(7));

		//Row 4
		stage.setObject(0, 4, new Wall(7));
		stage.setObject(1, 4, new Apple());
		stage.setObject(2, 4, new PFlower(false));
		stage.setObject(3, 4, new Apple());
		stage.setObject(4, 4, new Wall(10));
		stage.setObject(5, 4, new Wall(7));
		stage.setObject(6, 4, new Wall(7));
		stage.setObject(7, 4, new Wall(7));
		stage.setObject(9, 4, new Flower(true));
		stage.setObject(10, 4, new Flower(false));
		stage.setObject(11, 4, new Door());
		stage.setObject(12, 4, new Door());
		stage.setObject(13, 4, new Flower(true));
		stage.setObject(14, 4, new Flower(true));
		stage.setObject(15, 4, new Flower(true));
		stage.setObject(16, 4, new Wall(7));

		//Row 5
		stage.setObject(0, 5, new Wall(7));
		stage.player.push(new Player(stage, 1, 5));
		stage.setObject(2, 5, new Apple());
		stage.setObject(3, 5, new Wall(10));
		stage.setObject(4, 5, new LaserGun());
		stage.setObject(5, 5, new Crystal());
		stage.setObject(6, 5, new PFlower(false));
		stage.setObject(7, 5, new Wall(7));
		stage.setObject(8, 5, new Flower(false));
		stage.setObject(9, 5, new Flower(true));
		stage.setObject(11, 5, new Wall(7));
		stage.setObject(12, 5, new Wall(7));
		stage.setObject(13, 5, new Wall(7));
		stage.setObject(14, 5, new Wall(7));
		stage.setObject(15, 5, new Wall(7));
		stage.setObject(16, 5, new Wall(7));

		//Row 6
		stage.setObject(0, 6, new Wall(7));
		stage.setObject(1, 6, new Flower(false));
		stage.setObject(2, 6, new Flower(false));
		stage.setObject(3, 6, new Crystal());
		stage.setObject(6, 6, new Flower(true));
		stage.setObject(7, 6, new Flower(true));
		stage.setObject(9, 6, new Flower(false));
		stage.setObject(10, 6, new Flower(false));
		stage.setObject(12, 6, new Flower(false));
		stage.setObject(13, 6, new Apple());
		stage.setObject(16, 6, new Wall(7));

		//Row 7
		stage.setObject(0, 7, new Wall(7));
		stage.setObject(1, 7, new Wall(7));
		stage.setObject(3, 7, new Flower(false));
		stage.setObject(5, 7, new Flower(false));
		stage.setObject(7, 7, new Wall(7));
		stage.setObject(8, 7, new Crystal());
		stage.setObject(10, 7, new Flower(false));
		stage.setObject(11, 7, new Flower(false));
		stage.setObject(12, 7, new Apple());
		stage.setObject(13, 7, new Flower(false));
		stage.setObject(14, 7, new Wall(10));
		stage.setObject(15, 7, new PFlower(true));
		stage.setObject(16, 7, new Wall(7));

		//Row 8
		stage.setObject(0, 8, new Wall(7));
		stage.setObject(1, 8, new Egg());
		stage.setObject(2, 8, new Crystal());
		stage.setObject(3, 8, new Wall(7));
		stage.setObject(4, 8, new Flower(false));
		stage.setObject(5, 8, new Crystal());
		stage.setObject(6, 8, new Flower(false));
		stage.setObject(7, 8, new Wall(7));
		stage.setObject(8, 8, new Flower(false));
		stage.setObject(9, 8, new Flower(false));
		stage.setObject(10, 8, new Apple());
		stage.setObject(11, 8, new Apple());
		stage.setObject(12, 8, new PFlower(false));
		stage.setObject(13, 8, new Flower(false));
		stage.setObject(15, 8, new Flower(false));
		stage.setObject(16, 8, new Wall(7));

		//Row 9
		stage.setObject(0, 9, new Wall(7));
		stage.setObject(1, 9, new Crystal());
		stage.setObject(3, 9, new Wall(7));
		stage.setObject(4, 9, new Flower(false));
		stage.setObject(5, 9, new Bomb());
		stage.setObject(6, 9, new Flower(true));
		stage.setObject(7, 9, new Wall(7));
		stage.setObject(9, 9, new Wall(7));
		stage.setObject(10, 9, new Wall(7));
		stage.setObject(11, 9, new Wall(7));
		stage.setObject(12, 9, new Wall(7));
		stage.setObject(13, 9, new Wall(7));
		stage.setObject(14, 9, new Wall(7));
		stage.setObject(15, 9, new Door());
		stage.setObject(16, 9, new Wall(7));

		//Row 10
		stage.setObject(0, 10, new Wall(7));
		stage.setObject(1, 10, new LaserGun());
		stage.setObject(2, 10, new Crystal());
		stage.setObject(5, 10, new Crystal());
		stage.setObject(7, 10, new Flower(false));
		stage.setObject(8, 10, new Apple());
		stage.setObject(9, 10, new Wall(7));
		stage.setObject(10, 10, new Treasure());
		stage.setObject(11, 10, new Flower(false));
		stage.setObject(12, 10, new Key());
		stage.setObject(13, 10, new Flower(false));
		stage.setObject(14, 10, new Key());
		stage.setObject(15, 10, new Flower(false));
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
	/* Level 8 */
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
		stage.setObject(1, 1, new LaserGun());
		stage.demon.push(new Demon(stage, 2, 1, DIR_EAST));
		stage.setObject(8, 1, new Ball());
		stage.setObject(10, 1, new Wall(3));
		stage.setObject(11, 1, new Flower(false));
		stage.setObject(12, 1, new Flower(false));
		stage.setObject(13, 1, new Flower(false));
		stage.setObject(14, 1, new Flower(false));
		stage.setObject(15, 1, new Flower(false));
		stage.setObject(16, 1, new Wall(3));

		//Row 2
		stage.setObject(0, 2, new Wall(3));
		stage.setObject(1, 2, new Wall(3));
		stage.setObject(2, 2, new Wall(3));
		stage.setObject(3, 2, new Wall(3));
		stage.setObject(4, 2, new Wall(3));
		stage.setObject(6, 2, new Apple());
		stage.setObject(7, 2, new Wall(3));
		stage.setObject(9, 2, new Flower(false));
		stage.setObject(11, 2, new Flower(false));
		stage.setObject(12, 2, new Flower(false));
		stage.setObject(13, 2, new Flower(false));
		stage.setObject(14, 2, new Flower(false));
		stage.setObject(15, 2, new Flower(false));
		stage.setObject(16, 2, new Wall(3));

		//Row 3
		stage.setObject(0, 3, new Wall(3));
		stage.setObject(1, 3, new Mushroom(false));
		stage.setObject(2, 3, new Flower(true));
		stage.setObject(3, 3, new Flower(false));
		stage.setObject(4, 3, new Flower(true));
		stage.setObject(6, 3, new Flower(false));
		stage.setObject(7, 3, new Wall(3));
		stage.setObject(8, 3, new Wall(3));
		stage.setObject(9, 3, new Wall(3));
		stage.setObject(10, 3, new Flower(false));
		stage.setObject(11, 3, new Wall(3));
		stage.setObject(12, 3, new Wall(3));
		stage.setObject(13, 3, new Wall(3));
		stage.setObject(14, 3, new Wall(3));
		stage.setObject(15, 3, new Wall(3));
		stage.setObject(16, 3, new Wall(3));

		//Row 4
		stage.setObject(0, 4, new Wall(3));
		stage.setObject(1, 4, new Wall(3));
		stage.setObject(2, 4, new Wall(3));
		stage.setObject(3, 4, new Wall(3));
		stage.setObject(4, 4, new Wall(3));
		stage.player.push(new Player(stage, 5, 4));
		stage.setObject(6, 4, new Ball());
		stage.setObject(7, 4, new Door());
		stage.setObject(8, 4, new Flower(false));
		stage.setObject(9, 4, new Wall(3));
		stage.setObject(10, 4, new Flower(false));
		stage.setObject(11, 4, new Flower(false));
		stage.setObject(13, 4, new Flower(false));
		stage.setObject(15, 4, new Flower(false));
		stage.setObject(16, 4, new Wall(3));

		//Row 5
		stage.setObject(0, 5, new Wall(3));
		stage.setObject(1, 5, new Egg());
		stage.setObject(2, 5, new Wall(3));
		stage.setObject(3, 5, new Flower(false));
		stage.setObject(5, 5, new Flower(false));
		stage.setObject(7, 5, new Wall(3));
		stage.setObject(8, 5, new Wall(3));
		stage.setObject(9, 5, new Wall(3));
		stage.setObject(10, 5, new Flower(false));
		stage.setObject(12, 5, new Apple());
		stage.setObject(13, 5, new Apple());
		stage.setObject(14, 5, new Flower(false));
		stage.setObject(16, 5, new Wall(3));

		//Row 6
		stage.setObject(0, 6, new Wall(3));
		stage.setObject(1, 6, new Flower(false));
		stage.setObject(4, 6, new Flower(false));
		stage.setObject(6, 6, new Flower(false));
		stage.setObject(7, 6, new Wall(3));
		stage.setObject(8, 6, new PFlower(true));
		stage.setObject(9, 6, new Wall(3));
		stage.setObject(11, 6, new Flower(false));
		stage.setObject(12, 6, new Apple());
		stage.setObject(13, 6, new AppleRotten());
		stage.setObject(15, 6, new Flower(false));
		stage.setObject(16, 6, new Wall(3));

		//Row 7
		stage.setObject(0, 7, new Wall(3));
		stage.setObject(1, 7, new Flower(true));
		stage.setObject(2, 7, new PFlower(false));
		stage.setObject(4, 7, new Bomb());
		stage.setObject(5, 7, new Flower(false));
		stage.setObject(6, 7, new Flower(false));
		stage.setObject(10, 7, new Flower(false));
		stage.setObject(11, 7, new Flower(false));
		stage.setObject(12, 7, new Flower(false));
		stage.setObject(14, 7, new Flower(false));
		stage.setObject(16, 7, new Wall(3));

		//Row 8
		stage.setObject(0, 8, new Wall(3));
		stage.setObject(1, 8, new Egg());
		stage.setObject(2, 8, new Wall(3));
		stage.setObject(3, 8, new Wall(3));
		stage.setObject(4, 8, new Wall(3));
		stage.setObject(6, 8, new Wall(3));
		stage.setObject(7, 8, new Wall(3));
		stage.setObject(8, 8, new Wall(3));
		stage.setObject(9, 8, new Wall(3));
		stage.setObject(12, 8, new Flower(false));
		stage.setObject(13, 8, new PFlower(true));
		stage.setObject(14, 8, new Egg());
		stage.setObject(15, 8, new PFlower(true));
		stage.setObject(16, 8, new Wall(3));

		//Row 9
		stage.setObject(0, 9, new Wall(3));
		stage.setObject(1, 9, new Wall(3));
		stage.setObject(2, 9, new Wall(3));
		stage.setObject(3, 9, new AppleRotten());
		stage.setObject(4, 9, new Wall(3));
		stage.setObject(5, 9, new Apple());
		stage.setObject(6, 9, new Wall(3));
		stage.setObject(7, 9, new Treasure());
		stage.setObject(8, 9, new Treasure());
		stage.setObject(9, 9, new Wall(3));
		stage.setObject(10, 9, new Wall(3));
		stage.setObject(11, 9, new Flower(false));
		stage.setObject(12, 9, new Flower(false));
		stage.setObject(13, 9, new Wall(3));
		stage.setObject(14, 9, new Wall(3));
		stage.setObject(15, 9, new Wall(3));
		stage.setObject(16, 9, new Wall(3));

		//Row 10
		stage.setObject(0, 10, new Wall(3));
		stage.setObject(1, 10, new LaserGun());
		stage.setObject(4, 10, new Flower(false));
		stage.setObject(6, 10, new Flower(false));
		stage.setObject(7, 10, new Flower(false));
		stage.setObject(9, 10, new Key());
		stage.demon.push(new Demon(stage, 14, 10, DIR_WEST));
		stage.setObject(15, 10, new LaserGun());
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
	/* Level 9 */
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
		stage.setObject(1, 1, new Crystal());
		stage.setObject(3, 1, new Crystal());
		stage.setObject(5, 1, new Crystal());
		stage.setObject(7, 1, new Wall(1));
		stage.setObject(8, 1, new Egg());
		stage.setObject(9, 1, new Wall(1));
		stage.setObject(11, 1, new Egg());
		stage.setObject(12, 1, new PFlower(true));
		stage.setObject(13, 1, new Wall(1));
		stage.setObject(14, 1, new Mushroom(false));
		stage.setObject(15, 1, new Flower(true));
		stage.setObject(16, 1, new Wall(1));

		//Row 2
		stage.setObject(0, 2, new Wall(1));
		stage.setObject(2, 2, new Crystal());
		stage.setObject(4, 2, new Crystal());
		stage.setObject(6, 2, new Crystal());
		stage.setObject(7, 2, new PFlower(true));
		stage.setObject(9, 2, new Wall(1));
		stage.setObject(10, 2, new Flower(false));
		stage.setObject(13, 2, new Wall(1));
		stage.setObject(14, 2, new Flower(true));
		stage.setObject(15, 2, new Flower(true));
		stage.setObject(16, 2, new Wall(1));

		//Row 3
		stage.setObject(0, 3, new Wall(1));
		stage.setObject(1, 3, new Crystal());
		stage.setObject(3, 3, new Crystal());
		stage.player.push(new Player(stage, 4, 3));
		stage.setObject(5, 3, new Crystal());
		stage.setObject(7, 3, new Wall(1));
		stage.setObject(8, 3, new Flower(true));
		stage.setObject(9, 3, new Door());
		stage.setObject(11, 3, new Flower(false));
		stage.setObject(12, 3, new Flower(false));
		stage.setObject(13, 3, new Wall(1));
		stage.setObject(14, 3, new Wall(1));
		stage.setObject(15, 3, new Flower(true));
		stage.setObject(16, 3, new Wall(1));

		//Row 4
		stage.setObject(0, 4, new Wall(1));
		stage.setObject(2, 4, new Crystal());
		stage.setObject(4, 4, new Crystal());
		stage.setObject(6, 4, new Crystal());
		stage.setObject(7, 4, new PFlower(true));
		stage.setObject(9, 4, new Wall(1));
		stage.setObject(10, 4, new Flower(false));
		stage.setObject(12, 4, new Ball());
		stage.setObject(13, 4, new Door());
		stage.setObject(14, 4, new Wall(1));
		stage.setObject(15, 4, new Flower(true));
		stage.setObject(16, 4, new Wall(1));

		//Row 5
		stage.setObject(0, 5, new Wall(1));
		stage.setObject(1, 5, new Crystal());
		stage.setObject(3, 5, new Crystal());
		stage.setObject(5, 5, new Crystal());
		stage.setObject(7, 5, new Wall(1));
		stage.setObject(8, 5, new Egg());
		stage.setObject(9, 5, new Wall(1));
		stage.setObject(13, 5, new Wall(1));
		stage.setObject(14, 5, new Wall(1));
		stage.setObject(15, 5, new Door());
		stage.setObject(16, 5, new Wall(1));

		//Row 6
		stage.setObject(0, 6, new Wall(1));
		stage.setObject(1, 6, new Wall(1));
		stage.setObject(2, 6, new Wall(1));
		stage.setObject(4, 6, new Wall(1));
		stage.setObject(5, 6, new Wall(1));
		stage.setObject(6, 6, new Wall(1));
		stage.setObject(7, 6, new Wall(1));
		stage.setObject(8, 6, new Wall(1));
		stage.setObject(9, 6, new Wall(1));
		stage.setObject(10, 6, new Key());
		stage.setObject(11, 6, new Flower(false));
		stage.setObject(12, 6, new Apple());
		stage.setObject(14, 6, new Flower(true));
		stage.setObject(15, 6, new Flower(true));
		stage.setObject(16, 6, new Wall(1));

		//Row 7
		stage.setObject(0, 7, new Wall(1));
		stage.setObject(2, 7, new Bomb());
		stage.setObject(4, 7, new Apple());
		stage.setObject(6, 7, new Apple());
		stage.setObject(7, 7, new Wall(1));
		stage.setObject(8, 7, new LaserGun());
		stage.setObject(9, 7, new Wall(1));
		stage.setObject(10, 7, new PFlower(true));
		stage.setObject(12, 7, new Flower(false));
		stage.setObject(13, 7, new Wall(1));
		stage.setObject(14, 7, new Wall(1));
		stage.setObject(15, 7, new Flower(false));
		stage.setObject(16, 7, new Wall(1));

		//Row 8
		stage.setObject(0, 8, new Wall(1));
		stage.setObject(1, 8, new Apple());
		stage.setObject(3, 8, new Apple());
		stage.setObject(5, 8, new Bomb());
		stage.setObject(7, 8, new Crystal());
		stage.setObject(9, 8, new Wall(1));
		stage.setObject(10, 8, new Key());
		stage.setObject(11, 8, new Apple());
		stage.setObject(12, 8, new Flower(false));
		stage.setObject(13, 8, new Wall(1));
		stage.setObject(14, 8, new Flower(true));
		stage.setObject(15, 8, new Flower(false));
		stage.setObject(16, 8, new Wall(1));

		//Row 9
		stage.setObject(0, 9, new Wall(1));
		stage.setObject(2, 9, new Apple());
		stage.setObject(4, 9, new Apple());
		stage.setObject(6, 9, new Apple());
		stage.setObject(7, 9, new Wall(1));
		stage.setObject(8, 9, new Crystal());
		stage.setObject(11, 9, new Flower(false));
		stage.setObject(13, 9, new Wall(1));
		stage.setObject(14, 9, new Key());
		stage.setObject(15, 9, new Flower(true));
		stage.setObject(16, 9, new Wall(1));

		//Row 10
		stage.setObject(0, 10, new Wall(1));
		stage.setObject(1, 10, new Apple());
		stage.setObject(3, 10, new Apple());
		stage.setObject(5, 10, new Apple());
		stage.setObject(7, 10, new Crystal());
		stage.setObject(8, 10, new Flower(false));
		stage.setObject(9, 10, new Wall(1));
		stage.setObject(10, 10, new Flower(false));
		stage.setObject(12, 10, new Flower(false));
		stage.setObject(13, 10, new Wall(1));
		stage.setObject(14, 10, new Treasure());
		stage.setObject(15, 10, new Treasure());
		stage.setObject(16, 10, new Wall(1));

		//Row 11
		stage.setObject(0, 11, new Wall(1));
		stage.setObject(1, 11, new Wall(1));
		stage.setObject(2, 11, new Wall(1));
		stage.setObject(3, 11, new Wall(1));
		stage.setObject(4, 11, new Wall(1));
		stage.setObject(5, 11, new Wall(1));
		stage.setObject(6, 11, new Wall(1));
		stage.setObject(7, 11, new Wall(1));
		stage.setObject(8, 11, new Wall(1));
		stage.setObject(9, 11, new Wall(1));
		stage.setObject(10, 11, new Wall(1));
		stage.setObject(11, 11, new Wall(1));
		stage.setObject(12, 11, new Wall(1));
		stage.setObject(13, 11, new Wall(1));
		stage.setObject(14, 11, new Wall(1));
		stage.setObject(15, 11, new Wall(1));
		stage.setObject(16, 11, new Wall(1));

	}),
	/* Level 10 */
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
		stage.setObject(1, 1, new LaserGun());
		stage.setObject(2, 1, new Flower(false));
		stage.setObject(4, 1, new Flower(false));
		stage.setObject(9, 1, new Flower(false));
		stage.setObject(11, 1, new Flower(false));
		stage.setObject(12, 1, new LaserGun());
		stage.setObject(13, 1, new Wall(6));
		stage.setObject(14, 1, new Egg());
		stage.setObject(16, 1, new Wall(6));

		//Row 2
		stage.setObject(0, 2, new Wall(6));
		stage.setObject(1, 2, new Wall(6));
		stage.setObject(2, 2, new Wall(6));
		stage.setObject(3, 2, new Wall(6));
		stage.setObject(5, 2, new Wall(6));
		stage.setObject(7, 2, new Flower(false));
		stage.setObject(8, 2, new Wall(6));
		stage.setObject(9, 2, new Wall(6));
		stage.setObject(11, 2, new Wall(6));
		stage.setObject(12, 2, new Wall(6));
		stage.setObject(13, 2, new Wall(6));
		stage.setObject(16, 2, new Wall(6));

		//Row 3
		stage.setObject(0, 3, new Wall(6));
		stage.setObject(1, 3, new Egg());
		stage.setObject(2, 3, new Door());
		stage.setObject(3, 3, new Flower(false));
		stage.setObject(4, 3, new Flower(false));
		stage.setObject(5, 3, new Wall(6));
		stage.setObject(8, 3, new PFlower(false));
		stage.setObject(9, 3, new Wall(6));
		stage.setObject(10, 3, new Flower(false));
		stage.setObject(12, 3, new Flower(false));
		stage.setObject(13, 3, new Wall(6));
		stage.setObject(14, 3, new Wall(6));
		stage.setObject(15, 3, new Door());
		stage.setObject(16, 3, new Wall(6));

		//Row 4
		stage.setObject(0, 4, new Wall(6));
		stage.setObject(1, 4, new Wall(6));
		stage.setObject(2, 4, new Wall(6));
		stage.setObject(3, 4, new Wall(6));
		stage.setObject(4, 4, new Crystal());
		stage.setObject(5, 4, new Wall(6));
		stage.setObject(6, 4, new Wall(6));
		stage.setObject(7, 4, new Flower(false));
		stage.setObject(9, 4, new Wall(6));
		stage.setObject(10, 4, new Wall(6));
		stage.setObject(11, 4, new Flower(false));
		stage.setObject(16, 4, new Wall(6));

		//Row 5
		stage.setObject(0, 5, new Wall(6));
		stage.setObject(1, 5, new Treasure());
		stage.setObject(2, 5, new Crystal());
		stage.setObject(3, 5, new Flower(false));
		stage.setObject(5, 5, new Wall(6));
		stage.setObject(9, 5, new Wall(6));
		stage.setObject(10, 5, new Door());
		stage.setObject(11, 5, new Apple());
		stage.setObject(13, 5, new Wall(6));
		stage.setObject(14, 5, new Wall(6));
		stage.setObject(15, 5, new Wall(6));
		stage.setObject(16, 5, new Wall(6));

		//Row 6
		stage.setObject(0, 6, new Wall(6));
		stage.setObject(1, 6, new Treasure());
		stage.setObject(2, 6, new Wall(6));
		stage.setObject(3, 6, new Flower(true));
		stage.setObject(5, 6, new Wall(6));
		stage.setObject(7, 6, new Flower(false));
		stage.setObject(8, 6, new Wall(6));
		stage.setObject(9, 6, new Wall(6));
		stage.setObject(10, 6, new Wall(6));
		stage.setObject(11, 6, new Flower(false));
		stage.setObject(13, 6, new Wall(6));
		stage.setObject(14, 6, new LaserGun());
		stage.setObject(15, 6, new LaserGun());
		stage.setObject(16, 6, new Wall(6));

		//Row 7
		stage.setObject(0, 7, new Wall(6));
		stage.setObject(1, 7, new Wall(6));
		stage.setObject(2, 7, new Wall(6));
		stage.setObject(3, 7, new Flower(false));
		stage.setObject(5, 7, new Wall(6));
		stage.player.push(new Player(stage, 6, 7));
		stage.setObject(7, 7, new Key());
		stage.demon.push(new Demon(stage, 9, 7, DIR_WEST));
		stage.setObject(10, 7, new Wall(6));
		stage.setObject(11, 7, new Ball());
		stage.setObject(13, 7, new Crystal());
		stage.setObject(15, 7, new Crystal());
		stage.setObject(16, 7, new Wall(6));

		//Row 8
		stage.setObject(0, 8, new Wall(6));
		stage.setObject(1, 8, new Mushroom(false));
		stage.setObject(2, 8, new Wall(6));
		stage.setObject(3, 8, new Crystal());
		stage.setObject(5, 8, new Wall(6));
		stage.setObject(6, 8, new Wall(6));
		stage.setObject(7, 8, new Wall(6));
		stage.setObject(8, 8, new Wall(6));
		stage.setObject(9, 8, new Wall(6));
		stage.setObject(10, 8, new Wall(6));
		stage.setObject(13, 8, new Flower(false));
		stage.setObject(14, 8, new Flower(false));
		stage.setObject(15, 8, new Key());
		stage.setObject(16, 8, new Wall(6));

		//Row 9
		stage.setObject(0, 9, new Wall(6));
		stage.setObject(1, 9, new Flower(false));
		stage.setObject(2, 9, new Wall(6));
		stage.setObject(4, 9, new Flower(true));
		stage.setObject(5, 9, new Wall(6));
		stage.setObject(6, 9, new PFlower(false));
		stage.setObject(7, 9, new Apple());
		stage.setObject(8, 9, new Apple());
		stage.setObject(9, 9, new PFlower(false));
		stage.setObject(10, 9, new Wall(6));
		stage.setObject(14, 9, new Wall(6));
		stage.setObject(15, 9, new Wall(6));
		stage.setObject(16, 9, new Wall(6));

		//Row 10
		stage.setObject(0, 10, new Wall(6));
		stage.setObject(1, 10, new Flower(true));
		stage.setObject(2, 10, new Door());
		stage.setObject(3, 10, new Flower(true));
		stage.setObject(5, 10, new Flower(true));
		stage.setObject(7, 10, new Key());
		stage.setObject(8, 10, new Key());
		stage.setObject(12, 10, new PFlower(false));
		stage.setObject(14, 10, new Flower(false));
		stage.setObject(15, 10, new Treasure());
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
	/* Level 11 */
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
		stage.setObject(1, 1, new Flower(true));
		stage.setObject(3, 1, new Flower(true));
		stage.setObject(4, 1, new Bomb());
		stage.setObject(9, 1, new Wall(9));
		stage.demon.push(new Demon(stage, 12, 1, DIR_WEST));
		stage.setObject(13, 1, new Wall(9));
		stage.setObject(15, 1, new Treasure());
		stage.setObject(16, 1, new Wall(9));

		//Row 2
		stage.setObject(0, 2, new Wall(9));
		stage.setObject(2, 2, new Crystal());
		stage.setObject(4, 2, new Crystal());
		stage.setObject(5, 2, new Flower(true));
		stage.setObject(6, 2, new Flower(true));
		stage.setObject(7, 2, new Apple());
		stage.setObject(8, 2, new Apple());
		stage.setObject(9, 2, new Wall(9));
		stage.setObject(13, 2, new Wall(9));
		stage.setObject(14, 2, new Flower(true));
		stage.setObject(16, 2, new Wall(9));

		//Row 3
		stage.setObject(0, 3, new Wall(9));
		stage.setObject(1, 3, new Wall(9));
		stage.setObject(2, 3, new Wall(9));
		stage.setObject(3, 3, new Crystal());
		stage.setObject(4, 3, new Wall(9));
		stage.setObject(5, 3, new Wall(9));
		stage.setObject(6, 3, new Wall(9));
		stage.setObject(7, 3, new Wall(9));
		stage.setObject(8, 3, new Wall(9));
		stage.setObject(9, 3, new Wall(9));
		stage.setObject(10, 3, new Wall(9));
		stage.setObject(11, 3, new Door());
		stage.setObject(12, 3, new Wall(9));
		stage.setObject(13, 3, new Wall(9));
		stage.setObject(14, 3, new Flower(true));
		stage.setObject(15, 3, new Wall(9));
		stage.setObject(16, 3, new Wall(9));

		//Row 4
		stage.setObject(0, 4, new Wall(9));
		stage.player.push(new Player(stage, 3, 4));
		stage.setObject(5, 4, new Flower(true));
		stage.setObject(8, 4, new Apple());
		stage.setObject(9, 4, new Flower(true));
		stage.setObject(10, 4, new Apple());
		stage.setObject(12, 4, new Apple());
		stage.setObject(14, 4, new Crystal());
		stage.setObject(15, 4, new Key());
		stage.setObject(16, 4, new Wall(9));

		//Row 5
		stage.setObject(0, 5, new Wall(9));
		stage.setObject(1, 5, new Flower(false));
		stage.setObject(2, 5, new Flower(false));
		stage.setObject(4, 5, new Flower(false));
		stage.setObject(6, 5, new Flower(false));
		stage.setObject(7, 5, new Flower(false));
		stage.setObject(9, 5, new Flower(false));
		stage.setObject(11, 5, new Flower(false));
		stage.setObject(13, 5, new Flower(false));
		stage.setObject(15, 5, new Flower(true));
		stage.setObject(16, 5, new Wall(9));

		//Row 6
		stage.setObject(0, 6, new Wall(9));
		stage.setObject(3, 6, new Flower(false));
		stage.setObject(6, 6, new Flower(false));
		stage.setObject(9, 6, new Flower(false));
		stage.setObject(12, 6, new Flower(false));
		stage.setObject(14, 6, new Flower(false));
		stage.setObject(16, 6, new Wall(9));

		//Row 7
		stage.setObject(0, 7, new Wall(9));
		stage.setObject(1, 7, new Wall(9));
		stage.setObject(2, 7, new Wall(9));
		stage.setObject(3, 7, new Wall(9));
		stage.setObject(4, 7, new Wall(9));
		stage.setObject(6, 7, new Crystal());
		stage.setObject(10, 7, new Flower(false));
		stage.setObject(12, 7, new Wall(9));
		stage.setObject(13, 7, new Wall(9));
		stage.setObject(14, 7, new Wall(9));
		stage.setObject(15, 7, new Wall(9));
		stage.setObject(16, 7, new Wall(9));

		//Row 8
		stage.setObject(0, 8, new Wall(9));
		stage.setObject(2, 8, new Apple());
		stage.setObject(3, 8, new Door());
		stage.setObject(4, 8, new Crystal());
		stage.setObject(5, 8, new Flower(false));
		stage.setObject(7, 8, new Crystal());
		stage.setObject(8, 8, new LaserGun());
		stage.setObject(9, 8, new Crystal());
		stage.setObject(11, 8, new Flower(false));
		stage.setObject(12, 8, new Wall(9));
		stage.setObject(13, 8, new PFlower(true));
		stage.setObject(15, 8, new Flower(false));
		stage.setObject(16, 8, new Wall(9));

		//Row 9
		stage.setObject(0, 9, new Wall(9));
		stage.setObject(1, 9, new PFlower(true));
		stage.setObject(2, 9, new Flower(false));
		stage.setObject(3, 9, new Wall(9));
		stage.setObject(7, 9, new Flower(false));
		stage.setObject(9, 9, new Flower(false));
		stage.setObject(12, 9, new Crystal());
		stage.setObject(14, 9, new Egg());
		stage.setObject(16, 9, new Wall(9));

		//Row 10
		stage.setObject(0, 10, new Wall(9));
		stage.setObject(1, 10, new Mushroom(false));
		stage.setObject(2, 10, new Treasure());
		stage.setObject(3, 10, new Wall(9));
		stage.setObject(5, 10, new Flower(false));
		stage.setObject(8, 10, new Flower(false));
		stage.setObject(10, 10, new Flower(false));
		stage.setObject(11, 10, new Egg());
		stage.setObject(12, 10, new Wall(9));
		stage.setObject(13, 10, new Flower(false));
		stage.setObject(15, 10, new Key());
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
	/* Level 12 */
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
		stage.setObject(1, 1, new Mushroom(false));
		stage.setObject(2, 1, new Treasure());
		stage.setObject(4, 1, new PFlower(true));
		stage.setObject(5, 1, new Wall(1));
		stage.setObject(6, 1, new PFlower(true));
		stage.setObject(7, 1, new PFlower(true));
		stage.setObject(8, 1, new PFlower(true));
		stage.setObject(9, 1, new PFlower(true));
		stage.setObject(10, 1, new PFlower(true));
		stage.setObject(11, 1, new PFlower(true));
		stage.setObject(12, 1, new PFlower(true));
		stage.setObject(13, 1, new PFlower(true));
		stage.demon.push(new Demon(stage, 14, 1, DIR_WEST));
		stage.setObject(15, 1, new LaserGun());
		stage.setObject(16, 1, new Wall(1));

		//Row 2
		stage.setObject(0, 2, new Wall(1));
		stage.setObject(1, 2, new Wall(1));
		stage.setObject(2, 2, new Wall(1));
		stage.setObject(3, 2, new Door());
		stage.setObject(4, 2, new Wall(1));
		stage.setObject(5, 2, new Wall(1));
		stage.setObject(6, 2, new Wall(1));
		stage.setObject(7, 2, new Wall(1));
		stage.setObject(8, 2, new Door());
		stage.setObject(9, 2, new Wall(1));
		stage.setObject(10, 2, new Flower(false));
		stage.setObject(11, 2, new Wall(1));
		stage.setObject(12, 2, new Wall(1));
		stage.setObject(13, 2, new Wall(1));
		stage.setObject(14, 2, new Wall(1));
		stage.setObject(15, 2, new Wall(1));
		stage.setObject(16, 2, new Wall(1));

		//Row 3
		stage.setObject(0, 3, new Wall(1));
		stage.setObject(2, 3, new Flower(false));
		stage.setObject(4, 3, new PFlower(false));
		stage.setObject(6, 3, new Flower(false));
		stage.setObject(8, 3, new Crystal());
		stage.setObject(9, 3, new Wall(1));
		stage.setObject(11, 3, new PFlower(false));
		stage.setObject(12, 3, new Egg());
		stage.setObject(13, 3, new Wall(1));
		stage.setObject(14, 3, new Wall(1));
		stage.setObject(15, 3, new LaserGun());
		stage.setObject(16, 3, new Wall(1));

		//Row 4
		stage.setObject(0, 4, new Wall(1));
		stage.setObject(1, 4, new Flower(false));
		stage.setObject(4, 4, new Flower(false));
		stage.setObject(9, 4, new Wall(1));
		stage.setObject(10, 4, new Flower(true));
		stage.setObject(11, 4, new Bomb());
		stage.setObject(12, 4, new Flower(true));
		stage.setObject(14, 4, new Wall(1));
		stage.setObject(16, 4, new Wall(1));

		//Row 5
		stage.setObject(0, 5, new Wall(1));
		stage.setObject(1, 5, new Wall(1));
		stage.setObject(2, 5, new Crystal());
		stage.setObject(4, 5, new Wall(1));
		stage.setObject(5, 5, new Apple());
		stage.setObject(6, 5, new Flower(false));
		stage.setObject(7, 5, new Crystal());
		stage.setObject(9, 5, new Wall(1));
		stage.setObject(11, 5, new PFlower(false));
		stage.setObject(14, 5, new PFlower(true));
		stage.setObject(16, 5, new Wall(1));

		//Row 6
		stage.setObject(0, 6, new Wall(1));
		stage.setObject(1, 6, new LaserGun());
		stage.setObject(4, 6, new Wall(1));
		stage.setObject(6, 6, new Crystal());
		stage.setObject(8, 6, new Key());
		stage.setObject(9, 6, new Wall(1));
		stage.setObject(11, 6, new Apple());
		stage.setObject(16, 6, new Wall(1));

		//Row 7
		stage.setObject(0, 7, new Wall(1));
		stage.setObject(1, 7, new Wall(1));
		stage.setObject(2, 7, new Crystal());
		stage.setObject(4, 7, new Wall(1));
		stage.setObject(5, 7, new Wall(1));
		stage.setObject(6, 7, new Wall(1));
		stage.setObject(7, 7, new Wall(1));
		stage.setObject(8, 7, new Wall(1));
		stage.setObject(9, 7, new Wall(1));
		stage.setObject(10, 7, new Wall(1));
		stage.setObject(11, 7, new Wall(1));
		stage.setObject(12, 7, new Wall(1));
		stage.setObject(13, 7, new Wall(1));
		stage.setObject(14, 7, new Wall(1));
		stage.setObject(15, 7, new Apple());
		stage.setObject(16, 7, new Wall(1));

		//Row 8
		stage.setObject(0, 8, new Wall(1));
		stage.setObject(1, 8, new Egg());
		stage.setObject(4, 8, new Wall(1));
		stage.setObject(7, 8, new Key());
		stage.setObject(8, 8, new Egg());
		stage.setObject(9, 8, new Door());
		stage.setObject(10, 8, new Crystal());
		stage.setObject(14, 8, new Crystal());
		stage.setObject(15, 8, new Egg());
		stage.setObject(16, 8, new Wall(1));

		//Row 9
		stage.setObject(0, 9, new Wall(1));
		stage.setObject(2, 9, new Apple());
		stage.setObject(4, 9, new Wall(1));
		stage.setObject(5, 9, new Egg());
		stage.setObject(6, 9, new Wall(1));
		stage.setObject(7, 9, new Wall(1));
		stage.setObject(8, 9, new Wall(1));
		stage.setObject(9, 9, new Wall(1));
		stage.setObject(11, 9, new Apple());
		stage.setObject(13, 9, new Crystal());
		stage.setObject(14, 9, new PFlower(false));
		stage.setObject(16, 9, new Wall(1));

		//Row 10
		stage.setObject(0, 10, new Wall(1));
		stage.player.push(new Player(stage, 1, 10));
		stage.setObject(5, 10, new Crystal());
		stage.setObject(7, 10, new Crystal());
		stage.setObject(8, 10, new LaserGun());
		stage.setObject(9, 10, new Wall(1));
		stage.setObject(14, 10, new Wall(1));
		stage.setObject(15, 10, new Key());
		stage.setObject(16, 10, new Wall(1));

		//Row 11
		stage.setObject(0, 11, new Wall(1));
		stage.setObject(1, 11, new Wall(1));
		stage.setObject(2, 11, new Wall(1));
		stage.setObject(3, 11, new Wall(1));
		stage.setObject(4, 11, new Wall(1));
		stage.setObject(5, 11, new Wall(1));
		stage.setObject(6, 11, new Wall(1));
		stage.setObject(7, 11, new Wall(1));
		stage.setObject(8, 11, new Wall(1));
		stage.setObject(9, 11, new Wall(1));
		stage.setObject(10, 11, new Wall(1));
		stage.setObject(11, 11, new Wall(1));
		stage.setObject(12, 11, new Wall(1));
		stage.setObject(13, 11, new Wall(1));
		stage.setObject(14, 11, new Wall(1));
		stage.setObject(15, 11, new Wall(1));
		stage.setObject(16, 11, new Wall(1));

	}),
	/* Level 13 */
	new Stage(function(stage){
		//Row 0
		stage.setObject(0, 0, new Wall(4));
		stage.setObject(1, 0, new Wall(4));
		stage.setObject(2, 0, new Wall(4));
		stage.setObject(3, 0, new Wall(4));
		stage.setObject(4, 0, new Wall(4));
		stage.setObject(5, 0, new Wall(4));
		stage.setObject(6, 0, new Wall(4));
		stage.setObject(7, 0, new Wall(4));
		stage.setObject(8, 0, new Wall(4));
		stage.setObject(9, 0, new Wall(4));
		stage.setObject(10, 0, new Wall(4));
		stage.setObject(11, 0, new Wall(4));
		stage.setObject(12, 0, new Wall(4));
		stage.setObject(13, 0, new Wall(4));
		stage.setObject(14, 0, new Wall(4));
		stage.setObject(15, 0, new Wall(4));
		stage.setObject(16, 0, new Wall(4));

		//Row 1
		stage.setObject(0, 1, new Wall(4));
		stage.setObject(1, 1, new PFlower(true));
		stage.setObject(2, 1, new Key());
		stage.setObject(3, 1, new PFlower(true));
		stage.setObject(4, 1, new Wall(4));
		stage.setObject(6, 1, new Ball());
		stage.setObject(11, 1, new Crystal());
		stage.setObject(12, 1, new Key());
		stage.setObject(13, 1, new Wall(4));
		stage.setObject(14, 1, new Mushroom(false));
		stage.setObject(15, 1, new Flower(true));
		stage.setObject(16, 1, new Wall(4));

		//Row 2
		stage.setObject(0, 2, new Wall(4));
		stage.setObject(4, 2, new Wall(4));
		stage.setObject(5, 2, new Door());
		stage.setObject(6, 2, new Wall(4));
		stage.setObject(8, 2, new Crystal());
		stage.setObject(9, 2, new Flower(false));
		stage.setObject(10, 2, new Flower(false));
		stage.setObject(11, 2, new Wall(4));
		stage.setObject(12, 2, new Egg());
		stage.setObject(13, 2, new Wall(4));
		stage.setObject(14, 2, new Flower(true));
		stage.setObject(15, 2, new Flower(true));
		stage.setObject(16, 2, new Wall(4));

		//Row 3
		stage.setObject(0, 3, new Wall(4));
		stage.setObject(2, 3, new Flower(true));
		stage.setObject(4, 3, new Wall(4));
		stage.setObject(6, 3, new Wall(4));
		stage.setObject(7, 3, new Flower(false));
		stage.setObject(8, 3, new Flower(false));
		stage.setObject(10, 3, new Crystal());
		stage.setObject(11, 3, new Wall(4));
		stage.setObject(12, 3, new Flower(true));
		stage.setObject(13, 3, new Wall(4));
		stage.setObject(14, 3, new Flower(true));
		stage.setObject(15, 3, new Wall(4));
		stage.setObject(16, 3, new Wall(4));

		//Row 4
		stage.setObject(0, 4, new Wall(4));
		stage.setObject(1, 4, new Flower(true));
		stage.setObject(3, 4, new Flower(true));
		stage.setObject(4, 4, new Wall(4));
		stage.setObject(5, 4, new Egg());
		stage.setObject(6, 4, new Wall(4));
		stage.setObject(7, 4, new Wall(4));
		stage.setObject(8, 4, new Wall(4));
		stage.setObject(9, 4, new Wall(4));
		stage.setObject(10, 4, new Wall(4));
		stage.setObject(11, 4, new Wall(4));
		stage.setObject(13, 4, new Wall(4));
		stage.setObject(14, 4, new Flower(true));
		stage.setObject(15, 4, new Key());
		stage.setObject(16, 4, new Wall(4));

		//Row 5
		stage.setObject(0, 5, new Wall(4));
		stage.setObject(1, 5, new Wall(4));
		stage.setObject(2, 5, new Flower(true));
		stage.setObject(3, 5, new Wall(4));
		stage.setObject(4, 5, new Wall(4));
		stage.setObject(5, 5, new Egg());
		stage.setObject(6, 5, new Wall(4));
		stage.player.push(new Player(stage, 7, 5));
		stage.setObject(8, 5, new Wall(4));
		stage.setObject(10, 5, new Flower(true));
		stage.setObject(11, 5, new Flower(true));
		stage.setObject(13, 5, new Wall(4));
		stage.setObject(14, 5, new PFlower(false));
		stage.setObject(15, 5, new Flower(true));
		stage.setObject(16, 5, new Wall(4));

		//Row 6
		stage.setObject(0, 6, new Wall(4));
		stage.setObject(2, 6, new Flower(false));
		stage.setObject(3, 6, new Flower(false));
		stage.setObject(6, 6, new Wall(4));
		stage.setObject(7, 6, new Flower(false));
		stage.setObject(8, 6, new Pill());
		stage.setObject(9, 6, new Flower(false));
		stage.setObject(11, 6, new Apple());
		stage.setObject(13, 6, new Door());
		stage.setObject(14, 6, new Flower(true));
		stage.setObject(15, 6, new Flower(true));
		stage.setObject(16, 6, new Wall(4));

		//Row 7
		stage.setObject(0, 7, new Wall(4));
		stage.setObject(2, 7, new Flower(false));
		stage.setObject(4, 7, new Flower(false));
		stage.setObject(5, 7, new Flower(false));
		stage.setObject(6, 7, new Wall(4));
		stage.setObject(7, 7, new Wall(4));
		stage.setObject(8, 7, new Wall(4));
		stage.setObject(11, 7, new Flower(true));
		stage.setObject(13, 7, new Wall(4));
		stage.setObject(14, 7, new Wall(4));
		stage.setObject(15, 7, new Wall(4));
		stage.setObject(16, 7, new Wall(4));

		//Row 8
		stage.setObject(0, 8, new Wall(4));
		stage.setObject(1, 8, new Flower(false));
		stage.setObject(3, 8, new Apple());
		stage.setObject(4, 8, new Apple());
		stage.setObject(5, 8, new Flower(false));
		stage.setObject(9, 8, new Flower(false));
		stage.setObject(12, 8, new Flower(true));
		stage.setObject(13, 8, new Wall(4));
		stage.setObject(14, 8, new Treasure());
		stage.setObject(15, 8, new Treasure());
		stage.setObject(16, 8, new Wall(4));

		//Row 9
		stage.setObject(0, 9, new Wall(4));
		stage.setObject(1, 9, new Egg());
		stage.setObject(3, 9, new Apple());
		stage.setObject(5, 9, new Flower(false));
		stage.setObject(6, 9, new Wall(4));
		stage.setObject(8, 9, new Wall(4));
		stage.setObject(9, 9, new Flower(true));
		stage.setObject(10, 9, new Flower(true));
		stage.setObject(11, 9, new Apple());
		stage.setObject(13, 9, new Wall(4));
		stage.setObject(14, 9, new Mushroom(true));
		stage.setObject(15, 9, new Crystal());
		stage.setObject(16, 9, new Wall(4));

		//Row 10
		stage.setObject(0, 10, new Wall(4));
		stage.setObject(1, 10, new PFlower(false));
		stage.setObject(3, 10, new Flower(false));
		stage.setObject(4, 10, new Flower(false));
		stage.setObject(6, 10, new Wall(4));
		stage.setObject(7, 10, new LaserGun());
		stage.setObject(12, 10, new Flower(true));
		stage.setObject(13, 10, new Door());
		stage.setObject(14, 10, new Crystal());
		stage.setObject(16, 10, new Wall(4));

		//Row 11
		stage.setObject(0, 11, new Wall(4));
		stage.setObject(1, 11, new Wall(4));
		stage.setObject(2, 11, new Wall(4));
		stage.setObject(3, 11, new Wall(4));
		stage.setObject(4, 11, new Wall(4));
		stage.setObject(5, 11, new Wall(4));
		stage.setObject(6, 11, new Wall(4));
		stage.setObject(7, 11, new Wall(4));
		stage.setObject(8, 11, new Wall(4));
		stage.setObject(9, 11, new Wall(4));
		stage.setObject(10, 11, new Wall(4));
		stage.setObject(11, 11, new Wall(4));
		stage.setObject(12, 11, new Wall(4));
		stage.setObject(13, 11, new Wall(4));
		stage.setObject(14, 11, new Wall(4));
		stage.setObject(15, 11, new Wall(4));
		stage.setObject(16, 11, new Wall(4));

	}),
	/* Level 14 */
	new Stage(function(stage){
		//Row 0
		stage.setObject(0, 0, new Wall(0));
		stage.setObject(1, 0, new Wall(0));
		stage.setObject(2, 0, new Wall(0));
		stage.setObject(3, 0, new Wall(0));
		stage.setObject(4, 0, new Wall(0));
		stage.setObject(5, 0, new Wall(0));
		stage.setObject(6, 0, new Wall(0));
		stage.setObject(7, 0, new Wall(0));
		stage.setObject(8, 0, new Wall(0));
		stage.setObject(9, 0, new Wall(0));
		stage.setObject(10, 0, new Wall(0));
		stage.setObject(11, 0, new Wall(0));
		stage.setObject(12, 0, new Wall(0));
		stage.setObject(13, 0, new Wall(0));
		stage.setObject(14, 0, new Wall(0));
		stage.setObject(15, 0, new Wall(0));
		stage.setObject(16, 0, new Wall(0));

		//Row 1
		stage.setObject(0, 1, new Wall(0));
		stage.setObject(1, 1, new Flower(false));
		stage.setObject(2, 1, new Flower(false));
		stage.setObject(4, 1, new Flower(false));
		stage.setObject(5, 1, new PFlower(true));
		stage.setObject(7, 1, new Flower(true));
		stage.setObject(9, 1, new Flower(true));
		stage.setObject(11, 1, new Wall(0));
		stage.demon.push(new Demon(stage, 12, 1, DIR_EAST));
		stage.setObject(13, 1, new PFlower(true));
		stage.setObject(14, 1, new Flower(true));
		stage.setObject(15, 1, new PFlower(true));
		stage.setObject(16, 1, new Wall(0));

		//Row 2
		stage.setObject(0, 2, new Wall(0));
		stage.setObject(1, 2, new Flower(false));
		stage.setObject(3, 2, new Wall(0));
		stage.setObject(4, 2, new Egg());
		stage.setObject(7, 2, new Treasure());
		stage.setObject(8, 2, new Flower(false));
		stage.setObject(10, 2, new Flower(false));
		stage.setObject(11, 2, new Crystal());
		stage.setObject(12, 2, new PFlower(true));
		stage.setObject(13, 2, new Flower(true));
		stage.setObject(14, 2, new PFlower(true));
		stage.setObject(15, 2, new Mushroom(true));
		stage.setObject(16, 2, new Wall(0));

		//Row 3
		stage.setObject(0, 3, new Wall(0));
		stage.setObject(1, 3, new Wall(0));
		stage.setObject(2, 3, new Wall(0));
		stage.setObject(3, 3, new Wall(0));
		stage.setObject(4, 3, new Wall(0));
		stage.setObject(5, 3, new Flower(false));
		stage.setObject(7, 3, new Flower(true));
		stage.setObject(11, 3, new Wall(0));
		stage.setObject(12, 3, new Wall(0));
		stage.setObject(13, 3, new Wall(0));
		stage.setObject(14, 3, new Wall(0));
		stage.setObject(15, 3, new Wall(0));
		stage.setObject(16, 3, new Wall(0));

		//Row 4
		stage.setObject(0, 4, new Wall(0));
		stage.setObject(1, 4, new Egg());
		stage.setObject(2, 4, new Flower(false));
		stage.setObject(3, 4, new Egg());
		stage.setObject(4, 4, new Wall(0));
		stage.setObject(6, 4, new Flower(false));
		stage.setObject(7, 4, new Egg());
		stage.setObject(8, 4, new PFlower(true));
		stage.setObject(9, 4, new Flower(false));
		stage.setObject(10, 4, new Flower(false));
		stage.setObject(11, 4, new Apple());
		stage.setObject(12, 4, new Apple());
		stage.setObject(13, 4, new Flower(false));
		stage.setObject(14, 4, new PFlower(true));
		stage.setObject(15, 4, new Flower(false));
		stage.setObject(16, 4, new Wall(0));

		//Row 5
		stage.setObject(0, 5, new Wall(0));
		stage.setObject(1, 5, new Wall(0));
		stage.setObject(2, 5, new Door());
		stage.setObject(3, 5, new Wall(0));
		stage.setObject(4, 5, new Wall(0));
		stage.setObject(5, 5, new Treasure());
		stage.setObject(7, 5, new Wall(0));
		stage.setObject(8, 5, new Flower(true));
		stage.setObject(10, 5, new Flower(false));
		stage.setObject(11, 5, new Wall(0));
		stage.setObject(12, 5, new Flower(false));
		stage.setObject(14, 5, new Key());
		stage.setObject(15, 5, new PFlower(true));
		stage.setObject(16, 5, new Wall(0));

		//Row 6
		stage.setObject(0, 6, new Wall(0));
		stage.setObject(1, 6, new Flower(true));
		stage.setObject(3, 6, new Flower(true));
		stage.setObject(4, 6, new Flower(true));
		stage.setObject(6, 6, new Flower(true));
		stage.setObject(7, 6, new Wall(0));
		stage.setObject(9, 6, new Flower(true));
		stage.setObject(11, 6, new Wall(0));
		stage.setObject(12, 6, new Key());
		stage.setObject(13, 6, new Flower(false));
		stage.setObject(15, 6, new Flower(false));
		stage.setObject(16, 6, new Wall(0));

		//Row 7
		stage.setObject(0, 7, new Wall(0));
		stage.setObject(1, 7, new Wall(0));
		stage.setObject(2, 7, new Wall(0));
		stage.setObject(3, 7, new Wall(0));
		stage.setObject(4, 7, new Wall(0));
		stage.setObject(5, 7, new Flower(true));
		stage.setObject(7, 7, new Wall(0));
		stage.setObject(8, 7, new Flower(false));
		stage.setObject(9, 7, new Flower(true));
		stage.setObject(10, 7, new Flower(false));
		stage.setObject(11, 7, new Door());
		stage.setObject(14, 7, new Apple());
		stage.setObject(15, 7, new Flower(false));
		stage.setObject(16, 7, new Wall(0));

		//Row 8
		stage.setObject(0, 8, new Wall(0));
		stage.setObject(2, 8, new Flower(false));
		stage.setObject(3, 8, new Flower(false));
		stage.setObject(4, 8, new Wall(0));
		stage.setObject(6, 8, new Flower(true));
		stage.setObject(7, 8, new Wall(0));
		stage.setObject(8, 8, new Treasure());
		stage.setObject(11, 8, new Wall(0));
		stage.setObject(12, 8, new PFlower(true));
		stage.setObject(14, 8, new Flower(false));
		stage.player.push(new Player(stage, 15, 8));
		stage.setObject(16, 8, new Wall(0));

		//Row 9
		stage.setObject(0, 9, new Wall(0));
		stage.setObject(1, 9, new Flower(false));
		stage.setObject(4, 9, new Crystal());
		stage.setObject(6, 9, new Flower(false));
		stage.setObject(7, 9, new Flower(false));
		stage.setObject(9, 9, new Flower(false));
		stage.setObject(11, 9, new Wall(0));
		stage.setObject(12, 9, new Wall(0));
		stage.setObject(13, 9, new Wall(0));
		stage.setObject(14, 9, new Wall(0));
		stage.setObject(15, 9, new Wall(0));
		stage.setObject(16, 9, new Wall(0));

		//Row 10
		stage.setObject(0, 10, new Wall(0));
		stage.setObject(1, 10, new Flower(false));
		stage.setObject(2, 10, new Flower(false));
		stage.setObject(4, 10, new Wall(0));
		stage.setObject(5, 10, new Flower(true));
		stage.setObject(7, 10, new Flower(true));
		stage.setObject(8, 10, new Flower(false));
		stage.setObject(10, 10, new Flower(false));
		stage.setObject(11, 10, new Flower(true));
		stage.setObject(12, 10, new Flower(false));
		stage.setObject(13, 10, new Flower(true));
		stage.setObject(14, 10, new Flower(false));
		stage.setObject(15, 10, new Mushroom(false));
		stage.setObject(16, 10, new Wall(0));

		//Row 11
		stage.setObject(0, 11, new Wall(0));
		stage.setObject(1, 11, new Wall(0));
		stage.setObject(2, 11, new Wall(0));
		stage.setObject(3, 11, new Wall(0));
		stage.setObject(4, 11, new Wall(0));
		stage.setObject(5, 11, new Wall(0));
		stage.setObject(6, 11, new Wall(0));
		stage.setObject(7, 11, new Wall(0));
		stage.setObject(8, 11, new Wall(0));
		stage.setObject(9, 11, new Wall(0));
		stage.setObject(10, 11, new Wall(0));
		stage.setObject(11, 11, new Wall(0));
		stage.setObject(12, 11, new Wall(0));
		stage.setObject(13, 11, new Wall(0));
		stage.setObject(14, 11, new Wall(0));
		stage.setObject(15, 11, new Wall(0));
		stage.setObject(16, 11, new Wall(0));

	}),
	/* Level 15 */
	new Stage(function(stage){
		//Row 0
		stage.setObject(0, 0, new Wall(5));
		stage.setObject(1, 0, new Wall(5));
		stage.setObject(2, 0, new Wall(5));
		stage.setObject(3, 0, new Wall(5));
		stage.setObject(4, 0, new Wall(5));
		stage.setObject(5, 0, new Wall(5));
		stage.setObject(6, 0, new Wall(5));
		stage.setObject(7, 0, new Wall(5));
		stage.setObject(8, 0, new Wall(5));
		stage.setObject(9, 0, new Wall(5));
		stage.setObject(10, 0, new Wall(5));
		stage.setObject(11, 0, new Wall(5));
		stage.setObject(12, 0, new Wall(5));
		stage.setObject(13, 0, new Wall(5));
		stage.setObject(14, 0, new Wall(5));
		stage.setObject(15, 0, new Wall(5));
		stage.setObject(16, 0, new Wall(5));

		//Row 1
		stage.setObject(0, 1, new Wall(5));
		stage.setObject(1, 1, new Flower(false));
		stage.setObject(2, 1, new Flower(false));
		stage.setObject(3, 1, new Flower(false));
		stage.setObject(5, 1, new Flower(false));
		stage.setObject(6, 1, new Crystal());
		stage.setObject(8, 1, new Crystal());
		stage.demon.push(new Demon(stage, 9, 1, DIR_WEST));
		stage.demon.push(new Demon(stage, 10, 1, DIR_WEST));
		stage.demon.push(new Demon(stage, 11, 1, DIR_WEST));
		stage.demon.push(new Demon(stage, 12, 1, DIR_WEST));
		stage.demon.push(new Demon(stage, 13, 1, DIR_WEST));
		stage.setObject(14, 1, new Wall(5));
		stage.setObject(15, 1, new Mushroom(false));
		stage.setObject(16, 1, new Wall(5));

		//Row 2
		stage.setObject(0, 2, new Wall(5));
		stage.setObject(1, 2, new Wall(5));
		stage.setObject(2, 2, new Wall(5));
		stage.setObject(3, 2, new Wall(5));
		stage.setObject(4, 2, new Flower(false));
		stage.setObject(5, 2, new Wall(5));
		stage.setObject(7, 2, new Wall(5));
		stage.setObject(8, 2, new Wall(5));
		stage.setObject(9, 2, new Wall(5));
		stage.setObject(10, 2, new Wall(5));
		stage.setObject(11, 2, new Wall(5));
		stage.setObject(12, 2, new Wall(5));
		stage.setObject(13, 2, new Wall(5));
		stage.setObject(14, 2, new Wall(5));
		stage.setObject(15, 2, new Treasure());
		stage.setObject(16, 2, new Wall(5));

		//Row 3
		stage.setObject(0, 3, new Wall(5));
		stage.setObject(1, 3, new PFlower(true));
		stage.setObject(3, 3, new Flower(false));
		stage.setObject(4, 3, new Flower(false));
		stage.setObject(5, 3, new Wall(5));
		stage.setObject(6, 3, new Flower(false));
		stage.setObject(8, 3, new Flower(false));
		stage.setObject(9, 3, new Key());
		stage.setObject(10, 3, new Apple());
		stage.setObject(12, 3, new PFlower(true));
		stage.setObject(13, 3, new Wall(5));
		stage.setObject(14, 3, new Wall(5));
		stage.setObject(15, 3, new Flower(true));
		stage.setObject(16, 3, new Wall(5));

		//Row 4
		stage.setObject(0, 4, new Wall(5));
		stage.setObject(1, 4, new Wall(5));
		stage.player.push(new Player(stage, 2, 4));
		stage.setObject(3, 4, new Wall(5));
		stage.setObject(4, 4, new Wall(5));
		stage.setObject(5, 4, new Wall(5));
		stage.setObject(6, 4, new Wall(5));
		stage.setObject(7, 4, new Wall(5));
		stage.setObject(8, 4, new Wall(5));
		stage.setObject(9, 4, new Wall(5));
		stage.setObject(10, 4, new Wall(5));
		stage.setObject(11, 4, new Flower(false));
		stage.setObject(12, 4, new Wall(5));
		stage.setObject(13, 4, new Wall(5));
		stage.setObject(14, 4, new PFlower(false));
		stage.setObject(15, 4, new Flower(true));
		stage.setObject(16, 4, new Wall(5));

		//Row 5
		stage.setObject(0, 5, new Wall(5));
		stage.setObject(1, 5, new Flower(true));
		stage.setObject(2, 5, new Egg());
		stage.setObject(4, 5, new Pill());
		stage.setObject(5, 5, new Wall(5));
		stage.setObject(6, 5, new LaserGun());
		stage.setObject(7, 5, new Wall(5));
		stage.setObject(8, 5, new Crystal());
		stage.setObject(9, 5, new Flower(false));
		stage.setObject(10, 5, new Crystal());
		stage.setObject(12, 5, new Flower(false));
		stage.setObject(13, 5, new Wall(5));
		stage.setObject(14, 5, new Apple());
		stage.setObject(15, 5, new Crystal());
		stage.setObject(16, 5, new Wall(5));

		//Row 6
		stage.setObject(0, 6, new Wall(5));
		stage.setObject(2, 6, new Apple());
		stage.setObject(4, 6, new Flower(true));
		stage.setObject(5, 6, new Wall(5));
		stage.setObject(7, 6, new Wall(5));
		stage.setObject(8, 6, new Bomb());
		stage.setObject(10, 6, new Flower(false));
		stage.setObject(13, 6, new Door());
		stage.setObject(14, 6, new Crystal());
		stage.setObject(15, 6, new Flower(false));
		stage.setObject(16, 6, new Wall(5));

		//Row 7
		stage.setObject(0, 7, new Wall(5));
		stage.setObject(1, 7, new Flower(true));
		stage.setObject(3, 7, new Flower(true));
		stage.setObject(5, 7, new Flower(true));
		stage.setObject(12, 7, new Wall(5));
		stage.setObject(13, 7, new Wall(5));
		stage.setObject(14, 7, new Wall(5));
		stage.setObject(15, 7, new Wall(5));
		stage.setObject(16, 7, new Wall(5));

		//Row 8
		stage.setObject(0, 8, new Wall(5));
		stage.setObject(2, 8, new AppleRotten());
		stage.setObject(3, 8, new Flower(true));
		stage.setObject(4, 8, new Wall(5));
		stage.setObject(5, 8, new Wall(5));
		stage.setObject(6, 8, new Wall(5));
		stage.setObject(7, 8, new Wall(5));
		stage.setObject(9, 8, new Apple());
		stage.setObject(10, 8, new Egg());
		stage.setObject(12, 8, new Crystal());
		stage.setObject(14, 8, new Crystal());
		stage.setObject(16, 8, new Wall(5));

		//Row 9
		stage.setObject(0, 9, new Wall(5));
		stage.setObject(2, 9, new PFlower(false));
		stage.setObject(4, 9, new Wall(5));
		stage.setObject(5, 9, new Mushroom(true));
		stage.setObject(6, 9, new PFlower(true));
		stage.setObject(7, 9, new Wall(5));
		stage.setObject(12, 9, new PFlower(true));
		stage.setObject(15, 9, new Flower(false));
		stage.setObject(16, 9, new Wall(5));

		//Row 10
		stage.setObject(0, 10, new Wall(5));
		stage.setObject(1, 10, new Flower(true));
		stage.setObject(2, 10, new Flower(true));
		stage.setObject(3, 10, new Flower(true));
		stage.setObject(4, 10, new Wall(5));
		stage.setObject(5, 10, new Egg());
		stage.setObject(7, 10, new Door());
		stage.setObject(9, 10, new Apple());
		stage.setObject(10, 10, new Flower(false));
		stage.setObject(12, 10, new Flower(false));
		stage.setObject(14, 10, new Flower(false));
		stage.setObject(15, 10, new Apple());
		stage.setObject(16, 10, new Wall(5));

		//Row 11
		stage.setObject(0, 11, new Wall(5));
		stage.setObject(1, 11, new Wall(5));
		stage.setObject(2, 11, new Wall(5));
		stage.setObject(3, 11, new Wall(5));
		stage.setObject(4, 11, new Wall(5));
		stage.setObject(5, 11, new Wall(5));
		stage.setObject(6, 11, new Wall(5));
		stage.setObject(7, 11, new Wall(5));
		stage.setObject(8, 11, new Wall(5));
		stage.setObject(9, 11, new Wall(5));
		stage.setObject(10, 11, new Wall(5));
		stage.setObject(11, 11, new Wall(5));
		stage.setObject(12, 11, new Wall(5));
		stage.setObject(13, 11, new Wall(5));
		stage.setObject(14, 11, new Wall(5));
		stage.setObject(15, 11, new Wall(5));
		stage.setObject(16, 11, new Wall(5));

	}),
	/* Level 16 */
	new Stage(function(stage){
		//Row 0
		stage.setObject(0, 0, new Wall(2));
		stage.setObject(1, 0, new Wall(2));
		stage.setObject(2, 0, new Wall(2));
		stage.setObject(3, 0, new Wall(2));
		stage.setObject(4, 0, new Wall(2));
		stage.setObject(5, 0, new Wall(2));
		stage.setObject(6, 0, new Wall(2));
		stage.setObject(7, 0, new Wall(2));
		stage.setObject(8, 0, new Wall(2));
		stage.setObject(9, 0, new Wall(2));
		stage.setObject(10, 0, new Wall(2));
		stage.setObject(11, 0, new Wall(2));
		stage.setObject(12, 0, new Wall(2));
		stage.setObject(13, 0, new Wall(2));
		stage.setObject(14, 0, new Wall(2));
		stage.setObject(15, 0, new Wall(2));
		stage.setObject(16, 0, new Wall(2));

		//Row 1
		stage.setObject(0, 1, new Wall(2));
		stage.setObject(1, 1, new Egg());
		stage.setObject(3, 1, new Bomb());
		stage.setObject(5, 1, new LaserGun());
		stage.setObject(6, 1, new Wall(2));
		stage.setObject(7, 1, new Flower(false));
		stage.setObject(8, 1, new Bomb());
		stage.setObject(13, 1, new Wall(2));
		stage.setObject(14, 1, new Key());
		stage.setObject(15, 1, new Key());
		stage.setObject(16, 1, new Wall(2));

		//Row 2
		stage.setObject(0, 2, new Wall(2));
		stage.setObject(1, 2, new Apple());
		stage.setObject(2, 2, new PFlower(false));
		stage.setObject(3, 2, new PFlower(true));
		stage.setObject(4, 2, new PFlower(false));
		stage.setObject(5, 2, new Apple());
		stage.setObject(6, 2, new Door());
		stage.setObject(8, 2, new Flower(false));
		stage.setObject(9, 2, new Apple());
		stage.setObject(10, 2, new Apple());
		stage.setObject(11, 2, new AppleRotten());
		stage.setObject(12, 2, new Flower(false));
		stage.setObject(13, 2, new Wall(2));
		stage.setObject(14, 2, new Flower(false));
		stage.setObject(16, 2, new Wall(2));

		//Row 3
		stage.setObject(0, 3, new Wall(2));
		stage.setObject(1, 3, new Flower(true));
		stage.setObject(2, 3, new Flower(true));
		stage.setObject(5, 3, new Apple());
		stage.setObject(6, 3, new Wall(2));
		stage.setObject(7, 3, new Key());
		stage.setObject(8, 3, new Flower(false));
		stage.setObject(9, 3, new Apple());
		stage.setObject(10, 3, new AppleRotten());
		stage.setObject(11, 3, new Apple());
		stage.setObject(12, 3, new Flower(false));
		stage.setObject(13, 3, new Wall(2));
		stage.setObject(15, 3, new Flower(false));
		stage.setObject(16, 3, new Wall(2));

		//Row 4
		stage.setObject(0, 4, new Wall(2));
		stage.setObject(1, 4, new Wall(2));
		stage.setObject(2, 4, new Wall(2));
		stage.setObject(3, 4, new Apple());
		stage.setObject(4, 4, new Wall(2));
		stage.setObject(5, 4, new Wall(2));
		stage.setObject(6, 4, new Wall(2));
		stage.setObject(7, 4, new PFlower(false));
		stage.setObject(8, 4, new Wall(2));
		stage.setObject(9, 4, new Wall(2));
		stage.setObject(11, 4, new Wall(2));
		stage.setObject(12, 4, new Wall(2));
		stage.setObject(13, 4, new Wall(2));
		stage.setObject(14, 4, new Flower(false));
		stage.setObject(15, 4, new Flower(false));
		stage.setObject(16, 4, new Wall(2));

		//Row 5
		stage.setObject(0, 5, new Wall(2));
		stage.setObject(1, 5, new LaserGun());
		stage.setObject(2, 5, new Crystal());
		stage.setObject(4, 5, new Ball());
		stage.setObject(5, 5, new Flower(true));
		stage.setObject(6, 5, new Wall(2));
		stage.setObject(8, 5, new Egg());
		stage.setObject(9, 5, new PFlower(true));
		stage.setObject(11, 5, new PFlower(true));
		stage.setObject(12, 5, new Wall(2));
		stage.setObject(13, 5, new Flower(false));
		stage.setObject(14, 5, new Crystal());
		stage.setObject(15, 5, new Apple());
		stage.setObject(16, 5, new Wall(2));

		//Row 6
		stage.setObject(0, 6, new Wall(2));
		stage.setObject(1, 6, new Ball());
		stage.setObject(3, 6, new Crystal());
		stage.setObject(4, 6, new Flower(true));
		stage.setObject(6, 6, new Wall(2));
		stage.setObject(7, 6, new Flower(false));
		stage.setObject(8, 6, new Wall(10));
		stage.setObject(12, 6, new Wall(2));
		stage.setObject(13, 6, new Flower(false));
		stage.setObject(15, 6, new Flower(false));
		stage.setObject(16, 6, new Wall(2));

		//Row 7
		stage.setObject(0, 7, new Wall(2));
		stage.setObject(1, 7, new Egg());
		stage.setObject(3, 7, new Flower(true));
		stage.setObject(5, 7, new Flower(true));
		stage.setObject(6, 7, new Wall(2));
		stage.setObject(7, 7, new Flower(false));
		stage.setObject(9, 7, new Flower(false));
		stage.setObject(11, 7, new Flower(false));
		stage.setObject(12, 7, new Door());
		stage.setObject(16, 7, new Wall(2));

		//Row 8
		stage.setObject(0, 8, new Wall(2));
		stage.setObject(1, 8, new Flower(false));
		stage.setObject(2, 8, new Flower(false));
		stage.setObject(4, 8, new Bomb());
		stage.setObject(6, 8, new Wall(2));
		stage.setObject(7, 8, new Wall(2));
		stage.setObject(8, 8, new Wall(2));
		stage.setObject(9, 8, new Wall(2));
		stage.setObject(10, 8, new Wall(2));
		stage.setObject(11, 8, new Wall(2));
		stage.setObject(12, 8, new Wall(2));
		stage.setObject(14, 8, new Flower(false));
		stage.setObject(16, 8, new Wall(2));

		//Row 9
		stage.setObject(0, 9, new Wall(2));
		stage.setObject(2, 9, new Flower(true));
		stage.setObject(3, 9, new Bomb());
		stage.setObject(6, 9, new Wall(2));
		stage.setObject(7, 9, new Treasure());
		stage.setObject(8, 9, new Flower(true));
		stage.setObject(9, 9, new Door());
		stage.setObject(10, 9, new Flower(false));
		stage.setObject(11, 9, new Door());
		stage.setObject(12, 9, new Flower(false));
		stage.setObject(14, 9, new Crystal());
		stage.setObject(15, 9, new Flower(false));
		stage.setObject(16, 9, new Wall(2));

		//Row 10
		stage.setObject(0, 10, new Wall(2));
		stage.setObject(1, 10, new Flower(true));
		stage.player.push(new Player(stage, 3, 10));
		stage.setObject(4, 10, new Key());
		stage.setObject(5, 10, new PFlower(true));
		stage.setObject(6, 10, new Wall(2));
		stage.setObject(7, 10, new Treasure());
		stage.setObject(8, 10, new Flower(true));
		stage.setObject(9, 10, new Wall(2));
		stage.setObject(10, 10, new Mushroom(false));
		stage.setObject(11, 10, new Wall(2));
		stage.setObject(12, 10, new PFlower(true));
		stage.setObject(14, 10, new Flower(false));
		stage.setObject(15, 10, new Apple());
		stage.setObject(16, 10, new Wall(2));

		//Row 11
		stage.setObject(0, 11, new Wall(2));
		stage.setObject(1, 11, new Wall(2));
		stage.setObject(2, 11, new Wall(2));
		stage.setObject(3, 11, new Wall(2));
		stage.setObject(4, 11, new Wall(2));
		stage.setObject(5, 11, new Wall(2));
		stage.setObject(6, 11, new Wall(2));
		stage.setObject(7, 11, new Wall(2));
		stage.setObject(8, 11, new Wall(2));
		stage.setObject(9, 11, new Wall(2));
		stage.setObject(10, 11, new Wall(2));
		stage.setObject(11, 11, new Wall(2));
		stage.setObject(12, 11, new Wall(2));
		stage.setObject(13, 11, new Wall(2));
		stage.setObject(14, 11, new Wall(2));
		stage.setObject(15, 11, new Wall(2));
		stage.setObject(16, 11, new Wall(2));

	}),
	/* Level 17 */
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
		stage.setObject(2, 1, new Flower(false));
		stage.setObject(3, 1, new Flower(false));
		stage.setObject(4, 1, new Egg());
		stage.setObject(5, 1, new Wall(7));
		stage.setObject(6, 1, new PFlower(true));
		stage.setObject(7, 1, new LaserGun());
		stage.setObject(8, 1, new Egg());
		stage.setObject(9, 1, new Egg());
		stage.setObject(10, 1, new Egg());
		stage.setObject(11, 1, new Wall(7));
		stage.setObject(12, 1, new Flower(false));
		stage.setObject(13, 1, new PFlower(false));
		stage.setObject(14, 1, new Egg());
		stage.setObject(15, 1, new Mushroom(true));
		stage.setObject(16, 1, new Wall(7));

		//Row 2
		stage.setObject(0, 2, new Wall(7));
		stage.player.push(new Player(stage, 1, 2));
		stage.setObject(2, 2, new Apple());
		stage.setObject(4, 2, new PFlower(true));
		stage.setObject(5, 2, new Wall(7));
		stage.demon.push(new Demon(stage, 6, 2, DIR_EAST));
		stage.setObject(9, 2, new Flower(true));
		stage.setObject(11, 2, new PFlower(true));
		stage.setObject(12, 2, new Flower(true));
		stage.setObject(13, 2, new Wall(7));
		stage.setObject(14, 2, new Wall(7));
		stage.setObject(15, 2, new PFlower(true));
		stage.setObject(16, 2, new Wall(7));

		//Row 3
		stage.setObject(0, 3, new Wall(7));
		stage.setObject(1, 3, new Wall(7));
		stage.setObject(3, 3, new Wall(7));
		stage.setObject(4, 3, new Wall(7));
		stage.setObject(5, 3, new Wall(7));
		stage.setObject(6, 3, new Wall(7));
		stage.setObject(8, 3, new Crystal());
		stage.setObject(9, 3, new Wall(7));
		stage.setObject(10, 3, new Door());
		stage.setObject(11, 3, new Wall(7));
		stage.setObject(12, 3, new Wall(7));
		stage.setObject(13, 3, new Wall(7));
		stage.setObject(14, 3, new Wall(7));
		stage.setObject(15, 3, new Wall(7));
		stage.setObject(16, 3, new Wall(7));

		//Row 4
		stage.setObject(0, 4, new Wall(7));
		stage.setObject(1, 4, new PFlower(false));
		stage.setObject(5, 4, new Crystal());
		stage.setObject(6, 4, new Wall(7));
		stage.setObject(7, 4, new Apple());
		stage.setObject(8, 4, new Wall(7));
		stage.setObject(9, 4, new Wall(7));
		stage.setObject(10, 4, new Crystal());
		stage.setObject(12, 4, new Wall(7));
		stage.setObject(13, 4, new Flower(false));
		stage.setObject(14, 4, new Treasure());
		stage.setObject(15, 4, new Treasure());
		stage.setObject(16, 4, new Wall(7));

		//Row 5
		stage.setObject(0, 5, new Wall(7));
		stage.setObject(1, 5, new Apple());
		stage.setObject(3, 5, new Crystal());
		stage.setObject(8, 5, new Crystal());
		stage.setObject(9, 5, new Wall(7));
		stage.setObject(12, 5, new Wall(7));
		stage.setObject(13, 5, new Flower(false));
		stage.setObject(14, 5, new Apple());
		stage.setObject(15, 5, new Apple());
		stage.setObject(16, 5, new Wall(7));

		//Row 6
		stage.setObject(0, 6, new Wall(7));
		stage.setObject(2, 6, new Flower(false));
		stage.setObject(5, 6, new Crystal());
		stage.setObject(6, 6, new Wall(7));
		stage.setObject(7, 6, new Crystal());
		stage.setObject(9, 6, new Wall(7));
		stage.setObject(11, 6, new Crystal());
		stage.setObject(12, 6, new Wall(7));
		stage.setObject(16, 6, new Wall(7));

		//Row 7
		stage.setObject(0, 7, new Wall(7));
		stage.setObject(3, 7, new Bomb());
		stage.setObject(6, 7, new Wall(7));
		stage.setObject(8, 7, new Flower(false));
		stage.setObject(9, 7, new Wall(7));
		stage.setObject(10, 7, new Crystal());
		stage.setObject(12, 7, new Wall(7));
		stage.setObject(13, 7, new Flower(false));
		stage.setObject(14, 7, new PFlower(false));
		stage.setObject(16, 7, new Wall(7));

		//Row 8
		stage.setObject(0, 8, new Wall(7));
		stage.setObject(1, 8, new Wall(7));
		stage.setObject(2, 8, new Wall(7));
		stage.setObject(3, 8, new Flower(true));
		stage.setObject(5, 8, new PFlower(true));
		stage.setObject(6, 8, new Wall(7));
		stage.setObject(8, 8, new Crystal());
		stage.setObject(9, 8, new Wall(7));
		stage.setObject(11, 8, new Crystal());
		stage.setObject(12, 8, new Wall(7));
		stage.setObject(14, 8, new Egg());
		stage.setObject(15, 8, new Flower(false));
		stage.setObject(16, 8, new Wall(7));

		//Row 9
		stage.setObject(0, 9, new Wall(7));
		stage.setObject(1, 9, new Key());
		stage.setObject(2, 9, new Apple());
		stage.setObject(3, 9, new Flower(true));
		stage.setObject(4, 9, new Flower(true));
		stage.setObject(5, 9, new Wall(7));
		stage.setObject(6, 9, new Wall(7));
		stage.setObject(7, 9, new Crystal());
		stage.setObject(9, 9, new Wall(7));
		stage.setObject(10, 9, new Crystal());
		stage.setObject(12, 9, new Wall(7));
		stage.setObject(14, 9, new PFlower(false));
		stage.setObject(15, 9, new Flower(false));
		stage.setObject(16, 9, new Wall(7));

		//Row 10
		stage.setObject(0, 10, new Wall(7));
		stage.setObject(1, 10, new Flower(true));
		stage.setObject(2, 10, new Crystal());
		stage.setObject(6, 10, new Crystal());
		stage.setObject(8, 10, new Crystal());
		stage.setObject(9, 10, new Wall(7));
		stage.setObject(10, 10, new Flower(false));
		stage.setObject(11, 10, new Crystal());
		stage.setObject(13, 10, new Crystal());
		stage.setObject(14, 10, new Flower(true));
		stage.setObject(15, 10, new Mushroom(false));
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
	/* Level 18 */
	new Stage(function(stage){
		//Row 0
		stage.setObject(0, 0, new Wall(4));
		stage.setObject(1, 0, new Wall(4));
		stage.setObject(2, 0, new Wall(4));
		stage.setObject(3, 0, new Wall(4));
		stage.setObject(4, 0, new Wall(4));
		stage.setObject(5, 0, new Wall(4));
		stage.setObject(6, 0, new Wall(4));
		stage.setObject(7, 0, new Wall(4));
		stage.setObject(8, 0, new Wall(4));
		stage.setObject(9, 0, new Wall(4));
		stage.setObject(10, 0, new Wall(4));
		stage.setObject(11, 0, new Wall(4));
		stage.setObject(12, 0, new Wall(4));
		stage.setObject(13, 0, new Wall(4));
		stage.setObject(14, 0, new Wall(4));
		stage.setObject(15, 0, new Wall(4));
		stage.setObject(16, 0, new Wall(4));

		//Row 1
		stage.setObject(0, 1, new Wall(4));
		stage.setObject(1, 1, new Key());
		stage.setObject(3, 1, new Crystal());
		stage.setObject(4, 1, new LaserGun());
		stage.setObject(5, 1, new Wall(4));
		stage.setObject(6, 1, new Flower(true));
		stage.setObject(7, 1, new Apple());
		stage.setObject(9, 1, new PFlower(false));
		stage.setObject(10, 1, new Apple());
		stage.setObject(12, 1, new Flower(false));
		stage.setObject(13, 1, new Wall(4));
		stage.setObject(14, 1, new Flower(true));
		stage.setObject(15, 1, new Mushroom(false));
		stage.setObject(16, 1, new Wall(4));

		//Row 2
		stage.setObject(0, 2, new Wall(4));
		stage.setObject(1, 2, new Flower(false));
		stage.setObject(2, 2, new Crystal());
		stage.setObject(3, 2, new Wall(10));
		stage.setObject(4, 2, new Crystal());
		stage.setObject(5, 2, new Wall(4));
		stage.setObject(8, 2, new Flower(false));
		stage.setObject(9, 2, new Wall(4));
		stage.setObject(11, 2, new Wall(10));
		stage.setObject(12, 2, new Key());
		stage.setObject(13, 2, new Wall(4));
		stage.setObject(14, 2, new Flower(true));
		stage.setObject(15, 2, new Flower(true));
		stage.setObject(16, 2, new Wall(4));

		//Row 3
		stage.setObject(0, 3, new Wall(4));
		stage.setObject(1, 3, new PFlower(true));
		stage.setObject(2, 3, new Flower(false));
		stage.setObject(3, 3, new Flower(false));
		stage.setObject(5, 3, new Crystal());
		stage.setObject(6, 3, new PFlower(false));
		stage.setObject(7, 3, new Bomb());
		stage.setObject(8, 3, new Flower(false));
		stage.setObject(9, 3, new Door());
		stage.setObject(10, 3, new Egg());
		stage.setObject(11, 3, new Wall(10));
		stage.setObject(12, 3, new Treasure());
		stage.setObject(13, 3, new Wall(4));
		stage.setObject(14, 3, new Wall(4));
		stage.setObject(15, 3, new Flower(true));
		stage.setObject(16, 3, new Wall(4));

		//Row 4
		stage.setObject(0, 4, new Wall(4));
		stage.setObject(2, 4, new Apple());
		stage.setObject(3, 4, new Flower(false));
		stage.setObject(4, 4, new Flower(false));
		stage.setObject(6, 4, new Wall(4));
		stage.setObject(7, 4, new Flower(false));
		stage.setObject(9, 4, new Wall(4));
		stage.setObject(10, 4, new Flower(false));
		stage.setObject(11, 4, new PFlower(false));
		stage.setObject(12, 4, new Flower(true));
		stage.setObject(13, 4, new Flower(true));
		stage.setObject(14, 4, new Wall(4));
		stage.setObject(15, 4, new Flower(true));
		stage.setObject(16, 4, new Wall(4));

		//Row 5
		stage.setObject(0, 5, new Wall(4));
		stage.setObject(1, 5, new Wall(4));
		stage.setObject(2, 5, new Apple());
		stage.setObject(3, 5, new Wall(4));
		stage.setObject(4, 5, new Wall(4));
		stage.setObject(5, 5, new Wall(4));
		stage.setObject(6, 5, new Wall(4));
		stage.setObject(7, 5, new Door());
		stage.setObject(8, 5, new Wall(4));
		stage.setObject(9, 5, new Wall(4));
		stage.setObject(11, 5, new Apple());
		stage.setObject(13, 5, new LaserGun());
		stage.setObject(14, 5, new Wall(4));
		stage.setObject(15, 5, new Door());
		stage.setObject(16, 5, new Wall(4));

		//Row 6
		stage.setObject(0, 6, new Wall(4));
		stage.setObject(1, 6, new Flower(false));
		stage.setObject(3, 6, new Flower(false));
		stage.setObject(4, 6, new Apple());
		stage.setObject(5, 6, new Apple());
		stage.setObject(8, 6, new Wall(4));
		stage.setObject(10, 6, new Flower(false));
		stage.setObject(11, 6, new PFlower(false));
		stage.setObject(12, 6, new Flower(false));
		stage.setObject(13, 6, new Apple());
		stage.setObject(14, 6, new PFlower(false));
		stage.setObject(15, 6, new Flower(true));
		stage.setObject(16, 6, new Wall(4));

		//Row 7
		stage.setObject(0, 7, new Wall(4));
		stage.setObject(2, 7, new PFlower(true));
		stage.setObject(4, 7, new Flower(false));
		stage.setObject(5, 7, new PFlower(false));
		stage.setObject(6, 7, new Key());
		stage.setObject(7, 7, new PFlower(true));
		stage.setObject(8, 7, new Wall(4));
		stage.setObject(9, 7, new Flower(false));
		stage.setObject(10, 7, new Apple());
		stage.setObject(11, 7, new Wall(4));
		stage.setObject(12, 7, new Flower(false));
		stage.setObject(13, 7, new Flower(true));
		stage.setObject(14, 7, new Flower(true));
		stage.setObject(15, 7, new Flower(true));
		stage.setObject(16, 7, new Wall(4));

		//Row 8
		stage.setObject(0, 8, new Wall(4));
		stage.setObject(1, 8, new Flower(false));
		stage.setObject(2, 8, new Wall(4));
		stage.setObject(3, 8, new Wall(4));
		stage.setObject(4, 8, new Wall(4));
		stage.setObject(5, 8, new Wall(4));
		stage.setObject(6, 8, new Wall(4));
		stage.setObject(7, 8, new Wall(4));
		stage.setObject(8, 8, new Wall(4));
		stage.setObject(9, 8, new Flower(false));
		stage.setObject(11, 8, new Wall(4));
		stage.setObject(12, 8, new Bomb());
		stage.setObject(13, 8, new Egg());
		stage.setObject(14, 8, new PFlower(false));
		stage.setObject(15, 8, new Apple());
		stage.setObject(16, 8, new Wall(4));

		//Row 9
		stage.setObject(0, 9, new Wall(4));
		stage.setObject(1, 9, new Flower(false));
		stage.setObject(2, 9, new Apple());
		stage.setObject(3, 9, new Flower(false));
		stage.setObject(4, 9, new Egg());
		stage.setObject(5, 9, new PFlower(false));
		stage.setObject(6, 9, new Apple());
		stage.setObject(7, 9, new Flower(false));
		stage.setObject(8, 9, new Wall(4));
		stage.setObject(10, 9, new Bomb());
		stage.setObject(11, 9, new Wall(4));
		stage.setObject(13, 9, new PFlower(false));
		stage.setObject(14, 9, new Flower(false));
		stage.setObject(15, 9, new Flower(true));
		stage.setObject(16, 9, new Wall(4));

		//Row 10
		stage.setObject(0, 10, new Wall(4));
		stage.setObject(2, 10, new Flower(false));
		stage.setObject(3, 10, new Crystal());
		stage.setObject(6, 10, new Crystal());
		stage.player.push(new Player(stage, 7, 10));
		stage.setObject(8, 10, new Wall(4));
		stage.setObject(9, 10, new Flower(false));
		stage.setObject(10, 10, new Flower(false));
		stage.setObject(11, 10, new Wall(4));
		stage.setObject(12, 10, new Treasure());
		stage.setObject(14, 10, new Apple());
		stage.setObject(15, 10, new Flower(true));
		stage.setObject(16, 10, new Wall(4));

		//Row 11
		stage.setObject(0, 11, new Wall(4));
		stage.setObject(1, 11, new Wall(4));
		stage.setObject(2, 11, new Wall(4));
		stage.setObject(3, 11, new Wall(4));
		stage.setObject(4, 11, new Wall(4));
		stage.setObject(5, 11, new Wall(4));
		stage.setObject(6, 11, new Wall(4));
		stage.setObject(7, 11, new Wall(4));
		stage.setObject(8, 11, new Wall(4));
		stage.setObject(9, 11, new Wall(4));
		stage.setObject(10, 11, new Wall(4));
		stage.setObject(11, 11, new Wall(4));
		stage.setObject(12, 11, new Wall(4));
		stage.setObject(13, 11, new Wall(4));
		stage.setObject(14, 11, new Wall(4));
		stage.setObject(15, 11, new Wall(4));
		stage.setObject(16, 11, new Wall(4));

	}),
	/* Level 19 */
	new Stage(function(stage){
		//Row 0
		stage.setObject(0, 0, new Wall(0));
		stage.setObject(1, 0, new Wall(0));
		stage.setObject(2, 0, new Wall(0));
		stage.setObject(3, 0, new Wall(0));
		stage.setObject(4, 0, new Wall(0));
		stage.setObject(5, 0, new Wall(0));
		stage.setObject(6, 0, new Wall(0));
		stage.setObject(7, 0, new Wall(0));
		stage.setObject(8, 0, new Wall(0));
		stage.setObject(9, 0, new Wall(0));
		stage.setObject(10, 0, new Wall(0));
		stage.setObject(11, 0, new Wall(0));
		stage.setObject(12, 0, new Wall(0));
		stage.setObject(13, 0, new Wall(0));
		stage.setObject(14, 0, new Wall(0));
		stage.setObject(15, 0, new Wall(0));
		stage.setObject(16, 0, new Wall(0));

		//Row 1
		stage.setObject(0, 1, new Wall(0));
		stage.setObject(1, 1, new PFlower(true));
		stage.setObject(3, 1, new Flower(false));
		stage.setObject(4, 1, new Wall(0));
		stage.setObject(5, 1, new Flower(true));
		stage.setObject(6, 1, new Flower(true));
		stage.setObject(7, 1, new Key());
		stage.setObject(8, 1, new Wall(0));
		stage.setObject(9, 1, new Egg());
		stage.setObject(10, 1, new Flower(false));
		stage.setObject(11, 1, new Crystal());
		stage.setObject(12, 1, new Flower(true));
		stage.setObject(13, 1, new Wall(0));
		stage.setObject(14, 1, new Flower(false));
		stage.setObject(15, 1, new Treasure());
		stage.setObject(16, 1, new Wall(0));

		//Row 2
		stage.setObject(0, 2, new Wall(0));
		stage.setObject(2, 2, new Key());
		stage.setObject(4, 2, new Wall(0));
		stage.setObject(5, 2, new Crystal());
		stage.setObject(7, 2, new Crystal());
		stage.setObject(8, 2, new Wall(0));
		stage.setObject(9, 2, new Flower(false));
		stage.setObject(10, 2, new Crystal());
		stage.setObject(11, 2, new Flower(true));
		stage.setObject(12, 2, new Crystal());
		stage.setObject(13, 2, new Door());
		stage.setObject(14, 2, new Flower(false));
		stage.setObject(15, 2, new Treasure());
		stage.setObject(16, 2, new Wall(0));

		//Row 3
		stage.setObject(0, 3, new Wall(0));
		stage.demon.push(new Demon(stage, 2, 3, DIR_EAST));
		stage.setObject(4, 3, new Door());
		stage.setObject(5, 3, new Flower(true));
		stage.setObject(6, 3, new Crystal());
		stage.setObject(7, 3, new Flower(true));
		stage.setObject(8, 3, new Wall(0));
		stage.setObject(9, 3, new Wall(0));
		stage.setObject(10, 3, new Wall(0));
		stage.setObject(11, 3, new Flower(true));
		stage.setObject(12, 3, new Wall(0));
		stage.setObject(13, 3, new Wall(0));
		stage.setObject(14, 3, new Wall(0));
		stage.setObject(15, 3, new Wall(0));
		stage.setObject(16, 3, new Wall(0));

		//Row 4
		stage.setObject(0, 4, new Wall(0));
		stage.setObject(1, 4, new Wall(0));
		stage.setObject(2, 4, new Wall(0));
		stage.setObject(3, 4, new Wall(0));
		stage.setObject(4, 4, new Wall(0));
		stage.setObject(6, 4, new Flower(true));
		stage.setObject(8, 4, new PFlower(true));
		stage.setObject(9, 4, new Flower(false));
		stage.setObject(11, 4, new PFlower(true));
		stage.setObject(13, 4, new Flower(false));
		stage.setObject(14, 4, new Apple());
		stage.setObject(15, 4, new LaserGun());
		stage.setObject(16, 4, new Wall(0));

		//Row 5
		stage.setObject(0, 5, new Wall(0));
		stage.setObject(1, 5, new Flower(false));
		stage.setObject(2, 5, new PFlower(true));
		stage.setObject(3, 5, new LaserGun());
		stage.setObject(4, 5, new Wall(0));
		stage.setObject(5, 5, new Flower(false));
		stage.setObject(6, 5, new Flower(true));
		stage.setObject(7, 5, new Flower(true));
		stage.setObject(9, 5, new Wall(0));
		stage.setObject(11, 5, new Flower(false));
		stage.setObject(12, 5, new Flower(false));
		stage.setObject(13, 5, new Crystal());
		stage.setObject(15, 5, new Crystal());
		stage.setObject(16, 5, new Wall(0));

		//Row 6
		stage.setObject(0, 6, new Wall(0));
		stage.setObject(1, 6, new PFlower(true));
		stage.setObject(3, 6, new PFlower(true));
		stage.setObject(4, 6, new Wall(0));
		stage.setObject(5, 6, new Flower(false));
		stage.setObject(8, 6, new PFlower(true));
		stage.setObject(9, 6, new Wall(0));
		stage.setObject(10, 6, new Apple());
		stage.setObject(12, 6, new Flower(true));
		stage.setObject(13, 6, new Flower(false));
		stage.setObject(15, 6, new Egg());
		stage.setObject(16, 6, new Wall(0));

		//Row 7
		stage.setObject(0, 7, new Wall(0));
		stage.setObject(1, 7, new Flower(true));
		stage.setObject(2, 7, new Pill());
		stage.setObject(3, 7, new Flower(true));
		stage.setObject(4, 7, new Flower(false));
		stage.setObject(6, 7, new Flower(false));
		stage.setObject(7, 7, new Bomb());
		stage.setObject(9, 7, new Apple());
		stage.setObject(10, 7, new Apple());
		stage.setObject(12, 7, new PFlower(true));
		stage.setObject(14, 7, new Wall(10));
		stage.setObject(15, 7, new Apple());
		stage.setObject(16, 7, new Wall(0));

		//Row 8
		stage.setObject(0, 8, new Wall(0));
		stage.setObject(1, 8, new Flower(false));
		stage.setObject(2, 8, new Treasure());
		stage.setObject(3, 8, new Flower(false));
		stage.setObject(4, 8, new Crystal());
		stage.setObject(6, 8, new Crystal());
		stage.setObject(7, 8, new Flower(true));
		stage.setObject(8, 8, new Wall(0));
		stage.setObject(9, 8, new Wall(0));
		stage.setObject(10, 8, new Wall(0));
		stage.setObject(11, 8, new Wall(0));
		stage.setObject(12, 8, new Door());
		stage.setObject(13, 8, new Wall(0));
		stage.setObject(14, 8, new Wall(0));
		stage.setObject(15, 8, new Wall(0));
		stage.setObject(16, 8, new Wall(0));

		//Row 9
		stage.setObject(0, 9, new Wall(0));
		stage.setObject(1, 9, new PFlower(true));
		stage.demon.push(new Demon(stage, 3, 9, DIR_NORTH));
		stage.setObject(4, 9, new Wall(0));
		stage.setObject(5, 9, new Crystal());
		stage.setObject(6, 9, new Flower(false));
		stage.setObject(7, 9, new Flower(true));
		stage.setObject(8, 9, new Wall(0));
		stage.setObject(9, 9, new Mushroom(false));
		stage.setObject(10, 9, new Wall(0));
		stage.setObject(11, 9, new Treasure());
		stage.setObject(12, 9, new Flower(false));
		stage.setObject(13, 9, new Egg());
		stage.setObject(14, 9, new Key());
		stage.setObject(15, 9, new PFlower(true));
		stage.setObject(16, 9, new Wall(0));

		//Row 10
		stage.setObject(0, 10, new Wall(0));
		stage.setObject(1, 10, new LaserGun());
		stage.setObject(2, 10, new Flower(false));
		stage.setObject(3, 10, new PFlower(true));
		stage.setObject(4, 10, new Wall(0));
		stage.player.push(new Player(stage, 5, 10));
		stage.setObject(6, 10, new Flower(true));
		stage.setObject(7, 10, new Flower(false));
		stage.setObject(8, 10, new Flower(true));
		stage.setObject(9, 10, new Flower(false));
		stage.setObject(10, 10, new Wall(0));
		stage.setObject(11, 10, new PFlower(true));
		stage.setObject(12, 10, new Flower(false));
		stage.setObject(13, 10, new Flower(true));
		stage.setObject(14, 10, new Flower(true));
		stage.setObject(15, 10, new PFlower(true));
		stage.setObject(16, 10, new Wall(0));

		//Row 11
		stage.setObject(0, 11, new Wall(0));
		stage.setObject(1, 11, new Wall(0));
		stage.setObject(2, 11, new Wall(0));
		stage.setObject(3, 11, new Wall(0));
		stage.setObject(4, 11, new Wall(0));
		stage.setObject(5, 11, new Wall(0));
		stage.setObject(6, 11, new Wall(0));
		stage.setObject(7, 11, new Wall(0));
		stage.setObject(8, 11, new Wall(0));
		stage.setObject(9, 11, new Wall(0));
		stage.setObject(10, 11, new Wall(0));
		stage.setObject(11, 11, new Wall(0));
		stage.setObject(12, 11, new Wall(0));
		stage.setObject(13, 11, new Wall(0));
		stage.setObject(14, 11, new Wall(0));
		stage.setObject(15, 11, new Wall(0));
		stage.setObject(16, 11, new Wall(0));

	}),
	/* Level 20 */
	new Stage(function(stage){
		//Row 0
		stage.setObject(0, 0, new Wall(8));
		stage.setObject(1, 0, new Wall(8));
		stage.setObject(2, 0, new Wall(8));
		stage.setObject(3, 0, new Wall(8));
		stage.setObject(4, 0, new Wall(8));
		stage.setObject(5, 0, new Wall(8));
		stage.setObject(6, 0, new Wall(8));
		stage.setObject(7, 0, new Wall(8));
		stage.setObject(8, 0, new Wall(8));
		stage.setObject(9, 0, new Wall(8));
		stage.setObject(10, 0, new Wall(8));
		stage.setObject(11, 0, new Wall(8));
		stage.setObject(12, 0, new Wall(8));
		stage.setObject(13, 0, new Wall(8));
		stage.setObject(14, 0, new Wall(8));
		stage.setObject(15, 0, new Wall(8));
		stage.setObject(16, 0, new Wall(8));

		//Row 1
		stage.setObject(0, 1, new Wall(8));
		stage.setObject(1, 1, new Flower(false));
		stage.setObject(2, 1, new Flower(false));
		stage.player.push(new Player(stage, 4, 1));
		stage.setObject(5, 1, new Wall(8));
		stage.setObject(7, 1, new Flower(false));
		stage.setObject(8, 1, new Flower(false));
		stage.setObject(9, 1, new Door());
		stage.setObject(10, 1, new Egg());
		stage.setObject(11, 1, new Flower(true));
		stage.setObject(12, 1, new Mushroom(true));
		stage.setObject(13, 1, new Wall(8));
		stage.setObject(14, 1, new Treasure());
		stage.setObject(15, 1, new Flower(true));
		stage.setObject(16, 1, new Wall(8));

		//Row 2
		stage.setObject(0, 2, new Wall(8));
		stage.setObject(1, 2, new Key());
		stage.setObject(2, 2, new PFlower(true));
		stage.setObject(4, 2, new Flower(false));
		stage.setObject(5, 2, new Flower(false));
		stage.setObject(6, 2, new Flower(false));
		stage.setObject(7, 2, new Apple());
		stage.setObject(9, 2, new Wall(8));
		stage.setObject(10, 2, new PFlower(false));
		stage.setObject(11, 2, new Apple());
		stage.setObject(12, 2, new Flower(true));
		stage.setObject(13, 2, new Wall(8));
		stage.setObject(14, 2, new Flower(true));
		stage.setObject(15, 2, new Flower(true));
		stage.setObject(16, 2, new Wall(8));

		//Row 3
		stage.setObject(0, 3, new Wall(8));
		stage.setObject(1, 3, new Wall(8));
		stage.setObject(2, 3, new Wall(8));
		stage.setObject(3, 3, new Wall(8));
		stage.setObject(4, 3, new Wall(8));
		stage.setObject(5, 3, new Wall(8));
		stage.setObject(6, 3, new Wall(8));
		stage.setObject(7, 3, new Wall(8));
		stage.setObject(8, 3, new Wall(8));
		stage.setObject(9, 3, new Wall(8));
		stage.setObject(10, 3, new Wall(8));
		stage.setObject(11, 3, new Flower(true));
		stage.setObject(12, 3, new Wall(8));
		stage.setObject(13, 3, new Wall(8));
		stage.setObject(14, 3, new Wall(8));
		stage.setObject(15, 3, new Door());
		stage.setObject(16, 3, new Wall(8));

		//Row 4
		stage.setObject(0, 4, new Wall(8));
		stage.setObject(1, 4, new LaserGun());
		stage.setObject(2, 4, new PFlower(true));
		stage.setObject(3, 4, new Flower(true));
		stage.setObject(5, 4, new Flower(false));
		stage.setObject(6, 4, new Flower(false));
		stage.setObject(7, 4, new Wall(8));
		stage.setObject(8, 4, new Mushroom(false));
		stage.setObject(9, 4, new Wall(8));
		stage.setObject(10, 4, new Flower(false));
		stage.setObject(11, 4, new Flower(true));
		stage.setObject(13, 4, new Flower(false));
		stage.setObject(15, 4, new Flower(false));
		stage.setObject(16, 4, new Wall(8));

		//Row 5
		stage.setObject(0, 5, new Wall(8));
		stage.setObject(1, 5, new Wall(8));
		stage.setObject(2, 5, new Wall(8));
		stage.setObject(3, 5, new Wall(8));
		stage.setObject(5, 5, new Wall(8));
		stage.setObject(7, 5, new Flower(false));
		stage.setObject(8, 5, new Flower(true));
		stage.setObject(9, 5, new Wall(8));
		stage.setObject(10, 5, new Egg());
		stage.setObject(11, 5, new Egg());
		stage.setObject(12, 5, new Crystal());
		stage.setObject(14, 5, new Crystal());
		stage.setObject(15, 5, new Flower(false));
		stage.setObject(16, 5, new Wall(8));

		//Row 6
		stage.setObject(0, 6, new Wall(8));
		stage.setObject(1, 6, new Flower(false));
		stage.setObject(3, 6, new Flower(false));
		stage.setObject(4, 6, new Flower(false));
		stage.setObject(5, 6, new Wall(8));
		stage.setObject(6, 6, new Apple());
		stage.setObject(7, 6, new Flower(false));
		stage.setObject(8, 6, new Wall(8));
		stage.setObject(9, 6, new Wall(8));
		stage.setObject(10, 6, new Wall(8));
		stage.setObject(11, 6, new Wall(8));
		stage.setObject(12, 6, new Wall(8));
		stage.setObject(13, 6, new Crystal());
		stage.setObject(14, 6, new Wall(8));
		stage.setObject(15, 6, new Wall(8));
		stage.setObject(16, 6, new Wall(8));

		//Row 7
		stage.setObject(0, 7, new Wall(8));
		stage.setObject(1, 7, new Crystal());
		stage.setObject(2, 7, new Flower(false));
		stage.setObject(4, 7, new Wall(8));
		stage.setObject(5, 7, new Wall(8));
		stage.setObject(7, 7, new Wall(10));
		stage.setObject(8, 7, new Wall(8));
		stage.setObject(10, 7, new Apple());
		stage.setObject(11, 7, new Crystal());
		stage.setObject(12, 7, new Wall(8));
		stage.setObject(13, 7, new Flower(false));
		stage.setObject(14, 7, new PFlower(false));
		stage.setObject(16, 7, new Wall(8));

		//Row 8
		stage.setObject(0, 8, new Wall(8));
		stage.setObject(1, 8, new Apple());
		stage.setObject(2, 8, new Bomb());
		stage.setObject(3, 8, new Flower(false));
		stage.setObject(4, 8, new Wall(8));
		stage.setObject(5, 8, new PFlower(true));
		stage.setObject(7, 8, new Treasure());
		stage.setObject(8, 8, new Wall(8));
		stage.setObject(9, 8, new PFlower(false));
		stage.setObject(10, 8, new Key());
		stage.setObject(12, 8, new Wall(8));
		stage.setObject(13, 8, new Flower(false));
		stage.setObject(14, 8, new Key());
		stage.setObject(15, 8, new AppleRotten());
		stage.setObject(16, 8, new Wall(8));

		//Row 9
		stage.setObject(0, 9, new Wall(8));
		stage.setObject(1, 9, new Crystal());
		stage.setObject(3, 9, new Flower(false));
		stage.setObject(4, 9, new Wall(8));
		stage.setObject(5, 9, new Wall(8));
		stage.setObject(6, 9, new PFlower(false));
		stage.setObject(8, 9, new Wall(8));
		stage.setObject(9, 9, new Egg());
		stage.setObject(10, 9, new Flower(false));
		stage.setObject(11, 9, new Crystal());
		stage.setObject(12, 9, new Wall(8));
		stage.setObject(14, 9, new Flower(false));
		stage.setObject(16, 9, new Wall(8));

		//Row 10
		stage.setObject(0, 10, new Wall(8));
		stage.demon.push(new Demon(stage, 1, 10, DIR_NORTH));
		stage.setObject(2, 10, new Wall(8));
		stage.setObject(4, 10, new Flower(false));
		stage.setObject(6, 10, new Flower(false));
		stage.setObject(7, 10, new Egg());
		stage.setObject(8, 10, new Door());
		stage.setObject(9, 10, new Flower(true));
		stage.setObject(10, 10, new Crystal());
		stage.setObject(12, 10, new Flower(true));
		stage.setObject(13, 10, new Flower(false));
		stage.setObject(15, 10, new Flower(false));
		stage.setObject(16, 10, new Wall(8));

		//Row 11
		stage.setObject(0, 11, new Wall(8));
		stage.setObject(1, 11, new Wall(8));
		stage.setObject(2, 11, new Wall(8));
		stage.setObject(3, 11, new Wall(8));
		stage.setObject(4, 11, new Wall(8));
		stage.setObject(5, 11, new Wall(8));
		stage.setObject(6, 11, new Wall(8));
		stage.setObject(7, 11, new Wall(8));
		stage.setObject(8, 11, new Wall(8));
		stage.setObject(9, 11, new Wall(8));
		stage.setObject(10, 11, new Wall(8));
		stage.setObject(11, 11, new Wall(8));
		stage.setObject(12, 11, new Wall(8));
		stage.setObject(13, 11, new Wall(8));
		stage.setObject(14, 11, new Wall(8));
		stage.setObject(15, 11, new Wall(8));
		stage.setObject(16, 11, new Wall(8));

	}),
	/* Level 21 */
	new Stage(function(stage){
		//Row 0
		stage.setObject(0, 0, new Wall(5));
		stage.setObject(1, 0, new Wall(5));
		stage.setObject(2, 0, new Wall(5));
		stage.setObject(3, 0, new Wall(5));
		stage.setObject(4, 0, new Wall(5));
		stage.setObject(5, 0, new Wall(5));
		stage.setObject(6, 0, new Wall(5));
		stage.setObject(7, 0, new Wall(5));
		stage.setObject(8, 0, new Wall(5));
		stage.setObject(9, 0, new Wall(5));
		stage.setObject(10, 0, new Wall(5));
		stage.setObject(11, 0, new Wall(5));
		stage.setObject(12, 0, new Wall(5));
		stage.setObject(13, 0, new Wall(5));
		stage.setObject(14, 0, new Wall(5));
		stage.setObject(15, 0, new Wall(5));
		stage.setObject(16, 0, new Wall(5));

		//Row 1
		stage.setObject(0, 1, new Wall(5));
		stage.setObject(1, 1, new Egg());
		stage.setObject(2, 1, new PFlower(true));
		stage.setObject(4, 1, new Door());
		stage.demon.push(new Demon(stage, 5, 1, DIR_WEST));
		stage.setObject(6, 1, new Wall(5));
		stage.setObject(8, 1, new Bomb());
		stage.setObject(11, 1, new Door());
		stage.setObject(14, 1, new Door());
		stage.setObject(16, 1, new Wall(5));

		//Row 2
		stage.setObject(0, 2, new Wall(5));
		stage.setObject(3, 2, new Bomb());
		stage.setObject(4, 2, new Wall(5));
		stage.setObject(5, 2, new Wall(5));
		stage.setObject(6, 2, new Wall(5));
		stage.setObject(7, 2, new PFlower(true));
		stage.setObject(9, 2, new PFlower(true));
		stage.setObject(11, 2, new Wall(5));
		stage.setObject(12, 2, new Apple());
		stage.setObject(13, 2, new Mushroom(true));
		stage.setObject(14, 2, new Wall(5));
		stage.setObject(15, 2, new Mushroom(false));
		stage.setObject(16, 2, new Wall(5));

		//Row 3
		stage.setObject(0, 3, new Wall(5));
		stage.setObject(2, 3, new Flower(false));
		stage.setObject(3, 3, new Flower(true));
		stage.setObject(4, 3, new Flower(false));
		stage.setObject(6, 3, new Door());
		stage.setObject(8, 3, new Apple());
		stage.setObject(10, 3, new Apple());
		stage.setObject(11, 3, new Wall(5));
		stage.setObject(12, 3, new Egg());
		stage.setObject(13, 3, new Wall(5));
		stage.setObject(14, 3, new Wall(5));
		stage.setObject(15, 3, new Wall(5));
		stage.setObject(16, 3, new Wall(5));

		//Row 4
		stage.setObject(0, 4, new Wall(5));
		stage.setObject(1, 4, new Flower(true));
		stage.setObject(5, 4, new Flower(true));
		stage.setObject(6, 4, new Wall(5));
		stage.setObject(7, 4, new Key());
		stage.setObject(9, 4, new PFlower(false));
		stage.setObject(11, 4, new Wall(5));
		stage.setObject(12, 4, new Treasure());
		stage.setObject(13, 4, new Flower(false));
		stage.setObject(14, 4, new PFlower(true));
		stage.setObject(16, 4, new Wall(5));

		//Row 5
		stage.setObject(0, 5, new Wall(5));
		stage.setObject(1, 5, new Apple());
		stage.setObject(2, 5, new Wall(5));
		stage.setObject(3, 5, new Door());
		stage.setObject(4, 5, new Wall(5));
		stage.setObject(5, 5, new Wall(5));
		stage.setObject(6, 5, new Wall(5));
		stage.setObject(7, 5, new Wall(5));
		stage.setObject(8, 5, new Wall(5));
		stage.setObject(9, 5, new Wall(5));
		stage.setObject(10, 5, new Egg());
		stage.setObject(11, 5, new Wall(5));
		stage.setObject(12, 5, new Wall(10));
		stage.setObject(13, 5, new Flower(false));
		stage.setObject(14, 5, new Flower(false));
		stage.setObject(15, 5, new Apple());
		stage.setObject(16, 5, new Wall(5));

		//Row 6
		stage.setObject(0, 6, new Wall(5));
		stage.setObject(1, 6, new Key());
		stage.setObject(2, 6, new Wall(5));
		stage.setObject(4, 6, new AppleRotten());
		stage.setObject(6, 6, new LaserGun());
		stage.setObject(7, 6, new Wall(5));
		stage.setObject(8, 6, new LaserGun());
		stage.setObject(10, 6, new Crystal());
		stage.setObject(12, 6, new Crystal());
		stage.setObject(13, 6, new Flower(false));
		stage.setObject(14, 6, new PFlower(true));
		stage.setObject(15, 6, new Flower(false));
		stage.setObject(16, 6, new Wall(5));

		//Row 7
		stage.setObject(0, 7, new Wall(5));
		stage.setObject(1, 7, new Wall(5));
		stage.setObject(2, 7, new Wall(5));
		stage.setObject(3, 7, new Apple());
		stage.setObject(4, 7, new Bomb());
		stage.setObject(5, 7, new PFlower(true));
		stage.setObject(6, 7, new Ball());
		stage.setObject(7, 7, new Wall(5));
		stage.setObject(8, 7, new Apple());
		stage.setObject(9, 7, new Crystal());
		stage.setObject(10, 7, new Flower(true));
		stage.setObject(11, 7, new Wall(5));
		stage.setObject(13, 7, new Apple());
		stage.setObject(15, 7, new Flower(false));
		stage.setObject(16, 7, new Wall(5));

		//Row 8
		stage.setObject(0, 8, new Wall(5));
		stage.setObject(1, 8, new Key());
		stage.setObject(2, 8, new Flower(false));
		stage.setObject(3, 8, new Apple());
		stage.setObject(5, 8, new Flower(false));
		stage.setObject(6, 8, new PFlower(true));
		stage.setObject(7, 8, new Wall(5));
		stage.setObject(8, 8, new Wall(5));
		stage.setObject(9, 8, new Wall(5));
		stage.setObject(10, 8, new Wall(5));
		stage.setObject(11, 8, new Wall(5));
		stage.setObject(12, 8, new Door());
		stage.setObject(13, 8, new Wall(5));
		stage.setObject(14, 8, new Wall(5));
		stage.setObject(15, 8, new Wall(5));
		stage.setObject(16, 8, new Wall(5));

		//Row 9
		stage.setObject(0, 9, new Wall(5));
		stage.setObject(1, 9, new Flower(false));
		stage.setObject(2, 9, new Flower(false));
		stage.setObject(3, 9, new Bomb());
		stage.setObject(5, 9, new Apple());
		stage.setObject(7, 9, new Wall(5));
		stage.setObject(8, 9, new PFlower(true));
		stage.setObject(11, 9, new Crystal());
		stage.player.push(new Player(stage, 12, 9));
		stage.setObject(13, 9, new Crystal());
		stage.demon.push(new Demon(stage, 15, 9, DIR_WEST));
		stage.setObject(16, 9, new Wall(5));

		//Row 10
		stage.setObject(0, 10, new Wall(5));
		stage.setObject(1, 10, new PFlower(true));
		stage.setObject(3, 10, new Apple());
		stage.setObject(4, 10, new Flower(true));
		stage.setObject(5, 10, new Key());
		stage.setObject(6, 10, new PFlower(true));
		stage.setObject(7, 10, new Wall(5));
		stage.setObject(8, 10, new Key());
		stage.setObject(9, 10, new Wall(10));
		stage.setObject(14, 10, new Ball());
		stage.setObject(16, 10, new Wall(5));

		//Row 11
		stage.setObject(0, 11, new Wall(5));
		stage.setObject(1, 11, new Wall(5));
		stage.setObject(2, 11, new Wall(5));
		stage.setObject(3, 11, new Wall(5));
		stage.setObject(4, 11, new Wall(5));
		stage.setObject(5, 11, new Wall(5));
		stage.setObject(6, 11, new Wall(5));
		stage.setObject(7, 11, new Wall(5));
		stage.setObject(8, 11, new Wall(5));
		stage.setObject(9, 11, new Wall(5));
		stage.setObject(10, 11, new Wall(5));
		stage.setObject(11, 11, new Wall(5));
		stage.setObject(12, 11, new Wall(5));
		stage.setObject(13, 11, new Wall(5));
		stage.setObject(14, 11, new Wall(5));
		stage.setObject(15, 11, new Wall(5));
		stage.setObject(16, 11, new Wall(5));

	}),
	/* Level 22 */
	new Stage(function(stage){
		//Row 0
		stage.setObject(0, 0, new Wall(2));
		stage.setObject(1, 0, new Wall(2));
		stage.setObject(2, 0, new Wall(2));
		stage.setObject(3, 0, new Wall(2));
		stage.setObject(4, 0, new Wall(2));
		stage.setObject(5, 0, new Wall(2));
		stage.setObject(6, 0, new Wall(2));
		stage.setObject(7, 0, new Wall(2));
		stage.setObject(8, 0, new Wall(2));
		stage.setObject(9, 0, new Wall(2));
		stage.setObject(10, 0, new Wall(2));
		stage.setObject(11, 0, new Wall(2));
		stage.setObject(12, 0, new Wall(2));
		stage.setObject(13, 0, new Wall(2));
		stage.setObject(14, 0, new Wall(2));
		stage.setObject(15, 0, new Wall(2));
		stage.setObject(16, 0, new Wall(2));

		//Row 1
		stage.setObject(0, 1, new Wall(2));
		stage.setObject(1, 1, new Key());
		stage.setObject(2, 1, new Apple());
		stage.setObject(3, 1, new Apple());
		stage.setObject(6, 1, new Apple());
		stage.setObject(7, 1, new Apple());
		stage.demon.push(new Demon(stage, 8, 1, DIR_EAST));
		stage.setObject(9, 1, new LaserGun());
		stage.setObject(11, 1, new Bomb());
		stage.setObject(13, 1, new Bomb());
		stage.setObject(15, 1, new LaserGun());
		stage.setObject(16, 1, new Wall(2));

		//Row 2
		stage.setObject(0, 2, new Wall(2));
		stage.setObject(1, 2, new Wall(2));
		stage.setObject(2, 2, new Wall(2));
		stage.setObject(3, 2, new Apple());
		stage.setObject(5, 2, new Wall(2));
		stage.setObject(6, 2, new Wall(2));
		stage.setObject(7, 2, new Wall(2));
		stage.setObject(8, 2, new Wall(2));
		stage.setObject(9, 2, new Wall(2));
		stage.setObject(10, 2, new Flower(false));
		stage.setObject(12, 2, new Flower(false));
		stage.setObject(13, 2, new Wall(2));
		stage.setObject(14, 2, new Wall(2));
		stage.demon.push(new Demon(stage, 15, 2, DIR_NORTH));
		stage.setObject(16, 2, new Wall(2));

		//Row 3
		stage.setObject(0, 3, new Wall(2));
		stage.setObject(1, 3, new Flower(false));
		stage.setObject(3, 3, new Apple());
		stage.setObject(4, 3, new Flower(false));
		stage.setObject(5, 3, new PFlower(true));
		stage.setObject(8, 3, new Ball());
		stage.setObject(10, 3, new Flower(false));
		stage.setObject(11, 3, new Flower(false));
		stage.setObject(12, 3, new Apple());
		stage.setObject(13, 3, new Wall(2));
		stage.setObject(14, 3, new Wall(2));
		stage.setObject(15, 3, new Wall(2));
		stage.setObject(16, 3, new Wall(2));

		//Row 4
		stage.setObject(0, 4, new Wall(2));
		stage.setObject(1, 4, new Egg());
		stage.setObject(2, 4, new PFlower(true));
		stage.setObject(4, 4, new Apple());
		stage.setObject(6, 4, new Flower(false));
		stage.setObject(7, 4, new Flower(false));
		stage.setObject(8, 4, new Flower(false));
		stage.setObject(9, 4, new Apple());
		stage.setObject(11, 4, new Flower(false));
		stage.setObject(12, 4, new Flower(false));
		stage.player.push(new Player(stage, 13, 4));
		stage.setObject(14, 4, new Flower(true));
		stage.setObject(15, 4, new Egg());
		stage.setObject(16, 4, new Wall(2));

		//Row 5
		stage.setObject(0, 5, new Wall(2));
		stage.setObject(1, 5, new Wall(2));
		stage.setObject(2, 5, new Wall(2));
		stage.setObject(3, 5, new Wall(2));
		stage.setObject(4, 5, new Wall(2));
		stage.setObject(5, 5, new Wall(2));
		stage.setObject(6, 5, new Wall(2));
		stage.setObject(7, 5, new Wall(2));
		stage.setObject(8, 5, new Wall(2));
		stage.setObject(9, 5, new Wall(2));
		stage.setObject(10, 5, new Wall(2));
		stage.setObject(11, 5, new Wall(2));
		stage.setObject(12, 5, new Wall(2));
		stage.setObject(13, 5, new Wall(2));
		stage.setObject(14, 5, new Wall(2));
		stage.setObject(15, 5, new Flower(false));
		stage.setObject(16, 5, new Wall(2));

		//Row 6
		stage.setObject(0, 6, new Wall(2));
		stage.setObject(1, 6, new Flower(false));
		stage.setObject(2, 6, new Flower(false));
		stage.setObject(3, 6, new Flower(false));
		stage.setObject(4, 6, new Flower(false));
		stage.setObject(5, 6, new Flower(false));
		stage.setObject(6, 6, new Wall(2));
		stage.setObject(7, 6, new Flower(true));
		stage.setObject(8, 6, new Treasure());
		stage.setObject(9, 6, new Flower(true));
		stage.setObject(10, 6, new Wall(2));
		stage.setObject(11, 6, new PFlower(false));
		stage.setObject(13, 6, new Door());
		stage.setObject(14, 6, new Flower(false));
		stage.setObject(15, 6, new Flower(false));
		stage.setObject(16, 6, new Wall(2));

		//Row 7
		stage.setObject(0, 7, new Wall(2));
		stage.setObject(1, 7, new Apple());
		stage.setObject(3, 7, new Apple());
		stage.setObject(4, 7, new Key());
		stage.setObject(5, 7, new Flower(false));
		stage.setObject(6, 7, new Wall(2));
		stage.setObject(8, 7, new PFlower(false));
		stage.setObject(10, 7, new Egg());
		stage.setObject(12, 7, new Flower(false));
		stage.setObject(13, 7, new Wall(2));
		stage.setObject(14, 7, new Flower(false));
		stage.setObject(15, 7, new Wall(2));
		stage.setObject(16, 7, new Wall(2));

		//Row 8
		stage.setObject(0, 8, new Wall(2));
		stage.setObject(2, 8, new PFlower(true));
		stage.setObject(3, 8, new Wall(10));
		stage.setObject(6, 8, new Bomb());
		stage.setObject(7, 8, new Bomb());
		stage.setObject(10, 8, new Wall(2));
		stage.setObject(11, 8, new PFlower(true));
		stage.setObject(13, 8, new Wall(2));
		stage.setObject(14, 8, new Flower(false));
		stage.setObject(15, 8, new Egg());
		stage.setObject(16, 8, new Wall(2));

		//Row 9
		stage.setObject(0, 9, new Wall(2));
		stage.setObject(1, 9, new Wall(2));
		stage.setObject(2, 9, new Wall(2));
		stage.setObject(3, 9, new Wall(2));
		stage.setObject(4, 9, new Bomb());
		stage.setObject(5, 9, new Wall(2));
		stage.setObject(6, 9, new Wall(2));
		stage.setObject(7, 9, new Flower(false));
		stage.setObject(9, 9, new Flower(false));
		stage.setObject(10, 9, new Wall(2));
		stage.setObject(11, 9, new Wall(2));
		stage.setObject(12, 9, new Wall(2));
		stage.setObject(13, 9, new Wall(2));
		stage.setObject(14, 9, new Wall(2));
		stage.setObject(15, 9, new Apple());
		stage.setObject(16, 9, new Wall(2));

		//Row 10
		stage.setObject(0, 10, new Wall(2));
		stage.demon.push(new Demon(stage, 1, 10, DIR_EAST));
		stage.setObject(4, 10, new LaserGun());
		stage.setObject(5, 10, new PFlower(true));
		stage.setObject(6, 10, new Flower(false));
		stage.setObject(7, 10, new PFlower(false));
		stage.setObject(8, 10, new Egg());
		stage.setObject(9, 10, new Flower(false));
		stage.setObject(10, 10, new Flower(false));
		stage.setObject(12, 10, new Door());
		stage.setObject(13, 10, new Flower(true));
		stage.setObject(14, 10, new Flower(true));
		stage.setObject(15, 10, new Mushroom(false));
		stage.setObject(16, 10, new Wall(2));

		//Row 11
		stage.setObject(0, 11, new Wall(2));
		stage.setObject(1, 11, new Wall(2));
		stage.setObject(2, 11, new Wall(2));
		stage.setObject(3, 11, new Wall(2));
		stage.setObject(4, 11, new Wall(2));
		stage.setObject(5, 11, new Wall(2));
		stage.setObject(6, 11, new Wall(2));
		stage.setObject(7, 11, new Wall(2));
		stage.setObject(8, 11, new Wall(2));
		stage.setObject(9, 11, new Wall(2));
		stage.setObject(10, 11, new Wall(2));
		stage.setObject(11, 11, new Wall(2));
		stage.setObject(12, 11, new Wall(2));
		stage.setObject(13, 11, new Wall(2));
		stage.setObject(14, 11, new Wall(2));
		stage.setObject(15, 11, new Wall(2));
		stage.setObject(16, 11, new Wall(2));

	}),
	/* Level 23 */
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
		stage.setObject(1, 1, new Pill());
		stage.setObject(2, 1, new Key());
		stage.setObject(3, 1, new PFlower(true));
		stage.setObject(6, 1, new Crystal());
		stage.setObject(8, 1, new Crystal());
		stage.setObject(11, 1, new Door());
		stage.demon.push(new Demon(stage, 12, 1, DIR_WEST));
		stage.setObject(13, 1, new Wall(7));
		stage.setObject(14, 1, new Treasure());
		stage.setObject(15, 1, new Treasure());
		stage.setObject(16, 1, new Wall(7));

		//Row 2
		stage.setObject(0, 2, new Wall(7));
		stage.setObject(1, 2, new Wall(7));
		stage.setObject(2, 2, new Wall(7));
		stage.setObject(3, 2, new Wall(7));
		stage.setObject(4, 2, new Wall(7));
		stage.setObject(5, 2, new Crystal());
		stage.setObject(6, 2, new Wall(7));
		stage.setObject(7, 2, new Wall(7));
		stage.setObject(8, 2, new Wall(7));
		stage.setObject(9, 2, new Bomb());
		stage.setObject(10, 2, new Wall(7));
		stage.setObject(11, 2, new Wall(7));
		stage.setObject(12, 2, new Wall(7));
		stage.setObject(13, 2, new Wall(7));
		stage.setObject(14, 2, new Flower(true));
		stage.setObject(15, 2, new Flower(true));
		stage.setObject(16, 2, new Wall(7));

		//Row 3
		stage.setObject(0, 3, new Wall(7));
		stage.setObject(1, 3, new PFlower(true));
		stage.setObject(2, 3, new Flower(true));
		stage.setObject(3, 3, new Wall(7));
		stage.setObject(7, 3, new Crystal());
		stage.player.push(new Player(stage, 8, 3));
		stage.setObject(9, 3, new Bomb());
		stage.setObject(11, 3, new Apple());
		stage.setObject(12, 3, new LaserGun());
		stage.setObject(13, 3, new Wall(7));
		stage.setObject(14, 3, new Wall(7));
		stage.setObject(15, 3, new Flower(true));
		stage.setObject(16, 3, new Wall(7));

		//Row 4
		stage.setObject(0, 4, new Wall(7));
		stage.setObject(2, 4, new AppleRotten());
		stage.setObject(3, 4, new Door());
		stage.setObject(4, 4, new Flower(false));
		stage.setObject(5, 4, new Flower(true));
		stage.setObject(6, 4, new Flower(false));
		stage.setObject(7, 4, new Flower(true));
		stage.setObject(8, 4, new Flower(false));
		stage.setObject(9, 4, new Flower(true));
		stage.setObject(11, 4, new Flower(true));
		stage.setObject(13, 4, new Flower(true));
		stage.setObject(14, 4, new Flower(true));
		stage.setObject(15, 4, new Treasure());
		stage.setObject(16, 4, new Wall(7));

		//Row 5
		stage.setObject(0, 5, new Wall(7));
		stage.setObject(1, 5, new Treasure());
		stage.setObject(2, 5, new Flower(true));
		stage.setObject(3, 5, new Wall(7));
		stage.setObject(4, 5, new Wall(7));
		stage.setObject(5, 5, new Wall(7));
		stage.setObject(6, 5, new Crystal());
		stage.setObject(7, 5, new Wall(7));
		stage.setObject(8, 5, new Wall(7));
		stage.setObject(9, 5, new Wall(7));
		stage.setObject(10, 5, new Wall(7));
		stage.setObject(12, 5, new Apple());
		stage.setObject(14, 5, new PFlower(true));
		stage.setObject(15, 5, new Mushroom(false));
		stage.setObject(16, 5, new Wall(7));

		//Row 6
		stage.setObject(0, 6, new Wall(7));
		stage.setObject(1, 6, new Wall(7));
		stage.setObject(2, 6, new Flower(true));
		stage.setObject(3, 6, new PFlower(true));
		stage.setObject(4, 6, new Wall(7));
		stage.setObject(5, 6, new Crystal());
		stage.setObject(7, 6, new Crystal());
		stage.setObject(8, 6, new Flower(false));
		stage.setObject(10, 6, new Wall(7));
		stage.setObject(11, 6, new Wall(7));
		stage.setObject(12, 6, new Wall(7));
		stage.setObject(13, 6, new Wall(7));
		stage.setObject(14, 6, new Wall(7));
		stage.setObject(15, 6, new Wall(7));
		stage.setObject(16, 6, new Wall(7));

		//Row 7
		stage.setObject(0, 7, new Wall(7));
		stage.setObject(1, 7, new PFlower(true));
		stage.setObject(2, 7, new Flower(true));
		stage.setObject(4, 7, new AppleRotten());
		stage.setObject(5, 7, new Key());
		stage.setObject(6, 7, new PFlower(false));
		stage.setObject(8, 7, new Apple());
		stage.setObject(9, 7, new Flower(false));
		stage.setObject(10, 7, new Door());
		stage.setObject(11, 7, new Door());
		stage.setObject(12, 7, new Crystal());
		stage.setObject(14, 7, new Crystal());
		stage.setObject(15, 7, new LaserGun());
		stage.setObject(16, 7, new Wall(7));

		//Row 8
		stage.setObject(0, 8, new Wall(7));
		stage.setObject(2, 8, new Flower(true));
		stage.setObject(3, 8, new AppleRotten());
		stage.setObject(4, 8, new Wall(7));
		stage.setObject(5, 8, new Wall(7));
		stage.setObject(6, 8, new Wall(7));
		stage.setObject(7, 8, new Wall(7));
		stage.setObject(8, 8, new Wall(7));
		stage.setObject(9, 8, new Wall(7));
		stage.setObject(10, 8, new Wall(7));
		stage.setObject(11, 8, new Wall(7));
		stage.setObject(12, 8, new Egg());
		stage.setObject(13, 8, new Wall(7));
		stage.setObject(14, 8, new Wall(7));
		stage.setObject(15, 8, new Wall(7));
		stage.setObject(16, 8, new Wall(7));

		//Row 9
		stage.setObject(0, 9, new Wall(7));
		stage.setObject(1, 9, new AppleRotten());
		stage.setObject(2, 9, new Flower(true));
		stage.setObject(4, 9, new Crystal());
		stage.setObject(5, 9, new Flower(true));
		stage.setObject(6, 9, new Flower(true));
		stage.setObject(7, 9, new PFlower(true));
		stage.setObject(11, 9, new Bomb());
		stage.setObject(13, 9, new PFlower(false));
		stage.setObject(14, 9, new Flower(true));
		stage.setObject(15, 9, new Key());
		stage.setObject(16, 9, new Wall(7));

		//Row 10
		stage.setObject(0, 10, new Wall(7));
		stage.setObject(1, 10, new Flower(true));
		stage.setObject(3, 10, new Crystal());
		stage.setObject(6, 10, new Crystal());
		stage.setObject(8, 10, new Apple());
		stage.setObject(10, 10, new Flower(true));
		stage.setObject(11, 10, new Flower(true));
		stage.setObject(12, 10, new Apple());
		stage.setObject(13, 10, new Flower(true));
		stage.setObject(14, 10, new Bomb());
		stage.setObject(15, 10, new Flower(true));
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
	/* Level 24 */
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
		stage.demon.push(new Demon(stage, 1, 1, DIR_SOUTH));
		stage.demon.push(new Demon(stage, 2, 1, DIR_WEST));
		stage.demon.push(new Demon(stage, 3, 1, DIR_WEST));
		stage.demon.push(new Demon(stage, 4, 1, DIR_WEST));
		stage.demon.push(new Demon(stage, 5, 1, DIR_WEST));
		stage.setObject(6, 1, new Wall(3));
		stage.setObject(8, 1, new Crystal());
		stage.demon.push(new Demon(stage, 9, 1, DIR_WEST));
		stage.setObject(10, 1, new Wall(3));
		stage.setObject(11, 1, new Flower(true));
		stage.setObject(12, 1, new Flower(true));
		stage.setObject(13, 1, new Door());
		stage.setObject(14, 1, new Treasure());
		stage.setObject(15, 1, new Treasure());
		stage.setObject(16, 1, new Wall(3));

		//Row 2
		stage.setObject(0, 2, new Wall(3));
		stage.setObject(1, 2, new Apple());
		stage.demon.push(new Demon(stage, 2, 2, DIR_WEST));
		stage.demon.push(new Demon(stage, 3, 2, DIR_WEST));
		stage.demon.push(new Demon(stage, 4, 2, DIR_WEST));
		stage.demon.push(new Demon(stage, 5, 2, DIR_WEST));
		stage.setObject(6, 2, new Wall(3));
		stage.setObject(7, 2, new Crystal());
		stage.setObject(8, 2, new Egg());
		stage.setObject(9, 2, new Wall(3));
		stage.setObject(10, 2, new Wall(3));
		stage.setObject(11, 2, new Flower(true));
		stage.setObject(12, 2, new Key());
		stage.setObject(13, 2, new Wall(3));
		stage.demon.push(new Demon(stage, 14, 2, DIR_EAST));
		stage.setObject(16, 2, new Wall(3));

		//Row 3
		stage.setObject(0, 3, new Wall(3));
		stage.setObject(1, 3, new PFlower(false));
		stage.setObject(2, 3, new Wall(3));
		stage.setObject(3, 3, new Wall(3));
		stage.setObject(4, 3, new Wall(3));
		stage.setObject(5, 3, new Wall(3));
		stage.setObject(6, 3, new Wall(3));
		stage.player.push(new Player(stage, 7, 3));
		stage.setObject(8, 3, new Wall(3));
		stage.setObject(9, 3, new Wall(3));
		stage.setObject(10, 3, new Wall(3));
		stage.setObject(11, 3, new Crystal());
		stage.setObject(12, 3, new Ball());
		stage.setObject(13, 3, new Wall(3));
		stage.setObject(14, 3, new Wall(3));
		stage.setObject(15, 3, new Wall(3));
		stage.setObject(16, 3, new Wall(3));

		//Row 4
		stage.setObject(0, 4, new Wall(3));
		stage.setObject(2, 4, new Flower(false));
		stage.setObject(4, 4, new Flower(false));
		stage.setObject(5, 4, new Egg());
		stage.setObject(6, 4, new Flower(true));
		stage.setObject(7, 4, new Flower(false));
		stage.setObject(8, 4, new Wall(3));
		stage.setObject(9, 4, new Egg());
		stage.setObject(10, 4, new Wall(3));
		stage.setObject(12, 4, new Egg());
		stage.setObject(14, 4, new Crystal());
		stage.setObject(15, 4, new Flower(true));
		stage.setObject(16, 4, new Wall(3));

		//Row 5
		stage.setObject(0, 5, new Wall(3));
		stage.setObject(1, 5, new Wall(3));
		stage.setObject(2, 5, new Flower(false));
		stage.setObject(3, 5, new Flower(false));
		stage.setObject(4, 5, new Wall(3));
		stage.setObject(5, 5, new Wall(3));
		stage.setObject(6, 5, new Wall(3));
		stage.setObject(7, 5, new Wall(3));
		stage.setObject(8, 5, new Wall(3));
		stage.setObject(9, 5, new Flower(false));
		stage.setObject(10, 5, new Wall(3));
		stage.setObject(11, 5, new Flower(true));
		stage.setObject(12, 5, new PFlower(true));
		stage.setObject(14, 5, new Flower(false));
		stage.setObject(15, 5, new Flower(true));
		stage.setObject(16, 5, new Wall(3));

		//Row 6
		stage.setObject(0, 6, new Wall(3));
		stage.setObject(1, 6, new Flower(false));
		stage.setObject(2, 6, new AppleRotten());
		stage.setObject(4, 6, new Flower(false));
		stage.setObject(5, 6, new Wall(3));
		stage.setObject(6, 6, new Flower(false));
		stage.setObject(7, 6, new Key());
		stage.setObject(8, 6, new Wall(3));
		stage.setObject(9, 6, new Flower(false));
		stage.setObject(10, 6, new Wall(3));
		stage.setObject(11, 6, new Wall(3));
		stage.setObject(12, 6, new Wall(3));
		stage.setObject(13, 6, new Apple());
		stage.setObject(14, 6, new Wall(3));
		stage.setObject(15, 6, new AppleRotten());
		stage.setObject(16, 6, new Wall(3));

		//Row 7
		stage.setObject(0, 7, new Wall(3));
		stage.setObject(1, 7, new Flower(false));
		stage.setObject(3, 7, new AppleRotten());
		stage.setObject(5, 7, new Wall(3));
		stage.setObject(6, 7, new PFlower(true));
		stage.setObject(8, 7, new Wall(3));
		stage.setObject(10, 7, new Flower(true));
		stage.setObject(11, 7, new Flower(true));
		stage.setObject(12, 7, new Wall(3));
		stage.setObject(13, 7, new Flower(false));
		stage.setObject(14, 7, new Wall(3));
		stage.setObject(16, 7, new Wall(3));

		//Row 8
		stage.setObject(0, 8, new Wall(3));
		stage.setObject(1, 8, new Flower(false));
		stage.setObject(2, 8, new PFlower(true));
		stage.setObject(4, 8, new Flower(false));
		stage.setObject(7, 8, new Flower(false));
		stage.setObject(8, 8, new Wall(3));
		stage.setObject(9, 8, new Flower(false));
		stage.setObject(10, 8, new Wall(3));
		stage.setObject(11, 8, new Apple());
		stage.setObject(12, 8, new Egg());
		stage.setObject(14, 8, new Wall(3));
		stage.setObject(15, 8, new PFlower(true));
		stage.setObject(16, 8, new Wall(3));

		//Row 9
		stage.setObject(0, 9, new Wall(3));
		stage.setObject(1, 9, new Wall(10));
		stage.setObject(2, 9, new Flower(false));
		stage.setObject(3, 9, new AppleRotten());
		stage.setObject(5, 9, new Wall(3));
		stage.setObject(6, 9, new PFlower(true));
		stage.setObject(7, 9, new Flower(false));
		stage.setObject(8, 9, new Door());
		stage.setObject(9, 9, new Flower(false));
		stage.setObject(10, 9, new Wall(3));
		stage.setObject(12, 9, new Wall(3));
		stage.setObject(14, 9, new Mushroom(false));
		stage.setObject(15, 9, new Flower(true));
		stage.setObject(16, 9, new Wall(3));

		//Row 10
		stage.setObject(0, 10, new Wall(3));
		stage.setObject(1, 10, new Treasure());
		stage.setObject(3, 10, new Flower(false));
		stage.setObject(4, 10, new Flower(false));
		stage.setObject(5, 10, new Wall(3));
		stage.setObject(6, 10, new Flower(false));
		stage.setObject(8, 10, new Wall(3));
		stage.setObject(9, 10, new Ball());
		stage.setObject(10, 10, new Wall(3));
		stage.setObject(11, 10, new PFlower(true));
		stage.setObject(12, 10, new Wall(3));
		stage.setObject(13, 10, new Flower(true));
		stage.setObject(14, 10, new Apple());
		stage.setObject(15, 10, new Flower(true));
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

		/* Custom script */
		stage.getObject(1, 2).eat = undefined;
		stage.getObject(1, 3).onEat = function(demon, stage, col, row) {
			stage.destroyObject(1, 2);
		}
	}),
	/* Level 25 */
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
		stage.setObject(1, 1, new Egg());
		stage.setObject(2, 1, new PFlower(false));
		stage.setObject(3, 1, new Egg());
		stage.setObject(4, 1, new Egg());
		stage.setObject(5, 1, new Egg());
		stage.setObject(6, 1, new Egg());
		stage.setObject(7, 1, new PFlower(true));
		stage.setObject(10, 1, new Apple());
		stage.setObject(11, 1, new Egg());
		stage.setObject(12, 1, new Egg());
		stage.setObject(13, 1, new Mushroom(true));
		stage.setObject(14, 1, new Mushroom(true));
		stage.player.push(new Player(stage, 15, 1));
		stage.setObject(16, 1, new Wall(1));

		//Row 2
		stage.setObject(0, 2, new Wall(1));
		stage.setObject(1, 2, new Egg());
		stage.setObject(2, 2, new Egg());
		stage.setObject(3, 2, new Egg());
		stage.setObject(4, 2, new Apple());
		stage.setObject(5, 2, new PFlower(false));
		stage.setObject(6, 2, new Egg());
		stage.setObject(7, 2, new Egg());
		stage.setObject(8, 2, new Egg());
		stage.setObject(9, 2, new Egg());
		stage.setObject(10, 2, new PFlower(false));
		stage.setObject(11, 2, new Egg());
		stage.setObject(12, 2, new Egg());
		stage.setObject(13, 2, new Egg());
		stage.setObject(14, 2, new Egg());
		stage.setObject(15, 2, new Egg());
		stage.setObject(16, 2, new Wall(1));

		//Row 3
		stage.setObject(0, 3, new Wall(1));
		stage.setObject(1, 3, new Egg());
		stage.setObject(2, 3, new Wall(1));
		stage.setObject(3, 3, new Wall(1));
		stage.setObject(4, 3, new Wall(1));
		stage.setObject(5, 3, new Wall(1));
		stage.setObject(6, 3, new Wall(1));
		stage.setObject(7, 3, new Wall(1));
		stage.setObject(8, 3, new Wall(1));
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
		stage.setObject(1, 4, new Crystal());
		stage.setObject(2, 4, new Egg());
		stage.setObject(3, 4, new Crystal());
		stage.setObject(7, 4, new Crystal());
		stage.setObject(9, 4, new Flower(true));
		stage.setObject(10, 4, new Wall(1));
		stage.setObject(11, 4, new Key());
		stage.setObject(12, 4, new Egg());
		stage.setObject(14, 4, new Mushroom(true));
		stage.demon.push(new Demon(stage, 15, 4, DIR_WEST));
		stage.setObject(16, 4, new LaserGun());

		//Row 5
		stage.setObject(0, 5, new Wall(1));
		stage.setObject(2, 5, new Wall(1));
		stage.setObject(3, 5, new Egg());
		stage.setObject(4, 5, new Egg());
		stage.setObject(6, 5, new Crystal());
		stage.setObject(7, 5, new Egg());
		stage.setObject(8, 5, new Egg());
		stage.setObject(10, 5, new Crystal());
		stage.setObject(11, 5, new Egg());
		stage.setObject(12, 5, new Bomb());
		stage.setObject(14, 5, new Mushroom(true));
		stage.demon.push(new Demon(stage, 15, 5, DIR_WEST));
		stage.setObject(16, 5, new LaserGun());

		//Row 6
		stage.setObject(0, 6, new Wall(1));
		stage.setObject(1, 6, new Crystal());
		stage.setObject(2, 6, new Wall(1));
		stage.setObject(3, 6, new Wall(1));
		stage.setObject(4, 6, new Wall(1));
		stage.setObject(5, 6, new Wall(1));
		stage.setObject(6, 6, new Wall(1));
		stage.setObject(7, 6, new Wall(1));
		stage.setObject(8, 6, new Wall(1));
		stage.setObject(9, 6, new Wall(1));
		stage.setObject(10, 6, new Wall(1));
		stage.setObject(11, 6, new Wall(1));
		stage.setObject(12, 6, new Door());
		stage.setObject(13, 6, new Wall(1));
		stage.setObject(14, 6, new Wall(1));
		stage.setObject(15, 6, new Wall(1));
		stage.setObject(16, 6, new Wall(1));

		//Row 7
		stage.setObject(0, 7, new Wall(1));
		stage.setObject(1, 7, new LaserGun());
		stage.setObject(2, 7, new Wall(1));
		stage.setObject(3, 7, new Key());
		stage.setObject(4, 7, new Egg());
		stage.setObject(6, 7, new Apple());
		stage.setObject(8, 7, new Egg());
		stage.setObject(9, 7, new Wall(1));
		stage.setObject(10, 7, new Apple());
		stage.setObject(11, 7, new PFlower(false));
		stage.setObject(12, 7, new Egg());
		stage.setObject(13, 7, new PFlower(false));
		stage.setObject(14, 7, new Apple());
		stage.demon.push(new Demon(stage, 15, 7, DIR_WEST));
		stage.setObject(16, 7, new Wall(1));

		//Row 8
		stage.setObject(0, 8, new Wall(1));
		stage.setObject(1, 8, new Wall(1));
		stage.setObject(2, 8, new Wall(1));
		stage.setObject(3, 8, new Apple());
		stage.setObject(4, 8, new Wall(1));
		stage.setObject(5, 8, new PFlower(false));
		stage.setObject(6, 8, new Wall(1));
		stage.setObject(7, 8, new Wall(1));
		stage.setObject(8, 8, new Crystal());
		stage.setObject(9, 8, new Wall(1));
		stage.setObject(12, 8, new Egg());
		stage.setObject(13, 8, new Apple());
		stage.setObject(14, 8, new Wall(1));
		stage.setObject(15, 8, new Wall(1));
		stage.setObject(16, 8, new Wall(1));

		//Row 9
		stage.setObject(0, 9, new Wall(1));
		stage.setObject(1, 9, new Flower(true));
		stage.setObject(2, 9, new Door());
		stage.setObject(4, 9, new Wall(1));
		stage.setObject(6, 9, new Crystal());
		stage.setObject(7, 9, new Egg());
		stage.setObject(10, 9, new AppleRotten());
		stage.setObject(11, 9, new Apple());
		stage.setObject(12, 9, new PFlower(false));
		stage.setObject(14, 9, new Wall(1));
		stage.setObject(15, 9, new Egg());
		stage.setObject(16, 9, new Wall(1));

		//Row 10
		stage.setObject(0, 10, new Wall(1));
		stage.setObject(1, 10, new Mushroom(false));
		stage.setObject(2, 10, new Wall(1));
		stage.setObject(3, 10, new PFlower(true));
		stage.setObject(5, 10, new Apple());
		stage.setObject(6, 10, new Egg());
		stage.setObject(7, 10, new Egg());
		stage.setObject(8, 10, new PFlower(true));
		stage.setObject(9, 10, new Wall(1));
		stage.setObject(10, 10, new Egg());
		stage.setObject(12, 10, new Egg());
		stage.setObject(13, 10, new PFlower(true));
		stage.setObject(14, 10, new Egg());
		stage.setObject(15, 10, new Egg());
		stage.setObject(16, 10, new Wall(1));

		//Row 11
		stage.setObject(0, 11, new Wall(1));
		stage.setObject(1, 11, new Wall(1));
		stage.setObject(2, 11, new Wall(1));
		stage.setObject(3, 11, new Wall(1));
		stage.setObject(4, 11, new Wall(1));
		stage.setObject(5, 11, new Wall(1));
		stage.setObject(6, 11, new Wall(1));
		stage.setObject(7, 11, new Wall(1));
		stage.setObject(8, 11, new Wall(1));
		stage.setObject(9, 11, new Wall(1));
		stage.setObject(10, 11, new Wall(1));
		stage.setObject(11, 11, new Wall(1));
		stage.setObject(12, 11, new Wall(1));
		stage.setObject(13, 11, new Wall(1));
		stage.setObject(14, 11, new Wall(1));
		stage.setObject(15, 11, new Wall(1));
		stage.setObject(16, 11, new Wall(1));

		/* Custom script */
		stage.getObject(14, 4).eat = undefined;
		stage.getObject(14, 5).eat = undefined;
		stage.getObject(14, 7).eat = undefined;
		stage.getObject(14, 5).onDestroy = function(stage, col, row) {
			stage.destroyObject(14, 4);
		}
	}),
	/* Level 26 */
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
		stage.setObject(1, 1, new Flower(true));
		stage.setObject(3, 1, new Flower(true));
		stage.setObject(4, 1, new Apple());
		stage.setObject(7, 1, new Wall(6));
		stage.setObject(8, 1, new Key());
		stage.setObject(9, 1, new Crystal());
		stage.setObject(10, 1, new Key());
		stage.setObject(11, 1, new PFlower(true));
		stage.setObject(13, 1, new Wall(6));
		stage.setObject(14, 1, new Mushroom(true));
		stage.demon.push(new Demon(stage, 15, 1, DIR_EAST));
		stage.setObject(16, 1, new Wall(6));

		//Row 2
		stage.setObject(0, 2, new Wall(6));
		stage.setObject(1, 2, new Flower(true));
		stage.setObject(2, 2, new Flower(false));
		stage.setObject(4, 2, new Apple());
		stage.setObject(6, 2, new PFlower(true));
		stage.setObject(7, 2, new Wall(6));
		stage.setObject(8, 2, new Flower(false));
		stage.setObject(10, 2, new Crystal());
		stage.setObject(11, 2, new Flower(true));
		stage.setObject(12, 2, new Apple());
		stage.setObject(13, 2, new Wall(6));
		stage.demon.push(new Demon(stage, 14, 2, DIR_WEST));
		stage.setObject(15, 2, new Mushroom(true));
		stage.setObject(16, 2, new Wall(6));

		//Row 3
		stage.setObject(0, 3, new Wall(6));
		stage.setObject(1, 3, new Flower(false));
		stage.setObject(3, 3, new Flower(false));
		stage.setObject(4, 3, new PFlower(false));
		stage.setObject(5, 3, new Apple());
		stage.setObject(6, 3, new Key());
		stage.setObject(7, 3, new Wall(6));
		stage.setObject(8, 3, new Treasure());
		stage.setObject(9, 3, new Apple());
		stage.setObject(10, 3, new Egg());
		stage.setObject(11, 3, new Ball());
		stage.setObject(12, 3, new Egg());
		stage.setObject(13, 3, new Wall(6));
		stage.setObject(14, 3, new Wall(6));
		stage.setObject(15, 3, new Wall(6));
		stage.setObject(16, 3, new Wall(6));

		//Row 4
		stage.setObject(0, 4, new Wall(6));
		stage.setObject(1, 4, new Apple());
		stage.setObject(2, 4, new Apple());
		stage.setObject(4, 4, new Flower(true));
		stage.setObject(5, 4, new Wall(6));
		stage.setObject(6, 4, new Wall(6));
		stage.setObject(7, 4, new Wall(6));
		stage.setObject(8, 4, new Wall(6));
		stage.setObject(9, 4, new Wall(6));
		stage.setObject(10, 4, new Door());
		stage.setObject(11, 4, new Wall(6));
		stage.setObject(12, 4, new Crystal());
		stage.setObject(13, 4, new PFlower(false));
		stage.setObject(14, 4, new Egg());
		stage.setObject(15, 4, new Flower(false));
		stage.setObject(16, 4, new Wall(6));

		//Row 5
		stage.setObject(0, 5, new Wall(6));
		stage.setObject(2, 5, new Flower(false));
		stage.setObject(3, 5, new Egg());
		stage.setObject(4, 5, new Wall(6));
		stage.setObject(5, 5, new Wall(6));
		stage.setObject(6, 5, new Flower(false));
		stage.setObject(7, 5, new Flower(false));
		stage.setObject(8, 5, new Flower(false));
		stage.setObject(9, 5, new Wall(6));
		stage.setObject(10, 5, new Wall(6));
		stage.setObject(11, 5, new Wall(6));
		stage.setObject(13, 5, new Wall(6));
		stage.setObject(14, 5, new Wall(6));
		stage.setObject(15, 5, new Door());
		stage.setObject(16, 5, new Wall(6));

		//Row 6
		stage.setObject(0, 6, new Wall(6));
		stage.setObject(1, 6, new PFlower(false));
		stage.setObject(2, 6, new Flower(false));
		stage.setObject(3, 6, new PFlower(false));
		stage.setObject(4, 6, new Wall(6));
		stage.setObject(5, 6, new Flower(false));
		stage.setObject(6, 6, new Flower(false));
		stage.setObject(7, 6, new Ball());
		stage.setObject(8, 6, new Flower(false));
		stage.setObject(9, 6, new Flower(false));
		stage.setObject(10, 6, new Wall(6));
		stage.setObject(11, 6, new Flower(false));
		stage.setObject(12, 6, new Crystal());
		stage.setObject(13, 6, new PFlower(true));
		stage.setObject(15, 6, new Crystal());
		stage.setObject(16, 6, new Wall(6));

		//Row 7
		stage.setObject(0, 7, new Wall(6));
		stage.setObject(1, 7, new Wall(6));
		stage.setObject(2, 7, new Flower(false));
		stage.setObject(3, 7, new Wall(6));
		stage.setObject(4, 7, new Wall(6));
		stage.setObject(5, 7, new Flower(false));
		stage.setObject(6, 7, new Wall(6));
		stage.setObject(7, 7, new Wall(6));
		stage.setObject(8, 7, new Wall(6));
		stage.setObject(9, 7, new Door());
		stage.setObject(10, 7, new Wall(6));
		stage.setObject(12, 7, new Flower(false));
		stage.setObject(14, 7, new Crystal());
		stage.setObject(15, 7, new PFlower(true));
		stage.setObject(16, 7, new Wall(6));

		//Row 8
		stage.setObject(0, 8, new Wall(6));
		stage.setObject(1, 8, new Apple());
		stage.setObject(3, 8, new PFlower(true));
		stage.setObject(6, 8, new Wall(6));
		stage.setObject(7, 8, new Mushroom(false));
		stage.setObject(8, 8, new Flower(true));
		stage.setObject(9, 8, new Apple());
		stage.setObject(10, 8, new Wall(6));
		stage.setObject(11, 8, new PFlower(false));
		stage.setObject(12, 8, new Flower(false));
		stage.setObject(13, 8, new AppleRotten());
		stage.setObject(14, 8, new AppleRotten());
		stage.setObject(16, 8, new Wall(6));

		//Row 9
		stage.setObject(0, 9, new Wall(6));
		stage.setObject(2, 9, new AppleRotten());
		stage.setObject(4, 9, new Flower(true));
		stage.setObject(5, 9, new PFlower(false));
		stage.setObject(6, 9, new Wall(6));
		stage.setObject(7, 9, new Wall(6));
		stage.setObject(10, 9, new Door());
		stage.setObject(11, 9, new Bomb());
		stage.setObject(16, 9, new Wall(6));

		//Row 10
		stage.setObject(0, 10, new Wall(6));
		stage.player.push(new Player(stage, 1, 10));
		stage.setObject(2, 10, new Egg());
		stage.setObject(3, 10, new Flower(false));
		stage.setObject(4, 10, new Flower(false));
		stage.setObject(5, 10, new Apple());
		stage.demon.push(new Demon(stage, 6, 10, DIR_WEST));
		stage.setObject(7, 10, new Wall(6));
		stage.setObject(8, 10, new Key());
		stage.setObject(9, 10, new PFlower(true));
		stage.setObject(10, 10, new Wall(6));
		stage.setObject(11, 10, new PFlower(false));
		stage.setObject(12, 10, new Flower(false));
		stage.setObject(13, 10, new Flower(false));
		stage.setObject(14, 10, new Flower(false));
		stage.setObject(15, 10, new Apple());
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

		/* Custom script */
		stage.getObject(5, 10).eat = undefined;
	}),
	/* Level 27 */
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
		stage.setObject(1, 1, new PFlower(true));
		stage.setObject(3, 1, new Apple());
		stage.setObject(6, 1, new Treasure());
		stage.setObject(7, 1, new Wall(9));
		stage.setObject(8, 1, new Egg());
		stage.setObject(9, 1, new PFlower(false));
		stage.setObject(11, 1, new Apple());
		stage.setObject(12, 1, new Flower(true));
		stage.setObject(13, 1, new PFlower(false));
		stage.setObject(14, 1, new PFlower(true));
		stage.setObject(15, 1, new PFlower(true));
		stage.setObject(16, 1, new Wall(9));

		//Row 2
		stage.setObject(0, 2, new Wall(9));
		stage.setObject(1, 2, new Egg());
		stage.setObject(2, 2, new Flower(false));
		stage.player.push(new Player(stage, 3, 2));
		stage.setObject(4, 2, new Flower(false));
		stage.setObject(5, 2, new Bomb());
		stage.setObject(7, 2, new Bomb());
		stage.setObject(8, 2, new Bomb());
		stage.setObject(9, 2, new Crystal());
		stage.setObject(11, 2, new Crystal());
		stage.setObject(13, 2, new PFlower(false));
		stage.setObject(14, 2, new PFlower(true));
		stage.setObject(15, 2, new PFlower(true));
		stage.setObject(16, 2, new Wall(9));

		//Row 3
		stage.setObject(0, 3, new Wall(9));
		stage.setObject(1, 3, new Wall(9));
		stage.setObject(2, 3, new Wall(9));
		stage.setObject(3, 3, new Wall(9));
		stage.setObject(4, 3, new Wall(9));
		stage.setObject(5, 3, new Wall(9));
		stage.setObject(6, 3, new Door());
		stage.setObject(7, 3, new Wall(9));
		stage.setObject(8, 3, new Wall(9));
		stage.setObject(9, 3, new Wall(9));
		stage.setObject(10, 3, new Crystal());
		stage.setObject(11, 3, new Wall(9));
		stage.setObject(12, 3, new Wall(9));
		stage.setObject(13, 3, new Wall(9));
		stage.setObject(14, 3, new Wall(9));
		stage.setObject(15, 3, new Wall(9));
		stage.setObject(16, 3, new Wall(9));

		//Row 4
		stage.setObject(0, 4, new Wall(9));
		stage.setObject(1, 4, new LaserGun());
		stage.setObject(5, 4, new Apple());
		stage.setObject(6, 4, new Flower(true));
		stage.setObject(7, 4, new Wall(9));
		stage.setObject(8, 4, new Flower(true));
		stage.setObject(9, 4, new PFlower(true));
		stage.setObject(11, 4, new Bomb());
		stage.setObject(15, 4, new Flower(false));
		stage.setObject(16, 4, new Wall(9));

		//Row 5
		stage.setObject(0, 5, new Wall(9));
		stage.setObject(2, 5, new Key());
		stage.setObject(3, 5, new Flower(false));
		stage.setObject(5, 5, new PFlower(false));
		stage.setObject(7, 5, new Flower(true));
		stage.setObject(8, 5, new Apple());
		stage.setObject(11, 5, new Flower(false));
		stage.setObject(12, 5, new Apple());
		stage.setObject(13, 5, new Apple());
		stage.setObject(14, 5, new Apple());
		stage.setObject(15, 5, new Flower(false));
		stage.setObject(16, 5, new Wall(9));

		//Row 6
		stage.setObject(0, 6, new Wall(9));
		stage.setObject(2, 6, new Wall(10));
		stage.setObject(3, 6, new Wall(10));
		stage.setObject(5, 6, new Wall(9));
		stage.setObject(6, 6, new Flower(false));
		stage.setObject(7, 6, new Wall(9));
		stage.setObject(8, 6, new Wall(9));
		stage.setObject(9, 6, new Wall(9));
		stage.setObject(10, 6, new Wall(9));
		stage.setObject(11, 6, new Wall(9));
		stage.setObject(12, 6, new Wall(9));
		stage.setObject(13, 6, new Wall(9));
		stage.setObject(14, 6, new Wall(9));
		stage.setObject(15, 6, new Wall(9));
		stage.setObject(16, 6, new Wall(9));

		//Row 7
		stage.setObject(0, 7, new Wall(9));
		stage.setObject(3, 7, new Apple());
		stage.setObject(5, 7, new Wall(9));
		stage.setObject(6, 7, new Apple());
		stage.setObject(7, 7, new Flower(false));
		stage.setObject(8, 7, new Key());
		stage.setObject(9, 7, new Wall(9));
		stage.setObject(10, 7, new Treasure());
		stage.setObject(11, 7, new PFlower(false));
		stage.setObject(13, 7, new Apple());
		stage.setObject(14, 7, new Flower(false));
		stage.setObject(15, 7, new Flower(false));
		stage.setObject(16, 7, new Wall(9));

		//Row 8
		stage.setObject(0, 8, new Wall(9));
		stage.setObject(2, 8, new Flower(true));
		stage.setObject(3, 8, new Apple());
		stage.setObject(5, 8, new Door());
		stage.setObject(7, 8, new Flower(false));
		stage.setObject(8, 8, new Apple());
		stage.setObject(9, 8, new Wall(9));
		stage.setObject(10, 8, new Flower(false));
		stage.setObject(13, 8, new Apple());
		stage.setObject(15, 8, new PFlower(true));
		stage.setObject(16, 8, new Wall(9));

		//Row 9
		stage.setObject(0, 9, new Wall(9));
		stage.setObject(2, 9, new Flower(false));
		stage.setObject(4, 9, new Egg());
		stage.setObject(5, 9, new Wall(9));
		stage.setObject(6, 9, new PFlower(true));
		stage.setObject(7, 9, new Flower(false));
		stage.setObject(9, 9, new Door());
		stage.setObject(10, 9, new Flower(true));
		stage.setObject(11, 9, new Bomb());
		stage.setObject(13, 9, new Flower(false));
		stage.setObject(15, 9, new Flower(false));
		stage.setObject(16, 9, new Wall(9));

		//Row 10
		stage.setObject(0, 10, new Wall(9));
		stage.setObject(1, 10, new Egg());
		stage.setObject(4, 10, new LaserGun());
		stage.setObject(5, 10, new Wall(9));
		stage.setObject(6, 10, new Flower(false));
		stage.setObject(7, 10, new Flower(false));
		stage.setObject(8, 10, new PFlower(true));
		stage.setObject(9, 10, new Wall(9));
		stage.setObject(10, 10, new Flower(false));
		stage.setObject(11, 10, new Flower(false));
		stage.setObject(12, 10, new Mushroom(false));
		stage.setObject(13, 10, new Flower(false));
		stage.setObject(14, 10, new Egg());
		stage.setObject(15, 10, new Flower(true));
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
	/* Level 28 */
	new Stage(function(stage){
		//Row 0
		stage.setObject(0, 0, new Wall(4));
		stage.setObject(1, 0, new Wall(4));
		stage.setObject(2, 0, new Wall(4));
		stage.setObject(3, 0, new Wall(4));
		stage.setObject(4, 0, new Wall(4));
		stage.setObject(5, 0, new Wall(4));
		stage.setObject(6, 0, new Wall(4));
		stage.setObject(7, 0, new Wall(4));
		stage.setObject(8, 0, new Wall(4));
		stage.setObject(9, 0, new Wall(4));
		stage.setObject(10, 0, new Wall(4));
		stage.setObject(11, 0, new Wall(4));
		stage.setObject(12, 0, new Wall(4));
		stage.setObject(13, 0, new Wall(4));
		stage.setObject(14, 0, new Wall(4));
		stage.setObject(15, 0, new Wall(4));
		stage.setObject(16, 0, new Wall(4));

		//Row 1
		stage.setObject(0, 1, new Wall(4));
		stage.setObject(1, 1, new Egg());
		stage.setObject(2, 1, new Crystal());
		stage.setObject(3, 1, new PFlower(false));
		stage.setObject(4, 1, new Apple());
		stage.setObject(5, 1, new Flower(true));
		stage.setObject(6, 1, new PFlower(false));
		stage.setObject(7, 1, new Wall(4));
		stage.setObject(8, 1, new PFlower(false));
		stage.setObject(10, 1, new Flower(false));
		stage.setObject(11, 1, new Flower(false));
		stage.setObject(12, 1, new Flower(false));
		stage.setObject(13, 1, new Wall(4));
		stage.setObject(14, 1, new Mushroom(false));
		stage.setObject(15, 1, new Treasure());
		stage.setObject(16, 1, new Wall(4));

		//Row 2
		stage.setObject(0, 2, new Wall(4));
		stage.setObject(2, 2, new Flower(true));
		stage.setObject(3, 2, new Flower(true));
		stage.setObject(5, 2, new Flower(true));
		stage.setObject(6, 2, new Apple());
		stage.setObject(7, 2, new Wall(4));
		stage.setObject(8, 2, new Egg());
		stage.setObject(11, 2, new Apple());
		stage.setObject(13, 2, new Wall(4));
		stage.setObject(15, 2, new Apple());
		stage.setObject(16, 2, new Wall(4));

		//Row 3
		stage.setObject(0, 3, new Wall(4));
		stage.setObject(1, 3, new PFlower(true));
		stage.setObject(2, 3, new Flower(true));
		stage.setObject(5, 3, new Flower(true));
		stage.setObject(6, 3, new Flower(true));
		stage.setObject(7, 3, new Wall(4));
		stage.setObject(9, 3, new PFlower(false));
		stage.setObject(11, 3, new Apple());
		stage.setObject(12, 3, new Key());
		stage.setObject(13, 3, new Wall(4));
		stage.setObject(14, 3, new Flower(false));
		stage.setObject(15, 3, new PFlower(false));
		stage.setObject(16, 3, new Wall(4));

		//Row 4
		stage.setObject(0, 4, new Wall(4));
		stage.setObject(1, 4, new Wall(4));
		stage.setObject(2, 4, new Wall(4));
		stage.setObject(3, 4, new Wall(4));
		stage.setObject(4, 4, new Bomb());
		stage.setObject(5, 4, new Wall(4));
		stage.setObject(6, 4, new Wall(4));
		stage.setObject(7, 4, new Wall(4));
		stage.setObject(8, 4, new Bomb());
		stage.setObject(10, 4, new Flower(false));
		stage.setObject(11, 4, new Flower(false));
		stage.setObject(12, 4, new Flower(false));
		stage.setObject(13, 4, new Wall(4));
		stage.setObject(14, 4, new Flower(false));
		stage.setObject(15, 4, new Flower(false));
		stage.setObject(16, 4, new Wall(4));

		//Row 5
		stage.setObject(0, 5, new Wall(4));
		stage.setObject(2, 5, new Apple());
		stage.setObject(3, 5, new Apple());
		stage.setObject(4, 5, new Flower(false));
		stage.setObject(5, 5, new Flower(false));
		stage.setObject(6, 5, new Flower(false));
		stage.setObject(7, 5, new Flower(false));
		stage.setObject(8, 5, new Crystal());
		stage.setObject(9, 5, new Wall(4));
		stage.setObject(10, 5, new Wall(4));
		stage.setObject(11, 5, new Wall(4));
		stage.setObject(12, 5, new Wall(4));
		stage.setObject(13, 5, new Wall(4));
		stage.setObject(14, 5, new PFlower(false));
		stage.setObject(16, 5, new Wall(4));

		//Row 6
		stage.setObject(0, 6, new Wall(4));
		stage.setObject(1, 6, new PFlower(true));
		stage.setObject(2, 6, new Key());
		stage.player.push(new Player(stage, 3, 6));
		stage.setObject(5, 6, new Flower(false));
		stage.setObject(6, 6, new Flower(false));
		stage.setObject(8, 6, new Flower(false));
		stage.setObject(9, 6, new Flower(false));
		stage.setObject(10, 6, new Flower(false));
		stage.setObject(12, 6, new Door());
		stage.setObject(13, 6, new Door());
		stage.setObject(15, 6, new Flower(false));
		stage.setObject(16, 6, new Wall(4));

		//Row 7
		stage.setObject(0, 7, new Wall(4));
		stage.setObject(1, 7, new Wall(4));
		stage.setObject(2, 7, new Wall(4));
		stage.setObject(3, 7, new Wall(4));
		stage.setObject(4, 7, new Wall(4));
		stage.setObject(5, 7, new Wall(4));
		stage.setObject(7, 7, new Flower(false));
		stage.setObject(9, 7, new Apple());
		stage.setObject(11, 7, new PFlower(true));
		stage.setObject(12, 7, new Wall(4));
		stage.setObject(13, 7, new Wall(4));
		stage.setObject(14, 7, new Wall(4));
		stage.setObject(15, 7, new Wall(4));
		stage.setObject(16, 7, new Wall(4));

		//Row 8
		stage.setObject(0, 8, new Wall(4));
		stage.setObject(1, 8, new Flower(false));
		stage.setObject(5, 8, new Crystal());
		stage.setObject(6, 8, new Flower(false));
		stage.setObject(8, 8, new Flower(false));
		stage.setObject(9, 8, new Wall(4));
		stage.setObject(10, 8, new Wall(4));
		stage.setObject(11, 8, new Wall(4));
		stage.setObject(12, 8, new Wall(4));
		stage.setObject(13, 8, new PFlower(true));
		stage.setObject(14, 8, new PFlower(false));
		stage.setObject(15, 8, new Apple());
		stage.setObject(16, 8, new Wall(4));

		//Row 9
		stage.setObject(0, 9, new Wall(4));
		stage.setObject(1, 9, new Flower(false));
		stage.setObject(2, 9, new Crystal());
		stage.setObject(3, 9, new Flower(false));
		stage.setObject(4, 9, new Flower(false));
		stage.setObject(5, 9, new Wall(4));
		stage.setObject(6, 9, new PFlower(false));
		stage.setObject(8, 9, new Flower(false));
		stage.setObject(9, 9, new AppleRotten());
		stage.setObject(14, 9, new Apple());
		stage.setObject(15, 9, new Crystal());
		stage.setObject(16, 9, new Wall(4));

		//Row 10
		stage.setObject(0, 10, new Wall(4));
		stage.setObject(2, 10, new Flower(false));
		stage.setObject(3, 10, new Apple());
		stage.setObject(4, 10, new PFlower(false));
		stage.setObject(5, 10, new Wall(4));
		stage.setObject(6, 10, new AppleRotten());
		stage.setObject(7, 10, new Flower(true));
		stage.setObject(9, 10, new Wall(4));
		stage.setObject(10, 10, new PFlower(false));
		stage.setObject(11, 10, new Apple());
		stage.setObject(12, 10, new Flower(true));
		stage.setObject(13, 10, new Flower(true));
		stage.setObject(14, 10, new Crystal());
		stage.setObject(16, 10, new Wall(4));

		//Row 11
		stage.setObject(0, 11, new Wall(4));
		stage.setObject(1, 11, new Wall(4));
		stage.setObject(2, 11, new Wall(4));
		stage.setObject(3, 11, new Wall(4));
		stage.setObject(4, 11, new Wall(4));
		stage.setObject(5, 11, new Wall(4));
		stage.setObject(6, 11, new Wall(4));
		stage.setObject(7, 11, new Wall(4));
		stage.setObject(8, 11, new Wall(4));
		stage.setObject(9, 11, new Wall(4));
		stage.setObject(10, 11, new Wall(4));
		stage.setObject(11, 11, new Wall(4));
		stage.setObject(12, 11, new Wall(4));
		stage.setObject(13, 11, new Wall(4));
		stage.setObject(14, 11, new Wall(4));
		stage.setObject(15, 11, new Wall(4));
		stage.setObject(16, 11, new Wall(4));

	}),
	/* Level 29 */
	new Stage(function(stage){
		//Row 0
		stage.setObject(0, 0, new Wall(0));
		stage.setObject(1, 0, new Wall(0));
		stage.setObject(2, 0, new Wall(0));
		stage.setObject(3, 0, new Wall(0));
		stage.setObject(4, 0, new Wall(0));
		stage.setObject(5, 0, new Wall(0));
		stage.setObject(6, 0, new Wall(0));
		stage.setObject(7, 0, new Wall(0));
		stage.setObject(8, 0, new Wall(0));
		stage.setObject(9, 0, new Wall(0));
		stage.setObject(10, 0, new Wall(0));
		stage.setObject(11, 0, new Wall(0));
		stage.setObject(12, 0, new Wall(0));
		stage.setObject(13, 0, new Wall(0));
		stage.setObject(14, 0, new Wall(0));
		stage.setObject(15, 0, new Wall(0));
		stage.setObject(16, 0, new Wall(0));

		//Row 1
		stage.setObject(0, 1, new Wall(0));
		stage.setObject(1, 1, new PFlower(false));
		stage.setObject(3, 1, new PFlower(false));
		stage.setObject(4, 1, new Wall(0));
		stage.setObject(5, 1, new Flower(true));
		stage.setObject(6, 1, new Flower(true));
		stage.setObject(7, 1, new Flower(true));
		stage.setObject(8, 1, new Crystal());
		stage.setObject(10, 1, new Wall(0));
		stage.setObject(11, 1, new Flower(true));
		stage.setObject(12, 1, new Crystal());
		stage.setObject(15, 1, new Mushroom(false));
		stage.setObject(16, 1, new Wall(0));

		//Row 2
		stage.setObject(0, 2, new Wall(0));
		stage.setObject(2, 2, new Apple());
		stage.setObject(4, 2, new Egg());
		stage.setObject(6, 2, new AppleRotten());
		stage.setObject(7, 2, new Flower(false));
		stage.setObject(9, 2, new Crystal());
		stage.setObject(10, 2, new Wall(0));
		stage.setObject(11, 2, new Crystal());
		stage.setObject(12, 2, new PFlower(true));
		stage.setObject(13, 2, new Mushroom(true));
		stage.setObject(14, 2, new Crystal());
		stage.setObject(15, 2, new Treasure());
		stage.setObject(16, 2, new Wall(0));

		//Row 3
		stage.setObject(0, 3, new Wall(0));
		stage.setObject(2, 3, new Apple());
		stage.setObject(3, 3, new Flower(false));
		stage.setObject(4, 3, new Wall(0));
		stage.setObject(5, 3, new PFlower(true));
		stage.setObject(7, 3, new Flower(true));
		stage.setObject(9, 3, new Flower(false));
		stage.setObject(10, 3, new Wall(0));
		stage.setObject(11, 3, new Flower(true));
		stage.setObject(12, 3, new Crystal());
		stage.setObject(13, 3, new Wall(0));
		stage.setObject(14, 3, new Wall(0));
		stage.setObject(15, 3, new Wall(0));
		stage.setObject(16, 3, new Wall(0));

		//Row 4
		stage.setObject(0, 4, new Wall(0));
		stage.setObject(1, 4, new Flower(false));
		stage.setObject(3, 4, new Flower(false));
		stage.setObject(4, 4, new Wall(0));
		stage.setObject(5, 4, new Egg());
		stage.setObject(7, 4, new Flower(true));
		stage.setObject(9, 4, new Flower(false));
		stage.setObject(10, 4, new Wall(0));
		stage.setObject(11, 4, new Door());
		stage.setObject(12, 4, new Wall(0));
		stage.setObject(13, 4, new Wall(0));
		stage.setObject(14, 4, new Flower(true));
		stage.setObject(15, 4, new Key());
		stage.setObject(16, 4, new Wall(0));

		//Row 5
		stage.setObject(0, 5, new Wall(0));
		stage.setObject(1, 5, new Wall(0));
		stage.setObject(2, 5, new Wall(0));
		stage.setObject(3, 5, new Wall(0));
		stage.setObject(4, 5, new Wall(0));
		stage.setObject(5, 5, new Wall(0));
		stage.setObject(6, 5, new Wall(0));
		stage.setObject(7, 5, new Wall(0));
		stage.setObject(8, 5, new Crystal());
		stage.setObject(9, 5, new Wall(0));
		stage.setObject(10, 5, new Wall(0));
		stage.setObject(11, 5, new AppleRotten());
		stage.setObject(12, 5, new PFlower(false));
		stage.setObject(13, 5, new Flower(true));
		stage.setObject(14, 5, new Flower(true));
		stage.setObject(15, 5, new PFlower(true));
		stage.setObject(16, 5, new Wall(0));

		//Row 6
		stage.setObject(0, 6, new Wall(0));
		stage.setObject(1, 6, new PFlower(true));
		stage.setObject(2, 6, new Egg());
		stage.setObject(3, 6, new Flower(false));
		stage.setObject(4, 6, new Flower(false));
		stage.setObject(5, 6, new Apple());
		stage.setObject(6, 6, new PFlower(false));
		stage.setObject(9, 6, new Wall(0));
		stage.setObject(10, 6, new Key());
		stage.setObject(11, 6, new Crystal());
		stage.setObject(13, 6, new Flower(false));
		stage.setObject(16, 6, new Wall(0));

		//Row 7
		stage.setObject(0, 7, new Wall(0));
		stage.setObject(6, 7, new Bomb());
		stage.setObject(8, 7, new Flower(false));
		stage.setObject(9, 7, new Door());
		stage.setObject(10, 7, new Crystal());
		stage.player.push(new Player(stage, 11, 7));
		stage.setObject(12, 7, new Flower(false));
		stage.setObject(13, 7, new Flower(false));
		stage.setObject(14, 7, new Flower(false));
		stage.setObject(15, 7, new Flower(false));
		stage.setObject(16, 7, new Wall(0));

		//Row 8
		stage.setObject(0, 8, new Wall(0));
		stage.setObject(1, 8, new Wall(0));
		stage.setObject(2, 8, new Wall(0));
		stage.setObject(3, 8, new Wall(0));
		stage.setObject(4, 8, new Wall(0));
		stage.setObject(5, 8, new Wall(0));
		stage.setObject(6, 8, new Wall(0));
		stage.setObject(7, 8, new Wall(0));
		stage.setObject(8, 8, new Wall(0));
		stage.setObject(9, 8, new Wall(0));
		stage.setObject(11, 8, new Flower(false));
		stage.setObject(12, 8, new Flower(false));
		stage.setObject(14, 8, new Wall(0));
		stage.setObject(15, 8, new Wall(0));
		stage.setObject(16, 8, new Wall(0));

		//Row 9
		stage.setObject(0, 9, new Wall(0));
		stage.setObject(1, 9, new Apple());
		stage.setObject(2, 9, new Flower(false));
		stage.setObject(3, 9, new PFlower(true));
		stage.setObject(4, 9, new Flower(true));
		stage.setObject(5, 9, new Egg());
		stage.setObject(6, 9, new Flower(false));
		stage.setObject(7, 9, new Flower(false));
		stage.setObject(8, 9, new Flower(true));
		stage.setObject(9, 9, new Apple());
		stage.setObject(10, 9, new Flower(false));
		stage.setObject(11, 9, new Crystal());
		stage.setObject(12, 9, new Flower(false));
		stage.setObject(13, 9, new Flower(false));
		stage.setObject(14, 9, new PFlower(false));
		stage.setObject(15, 9, new Wall(0));
		stage.setObject(16, 9, new Wall(0));

		//Row 10
		stage.setObject(0, 10, new Wall(0));
		stage.setObject(1, 10, new Egg());
		stage.setObject(2, 10, new PFlower(false));
		stage.setObject(3, 10, new Flower(false));
		stage.setObject(4, 10, new PFlower(false));
		stage.setObject(5, 10, new AppleRotten());
		stage.setObject(6, 10, new PFlower(false));
		stage.setObject(7, 10, new Apple());
		stage.setObject(8, 10, new Apple());
		stage.setObject(9, 10, new Apple());
		stage.setObject(11, 10, new Flower(false));
		stage.setObject(12, 10, new Flower(false));
		stage.setObject(14, 10, new Apple());
		stage.demon.push(new Demon(stage, 15, 10, DIR_WEST));
		stage.setObject(16, 10, new Wall(0));

		//Row 11
		stage.setObject(0, 11, new Wall(0));
		stage.setObject(1, 11, new Wall(0));
		stage.setObject(2, 11, new Wall(0));
		stage.setObject(3, 11, new Wall(0));
		stage.setObject(4, 11, new Wall(0));
		stage.setObject(5, 11, new Wall(0));
		stage.setObject(6, 11, new Wall(0));
		stage.setObject(7, 11, new Wall(0));
		stage.setObject(8, 11, new Wall(0));
		stage.setObject(9, 11, new Wall(0));
		stage.setObject(10, 11, new Wall(0));
		stage.setObject(11, 11, new Wall(0));
		stage.setObject(12, 11, new Wall(0));
		stage.setObject(13, 11, new Wall(0));
		stage.setObject(14, 11, new Wall(0));
		stage.setObject(15, 11, new Wall(0));
		stage.setObject(16, 11, new Wall(0));

		/* Custom script */
		stage.getObject(14,10).eat = undefined;
	}),
	/* Level 30 */
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
		stage.setObject(2, 1, new Flower(false));
		stage.setObject(3, 1, new Flower(false));
		stage.setObject(4, 1, new Wall(6));
		stage.setObject(5, 1, new Apple());
		stage.demon.push(new Demon(stage, 6, 1, DIR_WEST));
		stage.setObject(7, 1, new Wall(6));
		stage.setObject(8, 1, new Flower(false));
		stage.setObject(9, 1, new Flower(false));
		stage.setObject(10, 1, new Bomb());
		stage.setObject(12, 1, new PFlower(true));
		stage.setObject(13, 1, new Wall(6));
		stage.setObject(14, 1, new Mushroom(true));
		stage.setObject(15, 1, new Mushroom(true));
		stage.setObject(16, 1, new Wall(6));

		//Row 2
		stage.setObject(0, 2, new Wall(6));
		stage.setObject(1, 2, new Flower(false));
		stage.setObject(2, 2, new Flower(false));
		stage.setObject(4, 2, new Wall(6));
		stage.setObject(5, 2, new PFlower(false));
		stage.setObject(6, 2, new Wall(6));
		stage.setObject(7, 2, new Wall(6));
		stage.setObject(8, 2, new PFlower(true));
		stage.setObject(10, 2, new Flower(false));
		stage.setObject(11, 2, new Flower(false));
		stage.setObject(12, 2, new Key());
		stage.setObject(13, 2, new Wall(6));
		stage.setObject(14, 2, new Mushroom(true));
		stage.setObject(15, 2, new Mushroom(true));
		stage.setObject(16, 2, new Wall(6));

		//Row 3
		stage.setObject(0, 3, new Wall(6));
		stage.setObject(1, 3, new Flower(false));
		stage.setObject(2, 3, new Apple());
		stage.setObject(3, 3, new Apple());
		stage.setObject(5, 3, new Flower(false));
		stage.setObject(6, 3, new Flower(false));
		stage.setObject(9, 3, new Flower(false));
		stage.setObject(10, 3, new Flower(false));
		stage.setObject(12, 3, new PFlower(true));
		stage.setObject(13, 3, new Wall(6));
		stage.setObject(14, 3, new Wall(6));
		stage.setObject(15, 3, new Wall(6));
		stage.setObject(16, 3, new Wall(6));

		//Row 4
		stage.setObject(0, 4, new Wall(6));
		stage.setObject(2, 4, new Apple());
		stage.setObject(3, 4, new Flower(false));
		stage.setObject(4, 4, new Flower(false));
		stage.setObject(5, 4, new Flower(false));
		stage.setObject(6, 4, new Wall(6));
		stage.setObject(7, 4, new PFlower(true));
		stage.setObject(8, 4, new Flower(false));
		stage.setObject(10, 4, new Flower(false));
		stage.setObject(11, 4, new Flower(false));
		stage.setObject(12, 4, new Crystal());
		stage.setObject(14, 4, new Crystal());
		stage.setObject(15, 4, new LaserGun());
		stage.setObject(16, 4, new Wall(6));

		//Row 5
		stage.setObject(0, 5, new Wall(6));
		stage.setObject(1, 5, new Flower(false));
		stage.setObject(3, 5, new Flower(false));
		stage.setObject(5, 5, new Flower(false));
		stage.setObject(6, 5, new Wall(6));
		stage.setObject(7, 5, new Wall(6));
		stage.setObject(8, 5, new Wall(6));
		stage.setObject(9, 5, new Wall(6));
		stage.setObject(10, 5, new Wall(6));
		stage.setObject(11, 5, new Wall(6));
		stage.setObject(12, 5, new Door());
		stage.setObject(13, 5, new Wall(6));
		stage.setObject(14, 5, new Wall(6));
		stage.setObject(15, 5, new Wall(6));
		stage.setObject(16, 5, new Wall(6));

		//Row 6
		stage.setObject(0, 6, new Wall(6));
		stage.setObject(1, 6, new Wall(6));
		stage.setObject(2, 6, new Wall(6));
		stage.setObject(3, 6, new Wall(6));
		stage.setObject(5, 6, new Apple());
		stage.setObject(6, 6, new LaserGun());
		stage.setObject(7, 6, new Apple());
		stage.setObject(10, 6, new Bomb());
		stage.setObject(14, 6, new Crystal());
		stage.setObject(15, 6, new Egg());
		stage.setObject(16, 6, new Wall(6));

		//Row 7
		stage.setObject(0, 7, new Wall(6));
		stage.player.push(new Player(stage, 1, 7));
		stage.setObject(2, 7, new Flower(false));
		stage.setObject(4, 7, new Flower(false));
		stage.setObject(5, 7, new Flower(false));
		stage.setObject(6, 7, new Wall(6));
		stage.setObject(7, 7, new Flower(false));
		stage.setObject(8, 7, new PFlower(true));
		stage.setObject(9, 7, new Flower(false));
		stage.setObject(10, 7, new Egg());
		stage.setObject(11, 7, new Flower(true));
		stage.setObject(12, 7, new Flower(true));
		stage.setObject(13, 7, new Crystal());
		stage.setObject(15, 7, new Crystal());
		stage.setObject(16, 7, new Wall(6));

		//Row 8
		stage.setObject(0, 8, new Wall(6));
		stage.setObject(1, 8, new Flower(false));
		stage.setObject(3, 8, new Flower(false));
		stage.setObject(4, 8, new AppleRotten());
		stage.setObject(6, 8, new Door());
		stage.setObject(7, 8, new Flower(false));
		stage.setObject(8, 8, new Key());
		stage.setObject(9, 8, new Wall(6));
		stage.setObject(10, 8, new Wall(6));
		stage.setObject(11, 8, new Wall(6));
		stage.setObject(12, 8, new Wall(6));
		stage.setObject(13, 8, new Wall(6));
		stage.setObject(14, 8, new Wall(6));
		stage.setObject(15, 8, new Wall(6));
		stage.setObject(16, 8, new Wall(6));

		//Row 9
		stage.setObject(0, 9, new Wall(6));
		stage.setObject(1, 9, new Treasure());
		stage.setObject(2, 9, new Flower(false));
		stage.setObject(3, 9, new AppleRotten());
		stage.setObject(4, 9, new AppleRotten());
		stage.setObject(5, 9, new Flower(false));
		stage.setObject(6, 9, new Wall(6));
		stage.setObject(7, 9, new Flower(false));
		stage.setObject(9, 9, new Flower(false));
		stage.setObject(10, 9, new PFlower(true));
		stage.setObject(11, 9, new PFlower(true));
		stage.setObject(12, 9, new PFlower(true));
		stage.setObject(13, 9, new PFlower(true));
		stage.setObject(14, 9, new Treasure());
		stage.setObject(15, 9, new Treasure());
		stage.setObject(16, 9, new Wall(6));

		//Row 10
		stage.setObject(0, 10, new Wall(6));
		stage.setObject(1, 10, new PFlower(true));
		stage.setObject(2, 10, new Flower(false));
		stage.setObject(3, 10, new Flower(false));
		stage.setObject(4, 10, new Flower(false));
		stage.setObject(6, 10, new Wall(6));
		stage.setObject(7, 10, new Flower(false));
		stage.setObject(8, 10, new Bomb());
		stage.setObject(14, 10, new Flower(false));
		stage.setObject(15, 10, new Mushroom(false));
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

		/* Custom script */
		stage.getObject(5,1).eat = undefined;
	}),
];

new Game('challenge2', levelData);
