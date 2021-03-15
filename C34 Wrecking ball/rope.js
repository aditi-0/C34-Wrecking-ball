class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,         //(x,y)
            stiffness: 0.04,
            length: 10
        }
        this.rope = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.rope);
    }
       fly(){
           this.rope.bodyA=null
       }

    display(){
        if(this.rope.bodyA){
        var pointA = this.rope.bodyA.position;     //position of the body
        var pointB = this.pointB;
        strokeWeight(4);
        stroke("green");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    }
}
