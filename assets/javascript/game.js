// Word array that the computer can choose from
var words = ["austin", "houston", "dallas", "amarillo", 
                "marfa", "brownsville", "lubbock", "midland", 
                "laredo", "terlingua", "odessa", "tyler", 
                "athens", "abilene", "nacogdoches", "texarkana"];

var guesses = [];
var guessesLeft = 6;
var wins = 0;
var losses = 0;
var computerWord = "";

// Computer chooses a word from the array at random
function pickSomething(){
    var selected = words[Math.floor(Math.random() * words.length)];
    console.log(selected); // what did the computer pick  

    // Replace the letters of the word with "_" and display the result
    var answers = [];
    for (var i = 0; i < selected.length; i++) {
        answers[i] = "_";
    }
    console.log(answers); //did it make an array with _ for each letter?
    $("#hiddenWord").text(answers.join(" "));
}

// function updateScoreboard(){
//     $("#guessesLeft").empty();
//     $("#guessesLeft").append(guessesLeft);
//     console.log("scoreboard updated");
// }

pickSomething();

document.onkeyup = function(event){
    var userGuess = event.key;
    console.log(userGuess);

    // check to see if the user has already guessed the letter
    if (guesses.includes(userGuess) == false){
        console.log("you haven't guessed that before");
        guesses.push(userGuess);
        console.log(guesses);
        $("#guessed").empty();
        $("#guessed").append(guesses);
    }
        // if not, check to see if the guess is correct

            // if so, replace the corresponding _ with the letter, add it to guesses array

            // if not, add it to guesses array and -1 from guesses left
    
};

