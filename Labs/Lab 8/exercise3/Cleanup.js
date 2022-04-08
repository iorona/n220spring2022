let divClean= document.getElementById("clean");
let divInstance= document.getElementById("instance");


function test(){
    let dirtyversion= divInstance.value
    let cleanversion= ""
    for(i=0; i < dirtyversion.length; i++){
        console.log(dirtyversion[i])
        if (dirtyversion[i] != "#"){
            cleanversion += dirtyversion[i]
    }
}
    
divClean.innerHTML = cleanversion; 
}

