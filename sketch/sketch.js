let score = 1;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  drawScore(); // Display score

  drawButton(100, 250, 200, 70); // Display button (to add score)
}

function drawScore() {
  fill(0);
  noStroke();
  textAlign(CENTER);
  textSize(60);

  text('Score: ' + score, 200, 150);
}

function drawButton(x,y,w,h) {
  stroke(0);
  fill(255);

  rect(x,y,w,h);

  fill(0);
  noStroke();
  textAlign(CENTER);
  textSize(30);
  
  text('click me', 200, 295);
}

function mousePressed() {
  let shouldIncreaseScore = isMouseInButton();
  if (shouldIncreaseScore) {
    score = score + 1;
  }
}

function isMouseInButton() {
  let isInHorizontalRange = mouseX > 100 && mouseX < 300;
  let isInVerticalRange = mouseY > 250 && mouseY < 320;

  return isInHorizontalRange && isInVerticalRange;
}
