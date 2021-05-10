// Where is the circle
let x, y;

function setup() {
  createCanvas(720, 400);
  // Starts in the middle
  x = width / 2;
  y = height;
}
var data = {}; // Global object to hold results from the loadJSON call
var bubbles = []; // Global array to hold all bubble objects

//http://ergast.com/api/f1/circuits.json (aangepaste versie)
function preload() {
  data = loadJSON('f1.json');

  console.log(data);
}



function draw (){
  
}

