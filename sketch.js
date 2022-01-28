var papaiNoel, papaiParado;
var bg
var cat
var presente
var parede
var parede2

function preload() {
 papaiNoel = loadAnimation("images/Run (2).png","images/Run (3).png","images/Run (5).png","images/Run (9).png","images/Run (10).png","images/Run (11).png")
 bg = loadImage("images/BG.png")
 papaiParado = loadImage("images/Idle (1).png")
 cat = loadImage("images/Idle (3).png")
 presentes = loadImage("images/presentinho.png")
}

function setup() {
  createCanvas(800,600);
  
  papaiNoel2 = createSprite(200,550,40,40) 
  papaiNoel2.addImage("parado",papaiParado)
  papaiNoel2.addAnimation("andando",papaiNoel)
  papaiNoel2.scale = 0.2
  
  papaiNoel2.setCollider ("circle",0,0,40)

  cat2 = createSprite(600,550,40,40)
  cat2.addImage("catinho",cat)
  cat2.scale = 0.23
  
  cat2.setCollider ("circle",0,0,40)

  parede1 = createSprite(0,300,40,800)
  parede1.visible = false
  

  parede3 = createSprite(800,300,40,800)
  parede3.visible = false
  
}

function draw() {
  background(bg);







  
 if(keyDown("LEFT_ARROW")){
   papaiNoel2.x = papaiNoel2.x  -5
  papaiNoel2.changeAnimation("andando")
 }
 


 if(keyDown("RIGHT_ARROW")){
  papaiNoel2.x = papaiNoel2.x +5
 papaiNoel2.changeAnimation("andando")
}


if(keyDown("D")){
  cat2.x = cat2.x +5

}

if(keyDown("A")){
  cat2.x = cat2.x  -5

}

papaiNoel2.collide(parede1)
papaiNoel2.collide(parede3)
cat2.collide(parede1)
cat2.collide(parede3)












  drawSprites()
}