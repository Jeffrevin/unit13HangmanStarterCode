//Step 1 TASK: create a variable called secretWord and set it to null
var secretWord = null;
var correctGuesses = [];
var wrongGuesses = [];
// When this function is called the game is staged to be played.
function prepareGame() {
// defines the secret word
  secretWord = ['J','A','V','A','S','C','R','I','P','T'];
// Step 1 TASK: call the drawWord and drawHangman function here (inside the prepareGame function).   
drawWord();
drawHangman();
}
// This function draws the correct amount of underscores under hangman depending on the length of the word.
function drawWord() {
    $("#word").empty();
    
    secretWord.forEach(function() {
        $("#word").append("_");
    });
}
// This function draws the hangman images depending on the number of wrong guesses there are.
function drawHangman() {
  
}
$(document).ready(function() {
// Step 1 TASK: call the prepare game function and print the secret word to the console. Then run this program.
  prepareGame();
  console.log(secretWord);
  console.log("hello");
  function onKeyPress(event) {
    var x = event.key;
    var y = x.toUpperCase();
    
    var correct;
    secretWord.forEach(function(letter, index) {
      if(y === secretWord[index]) {
        //alert("That is the correct letter");
      } else {
        //alert("That is the wrong letter");
      }
    });
    if(correct) {
      correctGuesses.push(y);
    } else {
      wrongGuesses.push(y);
    }
    console.log(event);
  }
  $("body").keypress(onKeyPress);
  console.log(correctGuesses);
});