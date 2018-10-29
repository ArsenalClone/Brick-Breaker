class Ball {
    constructor() {
        this.radius = 30;
        this.size = this.radius * 2;
        this.color = color(255, 165, 0);
        this.location = createVector(width / 2, height / 2);
        this.velocity = createVector(5, -5);
    }


display() {
    fill(this.color);
    ellipse(this.location.x, this.location.y, this.size, this.size);
}

update() {
    this.location.add(this.velocity);
}

edgeBounce() {
    if (this.location.y <= 0 + this.radius + 3) {
        this.velocity.y *= -1;
    } else if(this.location.x + this.radius >= width - 3) {
        this.velocity.x *= -1;
    }
    if (this.location.x - this.radius <= 0 + 3) {
        this.velocity.x *= -1;
    }
}

paddleBounce() {
    if (this.location.x <= paddle.location.x + paddle.width && this.location.x + this.radius >= paddle.location.x){
        if (this.location.y + this.radius >= paddle.location.y - 3) {
            this.velocity.y *= -1;
        }
    }
    }

reset() {
    if (this.location.y + this.radius >= height) {
        this.location = createVector(width /2, height / 2);
        this.velocity = createVector(5, -5);
        this.update();
    }
    }
}
