// Word array that the computer can choose from
var words = ["austin", "houston", "dallas", "amarillo", 
                "marfa", "brownsville", "lubbock", "midland", 
                "laredo", "terlingua", "odessa", "tyler", 
                "athens", "abilene", "nacogdoches", "texarkana"];

var guesses = [];
var guessesLeft = 6;
var wins = 0;
var losses = 0;
var selectedWord = "";
var hiddenWordArray = [];

// Computer chooses a word from the array at random
function pickSomething(){
    selectedWord = words[Math.floor(Math.random() * words.length)];
    console.log(selectedWord);

    // Replace the letters of the word with "_" and display the result
    for (var i = 0; i < selectedWord.length; i++) {
        hiddenWordArray[i] = "_";
    }
    console.log(hiddenWordArray); //did it make an array with _ for each letter?
    $("#hiddenWord").text(hiddenWordArray.join(" "));
}

// function for updating the displayed scoreboard
function updateScoreboard(){
    $("#guessesLeft").empty();
    $("#guessesLeft").append(guessesLeft); 
}

pickSomething();

document.onkeyup = function(event){
    var userGuess = event.key;

    // check to see if the user has already guessed the letter
    if (guesses.includes(userGuess) == false){
        guesses.push(userGuess);
        console.log(guesses);
        $("#guessed").empty();
        $("#guessed").append(guesses.join(" "));

        // if not, check to see if the guess is correct
        if (selectedWord.includes(userGuess) == true){
            console.log("yep, that letter is in there");
            // iterate through the word and replace the underscores with the letter in the matching spot
            for (var j = 0; j < selectedWord.length; j++){
                if (userGuess === selectedWord[j]){
                    console.log("matching the correct letter to the correct space in " + hiddenWord);
                    var hiddenWordString = hiddenWordArray.join(" ");
                    var hiddenWordDisplay = hiddenWordString.replace(hiddenWordString[j], userGuess);
                    console.log(hiddenWordDisplay);
                    $("#hiddenWord").empty();
                    $("#hiddenWord").append(hiddenWordDisplay);
                }
            }
        } else {
            // if not, -1 from guesses left
            guessesLeft--;
            updateScoreboard(); 
        }

        if (guessesLeft === 0){
            losses++;
            guesses = [];
            guessesLeft = 6;
            updateScoreboard();
            pickSomething();
        }

    }
    // if guessesLeft > 0, add a loss and restart the game
    // if answers no longer contains _, add a win and restart the game
            
    
};



