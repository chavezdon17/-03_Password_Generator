// Assignment Code
var generateBtn = document.querySelector("#generate");

// prompt for password
function passwordLength() {
  var passwordLength = prompt("Password must be a minmium of 8 characters ");
  if (passwordLength >= 8) alert("password is too short");
}
// Write password to the #password input
function generatePassword() {
  var ;
  var length = 8;
  var vaules ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()+";
  retVal = "";
  for (var i = 0; i <= complexity; i++) {
    vaules.charAt(Math.floor(Math.random() * Math.floor(vaules, length - 1)));
  }
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// generator functions 
function getRandomlower(){
  return String.fromCharCode(math.floor(Math.random() * 26) + 97);
}

fuction getRandomUpper(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
fuction getRandomnumber(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
fuction getRandomsymbol(){
  const symbols = "!@#$%^&*()+/?.><,"; 
  return symbols[Math.floor(Math.random() *symbols.length)];
}
// array
//var password_characters["letters"
//"numbers"
//"characters"
//];

//var password = "";

var complexity = 12;

// loop for password

function generatePassword() {}

// add password to display area
//document.generatePassword("card-body").vaule = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
