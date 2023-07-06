var wins = 0;
var losses = 0;
var ties = 0;
var choices = ["R", "P", "S"]
var keepPlaying = true
while (keepPlaying) {
    var humanChoice = prompt("Choose R, P or S")
    if (humanChoice) {
        humanChoice = humanChoice.toUpperCase()
        if (!choices.includes(humanChoice)) {
            alert("You must choose R, P or S")
            continuer
        }
        var randomNum = Math.floor(Math.random() * 3)
        var computerChoice = choices[randomNum]
        console.log("Humancho :" + humanChoice)
        console.log("Computer :" + computerChoice)
        if (
            humanChoice === "S" && computerChoice === "P" ||
            humanChoice === "R" && computerChoice === "S" ||
            humanChoice === "P" && computerChoice === "R"
        ) {
            alert("You won!")
            wins++
        } else if (
            humanChoice === computerChoice
        ) {
            alert("Round tied!")
            ties++
        } else {
            alert("You lost!")
            losses++
        }
        alert("wins: " + wins + "\nLosses: " + losses + "\nTies: " + ties)
        keepPlaying = confirm("Do you want to play again?")
    }
}
alert("Seeya. Play again soon!")