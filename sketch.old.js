function setup() {
	createCanvas(800, 800);

	happy_dog(800, 800);
}

function draw() {
	ellipse(mouseX, mouseY, 20, 20);
}

function happy_dog(w, h) {
	// light purple + white + black
	// backColor = "#d9cfe4";
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

	background(backColor);
	ellipseMode(CENTER);
	rectMode(CENTER);
	stroke(backColor);


	strokeWeight(40 + borderWidth*2);
	stroke(borderColor);
	leftArm = line(w/2-100, h/2+100, w/2-100-50, h/2+100+90);
	strokeWeight(40);
	stroke(armColor);
	leftArm = line(w/2-100, h/2+100, w/2-100-50, h/2+100+90);


	strokeWeight(40 + borderWidth*2);
	stroke(borderColor);
	tail = line(w/2+100, h/2+200, w/2+100+100, h/2+200)
	strokeWeight(40);
	stroke(tailColor);
	tail = line(w/2+100, h/2+200, w/2+100+100, h/2+200)

	stroke(borderColor);
	strokeWeight(borderWidth);
	fill(bodyColor);
	bodyDown = rect(w/2, h/2+100, w/3, h/3, 100, 100, 40, 40);

	fill(patternColor);
	bodyPattern = arc(w/2, h/2+100+130, 150, 150, PI, 0)

	fill(faceColor);
	// bodyUp
	bodyUpCenterW = w/2;
	bodyUpCenterH = h/2;
	bodyUpW = w/2-120;
	bodyUpH = h/4;
	delta = 40;
	// bodyUp = rect(bodyUpCenterW, bodyUpCenterH, bodyUpW, bodyUpH,
	// 							20, 20, 100, 100);
	beginShape();
	curveVertex(bodyUpCenterW-bodyUpW/2, bodyUpCenterH+bodyUpH/2);

	curveVertex(bodyUpCenterW-bodyUpW/2+delta, bodyUpCenterH-bodyUpH/2);
	curveVertex(bodyUpCenterW+bodyUpW/2-delta, bodyUpCenterH-bodyUpH/2);
	curveVertex(bodyUpCenterW+bodyUpW/2, bodyUpCenterH+bodyUpH/2);
	curveVertex(bodyUpCenterW-bodyUpW/2, bodyUpCenterH+bodyUpH/2);
	curveVertex(bodyUpCenterW-bodyUpW/2+delta, bodyUpCenterH-bodyUpH/2);

	curveVertex(bodyUpCenterW+bodyUpW/2, bodyUpCenterH-bodyUpH/2);
	endShape();

	fill(footColor);
	leftFoot = ellipse(w/2-120, h/2+200, 50, 80);
	left1 = ellipse(w/2-120-20, h/2+160+10, 20, 20); // left
	left1 = ellipse(w/2-120, h/2+160, 20, 20); // center
	left1 = ellipse(w/2-120+20, h/2+160+10, 20, 20); // right
	rightFoot = ellipse(w/2+120, h/2+200, 50, 80);
	left1 = ellipse(w/2+120-20, h/2+160+10, 20, 20); // left
	left1 = ellipse(w/2+120, h/2+160, 20, 20); // center
	left1 = ellipse(w/2+120+20, h/2+160+10, 20, 20); // right

	fill(hatColor);
	hat = triangle(w/2, h/2-200, // top
								 w/2-40, h/2-100, // left
								 w/2+40, h/2-100); // right

// 	beginShape();
// 	curveVertex(w/2+40, h/2-100);

// 	curveVertex(w/2, h/2-200);
// 	curveVertex(w/2-40, h/2-100);
// 	curveVertex(w/2+40, h/2-100);
// 	curveVertex(w/2, h/2-200);

// 	curveVertex(w/2-40, h/2-100);
// 	endShape();

	fill(hatTopColor);
	hatTop = ellipse(w/2, h/2-200, 30, 30);
	fill(eyesColor);

	strokeWeight(20);
	stroke("#000000");
	// verticle
	// eyeLeft = line(w/2-80, h/2-10, w/2-80, h/2-10+10);
	// eyeLeft = line(w/2+80, h/2-10, w/2+80, h/2-10+10);
	eyeLeft = line(w/2-60, h/2-10, w/2-80, h/2-10+10);
	eyeLeft = line(w/2+60, h/2-10, w/2+80, h/2-10+10);
	strokeWeight(1);

	// mouse
	strokeWeight(10);
	noFill();
	leftArc = arc(w/2-20, h/2+40, 40, 40, 0, PI - QUARTER_PI);
	leftArc = arc(w/2+20, h/2+40, 40, 40, 0 + QUARTER_PI, PI);

	// nose
	fill(noseColor);
	noStroke();
	// strokeWeight(borderWidth);
	// stroke(borderColor);
	beginShape();
	heightDelta = 20;
	curveVertex(w/2, h/2+heightDelta);

	curveVertex(w/2, h/2+heightDelta); // top
	curveVertex(w/2-20, h/2+20+heightDelta); // left
	curveVertex(w/2+20, h/2+20+heightDelta); // right
	curveVertex(w/2, h/2+heightDelta); // top

	curveVertex(w/2, h/2+heightDelta);
	endShape();

	// ears
	delta = 60;

	stroke(borderColor);
	strokeWeight(80+borderWidth*2);
	leftEar = line(w/2-100, h/2-120, w/2-100-delta, h/2-120+delta);
	rightEar = line(w/2+100, h/2-120, w/2+100+delta, h/2-120+delta);

	stroke(earsColor);
	strokeWeight(80);
	leftEar = line(w/2-100, h/2-120, w/2-100-delta, h/2-120+delta);
	rightEar = line(w/2+100, h/2-120, w/2+100+delta, h/2-120+delta);

	strokeWeight(300); // hahahahaha
	stroke(frameColor);
	fill(backFilter);
	rect(w/2, h/2, w, h);
}