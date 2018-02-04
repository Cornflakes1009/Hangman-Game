////////--------------------------JavaScript--------------------------/////////

// array to pick words from
var wordsArray = ["china", "canada", "germany", "india", "mexico"];

// array to hold the blank spaces that display on the screen - indexes to be replaced by the correct letters guessed
var blanksArr = [];

// id for for setting the blanks on the div in the html
var blanks = document.getElementById("blanks");

// array to hold the letters already guessed (including the ones correctly guessed) - better if sorted
var lettersGuessed = [];

// picks a random item from the wordsArray
var randomWordSelector = wordsArray[Math.floor(Math.random() * wordsArray.length)];

// displays the keys already typed on the screen
var alreadyGuessed = document.getElementById("alreadyGuessed");

// variable to track wins
var wins = 0;

// tracks the number of letter guesses left
var guessesRemaining = 5;

var numGuessesRemaining = document.getElementById("numGuessesRemaining");

// tracks the number of characters left in the word
var lettersToGuessRemaining = randomWordSelector.length;

var correctlyGuessedLetters = 0;

var mexicoAnthem = new Audio("assets/audio/mexico-anthem.mp3");
var chineseAnthem = new Audio("assets/audio/chinese-anthem.mp3");
var germanyAnthem = new Audio("assets/audio/germany-anthem.mp3");
var indiaAnthem = new Audio("assets/audio/india-anthem.mp3");
var canadaAnthem = new Audio("assets/audio/canada-anthem.mp3");
// loop through the array and set an underscore and space for every index of the array
function dashSetter() {
    document.querySelector("#blanks").innerHTML = "";
    document.querySelector("#alreadyGuessed").innerHTML = "";
    document.querySelector("#numGuessesRemaining").innerHTML = guessesRemaining;
    blanksArr = [];
    lettersGuessed = [];
    // guessesRemaining = 5;
    for (var i = 0; i < randomWordSelector.length; i++) {
        blanksArr.push("_ ");
        // sets the blank spaces on the page - .join removes the commas
        blanks.innerHTML = blanksArr.join(" "); // removed from 49
    }
};
dashSetter();
console.log(blanksArr);
console.log(randomWordSelector);
document.querySelector("#score").innerHTML = wins;
document.querySelector("#numGuessesRemaining").innerHTML = guessesRemaining;


// function that runs on press and release of key
document.onkeyup = function (event) {
    // displays the letters previously guessed to the screen (sorted without commas)
    document.querySelector("#alreadyGuessed").innerHTML = lettersGuessed.sort().join(" ");
    // displays the guesses remaining on the screen
    document.querySelector("#numGuessesRemaining").innerHTML = guessesRemaining;
    // creating a variable and assigning it the value of the pressed key
    var keyPressed = event.key;
    // checking if the lettersGuessed array has anything in it and then checking if the key pressed is a-z
    if ((lettersGuessed.length === 0) && (event.keyCode >= 65 && event.keyCode <= 90)) {
        // pushing the key pressed because it's the first key and it has to be a-z
        lettersGuessed.push(keyPressed);
        console.log(lettersGuessed);
        console.log("first breakpoint");
        // checking if the key pressed is in the lettersGuessed array and adding if not
        for (var i = 0; i < randomWordSelector.length; i++) {
            if (lettersGuessed.indexOf(keyPressed) === -1) {
                lettersGuessed.push(keyPressed);
            }
        }

    } else if ((event.keyCode >= 65 && event.keyCode <= 90) && (lettersGuessed.indexOf(keyPressed) === -1)) {
        lettersGuessed.push(keyPressed);
        console.log(lettersGuessed);
        console.log("second breakpoint");
    }
}
console.log(lettersGuessed);

document.onkeypress = function (event) {
    // sets the guesses remaining on the screen
    document.querySelector("#numGuessesRemaining").innerHTML = guessesRemaining;
    // displays the letters previously guessed to the screen (sorted without commas)
    document.querySelector("#alreadyGuessed").innerHTML = lettersGuessed.sort().join(" ");
    // sets a temporary value for the key pressed
    var keyPressed = event.key;
    // checks if the key pressed is in the random word
    if (randomWordSelector.indexOf(keyPressed) === -1) {
        // decreases the guesses if the letter isn't in random word
        guessesRemaining--;
    }
    // loops through the the randomly selected word to see if any of the indexes match the key pressed
    for (var i = 0; i < randomWordSelector.length; i++) {
        // checks the key against the indexes
        if (keyPressed === randomWordSelector[i]) {
            // replaces the index in the blanks array with the key that was typed in
            blanksArr.splice(i, 1, keyPressed);
            // sets the HTML to show the correctly typed letters in the blanks
            document.querySelector("#blanks").innerHTML = blanksArr.join(" ");
        }
    }
    // checks if there are any guesses left
    if (guessesRemaining <= 0) {
        // had dashSetter() here - moved down due to unexpected behavior
        // alerts that the player is all out of guesses
        alert("Sorry, you're all out of guesses. The word was " + randomWordSelector.toUpperCase() + " Please play again for your chance to win a trip.");
        guessesRemaining = 10;
        randomWordSelector = wordsArray[Math.floor(Math.random() * wordsArray.length)];
        console.log(randomWordSelector);
        dashSetter();
        // checks if the guesses remaining is greater than 0
    } else if (guessesRemaining > 0) {
        if (blanksArr.indexOf("_ ") === -1) {
            if(randomWordSelector === "mexico") {
                mexicoAnthem.play();
            } else if (randomWordSelector === "china") {
                chineseAnthem.play();
            } else if (randomWordSelector === "germany") {
                germanyAnthem.play();
            } else if (randomWordSelector === "india") {
                indiaAnthem.play();
            } else {
                canadaAnthem.play();
            }
            // alerts the player that they won
            alert("You won! You're going to " + randomWordSelector.toUpperCase() + "! Congratulations! Please stay on the line so we can get your info.");
            // increments the win counter by 1
            wins++;
            document.querySelector("#score").innerHTML = wins;
            document.querySelector("#numGuessesRemaining").innerHTML = guessesRemaining;
            dashSetter();
        }



    }
}

