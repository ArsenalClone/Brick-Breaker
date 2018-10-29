let playerScore = 0;
let ball
let paddle

const width = 800;
const height = 600;

function setup() {
    createCanvas(width, height);
    ball = new Ball();
    paddle = new Paddle();
}

function draw() {
    background(0);
    textSize(32);
    text(`Score:${playerScore}`, width - 140, 40);
    fill(255);

    if (keyIsDown(LEFT_ARROW)) {
        paddle.location.x -= 5;
      }
    
      if (keyIsDown(RIGHT_ARROW)) {
        paddle.location.x += 5;
      }

    ball.update();
    ball.edgeBounce();
    ball.paddleBounce();
    ball.reset();

    ball.display();
    paddle.display();
    
}


