class Polygon
{
	constructor(x,y,r)
	{
		var options={
            restitution:0,
			friction:0.5,
			density:0.5
			}
        this.x = x; 
        this.y = y; 
        this.r = r; 
		polygon_img=loadImage("polygon.png");
		this.body=Bodies.circle(x, y, r, options)
		World.add(world, this.body);


	}

    display(){
        imageMode(CENTER)
        image(polygon_img, this.body.position.x, this.body.position.y, 40, 40);

    }
}