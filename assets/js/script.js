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
  
  // Length and Validation of Password
  var passwordLength = prompt("How many characters do you want in your password? Choose between 8 and 128 characters");
  if (passwordLength < 8 || passwordLength > 128) {
    return "ERROR: PLEASE CHOOSE A NUMBER BETWEEN 8 AND 128 CHARACTERS"
  } else if(isNaN(passwordLength)) {
    return "ERROR: HAS TO BE A NUMBER VALUE BETWEEN 8 AND 128"
  }

  //Asks User If They Want Something in Their Password
  var wantsLowerCaseLetters = confirm("Would you like lower case letters in your password?");
  var wantsUpperCaseLetters = confirm("Would you like upper case letters in your password?");
  var wantsNumbers = confirm("Would you like numbers in your password?");
  var wantsSpecialCharacters = confirm("Would you like special characters in your password?");
  
  // Add Selected Charcters to Possible Password Generation
  var possibleCharactersPool = [];
  if (wantsLowerCaseLetters){
    possibleCharactersPool.push(lowerCaseLetters);
  }
  if (wantsUpperCaseLetters){
    possibleCharactersPool.push(upperCaseLetters);
  }
  if (wantsNumbers){
    possibleCharactersPool.push(numbers);
  }
  if (wantsSpecialCharacters){
    possibleCharactersPool.push(specialCharacters);
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
