// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate")

function generatePassword() {
  var passwordLength = prompt("Choose password length between 8 and 128");
  var uppercase = confirm("do you want uppercase letters in your password?");
  var lowercase = confirm("do you want lowercase letters?");
  var numerics = confirm("Do you want numbers in your password?")
  var specialCharacters = confirm("do you want special characters in your password?")
  var passwordResult = '';

  console.log(passwordLength, uppercase, lowercase, numerics, specialCharacters, passwordResult);
}


// passwordLength =Number(length); // this is how you check if pass length is between 8 - 128

// generateBtn.addEventListener('click', promptUser);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = passwordLength;
  var password =""
  for (var i = 0; i <= passwordLength; i++) {
    
  }

  passwordText.value = password;

}

// Add event listener to generate button
// the listener we want to "listen" to is the generate button or the generate ID in the HTML
generateBtn.addEventListener("click", writePassword);

//listener example 

// prompt example

