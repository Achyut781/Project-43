function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background(151, 77, 24);  
  translate(200, 200);
  rotate(-90);
  let hr = hour();
  let mn = minute();
  let sc = second();

  strokeWeight(8);
  stroke(75, 54, 27);
  noFill();
  let secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondAngle);

  stroke(83, 85, 85);
  noFill();
  let minuteAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, minuteAngle);

  stroke(205, 166, 13);
  noFill();
  let hourAngle = map(hr, 0, 60, 0, 360);
  arc(0, 0, 260, 260, 0, hourAngle);

  push();
  rotate(secondAngle);
  stroke(8, 150, 168);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(minuteAngle);
  stroke(27, 88, 26);
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(hourAngle);
  stroke(0, 0, 0);
  line(0, 0, 50, 0);
  pop();

  stroke(255);
  point(0, 0);

  push();
  fill(113, 16, 45);
  noStroke();
  rotate(90);
  textSize(30);
  textAlign(CENTER);
  text(hr + ':' + mn + ':' + sc, 10, 190);
  pop();


  drawSprites();
}