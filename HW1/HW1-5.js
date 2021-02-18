function setup() {
  width = 400;
  height = 400;

  createCanvas(width, height);
  excercise_5(width, height);
}

function excercise_5(w, h) {
  width = 120;
  height = 140;
  r = 50;

  background("#E2E298");
  rectMode(CENTER);

  noStroke();
  fill("#A1C747");
  rect(w / 2 - (width / 2), h / 4 * 3, width, width, 0, r, 0, r);
  rect(w / 2 + (width / 2), h / 4 * 3, width, width, r, 0, r, 0);

  rect(w / 2, h / 2, 10, 200);

  fill("#F16161");
  rect(w / 2, h / 4, width, height, 0, 0, r, r);
}