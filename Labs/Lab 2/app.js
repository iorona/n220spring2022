//1) Counter
//Create an application that outputs a number to the console every draw call of P5. 

let plants = 0; //start at zero

function draw(){
    plants = plants + 1; //increase by one every frame
    console.log(plants);
}

//2) Puck Side
//Create an application that draws a circle where the mouse is at. (Use  the P5 variables mouseX and mouseY for this). 
function setup() {
    createCanvas(400, 300);
}

function draw() {
    background(0)
   
//right half of the canvas, draw the circle in red

    if (mouseX > 200) {
        fill('red');
    }
//left side of the canvas, draw the circle in blue
    
    if (mouseX< 200) {
        fill('blue');
       
    }
    circle(mouseX, mouseY, 30)

} 

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
