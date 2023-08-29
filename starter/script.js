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
  let length = parseInt(
    prompt("How many characters do you want your password to comprise?")
  )


  if (isNaN(length) === true) {
    alert('it is mandotry you provide a pasword length')
    return;
  }

  if (length < 8) {
    alert('password is too short! password must length must be at least 8 characters');
    return;
  }

  if (length >= 55) {
    alert('password is too long! password length must not be more than 55 characters');
    return;
  }

  let hasNumericCharacters = confirm(
    "Click OK to confirm including number characters"
  )

  let hasSpecialCharacters = confirm(
    "Click OK to confirm including special characters"
  )
  let hasLowerCaseCharacters = confirm(
    "Click OK to confirm lowercase characters"
  )

  let hasUpperCaseCharacters = confirm(
    "Click OK to confirm uppercase characters"
  )

  if (hasNumericCharacters === false && hasSpecialCharacters === false && hasLowerCaseCharacters === false && hasUpperCaseCharacters === false) {
    alert('You must select at least one character type');
    return;
  }

  let getPasswordOptions = {
    length: length,
    hasNumericCharacters: hasNumericCharacters,
    hasSpecialCharacters: hasSpecialCharacters,
    hasLowerCaseCharacters: hasLowerCaseCharacters,
    hasUpperCaseCharacters: hasUpperCaseCharacters,

  }

  console.log(getPasswordOptions);

  return getPasswordOptions;

}

// Function for getting a random element from an array
function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length)
  let randomElement = arr[randomIndex];

  return randomElement;
}

// Function to generate password with user input
function generatePassword() {
  let options = getPasswordOptions();
  console.log(options);
  let result = []


  let possibleCharacter = []

  let guaranteedCharacter = []

  if (options.hasSpecialCharacters) {
    possibleCharacter = possibleCharacter.concat(specialCharacters);
    guaranteedCharacter.push(getRandom(specialCharacters))
  }

  if (options.hasNumericCharacters) {
    possibleCharacter = possibleCharacter.concat(numericCharacters);
    guaranteedCharacter.push(getRandom(numericCharacters))
  }

  if (options.hasLowerCaseCharacters) {
    possibleCharacter = possibleCharacter.concat(lowerCasedCharacters);
    guaranteedCharacter.push(getRandom(lowerCasedCharacters))
  }

  if (options.hasUpperCaseCharacters) {
    possibleCharacter = possibleCharacter.concat(upperCasedCharacters);
    guaranteedCharacter.push(getRandom(upperCasedCharacters))
  }

  console.log(possibleCharacter);

  for (let i = 0; i < options.length; i++) {
    var generated = getRandom(possibleCharacter);
    console.log(generated);
    result.push(generated);
  }

  for (let i = 0; i < guaranteedCharacter.length; i++) {
    result[i] = guaranteedCharacter[i]
  }
  console.log(result);

  return result.join("")
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