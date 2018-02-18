int num = 65;
Lum[] fruitLum;

PFont font;

PImage img0;


void setup(){
  size(1000, 700);
  
  font = loadFont("DoubleBubbleShadow-48.vlw");
  textFont(font, 32);
  
  fruitLum = new Lum[num];
  
  for(int i=0; i<num; i++){
    fruitLum[i] = new Lum(0,random(0,height),random(1,5),color(random(0,255),random(0,255),random(100,255)),random(50,200), random(50,200));
  }
   
     img0 = loadImage("fruity.png");
   
}


void draw(){
  background(254, 221, 248);

  
  for(int i=0; i<num; i++){
    fruitLum[i].display();
    fruitLum[i].move();
  }
  
    if(mousePressed == true){
    
    image(img0, 0, 0);
 
    
    }
    
  }