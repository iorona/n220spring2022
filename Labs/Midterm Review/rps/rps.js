/*
Make a game of rock-paper-scissors using DIVs as the buttons to select one of four options: rock, paper, scissors, and guard.

Add a space for a score display on the screen. Start the score at zero. (this will be tied to an application/global variable)

When any of the divs are clicked, run the logic for this game -

Generate a random move for the computer (rock/paper/scissors)
If the play chose guard
Skip the RPS logic, and subtract half a point from their score
Otherwise, run the RPS logic
Check to see if the player won against the computer
If so, add one to their score
Check if the player lost
If so subtract one from score
Check for tie
If so, do nothing to score
Once the logic is complete,
show the results of the round: You chose X, computer chose Y. 
update the score
*/

let dvRock= document.getElementById("rock")
let dvPaper= document.getElementById("paper")
let dvScissors= document.getElementById("scissors")
let dvGuard= document.getElementById("guard")
let dvScore=document.getElementById("score")
let dvDisplay= document.getElementById("display")
let score=0
let outcome = ""
game=["rock", "paper", "scissors", "guard"]
function clickDiv(user){
    if (user != 4 ){
       let cpu= Math.ceil(Math.random()*3);
        if (cpu==user){ 
            let outcome = "Tied"
        }else if (user==1 && cpu==3){
            outcome == "user wins"
            score+=1;
        }else if(cpu==1 && user==3){
            outcome == "cpu wins"
            score-=1;
        }else if (user<cpu){
            outcome == "cpu wins"
            score-=1;
        }else if (user>cpu){
            outcome == "user wins"
            score+=1;
        }
        dvDisplay.innerHTML = "You chose " + game[user-1] + " Computer chose " + game[cpu-1];
    }else{
        score-= .5;
        dvDisplay.innerHTML;
    }

    dvScore.innerHTML = score;

}
