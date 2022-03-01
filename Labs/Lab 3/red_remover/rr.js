/*
Write a function that

takes a color as an argument ( you can use color(170, 200, 150) )
sets the red component of that color to zero  ( colorVariableArgumentName.setRed(0) )
Returns that new color without red
Then, test this function by drawing a circle to the screen using the result. You might have something like:
let noRed = removeRed( color(170, 200, 150) );

*/
//writing function
function removeRed (color) {
  color.setRed(0)
  return (color)
}
function setup(){
  createCanvas(800,600)

  let noRed = removeRed( color(170, 200, 150) );

  fill(noRed);
  console.log(noRed);

  //draw circle
  circle(100,100,30)
}



