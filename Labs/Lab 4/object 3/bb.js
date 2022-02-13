/*
Take your ball bounce or world wrap assignment and recode it using an object to store the ball's size, color, and velocity.
 No global variables or hardcoded values should be used in your update function.
*/
//use an object to store the ball's size, color, and velocity
let objBall= {size: 30, color: 'red', xPos: 0, yPos:0, xSpeed:5, ySpeed:1 };

function setup() {
    createCanvas(800,600);
}

function draw(){
//drawing a ball on the left hand of the screen 
// make it move to the right 5 pixels per frame.
background('blue')
objBall.xPos= objBall.xPos + objBall.xSpeed;
objBall.yPos = objBall.yPos + objBall.ySpeed;
//circle reaches 800 pixels to the right.
    if (objBall.xPos > 800) {
    objBall.xSpeed=-1;
    }
//move the circle to the far left of the screen
    if (objBall.yPos>600) {
    objBall.ySpeed= -1
    }
    fill('red')
    circle(objBall.xPos, objBall.yPos, objBall.size)
}

