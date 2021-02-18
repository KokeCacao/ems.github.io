function setup() {
  width = 400;
  height = 400;

  createCanvas(width, height);
  excercise_1(width, height);
}

function excercise_1(w, h) {
  background("#774D91");

  ellipseMode(CENTER);
  strokeWeight(20);
  stroke("#EC94E5");
  fill("#D562A1");
  ellipse(0, h / 2, w, h);
  ellipse(w, h / 2, w, h);
}

// function excercise_2(w, h) {
//   size = 90;
//   background("#F2DBAE");

//   rectMode(CENTER);
//   noStroke();
//   fill("#ECAA7B90");

//   rect(w / 2, h / 2, size * 3, size);
//   rect(w / 2, h / 2, size, size * 3);
// }

// function excercise_3(w, h) {
//   r = 300;
//   range = PI / 6;
//   background("#000000");

//   noStroke();
//   fill("#F9E419");
//   arc(w / 2, h / 2, r, r, range, 2 * PI - range);
// }

// function excercise_4(w, h) {
//   r = 140;
//   background("#8ECEE6");

//   stroke("#2C4954");
//   strokeWeight(80);
//   line(w, 0, 0, h);
//   strokeWeight(50);
//   fill("#8ECEE6");
//   ellipseMode(CENTER);
//   ellipse(w / 2, h / 2, r, r);
// }

// function excercise_5(w, h) {
//   width = 120;
//   height = 140;
//   r = 50;

//   background("#E2E298");
//   rectMode(CENTER);

//   noStroke();
//   fill("#A1C747");
//   rect(w / 2 - (width / 2), h / 4 * 3, width, width, 0, r, 0, r);
//   rect(w / 2 + (width / 2), h / 4 * 3, width, width, r, 0, r, 0);

//   rect(w / 2, h / 2, 10, 200);

//   fill("#F16161");
//   rect(w / 2, h / 4, width, height, 0, 0, r, r);
// }