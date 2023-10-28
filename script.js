// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


// Function to prompt user for password options
function getPasswordOptions() {
  var f1 = confirm("Click Confirm to include special characters");
  console.log(f1);
  var f2 = confirm("Click Confirm to include numeric characters");
  console.log(f2);
  var f3 = confirm("Click Confirm to include lowercased characters");
  console.log(f3);
  var f4 = confirm("Click Confirm to include uppercased characters");
  console.log(f4);
  if (f1 == false && f2 == false && f3 == false && f4 == false){
    alert("Your password options are not valid. The password needs to contain either lowercase, uppercase, numeric or special characters");
    return;
  }
  return [
    passwordOption = [f1,f2,f3,f4],
    console.log(passwordOption),
  ]
}

// Function for getting a random element from an array
function getRandom(min,max) {
  Math.floor(Math.random() * (max-min+1)) + min;
}

// Function to generate password with user input - This is the main one.
function generatePassword() {
  var num = prompt("How many characters do you want your Password to contain?");
  if (num < 8){
    alert("The number of characters must be more than 8");
    return;
  } else if (num > 128){
    alert("The number of characters must be less than 129");
    return;
  }
  getPasswordOptions();
  var quantity = 0;
  passwordOption.forEach(function(i){
    if (i == true){
      quantity++};
  })
  console.log(quantity);
  getRandomNumCharacter(num,quantity);
  console.log(passwordNumCharacter);
}

//x is the number of characters user want to input, equal to "num" value
//y is the number of character types, equal to "quantity" value
//z is the array contain the types of character from user input, equal to "passwordOption" array
function getRandomNumCharacter(x,y){
  if (y == 1){
    return [passwordNumCharacter.push(x)];
  };

  var pikachu = getRandom(1,x);
  return [passwordNumCharacter.push(pikachu),
          y = y-1,
          getRandomNumCharacter(x-pikachu,y),
          ]
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
