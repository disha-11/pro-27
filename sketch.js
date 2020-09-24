
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ob1,ob2,ob3,ob4,ob5;
var rod ;
var rope;
var r1,r2,r3,r4;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;
stroke(241,96,143);
fill(7,3,50);
rod=new roof(190,150,190,15);
ob1=new bob(200,350);
ob2=new bob(240,350);
ob3=new bob(280,350);
ob4=new bob(320,350);
ob5=new bob(360,350);

ob1.x=mouseX;
ob1.y=mouseY;

rope=new chain(ob1.body,rod.body,200,150)
r1=new chain(ob2.body,rod.body,240,150)
r2=new chain(ob3.body,rod.body,280,150)
r3=new chain(ob4.body,rod.body,320,150)
r4=new chain(ob5.body,rod.body,355,150)




	Engine.run(engine);
  
}


function draw() {
  background(20);
  
  ob1.display();
  ob2.display();
  ob3.display();
  ob4.display();
  ob5.display();
rope.display();
  rod.display();
  r4.display();
  r3.display();
  r2.display();
  r1.display();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ob5.body,ob5.body.position,{x:50,y:45})
  }
  if(keyCode===DOWN_ARROW){
		Matter.Body.applyForce(ob1.body,ob1.body.position,{x:-50,y:-45})
  }
  if(keyCode===LEFT_ARROW){
		Matter.Body.applyForce(ob2.body,ob2.body.position,{x:70,y:65})
  }
  if(keyCode===RIGHT_ARROW){
		Matter.Body.applyForce(ob4.body,ob4.body.position,{x:-70,y:-65})
	}
}


