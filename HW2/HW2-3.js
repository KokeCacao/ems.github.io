function setup() {
	createCanvas(400, 400);
  background("#F9DEEDFF");
}

function draw() {
  strokeWeight(1);
  noFill();
  if (mouseIsPressed) {
    stroke("#58B1FCFF");
    ellipse(mouseX, mouseY, 50, 50);
  } else {
    stroke("#EC76C7FF");
    ellipse(mouseX, mouseY, 100, 100);
  }
}