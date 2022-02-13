/*
Create an object with properties for the x, y, and size of a circle. Add one more property: offsetX

In the draw function,

      if the mouse is down - subtract 1 from offsetX, down to a lowest number of zero

     if the mouse is up - add 1 to offsetX

      draw the circle at mouseX and mouseY, but offset in the x direction by the amount of offsetX.

( use if(mousePressed) { to check if the mouse is down. )
*/

//Create an object with properties for the x, y, and size of a circle.
let theCircle = {size:30, offsetX: 0};
// Add one more property: offsetX

function setup(){
    createCanvas(800,400);
    background(51);
}
//draw function
function draw(){
//if the mouse is down - subtract 1 from offsetX, down to a lowest number of zero
    if (mouseIsPressed){
        theCircle.offsetX +=1;
    }else{
        theCircle.offsetX -= 1;// if the mouse is up - add 1 to offsetX
    }

    if (theCircle.offsetX-=1){ //if offset is negative
        return theCircle.offsetX=0; //set to zero
    }
//draw the circle at mouseX and mouseY, but offset in the x direction by the amount of offsetX.
circle(mouseX- theCircle.offsetX, mouseY, theCircle.size);
}


