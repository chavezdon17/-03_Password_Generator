// Assignment Code
var generateBtn = document.querySelector("#generate");
var choosen_characters = [];
var password_lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var password_uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var password_numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var password_symbols = [
  "!",
  "@",
  "#",
  "$",
  ",%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "+",
  "/",
  "?",
  ".",
  ">",
  "<",
];
// prompt for password,
alert("Please create a password with at least 8 characters.");

function checkPasswordLength() {
  var password = document.getElementById(passwordLength).vaule;
  if (password.length < 8);
  alert("Password must be 8 characters long");
}

// Write password to the #password input

function generatePassword() {
  complexity = prompt("How long do you want your password to be?");

  if (isNaN(complexity) || !(charLength >= 8 && charLength <= 128)) {
    charchecked = false;
    charLength = charLength;
    charchecked = true;
  }
}
var password = prompt("must be 8 characters long.");
var passwordUppercase = confirm("Would you like uppercase letters?");
var passwordNumbers = confirm("Would you like numbers?");
var passwordSymbols = confirm("would you like symbols?");
if (passwordUppercase === true) {
}

var vaules =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()+";
retVal = "";
for (var i = 0; i <= complexity; i++) {
  vaules.charAt(Math.floor(Math.random() * Math.floor(vaules, length - 1)));
}
var passwordText = document.querySelector("#password");
passwordText.value = password;
function passwordLength() {
  //var passwordLength =
  //if (passwordLength >= 8) alert("password is too short");
}

const randomFunction = {
  lower: getRandomlower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbols: getRandomsymbol,
};

// generator functions
function getRandomlower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomsymbol() {
  const symbols = "!@#$%^&*()+/?.><,";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
var passwordFunctionGenerator = [
  getRandomlower,
  getRandomUpper,
  getRandomNumber,
  getRandomsymbol,
];

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
