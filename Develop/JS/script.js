// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate")

var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
"M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
// 32 charaters btw
var characters = ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",",
"-", ".", "/", "\\", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];

function generatePassword() {
  passLength = prompt("Choose a password length between 8 and 128");
  // check to make sure user inputs something
  if (!passLength) {
    alert("this needs a value");
  }
  //checks for correct response
  else if (passLength < 8 || passLength > 128) {
    passLength = prompt("please choose a number between 8 and 128");
  }
  else {
  // gathering more information
    numerics = confirm("do you want numbers in your password?");
    specialCharacters = confirm("do you want special characters in your password?");
    lowercase = confirm("do you want to inlcude lowercase letters?");
    uppercase = confrim("do you want to inclue uppercase letters?");
  } 

  console.log(uppercase, lowercase, specialCharacters, numerics);

}


// "if (upper + lower + numeric + spSymbols === 0) {
//   alert('You must have at least one character type selected for your password!')
// }"



// creating the arrays for the password
var main = []

var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
"M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
// 32 charaters
var characters = ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",",
"-", ".", "/", "\\", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"] 











// passwordLength =Number(length); // this is how you check if pass length is between 8 - 128

// generateBtn.addEventListener('click', promptUser);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
// the listener we want to "listen" to is the generate button or the generate ID in the HTML
generateBtn.addEventListener("click", writePassword);

//listener example 

// prompt example

