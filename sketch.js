
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,tree; 
var m1,m2,m3,m4,m5,m6;
var stone,boy;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;

	ground=new Ground(600,600,1200,40);
	
	tree=new Tree(900,330,550,400);

	m1=new Mango(870,280,40,40);
	m2=new Mango(840,230,40,40);
	m3=new Mango(920,170,40,40);
	m4=new Mango(950,120,40,40);
	m5=new Mango(970,260,40,40);
	m6=new Mango(970,190,40,40);

	stone=new Stone(200,280,5);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  ground.display();
  tree.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  stone.display();

  drawSprites();
 
}



