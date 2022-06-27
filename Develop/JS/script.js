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
var choices
//in the else if statements 

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
    uppercase = confirm("do you want to inclue uppercase letters?");
  } 







  // console.log(uppercase, lowercase, specialCharacters, numerics);
  // checking to ensure that atleast one of the confirms was chosen
  if (!numerics && !specialCharacters && !lowercase && !uppercase) {
    choices = alert("please select one of the options");
  }
  // if they answer yes to all the confirms 
  else if (numerics && specialCharacters && lowercase && uppercase) {
    choices = characters.concat(numbers, upper, lower);
  }
 
  // 3 choices

  else if (numerics && specialCharacters && lowercase) { 
    choices = characters.concat(numbers, lower);
  }
  else if ( numerics && specialCharacters && uppercase) {
    choices = characters.concat(numbers, upper);
  }
  else if ( numerics && uppercase && lowercase) {
    choices = numbers.concat(upper, lower);
  }
  else if (specialCharacters && uppercase && lowercase) { 
    choices = characters.concat(upper, lower);
  }


  // 2 choices 

  else if ( specialCharacters && lowercase) {
    choices = characters.concat(lower);
  }
  else if ( specialCharacters && uppercase) {
    choices = characters.concat(upper);
  }
  else if (specialCharacters && numerics){
    choices = characters.concat(numbers);
  }
  else if (lowercase && uppercase) {
    choices = lower.concat(upper);
  }
  else if (lowercase && numerics){
    choices = lower.concat(numbers);
  }
  else if (uppercase && numerics) {
    choices = upper.concat(numbers);
  }


  // 1 choice 

  else if (numerics) {
    choices = numbers;
  }
  else if ( uppercase){
    choices = upper;
  }
  else if (lowercase) {
    choices = lower;
  }
  else if (specialCharacters) {
    choices = characters;
  }
  console.log(choices);
} 


// "if (upper + lower + numeric + spSymbols === 0) {
//   alert('You must have at least one character type selected for your password!')
// }"











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

