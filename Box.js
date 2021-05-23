class Box {
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 30, 40, options);
        this.width = 30;
        this.height = 40;

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;

        if(this.body.speed < 5) {
            rectMode(CENTER);
            fill("green");
            strokeWeight(2);
            rect(pos.x, pos.y, this.width, this.height);
        }

        else {
            World.remove(world, this.body);
        }
    }
}