
    var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var loses = 0;
var guessesLeft= 10;
var userGuess = "";
var computerGuess = "";
var guessSoFar =[];

document.onkeyup = function(event) {
    guessesLeft--;
   
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);
    
    userGuess = event.key.toLowerCase();

	console.log(userGuess);

	if (userGuess === computerGuess){
        wins++;
		restart();
    } 
	else if (guessesLeft === 0) {
        loses++;
		loses.textcontent = loses;
		restart();
	}
  };
  
