var car,wall;
var speed,weight;



function setup() {
  createCanvas(1600,400);
  car=createSprite(500,500,25,50);
  wall=createSprite(100,200,10,10);
  //car.velocityX=speed;
  wall.shapeColor=(80,80,80);
  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  background(0);  
 
  drawSprites();
  wall.display=true;
  
}