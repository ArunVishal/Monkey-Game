var monkey, invisground;

var score = 0;

var fruit, rock;

var rockgroup, fruitgroup;

var Background, bananaimage, rockimage, monkeyrunning, BgImage;

function preload(){
  BgImage = loadImage("jungle.png");
  monkeyrunning = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png",
  "Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaimage = loadImage("banana.png");
  rockimage = loadImage("stone.png");
}

function setup() {
  createCanvas(800, 400);
  Background = createSprite(400,200);
  Background.width = 800;
  Background.height = 400;
  Background.addImage(BgImage);
  //rock.addImage("rock",rockimage);
  monkey = createSprite(75,380);
  monkey.addAnimation("run", monkeyrunning);
  invisground = createSprite(400,390,800,5);
  invisground.visible = false;
  rockgroup = createGroup();
  fruitgroup = createGroup();
  
}


function draw() {
  background(0);

  if (fruitgroup.isTouching(monkey)){
    fruitgroup.destroyEach();
    score = score + 2
  }

  monkey.collide(invisground);
  if(keyDown("space") && monkey.y > 320) {
    monkey.velocityY = -17.5;
  }

  monkey.velocityY = monkey.velocityY + 0.8
  Background.scale = 2;
  Background.velocityX = -6;

  spawnfruit();

   switch (score) {
    case 0: monkey.scale = 0.15
    if(keyDown("space") && monkey.y > 320) {
      monkey.velocityY = -17.5;
    }
          break;

    case 10: monkey.scale = 0.2
  if(keyDown("space") && monkey.y > 314) {
    monkey.velocityY = -17.5;
  }
          break;

    case 26: monkey.scale = 0.225
  if(keyDown("space") && monkey.y > 313) {
    monkey.velocityY = -17.5;
  }
          break;

    case 50: monkey.scale = 0.25
    console.log(monkey.y);
    if(keyDown("space") && monkey.y > 300) {
      monkey.velocityY = -17.5;
    }
          break;

    case 76: monkey.scale = 0.275
    if(keyDown("space") && monkey.y > 295) {
      monkey.velocityY = -17.5;
    }
          break;

    case 100: monkey.scale = 0.3
    if(keyDown("space") && monkey.y > 285) {
      monkey.velocityY = -17.5;
    }
    
          break;

    default: break;
  }  
    
  if (Background.x < 0){
    Background.x = 400;
  }

  drawSprites();

  textSize = 30;
  text("Score = " + score, 300, 50);
}

function spawnfruit(){
  if (World.frameCount % 110 == 0 || World.frameCount == 0){
      fruit = createSprite(800,random(140,350));
      fruit.velocityX = -7;
      fruit.addImage("banana",bananaimage);
      fruit.scale = 0.05;
      fruitgroup.add(fruit);
  }
}