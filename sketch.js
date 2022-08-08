var barco, barco_movimiento;
var mar, marImage;

function preload(){
barco_movimiento = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

marImage = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  barco = createSprite(200,200,50,50);
  barco.addAnimation("movimiento", barco_movimiento);
  barco.scale = 0.3

  mar = createSprite(200,200,50,50);
  mar.addImage("mar", marImage);
  mar.scale = 0.3;
  
}

function draw() {
  background("blue");
  drawSprites();
 
}