var ball
function setup() {
  createCanvas(400,400);
  ball = createSprite (200,200,20,20)
}

function draw() 
{
  background(30);
  if (keyDown (RIGHT_ARROW)){
      ball.x = ball.x+1
  }
  if (keyDown (LEFT_ARROW)){
    ball.x = ball.x-1
}
if (keyDown (UP_ARROW)){
  ball.y = ball.y-1
}
if (keyDown (DOWN_ARROW)){
  ball.y = ball.y+1
}
drawSprites ()
}




