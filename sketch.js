var knife;
var knifeImage;
var fruit1Image;
var fruit2Image;
var fruit3Image;
var fruit4Image;
var knifeImage;
var fruitG;
var alienG;
var alien_Image;
var PLAY=1;
var END=0;
var gameoverImage;
var knifeSound;
var score=0;
var gameover;
var gamestate=1;
function preload(){
alien_Image=loadAnimation("alien1.png","alien2.png");
fruit1Image=loadImage("fruit1.png");
fruit2Image=loadImage("fruit2.png");
fruit3Image=loadImage("fruit3.png");
fruit4Image=loadImage("fruit4.png");
knifeImage=loadImage("sword.png");
gameoverImage=loadImage("gameover.png");
knifeSound=loadSound("knifeSwooshSound.mp3")
}
function setup(){
  createCanvas(400,400)
  knife=createSprite(190,170,20,20)
  knife.addImage(knifeImage)
  knife.scale=0.7;
  fruitG=new Group();
  alienG=new Group();
}
function draw(){
background("green");
  
  knife.y=mouseY;
  knife.x=mouseX;
  
  text("Score:"+score,300,30)

  if(gamestate===PLAY){
    if(frameCount%90===0){
    var fruit = createSprite(400,150,20,20)
    fruit.velocityX=-4;
    
  var  alien=createSprite(400,150,20,20)
  alien.visible=false;
     
    var image =Math.round(random(1,5))
    switch(image){
        case 1: fruit.addImage(fruit1Image);
        fruit.scale=0.3;
       break;
      case 2: fruit.addImage(fruit2Image);
       fruit.scale=0.3;
       break;
       case 3: fruit.addImage(fruit3Image);
       fruit.scale=0.3;
       break;
        case 4: fruit.addImage(fruit4Image);
        fruit.scale=0.3;
          break;
        case 5:alien.visible=true;
           alien.addAnimation("fff",alien_Image);
             alien.velocityX=-4;
      break;
     
    }
      alienG.add(alien)
     fruitG.add(fruit)
    }
     
    fruitG.lifetime=1;
    alienG.lifetime=50;
    
  
    if(knife.isTouching(alienG)){
    gamestate=END;
  }
   if(knife.isTouching(fruitG)){
     score=score+13;
     fruitG.destroyEach();
     //knifeSound.play();
     
   }
  }
      if(gamestate===END){
         gameover=createSprite(200,200,20,20)
        gameover.addImage(gameoverImage);
          alienG.destroyEach();
          knife.visible=false;
        score.visible=false;
        score=0;
      }
        
        
        
    
  
  
  
  
drawSprites();
}