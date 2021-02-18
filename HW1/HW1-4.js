function setup() {
  width = 400;
  height = 400;

  createCanvas(width, height);
  excercise_4(width, height);
}

function excercise_4(w, h) {
  r = 140;
  background("#8ECEE6");

  stroke("#2C4954");
  strokeWeight(80);
  line(w, 0, 0, h);
  strokeWeight(50);
  fill("#8ECEE6");
  ellipseMode(CENTER);
  ellipse(w / 2, h / 2, r, r);
}