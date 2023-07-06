var wins = 0;
var losse = 0;
var ties = 0;


var choices = ["R", "P" ,"S"]
//human choice- get choice from usefr input
var humanChoice = prompt("Choose R, P or S")




//computer choice
var randomNum = Math.floor(Math.random() *3)
var computerChoice = choices[randomNum]

console.log("Humancho :" + humanChoice)
console.log("Computer :" + computerChoice)

if ( 
    humanChoice === "S" && computerChoice === "P" ||
    humanChoice === "R" && computerChoice === "S" ||
    humanChoice === "P" && computerChoice === "R"
    // if human is s and computer p or
// if human is r and computer s or
//if human is p and computer r
//win 

) {
    //alert we win
    alert("You won!")
    //increase win

} else if (
    humanChoice===computerChoice
    //if computerchoice===human
) {
    alert("Round tied!")
 //alert ties
//ties
//increase tise
} else {
//else
//alert loss
alert("You lost!")
//lost
//increase loses
}













// alert,  confirm,  prompt
//algorith

//pseudo-code

//human player 

//computer player

//player chosie

//computer randomly 

//win lose

//compare


//ask user douwanna paly again
//if yes restart game
//else
//exit game
