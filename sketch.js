const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var canvas;
var particle;
var back,back_Img;
var boxy = [];



function preload() {
  back_Img = loadImage("p.png");
}



function setup() {
  canvas = createCanvas(900,600);

  engine = Engine.create();
  world = engine.world;

  var air_ground_options = {
    isStatic: true,
    restitution: 0
  }

  air_ground = Bodies.rectangle(725,250,200,20,air_ground_options);
  World.add(world,air_ground);

  back = new Background(width/2,height,width,100);

  particle_options = {
    isStatic: true
  }

  particle = Bodies.circle(100,300,50,particle_options);
  World.add(world,particle);

  var x = 620;
  var y = 500;
  r1 = 10;
  r2 = 10;
  r3 = 200;

  for(var i = 0; i < 100; i++) {

    if(i < 13) {
      box1 = new Box(x,y,20,40,r1,r2,r3);
      boxy.push(box1);
    } else if(i === 13) {
        x = 630;
        y = 460;
        r1 = 37;
        r2 = 249;
    } else if(i >= 13 && i < 24){
        box1 = new Box(x,y,20,40,r1,r2,r3);
        boxy.push(box1);
    } else if(i === 24) {
        x = 660;
        y = 420;
        r1 = 107;
        r2 = 29;
    } else if(i >= 24 && i < 32) {
        box1 = new Box(x,y,20,40,r1,r2,r3);
        boxy.push(box1);
    } else if(i === 32) {
        x = 690;
        y = 380;
        r1 = 247;
        r2 = 187;
        r3 = 65;
    } else if(i >= 32 && i < 37) {
        box1 = new Box(x,y,20,40,r1,r2,r3);
        boxy.push(box1);
    } else if(i === 37) {
        x = 720;
        y = 340;
        r1 = 0;
        r3 = 0;
    } else if(i >= 37 && i < 39) {
      box1 = new Box(x,y,20,40,r1,r2,r3);
      boxy.push(box1);
    }

    x = x + 20; 
  }

  o1 = 100;
  o2 = 230;
  o3 = 0;

  var p = 220;
  var z = 655

  for(var o = 0; o < 20; o++) {

    if(o<8) {
      box1 = new Box(z,p,20,40,o1,o2,o3);
      o1 = o1+20;
      o2 = o2+20;
      o3 = o3+20;
      boxy.push(box1);
    }

    if(o === 8) {
      z = 675;
      p = 180;
    }

    if(o >= 8 && o < 14) {
      o1 = 100;
      o2 = 255;
      o3 = 200;
      box1 = new Box(z,p,20,40,o1,o2,o3);
      boxy.push(box1);
    } 

    if(o === 14) {
      z = 695;
      p = 140;
    }

    if(o >= 14 && o < 18) {
      o1 = 100;
      o2 = 255;
      o3 = 20;
      box1 = new Box(z,p,20,40,o1,o2,o3);
      boxy.push(box1);
    }

    if(o === 18) {
      z = 715;
      p = 100;
    }

    if(o >= 18 && o < 20) {
      o1 = 10;
      o2 = 25;
      o3 = 200;
      box1 = new Box(z,p,20,40,o1,o2,o3);
      boxy.push(box1);
    }
    z = z + 20;
  }
}

function draw() {
  background(255,255,255);
  
  Engine.update(engine);

  back.display();

  for(var j = 0; j < boxy.length; j++) {
    boxy[j].display();
  }

  rectMode(CENTER);
  rect(air_ground.position.x,air_ground.position.y,200,20);

  fill("red");
  strokeWeight(3);
  stroke("Yellow");
  ellipseMode(CENTER);
  ellipse(particle.position.x,particle.position.y,50);
}