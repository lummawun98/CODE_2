Dog myDog;


void setup(){
  size(1000, 1000);
  myDog = new Dog("Bleu",color(255,0,0), new PVector(width/2, height/2)); //instantiate a new instance 
  
  println("myDog's name is:" + myDog.name);
  
  myDog.name = "Rose";
   
  println("myDog's name is now: " + myDog.name);

}

void draw() {
    //fill(furColor);
    //rect(position.x, position.y, 2*weight, 2*weight);
    background(0);
    myDog.draw();
  
}

class Dog{
  String name;
  float weight;
  PVector position;
  color furColor;
  
  Dog(String name, color furColor, PVector position){ //constructor
    //this is necessary becaus the property and position have the same name 
    //must assign information to the constraints set above 
    this.name = name;
    this.weight = random(7, 85); 
    this.position = position; 
    this.furColor = furColor;
  }
  
  void draw() {
    fill(furColor);
    rect(position.x, position.y, 2*weight, weight);
   // myDog.draw();
  
}

}