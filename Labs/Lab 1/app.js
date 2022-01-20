
function setup() {
    createCanvas(800,600);
}
// Create variables:
let z= 30
let a= 400 //center
function draw() {
    background(color(131, 205, 230));
   
    fill("brown") // Fill brown
    
    rect(385,300,z,200); // Make the rectangle
   
    fill("green") // Fill Green
    // Make five circles overlap:
    noStroke(); //merge circle 
    circle(a,270,z); // centered circle
    circle(a,240,z); //top circle
    circle(360,230,z); //top left circle
    circle(360,280,z); //bottom left circle
    circle(430,240,z); //top right circle
    circle(430,280,z); // bottom right circle
    circle(a,220,z); //above top circle

    // Fill black
    fill("black")
    circle(a,380,z/2); // place a circle in the center of the rectangle

}