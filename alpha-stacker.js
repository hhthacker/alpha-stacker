// Create an array that contains the letters of the alphabet
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var letterStack= "";
// The stackLetter function should accept the array as the sole argument
function stackLetters (theAlphabetArray) {
	for (var i = 0; i < alphabet.length; i++) {
		letterStack += alphabet[i];
		console.log(letterStack);
		}
	}


    /*
      Write a `for` loop that iterates over the array argument and
      outputs the letters.
     */

// Invoke the function and pass in the array
stackLetters(alphabet)

//if statement to add space after every 3rd letter
