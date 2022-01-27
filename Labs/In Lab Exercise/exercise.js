// Exericse 1
//Create an application that writes the string "Hello world" to the screen at location 50, 50 in the setup function.

x=50;
y=50;
function setup() {
    createCanvas(800, 800);
    x+=50;
    y=y*3;
    text('Hello Work', x, y);

}
//----------------------------
//Exercise 2
//Move all the code for the above into the draw() function.
//Add a global variable for the "Hello world" text.
//Use that global variable for the text. Your command might look something like: text( greeting, x, y);

x=50;
y=50;
greet='Hello World'
function setup() {
    createCanvas(800, 800);
    x+=50;
    y=y*3;
    greet+='d';
    text(greet, x, y);

}
//--------------------------
//Exercise 3
function setup() {
    createCanvas(400,400);
}
function draw () {

fill ('orange');
circle(mouseX, mouseY, 30);

}


//
