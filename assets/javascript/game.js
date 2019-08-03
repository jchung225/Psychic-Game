
    var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var winsText = document.getElementById("wins");
    var lossesText = document.getElementById("losses");
    var guessesLeft= document.getElementById("GuessesLeft");
    var guessSoFar = document.getElementById("GuessSoFar");
    var userGuess = "";
    var computerGuess = "";
    var winscount = 0;
    var lossescount = 0;
    var alreadyGuessed = [];


    
// starts function on key event.
    document.onkeyup = function(event) {
        guessesLeft--;
       
        var userGuess = event.key;
        userGuess.toLowerCase();
         console.log(guessSoFar);

        // random guess from computer.
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess);
        
    
        console.log(userGuess);
    
        if (userGuess === computerGuess){
            console.log("you win");
            alert("You're a Winner");
            winsText++;
        } 
        else {
            console.log("wrong Answer");
        }
        
        
        if (guessesLeft === 0) {
            console.log("You lose");
            alert("You're a Loser");
            lossesText++;
        }
      };