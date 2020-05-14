function Background(x,y,w,h) {

    var op  = {
        isStatic: true
    }

    this.body = Bodies.rectangle(x,y,w,h,op);
    this.w = w;
    this.h = h;
    this.image = loadImage("p.png");

    World.add(world,this.body);

    this.display = function() {
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        fill("grey");
        stroke("black");
        strokeWeight(2);
        image(this.image,0,0,width,height,0,0,width,height);
        rect(pos.x,pos.y,this.w,this.h);
        pop();
    }
}