class Arrow{
constructor(x,y,width,height){
var options={
'frictionAir':1,
'isStatic':false,
'density':1.0,

}
this.body=Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;
this.image=loadImage("arrow0.png")
this.body.scale=5;
World.add(world,this.body);

}
display(){
push();
translate(this.body.position.x,this.body.position.y);
imageMode(CENTER);
image(this.image,0,0,this.width,this.height);
pop();
}




}



