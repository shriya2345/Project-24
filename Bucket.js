class Bucket{

constructor(x, y){
    this.x =x;
    this.y =y;
    this.bucketWidth =200; 
    this.bucketHeight =100;
    this.wallThickness =20;
    this.angle =0;
    this.leftWB =Bodies.rectangle(this.x-this.bucketWidth/2, this.y-this.bucketHeight/2, this.wallThickness, this.bucketHeight, {isStatic:true});
    Matter.Body.setAngle(this.leftWB, this.angle);
    
    this.bottomWB =Bodies.rectangle(this.x, this.y, this.bucketWidth, this.wallThickness, {isStatic:true});
    
    this.rightWB =Bodies.rectangle(this.x+this.bucketWidth/2, this.y-this.bucketHeight/2, this.wallThickness, this.bucketHeight, {isStatic:true}); 
    Matter.Body.setAngle(this.rightWB, -1*this.angle);

    World.add(world, this.leftWB);
    World.add(world, this.rightWB);
    World.add(world, this.bottomWB);

}
display(){
var posBottom=this.bottomWB.position;
var posLeft=this.LeftWB.position;
var posRight=this.RightWB.position;

push();
translate(posLeft.x, posLeft.y);
rectMode(CENTER);
angleMode(RADIANS);
fill("white");
stroke("white");
rotate(this.angle);
rect(0, 0, this.wallThickness, this.bucketHeight);
pop();

push();
translate(posRight.x, posRight.y);
rectMode(CENTER);
angleMode(RADIANS);
fill("white");
stroke("white");
rotate(-1*this.angle);
rect(0, 0, this.wallThickness, this.bucketHeight);
pop();

push();
translate(posBottom.x, posBottom.y);
rectMode(CENTER);
angleMode(RADIANS);
fill("white");
stroke("white");
rect(0, 0, this.bucketWidth, this.wallThickness);
pop();
 }

}