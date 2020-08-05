class Chain {
    constructor(bodyA,bodyB,offsetx,offsety){

        this.offsetX = offsetx;
        this.offsetY = offsety;

        var options = {

            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:1,
            lenght:20

        }

        this.chain = Matter.Constraint.create(options);

        World.add(world,this.chain);

    }
    display(){


        var pb,pa;
        pb = this.chain.bodyB.position;
        pa = this.chain.bodyA.position;
        strokeWeight(5);

        line(pa.x,pa.y,this.offsetX,this.offsetY);

    }

}