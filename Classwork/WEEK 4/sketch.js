

let a;


function setup() {
	createCanvas(1800, 1800);
	a = new Vehicle(createVector(width/2, height/2));


}


function draw() {
	background(255, 222, 248);
	fill(222, 222, 255);
	stroke(0);
	strokeWeight(2);
	ellipse(mouseX, mouseY, 60, 60);

	// push();
 //  translate(width*0.2, height*0.5);
 //  rotate(frameCount / 200.0);
 //  star(0, 0, 5, 70, 3); 
 //  pop();
  
 //  push();
 //  translate(width*0.5, height*0.5);
 //  rotate(frameCount / 50.0);
 //  star(0, 0, 80, 100, 40); 
 //  pop();
  
  push();
  translate(mouseX, mouseY);
  rotate(frameCount / -100.0);
  star(0, 0, 30, 70, 5); 
  pop();

	//update and display vehicle
	a.seek(createVector(mouseX, mouseY));
	a.update();
	a.display();



}

function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}


class Vehicle{
	constructor(position){
		//this is where we deifne our properties
		this.position = position;
		this.velocity = createVector(0,0);
		this.acceleration = createVector(0,0);
		this.radius = 6; //radius is size
		this.color = (255, 0, 0);

		this.maxSpeed = 6;


	}

//seek target
seek(target){
	//note that thos.position is a vector
	//note that target is a vector 
	//find the desired vector of travel by subtracting form the position of oG target
	let desired = target.sub(this.position);

// keep direction of the difference between 
//position and target but limit how close it can go
	desired.setMag(this.maxSpeed); 

	//find the "steering" vector
	let steer = desired.sub(this.velocity);

	this.applyForce(steer);

}


//applyForce (giving direction and magnitude)
applyForce(force){
	this.acceleration.add(force);


}

//update (perform calculations)
update(){ 

	this.velocity.add(this.acceleration); //update velocity
	this.position.add(this.velocity); //update acceleration 
	this.acceleration.mult(0); //reset acceleration 

}

// function star(x, y, radius1, radius2, npoints) {
//   var angle = TWO_PI / npoints;
//   var halfAngle = angle/2.0;
//   beginShape();
//   for (var a = 0; a < TWO_PI; a += angle) {
//     var sx = x + cos(a) * radius2;
//     var sy = y + sin(a) * radius2;
//     vertex(sx, sy);
//     sx = x + cos(a+halfAngle) * radius1;
//     sy = y + sin(a+halfAngle) * radius1;
//     vertex(sx, sy);
//   }
//   endShape(CLOSE);
// }



display(){ //display

//get the angle from velocity 
	let theta = this.velocity.heading() + HALF_PI; 

//set drawing properties
	fill(this.color);
	stroke(0);
	strokeWeight(1);

//move the center of the canvas to the vehicle's position
	translate(this.position.x, this.position.y);

//rotate the camvas heading we calculated above
	rotate(theta);

//draw the vegicle shape
	// beginShape();

	// endShape(CLOSE);

// function star(x, y, radius1, radius2, npoints) {
//   var angle = TWO_PI / npoints;
//   var halfAngle = angle/2.0;
//   beginShape();
//   for (var a = 0; a < TWO_PI; a += angle) {
//     var sx = x + cos(a) * radius2;
//     var sy = y + sin(a) * radius2;
//     vertex(sx, sy);
//     sx = x + cos(a+halfAngle) * radius1;
//     sy = y + sin(a+halfAngle) * radius1;
//     vertex(sx, sy);
//   }
//   endShape(CLOSE);
// }

 star(0, 0, 30, 70, 5); 
resetMatrix();


}



}