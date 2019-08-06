
    var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var AlreadyGuessed=[];


    var winsText = document.getElementById("wins");
    var lossesText = document.getElementById("losses");
    var guessesLeft= document.getElementById("GuessesLeft");
    var guessSoFar = document.getElementById("GuessSoFar");
    var userGuess = "";
    var computerGuess = "";
    var numberOfGuesses = 10;
    var winscount = 0;
    var lossescount = 0;
    
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// starts function on key event.
    document.onkeyup = function(event) {
    
        var userGuess = event.key;
        userGuess.toLowerCase();

        // random guess from computer.
    
        console.log(computerGuess);
        console.log(userGuess);
        AlreadyGuessed.push(userGuess);
    
        if (userGuess === computerGuess){
            winscount++;
            winsText.textContent = "wins: " + winscount;
            alert("You're a Winner");
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            numberOfGuesses =10;         
        } 
        else {
            console.log("wrong Answer");
            numberOfGuesses-- ;
            guessesLeft.textContent = "GuessesLeft: " + numberOfGuesses;
            guessSoFar.textContent = "GuessSoFar: " + AlreadyGuessed;
        }

        
        if (numberOfGuesses === 0) {
            lossescount++;
            lossesText.textContent = "Losses: " + lossescount;
            AlreadyGuessed=[];
            console.log("You lose");
            alert("You're a Loser");
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            numberOfGuesses =10;     
         
        }
        };