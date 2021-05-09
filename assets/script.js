// Password Generator
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  // This points to the #password in HTML and CSS
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  // This prompts the user to enter a password length
  var passLength = prompt("Enter a password length between 8 and 128 characters.");

  var lengthConfirm = parseInt(passLength);

  //This forces the user to choose an integer between 8 and 128 characters only
  if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    alert("ERROR: Please enter a number between 8 and 128 only!");
    return;
  }

  // Creating arrays
  var nextGeneration = [];
  var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz".split("");
  var numberChar = "0123456789".split("");
  var specialChar = "!@#$%^&*<>?{}".split("");

  // Lowercase prompt
  var lowerCaseConfirm = confirm("If you want lowercase letters in your password click OK, otherwise click CANCEL to ignore.");
  if (lowerCaseConfirm === true) {
    for (var i = 0; i < lowerCaseChar.length; i++) {
      nextGeneration.push(lowerCaseChar[i]);
    }
  }

  // Uppercase prompt
  var upperCaseConfirm = confirm("If you want uppercase letters in your password click OK, otherwise click CANCEL to ignore.");
  if (upperCaseConfirm === true) {
    for (var i = 0; i < upperCaseChar.length; i++) {
      nextGeneration.push(upperCaseChar[i]);
    }
  }

  // Number prompt
  var numberConfirm = confirm("If you want numbers in your password click OK, otherwise click CANCEL to ignore.");
  if (numberConfirm === true) {
    for (var i = 0; i < numberChar.length; i++) {
      nextGeneration.push(numberChar[i]);
    }
  }

  // Special character prompt
  var specialConfirm = confirm("If you want special characters in your password click OK, otherwise click CANCEL to ignore.");
  if (specialConfirm === true) {
    for (var i = 0; i < specialChar.length; i++) {
      nextGeneration.push(specialChar[i]);
    }
  }

  //Creating the password using the results (nextGeneration) from above
  var randomPassword = "";
  for (var i = 0; i < lengthConfirm; i++) {
    nextGeneration[
      Math.floor(Math.random() * nextGeneration.length)];
    randomPassword +=
      nextGeneration[
        Math.floor(Math.random() * nextGeneration.length)
      ];
  }
  return randomPassword;
}

generateBtn.addEventListener("click", writePassword);