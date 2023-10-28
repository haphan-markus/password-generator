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
    return alert("Your password options are not valid. The password needs to contain either lowercase, uppercase, numeric or special characters");
  } else {return arr}
}

// Function for getting a random element from an array
function getRandom(min,max) {
  return Math.floor(Math.random() * (max-min+1)) + min;
}

//x is the number of characters from user input 
//y is the number of character types, from getPasswordOptions(arr) function
//arr is the array to contain the number of characters for each type
function getRandomNumCharacter(x,y,arr){
  if (y == 1){
    return [arr.push(x)];
  }
  let pikachu = getRandom(1,x);
  // console.log(pikachu);
  return [arr.push(pikachu),
          getRandomNumCharacter((x-pikachu), (y-1), arr),
          ]
} // Is there any chance the returned value will be 0? If this is the case then it needs to be adjusted.

// Random select a character from an array;
// i is the number of characters needed to be selected - the length of the array
// arr is the target array
function getChar(i,arr){
  let counter = 0;
  let stringChar = "";
  while (counter < i) {
    stringChar += arr[getRandom(0,(arr.length-1))];
    counter += 1;
  }
  return stringChar;
}

// Function to generate password with user input - This is the main one.
function generatePassword() {
  //To determine the number of characters in the password
  let num = prompt("How many characters do you want your Password to contain?");
  num = +num;
  console.log("The number of characters in the password: " + num);
  if (num < 8){
    return alert("The number of characters must be more than 8");
  } else if (num > 128){
    return alert("The number of characters must be less than 129");
  }

  //To decide which type of characters will be in the password
  let option = [];
  let quantityType = 0;
  getPasswordOptions(option);
  option.forEach(function(i){
    if (i === true){
      quantityType++};
  })
  console.log("Number of character types in the password: " + quantityType);
  
  //To store random number of characters for each selected character types
  let NumberCharacters = [];
  getRandomNumCharacter(num,quantityType,NumberCharacters);
  NumberCharacters.forEach(function(i){
    if (i <=0){
      NumberCharacters =[];
      getRandomNumCharacter(num,quantityType,NumberCharacters);
    }
  })//Need to iterate until the condition is met. Consider later.
  console.log("The number of characters for choosen types: " + NumberCharacters);
  
  // Match the numner defined in the "NumberCharacters" to the "option"
  let optionPassword = [];
  for (let i = 0; i< option.length; i++){
    if (option[i] == false){
      NumberCharacters.splice(i,0,0);
    }
  }
  // let test=[];
  // option.map(function(i){
  //   if (i == false){
  //     NumberCharacters.splice(i,0,0);
  //   }
  // }) Not sure why this one doesn't work??
  console.log("The number of characters for all character types: " + NumberCharacters);

  // Randomise characters from each types using the input from NumnberCharacters
  let passwordGen = "";
  for (let i = 0; i< NumberCharacters.length; i++){
    passwordGen += getChar(NumberCharacters[i],characterArr[i]);
  }
  console.log(passwordGen); // Array value
  
  // Shuffle your password - use Fisher Yates Method
  let passwordAlter = passwordGen;
  passwordAlter.split;
  // for (let i = passwordAlter.length - 1; i >= 0 ; i--){
  //   const j = getRandom(0,i);
  //   const k = passwordAlter[j];
  //   passwordAlter[j] = passwordAlter[i];
  //   passwordAlter[i] = k;
  // }
  console.log(passwordAlter);
  return passwordAlter;
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