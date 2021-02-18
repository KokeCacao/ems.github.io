function setup() {
	createCanvas(400, 400);
  background("#000000FF");
  frameRate(240);
}

function clamp(value, min, max) {
  if (value < min) return min;
  if (value > max) return max;
  return value;
}

function draw() {
  stroke(map(clamp(mouseX*2, 0, 255), 0, width, 0, 255), 0, 255, 255);
  strokeWeight(5);
  if (mouseIsPressed) {
    line(mouseX, mouseY, width - mouseX, mouseY);
  }
}