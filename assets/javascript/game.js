$(document).ready(function(){


    var wins= 0;
    var loses = 0;
    var guessesLeft =0;
    var userGuess= event.key;
    var computerGuess;

    alreadyGuessed.push(userGuess);
    console.log(alreadyGuessed);
    

    s


    var computerGuess = wins[Math.floor(Math.random()* wins.length)];

    if (userGuess === computerGuess) {
        wins++;
        
        guessesLeft= 10;
    }
    



});