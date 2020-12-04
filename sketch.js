var fixedRect,movingRect;
var diffX;
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  movingRect=createSprite(600,200,70,70);
}

function draw() {
  background(255,255,255); 
  fixedRect.shapeColor = "red";
  movingRect.shapeColor="red";
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  diffX=movingRect.width/2+fixedRect.width/2;
  diffY=movingRect.height/2+fixedRect.height/2;
  if((movingRect.x-fixedRect.x<diffX && fixedRect.x-movingRect.x<diffX)&&(movingRect.y-fixedRect.y<diffY && fixedRect.y-movingRect.y<diffY))
  {
    fixedRect.shapeColor = "green";
    movingRect.shapeColor="green";
  }

  drawSprites();
}