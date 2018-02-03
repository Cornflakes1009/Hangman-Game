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

// function to check the number of indexes in the randomWordSelector and 
document.onkeydown = function () {


}
// loop through the array and set an underscore and space for every index of the array
for (var i = 0; i < randomWordSelector.length; i++) {
    blanksArr.push("_ ");
}
console.log(blanksArr);
console.log(randomWordSelector);

// sets the blank spaces on the page - .join removes the commas
blanks.innerHTML = blanksArr.join(" ");

// function that runs on press and release of key
document.onkeydown = function(event) {
    // creating a variable and assigning it the value of the pressed key
    var keyPressed = event.key;
    // checking if the lettersGuessed array has anything in it and then checking if the key pressed is a-z
    if ((lettersGuessed.length === 0) && (event.keyCode >= 65 && event.keyCode <= 90)) {
        // pushing the key pressed because it's the first key and it has to be a-z
        lettersGuessed.push(keyPressed);
        console.log(lettersGuessed);
        console.log("first breakpoint");
        // checking if the key pressed is in the lettersGuessed array and adding if not
        for(var i = 0; i < randomWordSelector.length; i++) {
            if(lettersGuessed.indexOf(keyPressed) === -1) {
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

document.onkeyup = function(event) {
    var keyPressed = event.key;
    for(var i = 0; i < randomWordSelector.length; i++) {
        if (keyPressed === randomWordSelector[i]){
            blanksArr.splice(i, 1, keyPressed);
            // blanksArr[i] = randomWordSelector[i];
            console.log(blanksArr);
           document.querySelector("#blanks").innerHTML = event.key;
        }
    }
}
////// - copied over from the character-pressed.html
// document.onkeyup = function (event) {
//     // takes the key typed and changes the html to show what key was typed
//     alreadyGuessed.textContent = event.key;
    
//     // checks the key typed that it is a-z at the lowercase value
//     if ((event.key.toLowerCase() === "a") || (event.key.toLowerCase() === "b") || (event.key.toLowerCase() === "c") || (event.key.toLowerCase() === "d") || (event.key.toLowerCase() === "e") || (event.key.toLowerCase() === "f") || (event.key.toLowerCase() === "g") || (event.key.toLowerCase() === "h") || (event.key.toLowerCase() === "i") || (event.key.toLowerCase() === "a") || (event.key.toLowerCase() === "j") || (event.key.toLowerCase() === "k") || (event.key.toLowerCase() === "l") || (event.key.toLowerCase() === "m") || (event.key.toLowerCase() === "n") || (event.key.toLowerCase() === "o") || (event.key.toLowerCase() === "p") || (event.key.toLowerCase() === "q") || (event.key.toLowerCase() === "r") || (event.key.toLowerCase() === "s") || (event.key.toLowerCase() === "t") || (event.key.toLowerCase() === "u") || (event.key === "v") || (event.key.toLowerCase() === "w") || (event.key.toLowerCase() === "x") || (event.key.toLowerCase() === "y") || (event.key.toLowerCase() === "z")) {
//         if(lettersGuessed.length = 0) {
//             lettersGuessed.push("H");
//         } 
    
//         //     for (var i = 0; i < lettersAlreadyGuessed.length; i++) {
//     //         if (event.key !== lettersAlreadyGuessed[i]) {
//     //            var add = lettersAlreadyGuessed.push(event.key);
//     //         } 
//     //     }
//     // } else if (((event.key.toLowerCase() === "a") || (event.key.toLowerCase() === "b") || (event.key.toLowerCase() === "c") || (event.key.toLowerCase() === "d") || (event.key.toLowerCase() === "e") || (event.key.toLowerCase() === "f") || (event.key.toLowerCase() === "g") || (event.key.toLowerCase() === "h") || (event.key.toLowerCase() === "i") || (event.key.toLowerCase() === "a") || (event.key.toLowerCase() === "j") || (event.key.toLowerCase() === "k") || (event.key.toLowerCase() === "l") || (event.key.toLowerCase() === "m") || (event.key.toLowerCase() === "n") || (event.key.toLowerCase() === "o") || (event.key.toLowerCase() === "p") || (event.key.toLowerCase() === "q") || (event.key.toLowerCase() === "r") || (event.key.toLowerCase() === "s") || (event.key.toLowerCase() === "t") || (event.key.toLowerCase() === "u") || (event.key === "v") || (event.key.toLowerCase() === "w") || (event.key.toLowerCase() === "x") || (event.key.toLowerCase() === "y") || (event.key.toLowerCase() === "z")) && (lettersAlreadyGuessed.length = 0)) {
//     //     var add = lettersAlreadyGuessed.push(event.key);
//     // }
//     // // logs the keys previously typed to the console in an array
//     // console.log(lettersAlreadyGuessed);

//     // for (var i = 0; i < lettersAlreadyGuessed.length; i++) {
//     //     if (event.key !== lettersAlreadyGuessed[i]) {
//     //         // changes the html to show what keys were already typed
//     //         alreadyGuessed.textContent = lettersAlreadyGuessed;
//     //     }
//     }
//     console.log(event.key);
//     console.log(lettersGuessed);
// };
// console.log(lettersGuessed.length);