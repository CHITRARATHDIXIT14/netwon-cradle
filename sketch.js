
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1
var ball1,ball2,ball3,ball4,ball5
function preload()
{
	


}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    box1=new box(400,200,500,70)
	ball1=new ball(200,500,40)





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
box1.display();
ball1.display();
ball2.display();
ball3.display();
ball4.display();
ball5.display();
  drawSprites();
 
}



