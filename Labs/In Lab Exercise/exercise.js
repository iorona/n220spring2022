// Exericse 1
//Create an application that writes the string "Hello world" to the screen at location 50, 50 in the setup function.
/*
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
*/
// In class notes 2/1/2022: Concept of Objects
/*
let ballX=10;
let ballY=10;
let ballColor="#990000";

let objBall= {
    x: 10,
    y: 10,
    ballColor= "#990000",
    size: 25

};
function setup() {
    createCanvas(652,399);

    fill(objBall, ballColor);
    circle(objBall.x, objBall.y, )

}
*/
/*
------------------------------------
let current = { x: 0, y: 0 };

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
  if(mouseIsPressed) {
    current.x = mouseX;
    current.y = mouseY;
  }
---------------------------------------------------------
let click = distance( current, { x: mouseX, y: mouseY });

   
  if(click > 120) {
    stroke("#FF0000");
  } else if {
    stroke("#000000");
  }
  
  line(aou.x, aou.y, mouseX, mouseY);
}

function distance(p1, p2) {
  
  let dx = p1.x - p2.x;
  let dy = p1.y - p2.y;
  
  //return the distance
   Math.sqrt(dx*dx + dy*dy);
}
*/
/*
----------------------------------------------------
let TV= {x: 300, y: 100, width: 100, height: 100,};
function setup(){
  createCanvas(800,600);
  background(0);
}

function draw(){
  fill('145, 159, 161')
  rect(TV.x, TV.y, TV.width, TV.height); //TV body
  fill('black')
  rect(TV.x + 3 , TV.y + 3, TV.width, TV.height)//TV Screen
  stroke('208, 218, 219')
  line(TV.x/2, TV.y/2, TV.x, TV.y)// antenna line
  
}


function drawTV(TV){
  fill('145, 159, 161')
  rect(TV.x, TV.y, TV.width, TV.height); //TV body
  fill('black')
  rect(TV.x + 3 , TV.y + 3, TV.width, TV.height)//TV Screen
  stroke('208, 218, 219')
  line(TV.x/2, TV.y/2, TV.x, TV.y)// antenna line

}
*/
//Write a loop that prints to the console the numbers 1 to 10, counting forward
/*
-----------------------------------------------------
let a=0;
while (a < 11)
{
  console.log(a);
  a++;
}
//Write a loop that prints to the console the numbers 10 to 1, counting backwards
for (var b=10; b>0; b--) {
  console.log(b)
}

//Given the array: 
/*
let words = [ "Indiana", "University", "Purdue", "University", "Indianapolis" ]
let sentence= ["Indiana! Yeah! University! Yeah! Purdue! Yeah! Indianapolis! Yeah!"]
// write a loop that generates the string

c=0;
console.log(words);
while (c>5){
  //Log the string out to the consol
  console.log(sentence);
}
*/
/*
//Given the array: 
let words = [ "Indiana", "University", "Purdue", "University", "Indianapolis" ]
//Write a loop that capitalizes the words in the array using the 
d=0;
console.log(words);
while (d<5){
  words[d]=words.toUpperCase
  d++;
} 
//Log the modified array out to the console.
*/
/*
let myArray = ["Hello","Class"];
let arrayLength = myArray.length;
for (let i = 0; i < arrayLength; i++) {
    console.log(myArray[i]);
}
*/
/*
let txtName = document.getElementById("txtName");

let dvStoryResult = document.getElementById("storyResult");

function generateStory() {
  let userName= txtName.value;
  //txtAmount = document.getElementbyId ("txtAmount")
  let val = `${userName} ${userName} ${userName}`;
  dvStoryResult.innerHTML = val;

  txtName.value="";

}
*/

let divTictactoe = document.getElementById("tictactoe")

let tttgrid= [
  ['x','o','x'],
  ['o','x','o'],
  ['x','o','o']

];


console.log(tttgrid);



