let w = 800;
let h = 800;

var volume = 0;
var volumeClamp = 0.5;

var reverse = false;

// Time Controller
var time = 1;

var wordInitialTime = 255;
var wordTimeSpeed = 5;
var wordTimes = [];
var wordInitialPosition = [w / 2 - 50, h / 2 + 50];
var wordPositions = [];

let minTime = 0;
let maxTime = 100; // bigger number = slow

function randomVectorX() {
  return map(Math.random(), 0, 1, 50, -50);
}

function randomVectorY() {
  return map(Math.random(), 0, 1, 5, -15);
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

function addBubble() {
  wordTimes.push(wordInitialTime);
  wordPositions.push(wordInitialPosition);
}

function mousePressed() {
  userStartAudio();
  addBubble();
}

function setup() {
  createCanvas(800, 800);

  // Create an Audio input
  mic = new p5.AudioIn();
  // start the Audio Input
  mic.start();
}

function draw() {
  // Get the overall volume (between 0 and 1.0)
  var v = mic.getLevel();
  v = clamp(v, 0, volumeClamp);

  // Smooth the volume variable with an easing function
  volume += (v - volume) / 3;
  if (volume > volumeClamp) volume = volumeClamp;

  // reverse animation 0 -> 100 -> 0 -> 100
  if (reverse) {
    delta = map(volume, 0, volumeClamp, 0, 100);
    time -= delta;
  } else {
    delta = map(volume, 0, volumeClamp, 0, 100);
    time += delta;
  }
  if (time >= maxTime) {
    reverse = true;
  } else if (time <= minTime) {
    reverse = false;
  }

  // reduce wordTimes
  for (i = 0; i < wordTimes.length; i++) {
    wordTimes[i] = wordTimes[i] - wordTimeSpeed;
  }
  for (i = wordTimes.length; i >= 0; i--) {
    if (wordTimes[i] <= 0) {
      wordTimes.pop();
      wordPositions.pop();
    }
  }
  // print("Current length = " + wordTimes.length);
  // print("Current Volume = " + map(volume, 0, volumeClamp, 0, 100) + "; Time = " + time);

  if (map(volume, 0, volumeClamp, 0, 100) > 10) {
    addBubble();
  }

  backColor = "#F5F5F5"; // hahahahahahahahha

  backFilter = "#d9cfe430";
  borderColor = "#762D2A";
  borderWidth = 7;

  faceColor = "#FFF9F4";
  tailColor = "#ebd5bb";
  patternColor = "#F3E8E2";
  earsColor = patternColor;
  eyesColor = "#E8CCB6"
  bodyColor = faceColor;
  footColor = "#f7eee6";
  armColor = earsColor;
  hatColor = "#e9e7ff";
  hatTopColor = "#e9e7ff";
  noseColor = "#491613";
  // frameColor = faceColor;
  frameColor = backColor; // hahahahahaha
  hatBorderColor = "#624e8c";

  background(backColor);
  ellipseMode(CENTER);
  rectMode(CENTER);

  push();
  translate(time / 20, time / 10);
  drawArms();
  pop();


  drawTail();
  drawBody();

  push();
  translate(getSmoothedRelativeX() / 4, getSmoothedRelativeY() / 4 + time / 20);

  drawFace();
  drawHat();

  push();
  rotateCenter(QUARTER_PI * getVolume(), w / 2, h / 2 - 120);
  drawLeftEar(0, 0);
  pop();

  push();
  rotateCenter(-QUARTER_PI * getVolume(), w / 2, h / 2 - 120);
  drawRightEar(0, 0);
  pop();

  pop();

  push();
  translate(0, -getSmoothedRelativeY() / 4);

  push();
  translate(-time / 20, 0);
  rotateCenter(-HALF_PI * getVolume(), w / 2 - 120, h / 2 + 200);
  drawLeftFoot(0, 0);
  pop();

  push();
  translate(time / 20, 0);
  rotateCenter(HALF_PI * getVolume(), w / 2 + 120, h / 2 + 200);
  drawRightFoot(0, 0);
  pop();

  pop();

  push();
  translate(getSmoothedRelativeX(), getSmoothedRelativeY() + time / 20);
  drawEyes();
  drawMouse();
  drawNose();
  pop();

  for (i = 0; i < wordTimes.length; i++) {
    if (wordTimes[i] > 0) {
      wordPositions[i] = [wordPositions[i][0] + randomVectorX(), wordPositions[i][1] + randomVectorY()];
      // print("position = " + wordPositions[i][0] + "; " + wordPositions[i][1]);
      drawBubble(wordPositions[i][0], wordPositions[i][1],
        opacity = map(wordTimes[i], wordInitialTime, 0, 150, 0),
        size = map(wordInitialTime - wordTimes[i], 0, 255, 32, 120));
    }
  }

  drawBoarderAndFilter();
}

function rotateCenter(radian, x, y) {
  translate(x, y);
  rotate(radian);
}

function getVolume(min = 0, max = 1) {
  return map(volume, 0, 1, min, max);
}

function getSmoothedRelativeX(center = w, delta = 50) {
  return (mouseX - center / 2) / delta
}
function getSmoothedRelativeY(center = h, delta = 50) {
  return (mouseY - center / 2) / delta
}

function drawArms() {
  fromX = w / 2 - 100;
  fromY = h / 2 + 100;

  // armHeight = [50, 150]
  armHeight = fromY - mouseY;
  armHeight = clamp(armHeight, 50, 150);

  length = 100;
  handDown = 1;
  if (armHeight > length) {
    armHeight = length - (armHeight - length);
    handDown = -1;
  }
  angle = asin(armHeight / length);
  armWidth = armHeight / tan(angle);

  // print("armHeight = " + armHeight, "armWidth = " + armWidth + "; angle = " + angle);

  stroke(backColor);
  strokeWeight(40 + borderWidth * 2);
  stroke(borderColor);
  leftArm = line(fromX, fromY, fromX - armHeight, fromY + handDown * armWidth);
  strokeWeight(40);
  stroke(armColor);
  leftArm = line(fromX, fromY, fromX - armHeight, fromY + handDown * armWidth);
}

function drawTail() {
  strokeWeight(40 + borderWidth * 2);
  stroke(borderColor);
  tail = line(w / 2 + 100, h / 2 + 200, w / 2 + 100 + 80 + map(time, minTime, maxTime, 0, 10), h / 2 + 200)
  strokeWeight(40);
  stroke(tailColor);
  tail = line(w / 2 + 100, h / 2 + 200, w / 2 + 100 + 80 + map(time, minTime, maxTime, 0, 10), h / 2 + 200)
}

function drawBody() {
  stroke(borderColor);
  strokeWeight(borderWidth);
  fill(bodyColor);
  bodyDown = rect(w / 2, h / 2 + 100, w / 3, h / 3, 100, 100, 40, 40);

  fill(patternColor);
  bodyPattern = arc(w / 2, h / 2 + 100 + 130, 150, 150, PI, 0)
}

function drawFace() {
  fill(faceColor);
  // bodyUp
  bodyUpCenterW = w / 2;
  bodyUpCenterH = h / 2;
  bodyUpW = w / 2 - 120;
  bodyUpH = h / 4;
  delta = 40;
  // bodyUp = rect(bodyUpCenterW, bodyUpCenterH, bodyUpW, bodyUpH,
  // 							20, 20, 100, 100);
  beginShape();
  curveVertex(bodyUpCenterW - bodyUpW / 2, bodyUpCenterH + bodyUpH / 2);

  curveVertex(bodyUpCenterW - bodyUpW / 2 + delta, bodyUpCenterH - bodyUpH / 2);
  curveVertex(bodyUpCenterW + bodyUpW / 2 - delta, bodyUpCenterH - bodyUpH / 2);
  curveVertex(bodyUpCenterW + bodyUpW / 2, bodyUpCenterH + bodyUpH / 2);
  curveVertex(bodyUpCenterW - bodyUpW / 2, bodyUpCenterH + bodyUpH / 2);
  curveVertex(bodyUpCenterW - bodyUpW / 2 + delta, bodyUpCenterH - bodyUpH / 2);

  curveVertex(bodyUpCenterW + bodyUpW / 2, bodyUpCenterH - bodyUpH / 2);
  endShape();
}

function drawLeftFoot(centerX = w / 2 - 120, centerY = h / 2 + 200) {
  fill(footColor);
  leftFoot = ellipse(centerX, centerY, 50, 80);
  left1 = ellipse(centerX - 20, centerY - 40 + 10, 20, 20); // left
  left2 = ellipse(centerX, centerY - 40, 20, 20); // center
  left3 = ellipse(centerX + 20, centerY - 40 + 10, 20, 20); // right
}

function drawRightFoot(centerX = w / 2 + 120, centerY = h / 2 + 200) {
  fill(footColor);
  rightFoot = ellipse(centerX, centerY, 50, 80);
  right1 = ellipse(centerX - 20, centerY - 40 + 10, 20, 20); // left
  right2 = ellipse(centerX, centerY - 40, 20, 20); // center
  right3 = ellipse(centerX + 20, centerY - 40 + 10, 20, 20); // right
}

function drawHat() {
  stroke(hatBorderColor);
  fill(hatColor);
  hat = triangle(w / 2, h / 2 - 200, // top
    w / 2 - 40, h / 2 - 100, // left
    w / 2 + 40, h / 2 - 100); // right

  // 	beginShape();
  // 	curveVertex(w/2+40, h/2-100);

  // 	curveVertex(w/2, h/2-200);
  // 	curveVertex(w/2-40, h/2-100);
  // 	curveVertex(w/2+40, h/2-100);
  // 	curveVertex(w/2, h/2-200);

  // 	curveVertex(w/2-40, h/2-100);
  // 	endShape();

  fill(hatTopColor);
  hatTop = ellipse(w / 2, h / 2 - 200, 30, 30);
}

function drawEyes() {
  fill(eyesColor);

  strokeWeight(20);
  stroke("#000000");
  // verticle eye
  // eyeLeft = line(w/2-80, h/2-10, w/2-80, h/2-10+10);
  // eyeRight = line(w/2+80, h/2-10, w/2+80, h/2-10+10);
  push();
  translate(getSmoothedRelativeX(center = w / 2 - 60, delta = 100), getSmoothedRelativeY(center = h / 2 - 10, delta = 100));
  eyeLeft = line(w / 2 - 60, h / 2 - 10, w / 2 - 80, h / 2 - 10 + 10);
  pop();
  push();
  translate(getSmoothedRelativeX(center = w / 2 + 60, delta = 100), getSmoothedRelativeY(center = h / 2 - 10, delta = 100));
  eyeRight = line(w / 2 + 60, h / 2 - 10, w / 2 + 80, h / 2 - 10 + 10);
  pop();
}

function drawMouse() {
  strokeWeight(1);
  strokeWeight(10);
  noFill();

  max_radius = 50
  r = 40 + getVolume(min = 0, max = max_radius);
  leftArc = arc(w / 2 - r / 2, h / 2 + 40, r, r, 0, PI - QUARTER_PI);
  leftArc = arc(w / 2 + r / 2, h / 2 + 40, r, r, QUARTER_PI, PI);
}

function drawNose() {
  fill(noseColor);
  noStroke();
  // strokeWeight(borderWidth);
  // stroke(borderColor);
  beginShape();
  heightDelta = 20;
  curveVertex(w / 2, h / 2 + heightDelta);

  curveVertex(w / 2, h / 2 + heightDelta); // top
  curveVertex(w / 2 - 20, h / 2 + 20 + heightDelta); // left
  curveVertex(w / 2 + 20, h / 2 + 20 + heightDelta); // right
  curveVertex(w / 2, h / 2 + heightDelta); // top

  curveVertex(w / 2, h / 2 + heightDelta);
  endShape();
}

function drawLeftEar(xCenter = w / 2, yCenter = h / 2 - 120) {
  delta = 60;

  stroke(borderColor);
  strokeWeight(80 + borderWidth * 2);
  leftEar = line(xCenter - 100, yCenter, xCenter - 100 - delta, yCenter + delta);

  stroke(earsColor);
  strokeWeight(80);
  leftEar = line(xCenter - 100, yCenter, xCenter - 100 - delta, yCenter + delta);
}

function drawRightEar(xCenter = w / 2, yCenter = h / 2 - 120) {
  delta = 60;

  stroke(borderColor);
  strokeWeight(80 + borderWidth * 2);
  rightEar = line(xCenter + 100, yCenter, xCenter + 100 + delta, yCenter + delta);

  stroke(earsColor);
  strokeWeight(80);
  rightEar = line(xCenter + 100, yCenter, xCenter + 100 + delta, yCenter + delta);
}

function drawBoarderAndFilter() {
  strokeWeight(300); // hahahahaha
  stroke(frameColor);
  fill(backFilter);
  rect(w / 2, h / 2, w, h);
}

function drawBubble(centerX, centerY, opacity = 255, size = 64) {
  sizeDelta = Math.random() * size;
  word = choose(["%", "$", "#", "!", "&", "*", "@"]);

  noStroke();
  fill(118, 45, 42, opacity); // border color
  textSize(size + sizeDelta);
  text(word, centerX, centerY);
}