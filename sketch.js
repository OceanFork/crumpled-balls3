
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var dustbinObj, paperObject,groundObject	
var world,bin,slingshot;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbin(1200,650,150,300);
	
	paperObject=new paper(200,600,70);
	
	groundObject=new ground(width/2,670,width,20);
	//Create a Ground
	slingshot = new launcher(paperObject.body,{x:200,y:200});


	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
 
  dustbinObj.display();
  paperObject.display();
  groundObject.display();
  slingshot.display();    
 
  
  
 
}

function mouseDragged(){
    Matter.Body.setPosition(paperObject.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}



