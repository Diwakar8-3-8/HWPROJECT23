var Zenia;
var Tourus;
var Cyclap;
var wall1,wall2,wall3;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  Zenia = createSprite(50, 120, 50, 30);
  Tourus = createSprite(50, 200, 50, 30);
  Cyclap = createSprite(50, 280, 50, 30);
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = (80,80,80);
  speed = random(55,90);
  weight = random(400,1500);
}

function draw() {
  background("lightblue");  

  Zenia.velocityX = speed;
  Tourus.velocityX = speed;
  Cyclap.velocityX = speed;

  if(wall1.x-Zenia.x < (Zenia.width+wall1.width)/2)
  {
    Zenia.velocityX = 0;
    var deformation = 180 * 2260 * 60 * 60/22500;
    if(deformation>180)
    {
      Zenia.shapeColor = color(255,0,0);
    }
    if(deformation<180 && deformation>100)
    {
      Zenia.shapeColor = color(230,230,0);
    }
    if(deformation<100)
    {
      Zenia.shapeColor = color(0,255,0);
    }
  }

  if(wall1.x-Tourus.x < (Tourus.width+wall1.width)/2)
  {
    Tourus.velocityX = 0;
    var deformation = 84 * 1522 * 50 * 50/22500;
    if(deformation>180)
    {
      Tourus.shapeColor = color(255,0,0);
    }
    if(deformation<180 && deformation>100)
    {
      Tourus.shapeColor = color(230,230,0);
    }
    if(deformation<100)
    {
      Tourus.shapeColor = color(0,255,0);
    }
  }

  if(wall1.x-Cyclap.x < (Cyclap.width+wall1.width)/2)
  {
    Cyclap.velocityX = 0;
    var deformation = 134 * 300 * 45 * 45/22500;
    if(deformation>180)
    {
      Cyclap.shapeColor = color(255,0,0);
    }
    if(deformation<180 && deformation>100)
    {
      Cyclap.shapeColor = color(230,230,0);
    }
    if(deformation<100)
    {
      Cyclap.shapeColor = color(0,255,0);
    }
  }
  drawSprites();
}