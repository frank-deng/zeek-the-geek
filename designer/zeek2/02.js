var image = new Image();
image.src = 'egg/test.jpg';
stage.getObject(16, 2).onDraw = function(ctx, col, row) {
	ctx.drawImage(image, IMAGE_W * 14, 0, IMAGE_W * 3, IMAGE_H * 3);
}
