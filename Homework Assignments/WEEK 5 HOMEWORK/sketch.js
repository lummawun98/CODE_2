

let sceneStates = Object.freeze({
	TITLEPAGE: 0, 
	DESCRIPTIONPAGE: 1,
	GERALD: 2, 
	SUSIE: 3,
	NUMBERFIVE: 4,
	BILL: 5, 
	PENNY: 6
})

let currentState = sceneStates.TITLEPAGE;
let keyOn = false;
//create an image array

function setup(){
	createCanvas(1200, 710);
	//write a for loop to preload the images 
}


function draw(){
	//background(100 + sin(frameCount*0.05)*50, 100 + sin(frameCount*0.06)*50, 100 + sin(frameCount*0.07)*50);
	drawScene();
	checkTransition();
	keyOn = false;
}

function drawScene(){
	switch(currentState){
		case sceneStates.TITLEPAGE:
		background(100 + sin(frameCount*0.05)*50, 100 + sin(frameCount*0.06)*50, 100 + sin(frameCount*0.07)*50);
		fill(255);
		textSize(80);
		textAlign(CENTER, CENTER);
		text("Welcome to the\n90's CHARACTERS\n FUN FACTS PAGE", width/2, height/2);
			break;
		case DESCRIPTIONPAGE:
			background(150, 200, 200);
			fill(0);
			textSize(48);
			textAlign(CENTER, CENTER);
			text("HOW IT WORKS...", width/2, height/2 - 100);
			textSize(32);
			text("PRESS A KEY YO LEARN ABOUT A CHARACTER", width/2, height/2);
			break;
		case GERALD:
			background(150, 700, 200);
			fill(0);
			textSize(48);
			textAlign(CENTER, CENTER);
			text("GERALD", width/2, height/2 - 100);
			textSize(32);
			//text("PRESS A KEY YO LEARN ABOUT A CHARACTER", width/2, height/2);

	}

}


function checkTransition(){ //checks for transitions netween each scene 
	// switch(currentState){
	// 	case sceneStates.TITLEPAGE:
	// 		if(keyOn){
	// 			currentState++;
	// 			setupScene();
	// 		}
	// 		break; 

	// }
	if(currentState == 0){
		currentState++;
		// setupScene();
	}

}


// function setupScene(){
// 	switch(currentState){
// 		case sceneState.TITLEPAGE:
// 		break;
// 	  case sceneState.DESCRIPTIONPAGE:
// 	}


// }



// case:0
// img = loadImage('assets/Greald.png');
// text = 'This is Gerald';
// break;

// case:1
// img = loadImage('assets/Susie Carmichael.png');
// text = 'This is Susie Carmichael';
// break;

// case: 2
// img = loadImage('assets/Number 5.png');
// text = 'This is Number 5'
// break;

// case: 3
// img = loadImage('assets/Little Bill.png');
// text = 'This is Little Bill'
// break;

// case: 4
// img = loadImage('assets/Penny Proud.png');
// text = 'This is Penny Proud'
// break; 


function keyPressed(){
	keyOn = true;

	checkTransition();
}




