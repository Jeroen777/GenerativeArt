var points = []
var mult = 0.005

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


  var density = 50;
  var space = 20;

  for (var x = 0; x < width; x += space) {
    for (var y = 0; y < height; y += space) {
      var p = createVector(x, y)
      points.push(p)
    }
  }
}

function draw() {

  fill(255);
  
    var r = slider1.value();
    var g = slider2.value();
    var b = slider3.value();

    noStroke();
    fill( r, g, b);

  for (var i = 0; i < points.length; i++) {

    let fun = rotate(PI / noise(t + 2));
    
    var angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 720)

    points[i].add(createVector(cos(angle), sin(angle)))

    ellipse(points[i].x, points[i].y, 0.5)
  }


}