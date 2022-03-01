/*
In addition to your setup() and draw() calls, add a new function named polarPoint()
Add one argument to polar point (r)
In the polar point function, create an x variable and set it to r * Math.sin(mouseX);
Create a Y variable, set it to the result of r * Math.cos(mouseX);
Finally, at the end of the function, write return createVector(x,y); 
To test this function:

Set a variable (perhaps res) equal to the result of calling polarPoint() in your draw call
Add a translate(100,100); line before your drawing methods
Draw a circle at res.x, res.y, and with a radius of 10.
(res is technically an 'object', which we will learn more about next week)
*/
//Add one argument to polar point (r)
function setup(){
    createCanvas(800,800);
}

function draw (){
    let res=polarPoint(40)
    translate(400,400);
    circle(res.x,res.y,10)
}
function polarPoint(r){
    let x= r * Math.sin(mouseX);
    let y= r * Math.cos(mouseX);
    return createVector(x,y); 

}