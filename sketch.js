
// menu: Tab to switch between 3D and 2D mode
// WASD, [SPACE], [CTRL] to control character movement in 3D mode
// left click to draw
// hold any key to enable 3D view mode


// ideas: http://js1k.com/2016-elemental/demo/2504
// ideas: https://www.zhihu.com/question/46943112/answer/115056516

// 3D settings
let is3D = false;
let camX = 0;
let camY = 0;
let camZ = 0;

// images list
let blockList = [];
let block2d = [8, 9];
var size = 50;

// drawn dict
var drawingDict = {};

// block selection
let whichBlock = 0;

function preload() {
	document.addEventListener('contextmenu', event => event.preventDefault());

	tmp = ['stone.png',
		'dirt.png',
		'grass.jpeg',
		'coal_ore.png',
		'iron_ore.png',
		'diamond_ore.png',
		'log_oak.png',
		'planks_oak.png',
		'flower_rose.png',
		'double_plant_rose_top.png',];
	// initiate images
	for (i = 0; i < tmp.length; i++) {
		blockList[i] = loadImage('./assets/' + tmp[i]);
	}
}

function keyPressed() {
	switch (keyCode) {
		case TAB:
			is3D = !is3D;
			if (is3D) {
				// reset
				camX = 0;
				camY = 0;
				camZ = 0;
			}
			setup();
			break;
	}
	return false; // prevent any default behaviour
}

// called in draw
function framKeyIsPressed() {
	switch (keyCode) {
		case CONTROL:
			if (is3D) camY += 5;
	}
	if (key === 'w') {
		if (is3D) camZ -= 5;
	} else if (key === 's') {
		if (is3D) camZ += 5;
	} else if (key === 'a') {
		if (is3D) camX -= 5;
	} else if (key === 'd') {
		if (is3D) camX += 5;
	} else if (key === ' ') {
		if (is3D) camY -= 5;
	}
}

// handel drawing
function mouseDragged() {
	// cancel drawing when click button
	if (buttonClicked() != -1) return;
	if (keyIsPressed) return;

	x = Math.floor(mouseX / size);
	y = Math.floor(mouseY / size);

	// TODO: implement delete
	// print("x=" + mouseX + "; Y=" + mouseY);
	if (mouseButton === CENTER) {

	} else if (mouseButton === RIGHT) {

	} else {
		oldBlock = drawingDict[[x, y]];
		if (oldBlock != null && oldBlock.block == whichBlock) return;

		block = new Block(x, y, whichBlock);
		drawingDict[[x, y]] = block;
	}
}

// handel menu
function mouseClicked(fxn) {
	if (mouseButton === CENTER) {
	} else if (mouseButton === RIGHT) {
	} else {
		clicked = buttonClicked();
		if (clicked != -1) {
			print("button = " + clicked);
			whichBlock = clicked;
		}
	}
}

function buttonClicked() {
	xCenter = windowWidth / 2;
	yCenter = windowHeight - 50;
	imgX = (xCenter - (blockList.length * size) / 2);
	imgY = yCenter - size / 2;

	for (i = 0; i < blockList.length; i++) {
		if (imgX + size * i < mouseX && mouseX < (imgX + size * i) + size &&
			imgY < mouseY && mouseY < imgY + size) {
			return i;
		}
	}
	return -1;
}

function setup() {
	resetMatrix();

	// WEBGL supports 3D
	// fix bug when translate 3D-2D
	// must create 3D first
	createCanvas(windowWidth, windowHeight, WEBGL);

	if (is3D) {
	} else {
		createCanvas(windowWidth, windowHeight, P2D);
	}

	// Create an Audio input
	// mic = new p5.AudioIn();
	// start the Audio Input
	// mic.start();
}

// rendering
function draw() {
	background("#FFFFFFFF");

	if (is3D) {
		viewX = 0;
		viewY = 0;

		if (keyIsPressed) {
			framKeyIsPressed();
		}

		viewX = map(mouseX - windowWidth / 2, -windowWidth / 2, windowWidth / 2, -500, 500);
		viewY = map(mouseY - windowHeight / 2, -windowHeight / 2, windowHeight / 2, -500, 500);

		// code segment borrow from https://www.youtube.com/watch?v=BW3D9WwalQE&ab_channel=TheCodingTrain
		camera(0 + camX, 0 + camY, (height / 2) / tan(PI / 6) + camZ, // position
			0 + camX + viewX, 0 + camY + viewY, 0 + camZ, // look at location
			0, 1, 0); // orientation

		// let fov = PI / 3;
		// let cameraZ = (height / 2.0) / tan(fov / 2.0);
		// perspective(fov, witdth / height,
		// 	cameraZ / 10.0, cameraZ * 10.0); // cliping point

		// for the whole screen
		translate(-windowWidth / 2, -windowHeight / 2, 0);
		for (var key in drawingDict) {
			// drawingDict[key].display();
			drawingDict[key].display3D();

		}

		draw3DMenu();
	} else {
		translate(-windowWidth / 2, -windowHeight / 2); // fix bug when translate 3D-2D
		for (var key in drawingDict) {
			drawingDict[key].display();
		}
		drawMenu();
	}
}

function drawMenu() {
	rectMode(CENTER);
	fill("#FFFFFFFF");
	strokeWeight(1);

	// boarder
	xCenter = windowWidth / 2;
	yCenter = windowHeight - 50;
	rect(xCenter, yCenter, blockList.length * size, size);

	// buttons
	imgX = (xCenter - (blockList.length * size) / 2)
	imgY = yCenter - size / 2

	clicked = buttonClicked();
	for (i = 0; i < blockList.length; i++) {
		push();
		if (i == clicked) {
			tint(200, 200, 200);
		}
		image(blockList[i], imgX + size * i, imgY, size, size);
		pop();
	}
}

function draw3DMenu() {
	rectMode(CENTER);
	fill("#FFFFFFFF");
	strokeWeight(1);

	// boarder
	xCenter = windowWidth / 2;
	yCenter = windowHeight - 50;
	push();
	translate(xCenter, yCenter, 0);
	rect(blockList.length * size, size, 0);
	pop();

	// buttons
	imgX = (xCenter - (blockList.length * size) / 2)
	imgY = yCenter - size / 2

	clicked = buttonClicked();
	for (i = 0; i < blockList.length; i++) {
		push();
		if (i == clicked) {
			tint(200, 200, 200);
		}
		translate(imgX + size * i, imgY + 40, -80);
		texture(blockList[i]);
		box(size, size, 0);
		pop();
	}
}

class Block {
	constructor(x, y, block) {
		this.x = x;
		this.y = y;
		this.block = block;
	}
	move() {

	}
	display() {
		push();
		noStroke();
		imageMode(CORNER);
		image(blockList[this.block], this.x * size, this.y * size, size, size);
		pop();
	}
	display3D() {
		push();
		translate(this.x * size, this.y * size, 0);
		texture(blockList[this.block]);
		if (block2d.includes(this.block)) {
			noStroke();
			box(size, size, 0);
		} else {
			box(size, size, size);
		}
		pop();
	}
}