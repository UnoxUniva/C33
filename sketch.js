const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg;
var platform
var log6
var sling
var gameState = "onSling"

var score = 0

function preload() {
    // backgroundImg = loadImage("sprites/bg.png");
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)
    platform = new Ground(100,305,300,175)

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    // log6 = new Log(230, 180,50, PI/2)

    bird = new Bird(50,100);


    sling = new Slingshot(bird.body,{x : 227, y: 100})
    
    

    
    
    
    

}

function draw(){
    // 
    if(backgroundImg)
        background(backgroundImg);
    else
    background("black")
    Engine.update(engine);
    
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    platform.display()

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();
    text("Score : " + score , 100 , 50)
    textSize(20)
    pig1.score()
    pig3.score()
    // log6.display();

   

    sling.display()
    bird.display();
    

}

function mouseDragged(){
if(gameState === "onSling"){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}
}
function mouseReleased(){
    sling.fly()
    gameState = "launched"
}

function keyPressed(){
    if(keyCode===32&&bird.body.position.y>70){
        Matter.Body.setPosition(bird.body,{x:227,y:100})
         sling.attach(bird.body)
    gameState="onSling"
    bird.trajectory=[]
    
    }
    
}

async function getBackgroundImg(){
    var response = await fetch("http://worldclockapi.com/api/json/est/now")

    var responsejson = await response.json()

    var currdtTime = responsejson.currentDateTime;

    var Hour = currdtTime.slice(11,13)

    if(Hour>8 && Hour <17){
        backgroundImg = loadImage("sprites/bg.png");
    }else{
        backgroundImg = loadImage("sprites/bg2.jpg");
    }
}