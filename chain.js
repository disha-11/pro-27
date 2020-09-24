class chain{
    constructor(bodyA, pointB,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;

        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            length: 200,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

   

    display(){
        if(this.chain.bodyA){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.pointB;
        
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    }
}
