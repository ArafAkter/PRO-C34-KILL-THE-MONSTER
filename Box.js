class Box{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':5.0,
            'density':2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
    //    this.image = loadImage("base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
       rotate(angle);
    //    imageMode(CENTER);
      //  image(this.image, 0, 0, this.width, this.height);
      fill("red")
      stroke("black")
   //   ellipse(0,0,25,25)
   rect(0,0,this.width,this.height)
        pop();
      }
}