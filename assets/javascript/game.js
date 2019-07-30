// Word array that the computer can choose from
var words = ["austin", "houston", "dallas", "amarillo", 
                "marfa", "brownsville", "lubbock", "midland", 
                "laredo", "terlingua", "odessa", "tyler", 
                "athens", "abilene", "nacogdoches", "texarkana"];

// Computer chooses a word from the array at random
var selected = words[Math.floor(Math.random() * words.length)];
console.log(selected); // what did the computer pick

// Replace the letters of the word with "_" and display the result
var answers = [];
for (var i = 0; i < selected.length; i++) {
    answers[i] = "_";
}
console.log(answers); //did it make an array with _ for each letter?
$("#hiddenWord").text(answers.join(" "));


var lettersLeft = selected.length;

// while (lettersLeft > 0) {

//     var currentWord = document.getElementById("currentWord");
//     currentWord.data = answers;
// }

document.onkeyup = function(event){
    var userGuess = event.key;
    console.log(userGuess);
};