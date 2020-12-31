const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;


var myEngine,myWorld, ground
var box,box1,pig,log1,box2,box3,log2,log3,box4,
log4,log5,pig1,bird1;
var backgroundImg;
var platform;

function preload() {
  backgroundImg = loadImage("sprites/bg.png");
}

function setup() {
  
  var canvas = createCanvas(1200,400);
 
  //createSprite(200, 200, 50, 50);
  myEngine = Engine.create();
  myWorld = myEngine.world;
  box = new Box(920,320,70,70);
  box1 = new Box(700,320,70,70);
  ground = new Ground(600,height-10,width,10);
  platform = new Ground(150,305,300,170)
  pig = new Pig(810,350);
  pig1 = new Pig(810,220);
  log1 = new Log(810,260,300,PI/2);
  box2 = new Box(700,240,70,70);
  box3 = new Box(920,240,70,70);
  log3 = new Log(810,180,300,PI/2);
  box4 = new Box(810,160,70,70);
  log4 = new Log(760,120,150,PI/7);
  log5 = new Log(870,120,150,-PI/7);
  bird1 = new Bird(100,100);

 }

function draw() {   
  
  background(backgroundImg);
  Engine.update(myEngine);
  box.display();
  box1.display();
  ground.display();
  pig.display();
  log1.display();
  box2.display();
  box3.display();
  log3.display();
  box4.display();
  log4.display();
  log5.display();
  pig1.display();
  bird1.display();
  platform.display();
}