const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;


let engine;
let world;

var enemy1,enemy2,enemy3;
var border1,border2,border3;
var base1,base2,base3,base4,base5,base6,base7,base8;
var player,border4,MystryI;
var mystry,left,right,up,Win,winIMG;
var music
var WINING

function preload(){
  mystry = loadImage("./Assets/MystryMark.png")
  winIMG = loadImage("./Assets/Win.png")
  music = new Audio('./Assets/Music/Background music.mp3')
}


function setup() {
  createCanvas(1920,969);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);


Win = createSprite(1818,100,10,10)
Win.addImage("Mystrey",winIMG)
player = new playerS(164, 195, 50, 50);
WINING = new playerS(1818,100,30,30);
enemy1 = new Enemy(400,700,100,100)
enemy2 = new Enemy(1717,900,100,100)
enemy3 = new Enemy(666,580,100,100)
border4 = new Base(960,969,10000,20)
border1 = new Base(0,969,20,50000)
border2 = new Base(1920,969,20,50000)
border3 = new Base(500,0,50000,20)
base1 = new Walls(400,800,150,20)
base2 = new Walls(670,640,150,20)
base3 = new Walls(381,400,20,360)
base4 = new Walls(570,333,150,20)
base5 = new Walls(1010,420,150,20)
base6 = new Walls(1322,278,100,10)
base7 = new Walls(1769,180,300,60)
base8 = new Walls(1560,699,100,20)

}

function draw() {
  
  background("black");
  fill("#FFFFFF")

  text(mouseX + "," + mouseY, mouseX, mouseY)

  //show()
player.show()
enemy1.show();
enemy2.show();
enemy3.show();
border4.show();
border1.show();
border2.show();
border3.show();
base1.show();

base2.show();
base3.show();
base4.show();
base5.show();
base6.show();
base7.show();
base8.show();
if (keyDown("space")) {
  Matter.Body.setStatic(player.body,false)
  Matter.Body.setStatic(enemy1.body,false)
  Matter.Body.setStatic(enemy2.body,false)
  Matter.Body.setStatic(enemy3.body,false)
}

Matter.Body.setStatic(WINING.body,true)
////////MUSIC//////////
music.play()
music.loop =true;
////////MUSIC//////////

Collision()
Up();
Left();
Right();

  drawSprites();
  Engine.update(engine);
}
     


  function Up(){
    if (keyDown(UP_ARROW)) {
      Matter.Body.applyForce(player.body,{x:0,y:0},{x:0,y:-0.0026});  
    }
    
  }
  function Left(){
    if (keyDown(LEFT_ARROW)) {
      Matter.Body.applyForce(player.body,{x:0,y:0},{x:-0.0026,y:0});
    }
    
  }
  function Right(){
    if (keyDown(RIGHT_ARROW)) {
      Matter.Body.applyForce(player.body,{x:0,y:0},{x:0.0026,y:0});
    }
  }
  function Collision() {
    var collision1 = Matter.SAT.collides(
       enemy1.body,
       player.body
    )
    if (collision1.collided) {
      stroke("WHITE")
      textSize(25)
      text("U Have Died  Reload Page",800,527)
      Matter.Body.setStatic(player.body,true)
      Matter.Body.setStatic(enemy1.body,true)
     }
     var collision2 = Matter.SAT.collides(
       enemy2.body,
       player.body
     )
     if (collision2.collided) {
      stroke("WHITE")
      textSize(25)
      text("U Have Died  Reload Page",800,527)
       Matter.Body.setStatic(player.body,true)  
       Matter.Body.setStatic(enemy2.body,true)
     }
     var collision3 = Matter.SAT.collides(
       enemy3.body,
       player.body
     )
     if (collision3.collided) {
       stroke("WHITE")
       textSize(25)
       text("U Have Died  Reload Page",800,527)
       Matter.Body.setStatic(player.body,true)
       Matter.Body.setStatic(enemy3.body,true)
     }
     var collision4 = Matter.SAT.collides(
       WINING.body,
       player.body
     )
     if (collision4.collided) {
       stroke("WHITE")
       textSize(25)
       text("You Won!",900,527)
       Matter.Body.setStatic(player.body,true)
     }

  }
