//1) Counter
//Create an application that outputs a number to the console every draw call of P5. 

let plants = 0; //start at zero

function draw(){
    plants = plants + 1; //increase by one every frame
    console.log(plants);
}
