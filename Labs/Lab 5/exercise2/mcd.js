let dvSquare= document.getElementById("square");

dvSquare.innerHTML = "mc";

dvSquare.style.backgroundColor= "#ebcf34";
dvSquare.style.width = "100px";
dvSquare.style.height = "100px";

function textappear(){
    let text = Math.random()
    let newtext = "divdivdiv"
    if (text > 3) newtext = "mc"

    dvSquare.innerHTML = newtext;
}

