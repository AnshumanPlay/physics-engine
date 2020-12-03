const Engine = Matter.Engine; 
const World=Matter.World;
 const Bodies=Matter.Bodies;

  var abworld,abengine;
 var ground;
 var ball;

  function setup(){ 
 createCanvas(800,400);
abengine = Engine.create();//abengine.world
abworld=abengine.world;


 var goptions= { isStatic:true }
 
 ground=Bodies.rectangle(200,390,800,30,goptions);
World.add(abworld,ground); console.log(ground);
var boptions={restitution:1};
ball=Bodies.circle(400,100,25,boptions);
World.add(abworld,ball);
 }

function draw(){ 
 background("white"); 
  Engine.update(abengine);
 rectMode(CENTER);
 rect(ground.position.x,ground.position.y,800,30);
 ellipseMode(RADIUS);
 ellipse(ball.position.x,ball.position.y,25,25);
 drawSprites();

 }
