//3) World Wrap 

//Create a canvas 800px x 600 px
let xPos = 0;
let yPos= 0;

let xSpeed= 5;
let ySpeed=1;
function setup() {
    createCanvas(800,600);
}

function draw(){
//drawing a ball on the left hand of the screen 
// make it move to the right 5 pixels per frame.
background('blue')
xPos= xPos + xSpeed;
yPos = yPos + ySpeed;
//circle reaches 800 pixels to the right.
    if (xPos > 800) {
    xSpeed=-1;
    }
//move the circle to the far left of the screen
    if (yPos>600) {
    ySpeed= -1
    }
    fill('red')
    circle(xPos, yPos, 30)
}
