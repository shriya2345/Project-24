const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var engine, world;
var paperObject, ground, bucketobj;

function setup() {
	createCanvas(1600, 700);

   
	engine = Engine.create();
	world = engine.world;
    bucketobj = new Bucket(1200, 650);
	paperObject = new Paper(200, 450, 40);
    ground = new Ground(width/2, 670, width, 20);
    

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);

  rectMode(CENTER);
  background(0);
  
  bucketobj.display();
  paperObject.display();
  ground.display();

  keyPressed();
  drawSprites();
 
}

function keyPressed (){

if(keyCode === UP_ARROW) {

	 Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x:85, y:-85});
  
   }

}