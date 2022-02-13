/*
Write a function that

takes a color as an argument ( you can use color(170, 200, 150) )
sets the red component of that color to zero  ( colorVariableArgumentName.setRed(0) )
Returns that new color without red
Then, test this function by drawing a circle to the screen using the result. You might have something like:
let noRed = removeRed( color(170, 200, 150) );

fill(noRed);

//draw circle
*/
function setup(){
let redColor=color(170, 200, 150);
let noRed = removeRed(color(170, 200, 150) );
}

function colorGenerator(redColor){

    if (redColor){
        
    }

    let redZero= redColor.setRed(0)


}

/*
function origColor(){
    let newColor=origColor.setRed(0)
    return newColor

}

function draw(){
    background(newColor())
}
*/



/*
let aou = { x: 0, y: 0 };

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  if(mouseIsPressed) {
    aou.x = mouseX;
    aou.y = mouseY;
  }
  
  let zah = distance( aou, { x: mouseX, y: mouseY });

  if(zah > 120) {
    stroke("#FF0000");
  } else {
    stroke("#000000");
  }
  
  line(aou.x, aou.y, mouseX, mouseY);
}

function distance(p1, p2) {
  
  let dx = p1.x - p2.x;
  let dy = p1.y - p2.y;
  
  //return the distance
return Math.sqrt(dx*dx + dy*dy);
*/

