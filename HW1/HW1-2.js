function setup() {
  width = 400;
  height = 400;

  createCanvas(width, height);
  excercise_2(width, height);
}

function excercise_2(w, h) {
  size = 90;
  background("#F2DBAE");

  rectMode(CENTER);
  noStroke();
  fill("#ECAA7B90");

  rect(w / 2, h / 2, size * 3, size);
  rect(w / 2, h / 2, size, size * 3);
}