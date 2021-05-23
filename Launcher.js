// Slingshot class
class Launcher {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.2,
            length: 10
        }
        this.pointB = pointB
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher)
    }

    fly() {
        this.launcher.bodyA = null;
    }

    attach(body) {
        this.launcher.bodyA = body
    }

    display() {


        if (this.launcher.bodyA) {
            var posA = this.launcher.bodyA.position;
            var posB = this.pointB;
            strokeWeight(4);
            line(posA.x, posA.y, posB.x, posB.y);
        }
    }
}