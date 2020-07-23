class paper
{
	constructor(x,y,r)
	
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:1,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		this.image = loadImage("paper.png")
		this.image.scale = 0.1;
		World.add(world, this.body);
		
	

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			imageMode(CENTER);
			strokeWeight(0);
			stroke("white")
			fill(255)
        image(this.image, 0, 0, this.width, this.height);
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}