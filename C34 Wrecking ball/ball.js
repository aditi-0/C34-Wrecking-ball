class Ball {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'frictionAir':0.005,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, 80, options);
      this.r=80;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      fill("purple");
      ellipse(0, 0, this.r, this.r);
      pop();
    }
  };