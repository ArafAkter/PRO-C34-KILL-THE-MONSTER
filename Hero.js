class Hero {
    constructor(x, y) {
      var options = {
  'restitution' : 0.5,
  'friction' : 0.1,
  'density' : 1
  }
  this.image = loadImage("hero.png");
      this.body = Bodies.rectangle(x, y, 150,105, options);
      this.width = 150;
      this.height = 125;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
     // rotate(angle);
      rectMode(CENTER);
      fill("silver");
      stroke("black")
      strokeWeight(4)
    //  ellipse(0, 0, this.width , this.height );
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
     //regularPolygon(0, 0, 14, 50);
      pop();
    }
  };
  
  