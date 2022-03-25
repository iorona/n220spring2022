let ipfirst= document.getElementById("first")
let ipsecond= document.getElementById("second")
let divoutcome= document.getElementById("outcome")
function login(){
    if ((ipfirst.value == "Username") && (ipsecond.value == "Password")){
      divoutcome.innerHTML = "Success"  
    }else{
        divoutcome.innerHTML= "Wrong Information"
    }
}