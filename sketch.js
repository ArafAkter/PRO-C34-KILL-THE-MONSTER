const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload() {

}

function setup() {
  createCanvas(1000, 500);
  engine = Engine.create();
  world = engine.world;
ground = new Ground(width/2 - 300,400,width,10)
hero = new Hero(150,175)

fly1 = new Fly(hero.body,{x:150, y:0});

box1 = new Box(325,380,45,45)
box2 = new Box(325,340,45,45)
box3 = new Box(325,300,45,45)
box4 = new Box(325,260,45,45)
box5 = new Box(325,220,45,45)
box6 = new Box(325,180,45,45)
box7 = new Box(325,140,45,45)

box8 = new Box(385,380,45,45)
box9 = new Box(385,340,45,45)
box10 = new Box(385,300,45,45)
box11 = new Box(385,260,45,45)
box12 = new Box(385,220,45,45)
box13 = new Box(385,180,45,45)

box14 = new Box(445,380,45,45)
box15 = new Box(445,340,45,45)
box16 = new Box(445,300,45,45)
box17 = new Box(445,260,45,45)
box18 = new Box(445,220,45,45)
box19 = new Box(445,180,45,45)
box20 = new Box(445,220,45,45)
box21 = new Box(445,180,45,45)

box22 = new Box(505,260,45,45)
box23 = new Box(505,220,45,45)
box24 = new Box(505,180,45,45)
box25 = new Box(505,220,45,45)
box26 = new Box(505,180,45,45)

monster1 = new Monster(600,350)

}

function draw() {
  background(50,225,10055);
  Engine.update(engine);
  world = engine.world;

  ground.display();
  hero.display();
  fly1.display();

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
  box12.display();
  box13.display();
  box11.display();

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
  box26.display();
 
  monster1.display();
}
function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}
