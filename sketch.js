
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bow, bowimg, arrow, background,backgroundimg;
var engine, world;
var arrow1;
function preload(){

bowimg=loadImage("bow0.png");
backgroundimg=loadImage("background0.png");

}

function setup(){
createCanvas(1000,1000);
engine=Engine.create();
world=engine.world;
arrow1=new Arrow(200,390,100,100);

}

function draw(){
background(backgroundimg);
Engine.update(engine);
arrow1.display();


}

function mousePressed(){
  Matter.Body.setPosition(arrow.body, {x: mouseX , y: mouseY});
}