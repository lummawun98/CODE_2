//WITH MULTIPLE FIRWORKS -- NOT WORKING 

// for class FireworkParticle
//FireworkParticle firework; // for class FireworkParticle

//this is what is going to setup a bunch of ellipses (fireworks)
ArrayList<FireworkParticle> fireworkArray = new ArrayList<FireworkParticle>(); 


void setup(){
  size(1000, 700);
  //firework = new FireworkParticle(new PVector(width/2, height/2), color(255, 0, 0));
  
  int numFireworks = 350; 
  PVector position = new PVector(random(0, width), random(0, height));
  color randomColor = color(random(255), random(255), random(255));
  
  for(int i = 0; i < numFireworks; i++) {
    FireworkParticle firework = new FireworkParticle(position, randomColor); 
    fireworkArray.add(firework); 
    
  }
 
 println("my array's size is:" + fireworkArray.size());
 
}

void draw(){ //this is the draw loop that initiates everything setup up below (in the class FireworkParticle)
  background(0);
  //firework.update();
  //firework.draw();
  
  for(int i = 0; i < fireworkArray.size(); i++){
    FireworkParticle firework = fireworkArray.get(i);
    firework.update();
    firework.draw();
    
  }
  
}

class FireworkParticle{
  color fireworkColor;
  PVector position; 
  PVector velocity;
  PVector acceleration;
  float alpha; //equivalent to opavvity 
  int size; //can also be a float
  
  FireworkParticle(PVector position, color fireworkColor){//these are the things we'll be able to change whenever 
    //these are the things that will be the default for all particles made 
    this.position = position;
    this.fireworkColor = fireworkColor; 
    this.velocity = new PVector(random(-1.2, -1.2), random(-1, -1));
    this.acceleration = new PVector(0, random(0, 0.1)); 
   
    size = 5;
    alpha = 255; //full opacity
     
  }
  
  void update(){
    velocity.add(acceleration); //calculating the velocity and acceleration, then adding them together
    position.add(velocity); //calculating the position and velocity, then adding them together
    
    alpha--;
   
  }
  
  void draw(){//this draw loop is a method WITHIN the particle system FireworkParticle 
   fill(fireworkColor, alpha); 
   ellipse(position.x, position.y, size, size);
    
  }
  
  
}