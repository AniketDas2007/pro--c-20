// objects
var car, wall;

// speed and weight for the car
var speed, weight;

function setup() {
  // creating the canvas
  createCanvas(1600, 400);

  // creating random speed and weight
  speed = random(90, 55);
  weight = random(1500, 400);

  // creating car
  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;

  // creating wall
  wall = createSprite(1500, 200, 60, height / 2);
  wall.shapeColor = (80, 80, 80);
}

function draw() {
  // to clear the background color
  background(255, 255, 255);

  // detecting the collision
  if ((wall.x - car.x) < (car.width/2 + wall.width/2)) {
    // to stop the car
    car.velocityX = 0;

    // creating deformation
    var deformation = (0.5 * weight * speed * speed) / 22509;

    // giving color as deformation
    if (deformation < 100) {
      car.shapeColor = color(0, 255, 0);
    }

    if (deformation > 100 && deformation < 180) {
      car.shapeColor = color(230, 230, 0);
    }

    if (deformation > 180) {
      car.shapeColor = color(0, 255, 0);
    }
  }

  // to draw sprites
  drawSprites();
}
