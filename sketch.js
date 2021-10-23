var gameState;
var PLAY = 1 ; 
var END  = 2;
var HOME = 0;
var btnGroup , QuizBtn
var quizImg;
 var img;
 var one , two , three;

 var back01Img;
 var play , playB;
 var back1 ; 
 var backgroundImg;

var player , playerImg;

var bullet , bulletGroup , bulletImg;
var aestImg , aest2Img
var  earth , earthImg;

function preload(){
back01Img = loadImage("back.jpg")
playB = loadImage("play.png")
backgroundImg = loadImage("back1.png")
playerImg = loadImage("player.png")
bulletImg = loadImage("bullet.png")
aestImg = loadImage("aest.png")
aest2Img = loadImage("aest2.png")
earthImg = loadImage("earth.png")
QuizBtnImg = loadImage("quiz.png")
quizImg = loadImage("quizz.png")
Img = loadImage("checkBox.png")
WinS = loadSound("write.wav")
wrongS = loadSound("wrong.wav")
}

function setup() {
  createCanvas(windowWidth,windowHeight);


  back1 = createSprite(windowWidth/2 , windowHeight/2 , windowWidth , windowHeight);
  back1.addImage(back01Img)
  back1.scale = 2.7;

  play = createSprite(windowWidth/2 , windowHeight/2 , 50 ,50)
  play.addImage(playB);
  play.scale = 0.7; 


// spacecraft
 player = createSprite(windowWidth/5 , windowHeight/2 , 50 , 50)
 player.addImage(playerImg);
 player.visible = false;


 earth = createSprite(-250 , windowHeight/2+40 , 50 ,50 );
 earth.addImage(earthImg)
 earth.scale = 5

 one = createSprite(150 , 350 , 50 ,50)
 one.addImage(Img) ;
 one.scale= 0.2
 one.visible = false;

 two = createSprite(150 , 450 , 50 ,50)
 two.addImage(Img) ;
 two.scale= 0.2;
 two.visible = false

 three = createSprite(150 , 550 , 50 ,50)
 three.addImage(Img) ;
 three.scale= 0.2
 three.visible = false

bulletGroup = new Group();
oneAestroidGroup = new Group();
twoAestroidGroup = new Group();
btnGroup = new Group();
}

function draw() {
  background(backgroundImg);  
  if(mousePressedOver(play)){
    play.visible = false;
    back1.visible = false;
    player.visible = true;
  
    gameState = 1;
   
  }

if(gameState === 1){
  var select_aestroids = Math.round(random(1,2));

  if (World.frameCount % 90 == 0) 
  {
    if (select_aestroids == 1) 
    {
      oneAestroid();
    } 
    else 
    {
      twoAestroid();
    }
  } 
  if (keyWentDown("space")||mouseWentDown("leftButton"))
  {
    var bulletOut = createBullet();
  
  }
}




  if(keyDown(UP_ARROW)){
    player.y = player.y-10;
  }
  if(keyDown(DOWN_ARROW)){
    player.y = player.y+10;
  }

  if(player.y < 24){
    player.y = 634;
  }
  if(player.y > 634){
    player.y = 24;
  }
 
  console.log(player.y);
  
  if(gameState === 2 ){
    strokeWeight(6)
    stroke(20 ,12, 30)
    fill(100 ,46 , 90)
    textSize(50)
   text("You Lose   ＞﹏＜   " , windowWidth/2-100, windowHeight/2)
   text(" You need one more chance give the answer of the quiz. " , windowWidth/2-600, windowHeight/2+50)
    quiz()
  }

 

  if(bulletGroup.isTouching(oneAestroidGroup))
  {
      bulletGroup.destroyEach(); 
      oneAestroidGroup.destroyEach(); 

  }  
  if(player.isTouching(oneAestroidGroup))
  {
      bulletGroup.destroyEach(); 
      oneAestroidGroup.destroyEach(); 
     twoAestroidGroup.destroyEach(); 
      player.destroy()
      earth.destroy()
      gameState=2;
  }  
  if(earth.isTouching(oneAestroidGroup))
  {
      bulletGroup.destroyEach(); 
      oneAestroidGroup.destroyEach(); 
      twoAestroidGroup.destroyEach(); 
      player.destroy( )
      earth.destroy()
      gameState = 2;
  }  
  if(player.isTouching(twoAestroidGroup))
  {
      bulletGroup.destroyEach(); 
      oneAestroidGroup.destroyEach(); 
      twoAestroidGroup.destroyEach(); 
      player.destroy( )
      earth.destroy()
      gameState = 2;
  }  
  if(earth.isTouching(twoAestroidGroup))
  {
      bulletGroup.destroyEach(); 
      oneAestroidGroup.destroyEach(); 
      twoAestroidGroup.destroyEach(); 
      player.destroy( )
      earth.destroy()
      gameState = 2;
  }  

  if(bulletGroup.isTouching(twoAestroidGroup))
  {
      bulletGroup.destroyEach(); 
      twoAestroidGroup.destroyEach(); 

  }  
 
   if(gameState === 3){
    btnGroup.destroyEach()
    background(quizImg)
    // text( mouseX +","+ mouseY , mouseX , mouseY)
    three.visible = true
    two.visible = true
    one.visible = true
    if (mousePressedOver(three)){
      alert("wrong answer , try again")
      wrongS.play()
    }
    if (mousePressedOver(two)){
      alert("wrong answer , try again")
      wrongS.play()
    }
    if (mousePressedOver(one)){
      alert("Congratulation ")
      WinS.play()
    }
   }

  if( mousePressedOver(QuizBtn)){
     
    gameState = 3 ;
 }

  drawSprites();
}
function createBullet() 
{
  bullet= createSprite(380, 100, 5, 10);
  bullet.velocityX = 6;
  bullet.scale = 0.3;
  bullet.lifetime = 160;
  bullet.addImage(bulletImg);
  bullet.y = player.y;
  bulletGroup.add(bullet);
  
}

function oneAestroid() 
{
var one = createSprite(windowWidth,Math.round(random(20, 370)), 10, 10);
one.addImage(aestImg);
one.velocityX = -7;
one.lifetime = 400;
one.scale = 0.5
oneAestroidGroup.add(one)

}

function twoAestroid() 
{
var two = createSprite(windowWidth,Math.round(random(20, 370)), 10, 10);
two.addImage(aest2Img);
two.velocityX = -7;
two.lifetime = 400;
two.scale = 0.5
twoAestroidGroup.add(two)

}
function quiz() {
  if(gameState === 2){
    QuizBtn = createSprite(windowWidth/2 , windowHeight/2 + 200 , 30 ,30)
    QuizBtn.addImage(QuizBtnImg)
    btnGroup.add(QuizBtn)
  }
  
}