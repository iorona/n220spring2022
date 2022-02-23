let dvSquare= document.getElementById("square");

dvSquare.style.backgroundColor= "#0000FF";
dvSquare.style.width = "100px";
dvSquare.style.height = "100px";


if (dvSquare.onmouseover){ 
    dvSquare.style.backgroundColor= "#0000FF";
}else{
    if (dvSquare.onmouseout)
    dvSquare.style.backgroundColor= "#000000";
    

}

