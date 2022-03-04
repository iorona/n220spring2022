/*
Make an application with six divs on the screen, each with a different word.

When any of the divs is clicked,

highlight that that div by changing its background color and making the text bold
remove the bold/background highlight from any other divs
add the clicked div's text into a seperate div at the top of the screen
*/
let oldname=""
let dvOne= document.getElementById("one");
let dvTwo= document.getElementById("two");
let dvThree= document.getElementById("three");
let dvFour= document.getElementById("four");
let dvFive= document.getElementById("five");
let dvSix= document.getElementById("six");
let dvSeven= document.getElementById("seven");
function clickDiv(n){
    if (oldname!=""){
        oldname.style.backgroundColor="lightgreen";
        oldname.style.fontWeight="normal";
    }
    oldname=n
    n.style.backgroundColor="green";
    n.style.fontWeight= "bold";
    dvSeven.innerHTML=n.innerHTML;

}

