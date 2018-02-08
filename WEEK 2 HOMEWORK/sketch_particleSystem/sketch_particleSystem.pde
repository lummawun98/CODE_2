ArrayList<Particle> particles; 
PVector gravity;

void setup(){
 size(640, 360);
 particles = new ArrayList<Particle>();
 gravity = new PVector(0, .09);
  
}

void draw(){
 background(0);
 particles.add(new Particle());
 
     for(int i=0; i<particles.size(); i++){
  Particle p = particles.get(i);
  p.update();
  p.display();
  p.checkEdges();
  p.applyForce(gravity);
      if(p.acceleration.y > 1.8){
       particles.remove(i); 
      }
   
   
 }
  
  
}