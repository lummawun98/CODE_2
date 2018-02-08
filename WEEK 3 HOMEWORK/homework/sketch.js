let bubbles = [];

function setup(){
	 createCanvas(1300, 1300);

	
}

function mouseDragged{
	let r = random(10, 50);
	let b = new Bubble(mouseX, mouseY, r);
	bubbles.push(b);

}

function draw(){
	background(0);

	for(let bubble of bubbles){
		bubbles.move();
		bubbles.show();
	}

	for(let i = 0; i < bubbles.length; i++){
		bubbles[i].move();
		bubbles[i].show();
	}
	
}

class Bubble { 
	contructor(x, y, r){
		this.x = x;
		this.y = y;
		this.r = r;
	}

	move(){
		this.x = this.x + random(-5, 5);
		this.y = this.y + randon(-5, 5);
	}

	show(){
		stroke(255, 0, 0);
		strokeWeight(10);
		noFill(0, 255, 255);
		ellipse(this.x, this.y, this.r * 2);

	}

}

