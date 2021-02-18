var drawingList = [];
var size = 50;

let whichBlock = 0;

// images list
let blockList = [];

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

// handel drawing
function mouseDragged() {
	// cancel drawing when click button
	if (buttonClicked() != -1) return;

	x = Math.floor(mouseX / size);
	y = Math.floor(mouseY / size);

	// TODO: implement delete
	// print("x=" + mouseX + "; Y=" + mouseY);
	if (mouseButton === CENTER) {
		// drawingList.push(new Grass(x, y));
	} else if (mouseButton === RIGHT) {
		// drawingList.push(new Dirt(x, y));
	} else {
		drawingList.push(new Block(x, y, whichBlock));
	}
}

// handel menu
function mouseClicked(fxn) {
	clicked = buttonClicked();
	if (clicked != -1) {
		print("button = " + clicked);
		whichBlock = clicked;
	}
}

function buttonClicked() {
	xCenter = windowWidth / 2;
	yCenter = windowHeight - 50;
	imgX = (xCenter - (blockList.length * size) / 2)
	imgY = yCenter - size / 2

	for (i = 0; i < blockList.length; i++) {
		if (imgX + size * i < mouseX && mouseX < (imgX + size * i) + size &&
			imgY < mouseY && mouseY < imgY + size) {
			return i;
		}
	}
	return -1;
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	// Create an Audio input
	// mic = new p5.AudioIn();
	// start the Audio Input
	// mic.start();
}

// rendering
function draw() {
	background("#FFFFFFFF");

	for (x = 0; x < drawingList.length; x++) {
		let object = drawingList[x];
		if (object instanceof Block) {
			object.display();
		} else {
			print("Unknown type to draw");
		}
	}

	drawMenu();
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

	for (i = 0; i < blockList.length; i++) {
		image(blockList[i], imgX + size * i, imgY, size, size);
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
		imageMode(CORNER);
		image(blockList[this.block], this.x * size, this.y * size, size, size);
	}
}
























class Ellipse {
	constructor(x, y) {
		// ellipse settings
		this.x = x;
		this.y = y;
		this.r = 100;

		// gradient settings
		this.gradientRange = 500;
		this.gradientIteration = 20;

		// color settings
		this.r = 100;
		this.g = 100;
		this.b = 0;

		// gradient setting
		this.gr = 0;
		this.gg = 0;
		this.gb = 0;
		this.aMin = 0;
		this.aMax = 5;

		print(this.x);
	}

	move() {
		// this.x = this.x + randomVectorX();
	}

	display() {
		ellipseMode(CENTER);
		noStroke();
		for (this.i = 0; this.i < this.gradientIteration; this.i++) {
			fill(this.gr, this.gg, this.gb, (this.aMax - this.aMin) / this.gradientIteration * this.i);
			ellipse(this.x, this.y, this.gradientRange - this.i * 1, this.gradientRange - this.i * 1);
		}
		fill(this.r, this.g, this.b);
		ellipse(this.x, this.y, this.r, this.r);
	}

	displayGradient() {
		ellipseMode(CENTER);
		noStroke();
		for (this.i = 0; this.i < this.gradientIteration; this.i++) {
			fill(this.gr, this.gg, this.gb, (this.aMax - this.aMin) / this.gradientIteration * this.i);
			ellipse(this.x, this.y, this.gradientRange - this.i * 1, this.gradientRange - this.i * 1);
		}
	}

	displayColor() {
		ellipseMode(CENTER);
		noStroke();
		fill(this.r, this.g, this.b);
		ellipse(this.x, this.y, this.r, this.r);
	}
}

function choose(choices) {
	var index = Math.floor(Math.random() * choices.length);
	return choices[index];
}

function clamp(value, min, max) {
	if (value < min) return min;
	if (value > max) return max;
	return value;
}

function randomVectorX() {
	return map(Math.random(), 0, 1, 50, -50);
}

function randomVectorY() {
	return map(Math.random(), 0, 1, 5, -15);
}