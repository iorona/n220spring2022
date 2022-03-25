divinput= document.getElementById("calculate")

function payment(){
    let total= divinput.value 
    console.log("Tip: $" + total * .2 + " Total: $" + total * 1.2)
}