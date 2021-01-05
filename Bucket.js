class Bucket
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.bucketWidth=200;
		this.bucketHeight=100;
		this.wallThickness=20;
		this.angle=0;	
		
		this.bB=Bodies.rectangle(this.x, this.y, this.bucketWidth, this.wallThickness, {isStatic:true})
		this.leftWB=Bodies.rectangle(this.x-this.bucketWidth/2, this.y-this.bucketHeight/2, this.wallThickness, this.bucketHeight, {isStatic:true})
		Matter.Body.setAngle(this.leftWB, this.angle);
		

		this.rightWB=Bodies.rectangle(this.x+this.bucketWidth/2, this.y-this.bucketHeight/2, this.wallThickness, this.bucketHeight, {isStatic:true})
		Matter.Body.setAngle(this.rightWB, -1*this.angle);
		World.add(world, this.bB)
		World.add(world, this.leftWB)
		World.add(world, this.rightWB);

	}
	display()
	{
			var posBottom=this.bB.position;
			var posLeft=this.leftWB.position;
			var posRight=this.rightWB.position;

			

			push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			stroke(255)
			rotate(this.angle)
			rect(0,0,this.wallThickness, this.bucketHeight);
			pop()

			push()
			translate(posRight.x, posRight.y);
			rectMode(CENTER)
			//strokeWeight(4);
			stroke(255)
			angleMode(RADIANS)
			fill(255)
			rotate(-1*this.angle)
			rect(0,0,this.wallThickness, this.bucketHeight);
			pop()

			push()
			translate(posBottom.x, posBottom.y);
			rectMode(CENTER)
			//strokeWeight(4);
			stroke(255)
			angleMode(RADIANS)
			fill(255)
			rect(0,0,this.bucketWidth, this.wallThickness);
			pop()
			
	}

}
