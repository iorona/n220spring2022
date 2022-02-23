let dvBeepBop= document.getElementById("beepbop");
let blankword=[];
for (i=0; i<25; i++){
    blankword[i]=""

    if (i%3==0) {
        blankword[i] ="beep";
    }

    if (i%5==0){
        blankword[i]+="bop";
        
    }

    if (i%3!=0 && i%5!=0) {
        blankword[i]= i;
    }
    console.log(blankword[i]);
}


 
dvBeepBop.innerHTML=blankword