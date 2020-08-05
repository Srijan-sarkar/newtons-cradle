
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Bob1 = new Bob(480,550,20);
	Bob2 = new Bob(440,550,20);
	Bob3 = new Bob(400,550,20);
	Bob4 = new Bob(360,550,20);
	Bob5 = new Bob(320,550,20);
	roof = new Ground(400,350,200,30);

	chain1 = new Chain(Bob1.body,roof.body,480,350);
	chain2 = new Chain(Bob2.body,roof.body,440,350);
	chain3 = new Chain(Bob3.body,roof.body,400,350);
	chain4 = new Chain(Bob4.body,roof.body,360,350);
	chain5 = new Chain(Bob5.body,roof.body,320,350);

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(210);

  Bob1.display();
  Bob2.display();
  Bob3.display();
  Bob4.display();
  Bob5.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  roof.display();
  
  drawSprites();
 
}

function keyPressed (){

	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(Bob1.body,Bob1.body.position,{x:50,y:0});
	}

}

