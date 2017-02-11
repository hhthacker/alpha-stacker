// Create an array that contains the letters of the alphabet
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var letterStack= "";
var letterSpace = "";

// The stackLetter function should accept the array as the sole argument
// Write a `for` loop that iterates over the array argument and outputs the letters.

function stackLetters (theAlphabetArray) {
	for (var i = 0; i < alphabet.length; i++) {
		letterStack += alphabet[i];
		console.log(letterStack);
		}
	}

//if statement to add space after every 3rd letter
function stackSpaceLetters (theAlphabetArray) {
	for (var i = 0; i < alphabet.length; i++) {
	if (i%3 === 0) {
		letterSpace += " ";
	}
		letterSpace += alphabet[i];
		console.log(letterSpace);
	}
}

// Invoke the functions and pass in the array
stackLetters(alphabet);
stackSpaceLetters(alphabet);