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
function getPasswordOptions(arr) {
  var f1 = confirm("Click Confirm to include special characters");
  arr.push(f1);
  var f2 = confirm("Click Confirm to include numeric characters");
  arr.push(f2);
  var f3 = confirm("Click Confirm to include lowercase characters");
  arr.push(f3);
  var f4 = confirm("Click Confirm to include uppercase characters");
  arr.push(f4);
  console.log("Confirm option for the password: Special characters: " + f1 + ", Numeric: " + f2 + ", Lowercase: " + f3 + ", and Uppercase characters: " + f4 + ".");
  if (f1 == false && f2 == false && f3 == false && f4 == false){
    alert("Your password options are not valid. The password needs to contain either lowercase, uppercase, numeric or special characters");
    return;
  } else {return arr}
}

// Function for getting a random element from an array
function getRandom(min,max) {
  return Math.floor(Math.random() * (max-min+1)) + min;
}

//x is the number of characters user want to input, equal to "num" value
//y is the number of character types, equal to "quantity" value
//arr is the array to contain the number of characters for each type
function getRandomNumCharacter(x,y,arr){
  if (y == 1){
    return [arr.push(x)];
  };
  var pikachu = getRandom(1,x);
  // console.log(pikachu);
  return [arr.push(pikachu),
          getRandomNumCharacter((x-pikachu), (y-1), arr),
          ]
} // Is there any chance the returned value will be 0? If this is the case then it needs to be adjusted.

// Random select a character from an array;
// i is the number of characters needed to be selected
// arr is the target array
function getChar(i,arr){
  let counter = 0;
  let arrayChar = "";
  while (counter < i) {
    arrayChar += arr.charAt(getRandom(0,arr.length));
    i +=1;
  }
  return arrayChar;
}

// Function to generate password with user input - This is the main one.
function generatePassword() {
  //To determine the number of characters in the password
  var num = prompt("How many characters do you want your Password to contain?");
  num = +num;
  console.log("The number of characters in the password: " + num);
  if (num < 8){
    alert("The number of characters must be more than 8");
    return;
  } else if (num > 128){
    alert("The number of characters must be less than 129");
    return;
  }

  //To decide which type of characters will be in the password
  var option = [];
  var quantity = 0;
  getPasswordOptions(option);
  option.forEach(function(i){
    if (i === true){
      quantity++};
  })
  console.log("The number of types of characters in the password: " + quantity);
  
  //To store random number of characters for each selected character types
  var NumberCharacters = [];
  getRandomNumCharacter(num,quantity,NumberCharacters);
  NumberCharacters.forEach(function(i){
    if (i <=0){
      NumberCharacters =[];
      getRandomNumCharacter(num,quantity,NumberCharacters);
    }
  })
  console.log("The number of characters for choosen types: " + NumberCharacters);
  
  // Match the numner defined in the "NumberCharacters" to the "option"
  var optionPassword = [];
  option.forEach(function(i){
    if (i == false){
      NumberCharacters.splice(i,0,0);
    }
  })
  console.log("The number of characters for all character types: " + NumberCharacters);

  // Randomise characters from each types using the input from NumnberCharacters
  var passwordGen = "";
  
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
