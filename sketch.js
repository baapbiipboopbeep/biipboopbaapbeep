var Dinkleshplatt
var Dinkleshplatt2
function setup() {
  createCanvas(500,500);
  Dinkleshplatt = createSprite(250,250,150,150)
  Dinkleshplatt2 = createSprite(-250,250,150,150)
}

function draw() 
{
  background(30);
  if (keyDown(UP_ARROW)) {
    Dinkleshplatt.y -= 6.25
  }
  if (keyDown(DOWN_ARROW)) {
    Dinkleshplatt.y += 6.25
  }
  if (keyDown(LEFT_ARROW)) {
    Dinkleshplatt.x -= 6.25
  }
  if (keyDown(RIGHT_ARROW)) {
    Dinkleshplatt.x += 6.25
  }
  if (keyDown(UP_ARROW)) {
    Dinkleshplatt2.y -= 6.25
  }
  if (keyDown(DOWN_ARROW)) {
    Dinkleshplatt2.y += 6.25
  }
  if (keyDown(LEFT_ARROW)) {
    Dinkleshplatt2.x -= 6.25
  }
  if (keyDown(RIGHT_ARROW)) {
    Dinkleshplatt2.x += 6.25
  }
  drawSprites()

}




