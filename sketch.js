let marks = []

let more = 0.005


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(0);
  angleMode(DEGREES)

  frameRate(60);

  textSize(32);
  text('change color', 10, 30);
  fill(255, 102, 153);
  slider1 = createSlider(0, 255, 100);
  slider1.position(10, 10);

  slider2 = createSlider(0, 255, 0);
  slider2.position(10, 30);

  slider3 = createSlider(0, 255, 255);
  slider3.position(10, 50);

  slider4 = createSlider(90, 100, 0);
  slider4.position(10, 130);

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

  let t = slider1.value();

  let r = slider1.value();
  let g = slider2.value();
  let b = slider3.value();

  noStroke();
  fill(r, g, b);

  for (let i = 0; i < marks.length; i++) {

    let fun = rotate(PI / noise(t + 1));

    let angle = map(noise(marks[i].x * more, marks[i].y * more), 0, 1, 0, 720)

    marks[i].add(createVector(cos(angle), sin(angle)))

    ellipse(marks[i].x, marks[i].y, 0.5)
  }



}