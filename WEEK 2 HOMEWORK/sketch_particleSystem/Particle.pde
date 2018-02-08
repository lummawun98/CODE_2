class Particle{
  //properties 
PVector position;
PVector velocity;
PVector acceleration;

  //constructors (no parameters)
Particle(){
 acceleration = new PVector(0, 0.05); 
 velocity = new PVector(random(-1, 1), random(-2, 0));
 position = new PVector(mouseX, mouseY);
 fill(random(0,255));
  
  }

void update(){
 velocity.add(acceleration);
 position.add(velocity);
  
  }
  
void display(){
  fill(255);
  ellipse(position.x, position.y, 8, 8);
  
  }
  
  //add a bounce effect if the ellipse touches the edges
void checkEdges(){
  if(position.x > width){
    position.x = width;
    velocity.x *= -1;
    }else if(position.x <0){
    position.x = 0;
    velocity.x *= -1;  
    }
    
  if(position.y > height){
   position.y = height;
   velocity.y *= -1;
   }
    
  }
      
void applyForce(PVector force){
 PVector f = PVector.div(force, 9);
 acceleration.add(f);

  
}

}