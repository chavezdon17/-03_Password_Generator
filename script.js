// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// array 
var password_characters["letters"
"numbers"
"characters"
];

// possible vaules
var vaules =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()+";

//var password = "";

var complexity = 12;

// loop for password

function generatePassword() {
  for (var i = 0; i <= complexity; i++) {
    password =
      password +
      vaules.charAt(Math.floor(Math.random() * Math.floor(vaules, length - 1)));
  }
}

// add password to display area
//document.generatePassword("card-body").vaule = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
