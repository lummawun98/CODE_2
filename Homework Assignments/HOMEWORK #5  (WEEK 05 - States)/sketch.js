var img1;
var img2;
var img3;
var img4;
var img5;

let sceneStates = Object.freeze({
  INTRO: 0,
  GERALD: 1,
  BILL: 2,
  FIVE: 3,
  PENNY: 4,
  SUSIE: 5
});

let currentSceneState = sceneStates.INTRO;


function setup() {
  createCanvas(1500,800);

  img1 = loadImage("assets/Gerald.png");
  img2 = loadImage("assets/LittleBill.png");
  img3 = loadImage("assets/Number5.png");
  img4 = loadImage("assets/PennyProud.png");
  img5 = loadImage("assets/SusieCarmichael.png");
}

function draw() {
  switch(currentSceneState) {
    case sceneStates.INTRO:
      drawIntro();
      break;

    case sceneStates.GERALD:
      drawGerald();
      image(img1, 0, 0);
      break;
      image(img1, 0, 0);

    case sceneStates.BILL:
       drawBill();
       image(img2, 0, 0);
      break;

      case sceneStates.FIVE:
       drawFive();
       image(img3, 0, 0);
      break;

      case sceneStates.PENNY:
       drawPenny();
       image(img4, 0, 0);
      break;

      case sceneStates.SUSIE:
       drawSusie();
       image(img5, 0, 0);
      break;
  }
}

// function keyPressed() {
//   currentSceneState = sceneStates.LUM;
//   currentSceneState = sceneStates.PRESSED;
// }

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    currentSceneState = sceneStates.GERALD;
  } 
  else if (keyCode === RIGHT_ARROW) {
    currentSceneState = sceneStates.BILL;
  } 
  else if (keyCode === UP_ARROW){
  	currentSceneState = sceneStates.FIVE;
  } 
  else if (keyCode === DOWN_ARROW) {
  	currentSceneState = sceneStates.PENNY;
  } 
  else if (keyCode === SHIFT) {
  	currentSceneState = sceneStates.SUSIE;
  }
}

function drawIntro() {
  background(random(0,255), random(0,255), random(0,255));
  fill(255);
  noStroke();
  textSize(50);
  text("90s CARTOON CHARACTERS", 400, height/2);
}

function drawGerald() {
  background(108, 238, 90);
  fill(0);
  noStroke();
  text("Gerald from Hey Arnold", 50, 50);
}

function drawBill() {
  background(255, 170, 22);
  fill(0, 255, 0);
  noStroke();
  text("Little Bill from Little Bill ", 50, 50);

}

function drawFive() {
  background(255, 19, 151);
  fill(0, 255, 0);
  noStroke();
  text("Numbah 5 from Code Name Kids Next Door ", 50, 50);

}

function drawPenny() {
  background(19, 223, 255);
  fill(0, 255, 0);
  noStroke();
  text("Penny from The Proud Family", 50, 50);

}

function drawSusie() {
  background(255, 251, 12);
  fill(0, 255, 0);
  noStroke();
  text("Susie from Rugrats", 50, 50);

}

	

// function drawScene(){
// 	switch(currentState){
// 		case sceneStates.TITLEPAGE:
// 		background(100 + sin(frameCount*0.05)*50, 100 + sin(frameCount*0.06)*50, 100 + sin(frameCount*0.07)*50);
// 		fill(255);
// 		textSize(80);
// 		textAlign(CENTER, CENTER);
// 		text("Welcome to the\n90's CHARACTERS\n FUN FACTS PAGE", width/2, height/2);
// 			break;
// 		case DESCRIPTIONPAGE:
// 			background(150, 200, 200);
// 			fill(0);
// 			textSize(48);
// 			textAlign(CENTER, CENTER);
// 			text("HOW IT WORKS...", width/2, height/2 - 100);
// 			textSize(32);
// 			text("PRESS A KEY YO LEARN ABOUT A CHARACTER", width/2, height/2);
// 			break;
// 		case GERALD:
// 			background(150, 700, 200);
// 			fill(0);
// 			textSize(48);
// 			textAlign(CENTER, CENTER);
// 			text("GERALD", width/2, height/2 - 100);
// 			textSize(32);
// 			//text("PRESS A KEY YO LEARN ABOUT A CHARACTER", width/2, height/2);

// 	}

// }


// function checkTransition(){ //checks for transitions netween each scene 
// 	// switch(currentState){
// 	// 	case sceneStates.TITLEPAGE:
// 	// 		if(keyOn){
// 	// 			currentState++;
// 	// 			setupScene();
// 	// 		}
// 	// 		break; 

// 	// }
// 	if(currentState == 0){
// 		currentState++;
// 		// setupScene();
// 	}

// }


// // function setupScene(){
// // 	switch(currentState){
// // 		case sceneState.TITLEPAGE:
// // 		break;
// // 	  case sceneState.DESCRIPTIONPAGE:
// // 	}


// // }



// // case:0
// // img = loadImage('assets/Greald.png');
// // text = 'This is Gerald';
// // break;

// // case:1
// // img = loadImage('assets/Susie Carmichael.png');
// // text = 'This is Susie Carmichael';
// // break;

// // case: 2
// // img = loadImage('assets/Number 5.png');
// // text = 'This is Number 5'
// // break;

// // case: 3
// // img = loadImage('assets/Little Bill.png');
// // text = 'This is Little Bill'
// // break;

// // case: 4
// // img = loadImage('assets/Penny Proud.png');
// // text = 'This is Penny Proud'
// // break; 







