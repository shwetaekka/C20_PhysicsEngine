const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world,ball;

var object;

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic : true
  };

  object = Bodies.rectangle(400, 380, 800, 20, options);
  World.add(world, object);
ball=Bodies.circle(200,320,10,options);
World.add(world, ball);
  console.log(object);
  console.log(object.position);
  
  
}

function draw() {
  background('#34ADD7');  
  Engine.update(engine);

  fill('#58F609');
  rectMode(CENTER);
  rect(object.position.x, object.position.y,800,20);
circle(ball.position.x,ball.position.y,100,20);

 
}