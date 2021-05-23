// Name spacing
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

// Creating engine and world
var engine, world;

// Defining background variables
var bg;

function preload() {

}

// Setup function
function setup() { 

// Creating canvas and engine; adding engine to the world
    var canvas = createCanvas(1450,550);

    engine = Engine.create();
    world = engine.world;

// Making ground and box holders
    ground = new Ground(width/2, height-10, width, 20);

    boxHolder1 = new Ground(700, 400, 240, 30);
    boxHolder2 = new Ground(1200, 250, 180, 30);

// Making level 1 of boxHolder 1
    box1 = new Box(610, 360);
    box2 = new Box(640, 360);
    box3 = new Box(670, 360);
    box4 = new Box(700, 360);
    box5 = new Box(730, 360);
    box6 = new Box(760, 360);
    box7 = new Box(790, 360);

// Making level 2 of boxholder 1
    box8 = new Box(640, 315);
    box9 = new Box(670, 315);
    box10 = new Box(700, 315);
    box11 = new Box(730, 315);
    box12 = new Box(760, 315);

// Making level 3 of box holder 1
    box13 = new Box(670, 270);
    box14 = new Box(700, 270);
    box15 = new Box(730, 270);

// Making level 4 of box holder 1
    box16 = new Box(700, 225);

// Making level 1 of box holder 2
    box17 = new Box(1140, 215);
    box18 = new Box(1170, 215);
    box19 = new Box(1200, 215);
    box20 = new Box(1230, 215);
    box21 = new Box(1260, 215);

// Making level 2 of box holder 2
    box22 = new Box(1170, 170);
    box23 = new Box(1200, 170);
    box24 = new Box(1230, 170);

// Making level 3 of boxHolder 2
    box25 = new Box(1200, 125);

// Making shooter and launcher
    shooter = new Shooter(150, 340, 50, 50)
    launcher = new Launcher(shooter.body, {x: 150, y: 330});
}

// Draw function
function draw() {

// Setting background and updating engine
    if(bg === 1) {
        background("yellow");  
    }
    else {
        background("blue");
    }
    Engine.update(engine);

// Displaying ground and box holders
    ground.display();

    boxHolder1.display();
    boxHolder2.display();

// Displaying boxes
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    box13.display();
    box14.display();
    box15.display();

    box16.display();

    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();

    box22.display();
    box23.display();
    box24.display();
    
    box25.display();

// Displaying shooter and launcher
    shooter.display();
    launcher.display();

// Drawing sprites
    drawSprites();
}

// mouseDragged function to move the shooter when dragged
function mouseDragged() {
    Matter.Body.setPosition(shooter.body, {x: mouseX, y: mouseY});
}

// mouseReleased function to launch the shooter
function mouseReleased() {
    launcher.fly();
}

// Attaching shooter to the launcher when space is pressed
function keyPressed() {
    if(keyCode === 32) {
        launcher.attach(shooter.body);
    }
}

async function getTime() {
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var jsonResponse = await response.json();
    console.log(jsonResponse);
    var dateTime = jsonResponse.datetime;
    var hour = dateTime.slice(10, 13);
    if(hour >= 06 && hour <= 21) {
        bg = 1;
    }
    else {
        bg = 2;
    }
}