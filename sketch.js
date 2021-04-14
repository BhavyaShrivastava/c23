const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld, box,ball;
function setup() {
  createCanvas(800,400);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  stat = {
    isStatic : true
  }

  stata = {
    restitution : 0.5
  }

  box = Bodies.rectangle(400,380,400,80,stat);
  ball = Bodies.circle(400,200,50,stata)
  World.add(myWorld, box);
  World.add(myWorld,ball);
  console.log(box);
}

function draw() {
  background(0); 
  Engine.update(myEngine);
  rectMode(CENTER); 
  rect(box.position.x,box.position.y,400,80)
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,50,50)
}