var wall1,thickness;

var bullet,speed,weight;

function setup() {
  createCanvas(1192.5,400);

  speed=random(223,321);
  weight=random(400,1500);
  thickness=random(22,83)

  bullet=createSprite(50,200,50,40);
  bullet.velocityX = speed;
  bullet.shapeColor=color(255,255,255);

  wall1=createSprite(1140,200,thickness,height/2);
  wall1.shapeColor=color(255,255,255);
}

function draw() {
  background(52,205,255);

if (hasCollided(bullet,wall1)){
bullet.velocityX=0;
var damage =0.5 * weight * speed * speed / (thickness * thickness * thickness);

  if (damage>10){
    wall1.shapeColor=color(255,0,0);
  }
  if (damage<10){
    wall1.shapeColor=color(0,255,0);
  } 
}

  drawSprites(); 
}

function hasCollided(bullet,wall1){
  bulletRightEdge=bullet.x+bullet.width;
  wall1LeftEdge=wall1.x;
  if (bulletRightEdge>=wall1LeftEdge){
    return true
  }
  return false;
}