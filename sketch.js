var ground;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup

var score=0;
var back,backImage;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  backImage = loadImage("jungle.jpg");    
 
}



function setup() {
  createCanvas(600,400);
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(600,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  
  

  bananaGroup = new Group();
  obstacleGroup = new Group();
  
}


function draw() {
  background("white");
  

  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  
  monkey.velocityY=monkey.velocityY+0.8;
  
  monkey.collide(ground);
  if(bananaGroup.isTouching(monkey)){
   score = score +2;
    bananaGroup.destroyEach();
  }
  switch(score){
    case 10: monkey.scale=0.12;
      break;
    case 20: monkey.scale=0.14;
      break;
    case 30: monkey.scale=0.16;
      break;
    case 40: monkey.scale=0.18;
      break;
      default:break;
  }
  
  if(obstacleGroup.isTouching(monkey)){
monkey.scale = 0.1;
  }

  drawSprites();
    
  stroke("black");
  textSize(20);
  fill("black");
  text("Score: "+ score,100,50);
  spawnBanana();
  spawnObstacle();
}

function spawnBanana(){
  if(frameCount%80===0){
    banana = createSprite(400,Math.round(random(120,200)),10,10);
    banana.addImage(bananaImage);
    banana.velocityX=-4;
    banana.lifetime=100;
    bananaGroup.add(banana);   
    banana.scale=0.1;
  }
}  

function spawnObstacle(){
  if(frameCount%300===0){
    obstacle = createSprite(400,325,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.1;
    obstacle.velocityX=-2
    obstacleGroup.add(obstacle);
  }
  }



