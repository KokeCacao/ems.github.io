function setup() {
  width = 400;
  height = 400;

  createCanvas(width, height);
  excercise_3(width, height);
}

function excercise_3(w, h) {
  r = 300;
  range = PI / 6;
  background("#000000");

  noStroke();
  fill("#F9E419");
  arc(w / 2, h / 2, r, r, range, 2 * PI - range);
}