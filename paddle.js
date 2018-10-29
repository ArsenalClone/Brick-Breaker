class Paddle {
    constructor() {
        this.width = 150;
        this.height = 30;
        this.color = color(255);
        this.location = createVector((width /2) - (this.width /2), (height - this.height));
    }

    display() {
        fill(this.color);
        rect(this.location.x, (this.location.y - 5), this.width, this.height);
    if (this.location.x <= 0) {
        this.location.x = 0;
    }
    if (this.location.x + this.width >= width) {
        this.location.x = width - this.width;
    }
    
    }
}