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

var characterArr = [specialCharacters,numericCharacters,lowerCasedCharacters,upperCasedCharacters];

// Function to prompt user for password options
function getPasswordOptions(arr) {
  var x1 = confirm("Click Confirm to include special characters");
  arr.push(x1);
  var x2 = confirm("Click Confirm to include numeric characters");
  arr.push(x2);
  var x3 = confirm("Click Confirm to include lowercase characters");
  arr.push(x3);
  var x4 = confirm("Click Confirm to include uppercase characters");
  arr.push(x4);
  console.log("Confirm option for the password: Special characters: " + x1 + ", Numeric: " + x2 + ", Lowercase: " + x3 + ", and Uppercase characters: " + x4 + ".");
  if (x1 == false && x2 == false && x3 == false && x4 == false){
    return [alert("Your password options are not valid. The password needs to contain either lowercase, uppercase, numeric or special characters"),
            arr.length = 0];
  } else {return arr}
}

// Function for getting a random element from an array
function getRandom(min,max) {
  return Math.floor(Math.random() * (max-min+1)) + min;
}

// Function to generate random integer numbers to a fixed sum; x is the total number of characters from user input 
// y is the number of character types; "arr" array contains the number of characters for each type
function getRandomNumCharacter(x,y,arr){
  if (y == 1){
    return [arr.push(x)];
  }
  let pikachu = getRandom(1,x);
  return [arr.push(pikachu),
          getRandomNumCharacter((x-pikachu), (y-1), arr),
          ]
}

// Function to check all numbers from an array. Return an empty array if there is any value from array is <= 0.
function checkNum(arr){
  for (let i = 0; i < arr.length; i++){
    if (arr[i] < 0 || arr[i] == 0) {
      return [arr.length = 0]
    }  
  }
  return arr = arr;
}

// Function to randomly select a number of characters from an array;
// i is the number of characters needed to be selected - the length of the array; arr is the target array
function getChar(i,arr){
  let counter = 0;
  let stringChar = "";
  while (counter < i) {
    stringChar += arr[getRandom(0,(arr.length-1))];
    counter += 1;
  }
  return stringChar;
}

// Function to generate password with user input - This is the main function.
function generatePassword() {
  //To determine the number of characters in the password
  let num = prompt("How many characters do you want your Password to contain?");
  num = +num;
  console.log("The number of characters in the password: " + num);
  if (Number.isNaN(num) == true){
    return [alert("This is not a valid number.")]
  }
  if (num < 8){
    return alert("The number of characters must be more than 7");
  } else if (num > 128){
    return alert("The number of characters must be less than 129");
  }

  //To decide which type of characters will be in the password
  let option = [];
  let quantityType = 0;
  getPasswordOptions(option);
  if (option.length == 0) {
    return [console.log("The password generator will stop."),
            alert("The password generator will stop.")
            ]
  }
  option.forEach(function(i){
    if (i === true){
      quantityType++};
  })
  console.log("Number of character types in the password: " + quantityType);
  
  //To store random number of characters for each selected character types
  let NumberCharacters = [];
  while (NumberCharacters.length == 0) {
    getRandomNumCharacter(num,quantityType,NumberCharacters);
    console.log("Array: " + NumberCharacters);
    checkNum(NumberCharacters);
  }
  console.log("Number of characters for true types: " + NumberCharacters);
  
  // To match the numner defined in the "NumberCharacters" to the "option"
  for (let i = 0; i< option.length; i++){
    if (option[i] == false){
      NumberCharacters.splice(i,0,0);
    }
  }
  console.log("Number of characters for all character types: " + NumberCharacters);

  // To randomise characters from each types using the input from NumnberCharacters
  let passwordGen = "";
  for (let i = 0; i< NumberCharacters.length; i++){
    passwordGen += getChar(NumberCharacters[i],characterArr[i]);
  }
  console.log(passwordGen); // String value
  
  // To shuffle password - Fisher Yates Method
  let passwordAlter = passwordGen.split(""); // To split each character into an element in array
  for (let i = passwordAlter.length - 1; i >= 0 ; i--){
    const j = getRandom(0,i);
    const k = passwordAlter[j];
    passwordAlter[j] = passwordAlter[i];
    passwordAlter[i] = k;
  }
  console.log(passwordAlter);
  passwordGen = passwordAlter.join("");// To join all elements in array into a string without commas
  console.log(passwordGen);
  return passwordGen;
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