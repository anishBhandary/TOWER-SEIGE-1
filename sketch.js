const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingshot;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    
    log1 = new Log(810,220,300,PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(925,240,70,70);
   

    log3 =  new Log(810,270,300, PI/2);

    box5 = new Box(790,200,70,70);
    log4 = new Log(720,200,150, PI/2);
    log5 = new Log(970,200,150, -PI/2);

    bird = new Bird(100,100);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:100});
}

function draw(){
    background("black");
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    //pig1.display();
    log1.display();

    box3.display();
    box4.display();
    //pig3.display();
    log3.display();

    box5.display();
      //log4.display();
      //log5.display();

    bird.display();
    platform.display();
  //  log6.display();
    slingshot.display();    
}

function mouseDragged(){
   Matter.Body.setPosition(bird.body,{x: mouseX , y: mouseY });


}

function mouseReleased(){
  slingshot.fly();

}


