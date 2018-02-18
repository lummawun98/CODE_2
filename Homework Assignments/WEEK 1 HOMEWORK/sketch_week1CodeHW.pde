float paddleX = mouseX; // how the paddle moves from left to right
float paddleY = 500; // how the paddle moves up and down 
float ballX = 70;
float ballY = 70;
float dX = random(5, 4);//speed of the ball
float dY = random(5, 4);// speed of the ball 
float paddleHeight = 50;// height of paddle 
float paddleWidth = 200;


void setup(){
  size(800, 575);
  background(255, 251, 0);
  
}

void draw(){
  background(255, 251, 0);
  fill(253, 220, 255);
  noStroke();
  rect(paddleX, paddleY, paddleWidth, paddleHeight);
  
  
  paddleX = mouseX; // intiating the paddleX int 
 
  stroke(8);
  fill(168, 241, 250 );
  ellipse(ballX, ballY, 70, 70);
  
  
 if(ballX > width){//right side 
  dX = -dX; //inverting the velocity 
 } 
 
 if(ballX < 0){//left side 
  dX = -dX; 
 }
 
 if(ballY > height){//right bound
  dY = -dY; 
 } 
 
 if(ballY < 0){ //left side 
  dY = -dY; 
 }
 
 ballX = ballX + dX;// what enables the ball to be moving 
 ballY = ballY + dY;// X&Y are being incrimentated 
              

  if((ballX>paddleX) && (ballX <= paddleX+paddleWidth) && (ballY>=paddleY)){//conditional making the ball bounce back up after hitting the paddle
   dY= -dY;//inverse of the up and down cordinates 
    
  }
  
  textSize(60);
  text("PONG GAME!", 220, 80);
  

   
 
}
 
 
 