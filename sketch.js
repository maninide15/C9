var ball;

function setup() {
  createCanvas(400,400);
  ball = createSprite(200, 200, 25, 25)  
  ball.velocityX = 1
  ball.velocityY = 1
}

function draw() 
{
  background(30);
  if (keyDown("right")){
    ball.velocityX = 3;
  }

  if (keyDown("left")) {
    ball.velocityX = -3
  }

  if (keyDown("up")) {
    ball.velocityY = -3 
  }

  if (keyDown("down")) {
    ball.velocityY = 3
  }

  if (ball.y < 0 || ball.y > height) {
    ball.velocityY = -ball.velocityY;

  }

  if (ball.x < 0 || ball.x > width) {
    ball.velocityX = ball.velocityX * -1;

  }

  
  drawSprites()

}




