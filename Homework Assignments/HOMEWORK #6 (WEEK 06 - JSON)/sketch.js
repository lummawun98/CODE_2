

var siblings;

function preload() {
  siblings = loadJSON("siblings.json");
}

function setup() {
  createCanvas(400, 400);
  
  
}

function draw() {
  background(0);
  fill(siblings.r, siblings.g, siblings.b);
  text(siblings.name, 10, 50);

}
