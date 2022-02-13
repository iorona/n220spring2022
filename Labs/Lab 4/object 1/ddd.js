/*
Make an object with all the properties for a graphic on the screen - width, height, color, position. 
Perhaps more. In your create or draw function draw that object to the screen using the data in your object.

The, create a function that takes one argument and draws an object to the screen using that argument.
 Pass your object to that function as an argument, and have the function draw the object to the screen.
*/

//Make an object with all the properties for a graphic on the screen 
//width, height, color, position
let Ghost = {color: "white", width: 40, height:80, x:200, y:100};


//create a function that takes one argument and draws an object to the screen using that argument
function makeGhost(objGhost) { //create argument 

    fill(objGhost.color);
    ellipse(objGhost.x, objGhost.y, objGhost.width, objGhost.height);
}
 
function setup() {
    createCanvas (600,300);
    background(100);
}


function draw() {
   makeGhost(Ghost);

}
// Pass your object to that function as an argument, and have the function draw the object to the screen.




