var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation,cityAnimation;
var school;
var road,bottomGrass1
var player
function preload(){

}


function setup() {
  createCanvas(displayWidth,700);
  carGroup1 = new Group();
  logGroup1 = new Group();
  //grasses where player can reset

  for(var i=0; i<6; i++){
    var bottomGrass1=createSprite(683,height-50-(i*400),width,grassHeight);

    if(i%2===0)//adding road
    {
      var road=createSprite(683,height-150-(i*400)-grassHeight,width,300)
      road. shapeColor = "black";
    }
    bottomGrass1.shapeColor="green";
  }
 
  //to create rows of car
  for (var i = 0; i <40; i++) {
    cars = new Car(2);
    carGroup1.add(cars.spt);
  }

  //to create rows of logs
  for(var i=0; i<40; i++){
    log = new Log(-3)
    logGroup1.add(log.spt)
  }
  Player = new Player(width/2,height-25)

  //creating City
  city=createSprite(width/2,-1500)
  city.addAnimation("city",cityAnimation);
}

function draw() {
  background("skyblue");
  translate(0,-Player.spt.y+height-150);
 //making the cars re-appear
 
 for(var i=0; i<carGroup1.length; i++){
   if(carGroup1[i].x>width){
     carGroup1[i].x=0;
   }
 if(carGroup1[i].x<0){
   carGroup1[i].x=width;
 }
  }

  //making the log re-appear
for(var i=0; i<logGroup1.length; i++){
  if(logGroup1[i].x<0){
    logGroup1[i].x=width;
  }
}

  keyPressed();
  drawSprites();

}

function keyPressed(){
  if(keyCode == UP_ARROW){
    Player.move(0,-0.1);
  } else if(keyCode == DOWN_ARROW){
    Player.move(0,0.1);
  } else if(keyCode == LEFT_ARROW){
    Player.move(-0.1,0);
  } else if(keyCode == RIGHT_ARROW){
    Player.move(0.1,0)
  }
}