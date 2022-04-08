let divDivide= document.getElementById("divide");
let divTelluser= document.getElementById("telluser");


function update(){
   if (divDivide.value %7 == true){
    divTelluser.innerHTML = "True"
}else{
    divTelluser.innerHTML = "False"
}
}
