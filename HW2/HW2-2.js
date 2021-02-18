function setup() {
	createCanvas(400, 400);
  background("#000000FF");
  frameRate(240);
}

function draw() {
  fill(mouseX, mouseY, 0);
  stroke(mouseX, mouseY, 0);
  strokeWeight(25);
  if (mouseIsPressed) {
    // line(pmouseX, pmouseY, mouseX, mouseY);
    ellipse(mouseX, mouseY, 25, 25);
  }
}