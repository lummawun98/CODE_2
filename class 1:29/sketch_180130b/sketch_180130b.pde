//WITHOUT MULTIPLE FIRWORKS -- WORKING 

// for class FireworkParticle
FireworkParticle firework; // for class FireworkParticle


void setup(){
  size(1000, 700);
  firework = new FireworkParticle(new PVector(width/2, height/2), color(255, 0, 0));
}

void draw(){ //this is the draw loop that initiates everything setup up below (in the class FireworkParticle)
  background(0);
  firework.update();
  firework.draw();
  
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