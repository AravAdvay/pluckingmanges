
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	treeImg=loadImage("sprites/tree.png");
	boyImg=loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(2900, 1500);

	engine = Engine.create();
	world = engine.world;

  ground1 = new Ground (1450,1499,2900,50);
  ground2 = new Ground (1450,1,2900,50);
  ground3 = new Ground (1,750,50,1450);
  ground4 = new Ground (2899,750,50,1450);
  
	stone = new Stone (500,1000,150,150);
  string = new String (stone.body,{x:500,y:1000})
  
  mango1 = new Mango (2000,500,150,150);
  mango2 = new Mango (2500,700,150,150);
  mango3 = new Mango (1600,700,150,150);
  mango4 = new Mango (2700,350,150,150);
  mango5 = new Mango (2300,150,150,150);
  mango6 = new Mango (2300,450,150,150);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(225);

  imageMode(CENTER);
  image(treeImg,2200,835,1500,1800);
  image(boyImg,250,1190,550,1000);

  string.display();
  stone.display();

  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
  detectcollision(stone,mango6);
  
  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased (){
  string.fly();
}

function detectcollision(stone,mango){
  mango.body.position = mango.body.position
  stone.body.position = stone.body.position

  var distance = dist(stone.body.position.x,stone.body.position.y,mango.body.position.x,mango.body.position.y)
  if(distance<= mango.r + stone.r ){

    Matter.Body.setStatic(mango.Body,false);

  }
}
/*
function keyPressed() {
  if (keyCode ===32){
    Matter.Body.setPosition(stone.body, {x:235 , y:420})
    String.attach(stone.body)
  } 
}*/
