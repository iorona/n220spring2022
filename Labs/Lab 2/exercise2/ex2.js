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
