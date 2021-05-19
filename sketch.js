let marks = []

let more = 0.005

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(0);
  angleMode(DEGREES)

  frameRate(60);

  slider1 = createSlider(0, 255, 100);
  slider1.position(10, 60);

  slider2 = createSlider(0, 255, 0);
  slider2.position(10, 80);

  slider3 = createSlider(0, 255, 255);
  slider3.position(10, 100);

  slider4 = createSlider(90, 100, 0);
  slider4.position(10, 180);

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

  function mousePressed() {
    //declared the canvas above, so I can access it here
    saveCanvas('myArt.png');
  }

}

function keyPressed(){
  
  //if the key is a s
  if(key == 's'){
    //save out to a file
    save('myArt.png');
  }
  
}