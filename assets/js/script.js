// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var upperCaseLetters = lowerCaseLetters.map(function(letters) {
    return letters.toUpperCase();
    }
  )
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
  var emptySpace = [];
  
  // Length and Validation of Password
  var passwordLength = prompt("How many characters do you want in your password? Choose between 8 and 128 characters");
  if (passwordLength < 8 || passwordLength > 128) {
    return "ERROR: PLEASE CHOOSE A NUMBER BETWEEN 8 AND 128 CHARACTERS"
  } else if(isNaN(passwordLength)) {
    return "ERROR: HAS TO BE A NUMBER VALUE BETWEEN 8 AND 128"
  }

  
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
