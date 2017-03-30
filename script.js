//Step 1 TASK: create a variable called secretWord and set it to null
var secretWord = null
// When this function is called the game is staged to be played.
function prepareGame() {
// defines the secret word
  secretWord = ['J','A','V','A','S','C','R', 'I', 'P', 'T'];

// Step 1 TASK: call the drawWord and drawHangman function here (inside the prepareGame function).   
drawWord();
drawHangman();
}

// This function draws the correct amount of underscores under hangman depending on the length of the word.
function drawWord() {
}

// This function draws the hangman images depending on the number of wrong guesses there are.
function drawHangman() {
}

$(document).ready(function() {
// Step 1 TASK: call the prepare game function and print the secret word to the console. Then run this program.
prepareGame()
console.log(secretWord);
});
