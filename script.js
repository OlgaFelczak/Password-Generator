// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
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

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
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

// Function to prompt user for password options
function getPasswordOptions() {
  let passwordOptions = {
    length: 0,
    characters: [],
  };

  let length = prompt(
    "How many characters would you like your password to contain?"
  );
  if (!length || isNaN(length) || length < 10 || length > 64) {
    alert("Length is invalid, it should be a number, between 10 and 64.");
    throw new Error("Length is invalid");
  }
  passwordOptions.length = length;

  let atLeastOneOptionChosen = false;
  if (confirm("Click OK to confirm including special characters.")) {
    passwordOptions.characters.push(...specialCharacters);
    atLeastOneOptionChosen = true;
  }
  if (confirm("Click OK to confirm including numeric characters.")) {
    passwordOptions.characters.push(...numericCharacters);
    atLeastOneOptionChosen = true;
  }
  if (confirm("Click OK to confirm including lowercase characters.")) {
    passwordOptions.characters.push(...lowerCasedCharacters);
    atLeastOneOptionChosen = true;
  }
  if (confirm("Click OK to confirm including uppercase characters.")) {
    passwordOptions.characters.push(...upperCasedCharacters);
    atLeastOneOptionChosen = true;
  }

  if (!atLeastOneOptionChosen) {
    alert("You need to choose at least one type of characters.");
    throw new Error("Character options are invalid");
  }

  return passwordOptions;
}

// Function for getting a random element from an array
function getRandom(arr) {
  let randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber];
}

// Function to generate password with user input
function generatePassword() {
  let passwordOptions = getPasswordOptions();

  let password = "";
  for (let i = 0; i < passwordOptions.length; i++) {
    password += getRandom(passwordOptions.characters);
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordInput = document.querySelector("#password");

  passwordInput.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
