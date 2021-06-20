let r = 20;
let g = 20;
let b = 0;
let lines = 1.5;
let t = 0;
let crazy = 720;


let marks = []

let more = 0.005

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(0);
  angleMode(DEGREES)

  frameRate(60);

  let space = 20;

  for (let x = 0; x < width; x += space) {
    for (let y = 0; y < height; y += space) {
      let p = createVector(x, y)
      marks.push(p)
    }
  }
}

function draw() {

  fill(255);

  let x = mouseX;
  let y = mouseY;

  noStroke();
  fill(r, g, b);

  for (let i = 0; i < marks.length; i++) {

    let fun = rotate(PI / noise(t + 1));

    let angle = map(noise(marks[i].x * more, marks[i].y * more), 0, 1, 0, crazy)

    marks[i].add(createVector(cos(angle), sin(angle)))

    ellipse(marks[i].x, marks[i].y, lines)
  }


}

function keyPressed() {

  //if the key is a s
  if (key == 's') {
    //save out to a file
    save('myArt.png');
  }


if (keyCode === UP_ARROW) {
  lines = lines + 0.5;
} else if (keyCode === DOWN_ARROW) {
  lines = lines - 0.5;
}

}


function keyTyped() {
  if (key === 'r') {
    r = random(255);
    g = 0;
    b = 0;

  }

  if (key === 'g') {
    r = 0;
    g = random(255);
    b = 0;

  }

  if (key === 'b') {
    r = 0;
    g = 0;
    b = random(255);

  }

  if (key === 'x') {
    r = random(255);
    g = random(255);
    b = random(255);
    lines = random(0.5, 2)
    crazy = random(10000)
    t = random(100);
  }

  if (key === 'z') {
    t = random(100);
  }

}
