
function setup() {
    createCanvas(800,600);

//Move that composition code into a new function .

}

function draw(){
    //Draw 3+ of your compositions in different spaces on the screen
    for (var x=50; x<width+50; x+=250) {
    drawCar(x,150);  
    }
}
//Add two arguments to the function (x and y)
function drawCar(x,y) {
//draw car
    fill("blue");
    rect(x,y,310,150);// body
    fill(20, 20, 19);
    ellipse(x*7,y*2,50,50);//front wheel
    fill(20, 20, 19);
    ellipse(x,y*2,50,50);//back wheel
    fill(232, 231, 223);
    rect(x+180, y+30, 130, 50);
}


