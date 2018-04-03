
let sceneStates = Object.freeze({
	INTRO: 0,
	TUTORIAL: 1,
	GAME: 2,
	WIN: 3,
	LOSE: 4
});

let currentState = sceneStates.INTRO;


function setup(){
	createCanvas(1200, 1000);
}


function draw(){
	drawScene();
	checkTransition();
	keyOn = false;


}

function drawScene(){
	switch(currentState){
		case sceneStates.INTRO:
		background(100 + sin(frameCount*0.05)*50, 100 + sin(frameCount*0.06)*50, 100 + sin(frameCount*0.07)*50);
		fill(255);
		textSize(80);
		textAlign(CENTER, CENTER);
		text("Welcome to the\nPUSH BUTTON\n GAME", width/2, height/2);

	}

}


function checkTransition(){ //checks for transitions netween each scene 
	switch(currentState){
		case sceneStates.INTRO:
			if(keyOn){
				currentState++;
				setupScene();
			}
			break; 

	}


}



function setupScene(){
	switch(currentState){
		case sceneState.INTRO:
		break;
	  case sceneState.TUTORIAL:
	  tutorialTimer
	}


}










