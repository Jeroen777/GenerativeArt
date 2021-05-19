let points = []
let mult = 0.005
let t = 0;
let wow = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(0)
  angleMode(DEGREES)

  frameRate(60);

  slider1 = createSlider(0, 255, 100);
  slider1.position(10, 10);

	slider2 = createSlider(0, 255, 0);
  slider2.position(10, 30);

	slider3 = createSlider(0, 255, 255);
  slider3.position(10, 50);


  let density = 50;
  let space = 20;

  for (let x = 0; x < width; x += space) {
    for (let y = 0; y < height; y += space) {
      let p = createVector(x, y)
      points.push(p)
    }
  }
}

function draw() {

  fill(255);
  
    let r = slider1.value();
    let g = slider2.value();
    let b = slider3.value();

    noStroke();
    fill( r, g, b);

  for (let i = 0; i < points.length; i++) {

    let fun = rotate(PI / noise(t + 2));
    
    let angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 720)

    points[i].add(createVector(cos(angle), sin(angle)))

    ellipse(points[i].x, points[i].y, 0.5)
  }


}