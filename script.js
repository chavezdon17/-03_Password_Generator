// Assignment Code
var complexity = 0;
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

// Write password to the #password input

function generatePassword() {
  complexity = 0;
  while (isNaN(complexity) || !(complexity >= 8 && complexity <= 128)) {
    complexity = prompt(
      "How long do you want your password to be? Must be between 8-124."
    );
  }

  var passwordUppercase = confirm("Would you like uppercase letters?");
  var passwordLowercase = confirm("Would you like lowercase letters?");
  var passwordNumbers = confirm("Would you like numbers?");
  var passwordSymbols = confirm("would you like symbols?");

  if (passwordUppercase) {
    choosen_characters.push(...password_uppercase);
  }
  if (passwordLowercase) {
    choosen_characters.push(...password_lowercase);
  }
  if (passwordNumbers) {
    choosen_characters.push(...password_numbers);
  }
  if (passwordSymbols) {
    choosen_characters.push(...password_symbols);
  }

  retVal = "";
  for (var i = 0; i <= complexity; i++) {
    retVal +=
      choosen_characters[Math.floor(Math.random() * choosen_characters.length)];
  }
  var passwordText = document.querySelector("#password");
  passwordText.value = retVal;
  console.log(retVal);
}

generateBtn.addEventListener("click", generatePassword);
