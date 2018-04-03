let sceneStates = Object.freeze({
	INTRO:0,
	TUTORIAL:1,
	GAME:2,
	WIN:3,
	LOSE:4
});

let currentState = sceneStates.INTRO;

let keyOn = false;
let tutorialTimer;

let gameTimer;
let gameTimePressed;
const timeForGame = 5000;

function setup(){
	createCanvas(800,800);
}

function draw(){
	drawScene();
	checkTransition();
	keyOn = false;

}

function drawScene() {
	switch(currentState) {
		case sceneStates.INTRO:
			background(100 + sin(frameCount*0.05) * 50, 100 + sin(frameCount*0.06) * 50, 100 + sin(frameCount*0.07) * 50);
			console.log("frameCount: " + frameCount);
			console.log("sin(frameCount): " + sin(frameCount))
			fill(255);
			textSize(80);
			textAlign(CENTER, CENTER);
			text("welcome to the\nPUSH BUTTON\ngame", width/2, height/2);
			break;
		case sceneStates.TUTORIAL:
			background(150, 200, 200);
			fill(0);
			textSize(48);
			textAlign(CENTER, CENTER);
			text("HOW TO PLAY...", width/2, height/2 - 100);
			textSize(32);
			text("try to hit a key exactly when\nthe counter hits zero", width/2, height/2);
			textSize(24);
			text("notice that this screen progresses\nwhen hitting a key only after a\n timer has been completed", width/2, height/2 + 120);
			if (millis() > tutorialTimer + 3000){  // 3000 = 3 seconds 
				text("OK, now you can hit a key", width/2, height/2 + 190);
			} 
			break;
		case sceneStates.GAME:
			let timeLeft = (timeForGame - (millis() - gameTimer))/1000;
			background(map(timeLeft, 5, 0, 255, 0), 250, 150);
			fill(0);
			textSize(164);
			textAlign(CENTER,CENTER);
			text(timeLeft.toFixed(1), width/2, height/2);
			break;
		case sceneStates.WIN:
			background(127 + sin(frameCount*0.05) * 127, 127 + sin(frameCount*0.06) * 127, 127 + sin(frameCount*0.07) * 1.7);
			fill(0);
			textSize(64);
			textAlign(CENTER,CENTER);
			text("YOU WIN!\nResult: " + gameTimePressed, width/2, height/2 - 70);
			textSize(24);
			text("Press any key to return to title", width/2, height - 100);
			break;
		case sceneStates.LOSE:
			background(10, 10, 10);
			fill(255);
			textSize(64);
			textAlign(CENTER, CENTER);
			text("You Lose...\nresult: " + gameTimePressed, width/2, height/2);
			textSize(24);
			text("Press any key to try again", width/2, height - 100);
			break;


	}
}

function checkTransition(){
	switch(currentState){
		case sceneStates.INTRO:
			if(keyOn){
				currentState++;
				setupScene();
			}
			break;
		case sceneStates.TUTORIAL:
			if(millis() > tutorialTimer + 3000){
				if(keyOn){
					currentState++;
					setupScene(currentState);
				}
			}
			break;
		case sceneStates.GAME:
			if(keyOn){
				gameTimePressed = (timeForGame - (millis() - gameTimer))/1000;
				gameTimePressed = gameTimePressed.toFixed(3);

				if (gameTimePressed < 0.1 && gameTimePressed > -0.1){
					currentState = sceneStates.WIN;
				}else{
					currentState = sceneStates.LOSE;
				}
				setupScene();
			}
			break;
		case sceneStates.WIN:
			if (keyOn){
				currentState = sceneStates.INTRO;
				setupScene();
			}
			break;
		case sceneStates.LOSE:
			if (keyOn){
				currentState = sceneStates.GAME;
				setupScene();
			}
			break;
	}
}

function setupScene(){
	switch(currentState){
		case sceneStates.INTRO:
			break;
		case sceneStates.TUTORIAL:
			tutorialTimer = millis();
			break;
		case sceneStates.GAME:
			gameTimer = millis();
			break;
	}
}

function keyPressed(){
	keyOn = true;
}
