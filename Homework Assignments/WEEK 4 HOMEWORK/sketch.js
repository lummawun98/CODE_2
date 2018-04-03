var myFont; //variabe created for the font 
var vehicles = []; //array where the multiple movivg particles are being stored 

function preload() {
  myFont = loadFont('assets/AvenirNextLTPro-Demi.otf'); //loading in the font 
}

function setup() {
  createCanvas(1200, 710);
  background(231, 202, 250);


  var points = font.textToPoints('God is LOVE!', 500, 195, 500, { //turns the text into a dotted outline
    sampleFactor: 0.25
  });

  for (var i = 0; i < points.length; i++) {
    var dot = points[i];
    var vehicle = new Vehicle(dot.x, dot.y);
    vehicles.push(vehicle);
    
  }
}

function draw() {
  background(51);
  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    textFont(myFont);
    textSize(30);
    v.behaviors(); //drawing and updating the moving behavior 
    v.update(); //drawing update (allowing the scene to refresh )
    v.show(); //showing the particles and their behaviors 
  }
}
