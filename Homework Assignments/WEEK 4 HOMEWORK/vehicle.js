function Vehicle(x, y) {
  this.pos = createVector(random(width), random(height));
  this.target = createVector(x, y); //this is the target area that each dot is trying to get to 
  this.vel = p5.Vector.random2D();
  this.acc = createVector(); //creatinga new point relative to the other neighboring points 
  this.r = 8;
  this.maxspeed = 10; //how fast each dot is allowed to move
  this.maxforce = 1; //the force that is keepong them away from the mouse 
}

Vehicle.prototype.behaviors = function() { //BEHAVIORS AND HOW THE DOTS ARE MOVING
  var arrive = this.arrive(this.target); //telling ecah point to arrive at the specified target 
  var mouse = createVector(mouseX, mouseY); //craeting a vector out of the mouse for the dots to repel 
  var flee = this.flee(mouse); //making the dots flee the mouse (turns mouse into replenant)

  arrive.mult(1);
  flee.mult(5);

  this.applyForce(arrive); //come join together and stay together 
  this.applyForce(flee); //separate and break apart 
}

Vehicle.prototype.applyForce = function(f) {
  this.acc.add(f);
}

Vehicle.prototype.update = function() {
  this.pos.add(this.vel); 
  this.vel.add(this.acc);
  this.acc.mult(0);
}

Vehicle.prototype.show = function() {
  stroke(255);
  strokeWeight(this.r);
  point(this.pos.x, this.pos.y);
}


Vehicle.prototype.arrive = function(target) {
  var desired = p5.Vector.sub(target, this.pos);
  var d = desired.mag();
  var speed = this.maxspeed;
  if (d < 100) {
    speed = map(d, 0, 100, 0, this.maxspeed);
  }
  desired.setMag(speed);
  var steer = p5.Vector.sub(desired, this.vel);
  steer.limit(this.maxforce);
  return steer;
}

Vehicle.prototype.flee = function(target) {
  var desired = p5.Vector.sub(target, this.pos);
  var d = desired.mag();
  if (d < 50) {
    desired.setMag(this.maxspeed);
    desired.mult(-1);
    var steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxforce); //constraining the force with this formula 
    return steer;
  } else {
    return createVector(0, 0);
  }
}
