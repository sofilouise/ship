var sea, ship;
var seaImg, shipImg;

function preload(){

seaImg = loadImage("sea.png");
shipImg = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");

}

function setup(){
  createCanvas(400,400);
  
 sea = createSprite(400,200);
 ship = createSprite(100,200,10);

 sea.addImage(seaImg);
ship.addAnimation("barco", shipImg);

 sea.velocityX = -7;
 sea.scale = 0.5;

 ship.scale = 0.3;
}


function draw() {
  background("blue");
    drawSprites();

  if(sea.x < 0) {
    sea.x = sea.width/8;
 }
     
 
}
