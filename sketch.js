var canvas;
var backgroundImage;
var knightImgL, knightImgR, towerImg
var knight, tower
var platform1, platform2, platform3

function preload() {
knightImgL = loadImage("knight.png");
knightImgR = loadImage("knight2.png")
towerImg = loadImage("tower.jpg");
} 

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
tower = createSprite(windowWidth/2,windowHeight/2,50,50)
tower.addImage(towerImg);

knight = createSprite(windowWidth - 350,windowHeight - 110,50,50)
knight.addImage(knightImgR)
knight.addImage(knightImgL)
knight.scale = 0.5
platform1 = createSprite(windowWidth - 400,windowHeight - 20,250,20)
platform2 = createSprite(windowWidth/2,windowHeight/2 + 150,200,20)
platform3 = createSprite(windowWidth/2 - 370,windowHeight/2,250,20)
}

function draw() {
  background("black");
console.log(mouseX,mouseY)
if(keyIsDown(LEFT_ARROW)){
knight.x += 5
//knight.changeImage(knightImgL)
}
if(keyIsDown(RIGHT_ARROW)){
  knight.x -= 5
  //knight.changeImage(knightImgR)
}
  drawSprites()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
