function setup() {
	createCanvas(400, 400);
  background("#FF0000FF");
  fill("#000000FF");
  noStroke();
}

function draw() {
  if (mouseIsPressed) {
    mouseX
    ellipse(mouseX, mouseY, 25, 25);
  }
}

function mouseReleased(fxn) {
  background("#FF0000FF");
}

// function setup() {
// 	createCanvas(400, 400);
//   background("#000000FF");
//   frameRate(240);
// }

// function draw() {
//   fill(mouseX, mouseY, 0);
//   stroke(mouseX, mouseY, 0);
//   strokeWeight(25);
//   if (mouseIsPressed) {
//     // line(pmouseX, pmouseY, mouseX, mouseY);
//     ellipse(mouseX, mouseY, 25, 25);
//   }
// }

// function setup() {
// 	createCanvas(400, 400);
//   background("#F9DEEDFF");
// }

// function draw() {
//   strokeWeight(1);
//   noFill();
//   if (mouseIsPressed) {
//     stroke("#58B1FCFF");
//     ellipse(mouseX, mouseY, 50, 50);
//   } else {
//     stroke("#EC76C7FF");
//     ellipse(mouseX, mouseY, 100, 100);
//   }
// }

// function setup() {
// 	createCanvas(400, 400);
//   background("#000000FF");
//   frameRate(240);
// }

// function clamp(value, min, max) {
//   if (value < min) return min;
//   if (value > max) return max;
//   return value;
// }

// function draw() {
//   stroke(map(clamp(mouseX*2, 0, 255), 0, width, 0, 255), 0, 255, 255);
//   strokeWeight(5);
//   if (mouseIsPressed) {
//     line(mouseX, mouseY, width - mouseX, mouseY);
//   }
// }