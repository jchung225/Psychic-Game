
    var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var loses = 0;
var guessesLeft = 9;
var GuessSoFar = "";
var userGuess ="";

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

document.onkeyup = function(event) {
	guessesLeft--;

	var userGuess = computerChoices(event.keyCode).toLowerCase();

	if (userGuess === computerGuess){
		wins++;
		document.write("#wins");
		restart();
	} 
	else if (guessesLeft === 0) {
		losses++;
		document.write("#loses");
		restart();
	}
  };
