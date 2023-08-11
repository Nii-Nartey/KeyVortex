const upperAlphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerAlphabets = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%%&*';
const allChar = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%%&*';

const passwordMaxLength = 12;
const inputValue = document.getElementById('password');

const button = document.getElementById('newGen');
const cupy = document.getElementById('cupy');

//Get letter from each of the variables by way of indentation and asign it to password variable

function keyVortex() {
  let alphaIndent = Math.floor(Math.random() * upperAlphabets.length);
  let lowAlphaIndent = Math.floor(Math.random() * lowerAlphabets.length);
  let numIndent = Math.floor(Math.random() * numbers.length);
  let symIndent = Math.floor(Math.random() * symbols.length);

  let password = '';

  password += upperAlphabets[alphaIndent];
  password += lowerAlphabets[lowAlphaIndent];
  password += numbers[numIndent];
  password += symbols[symIndent];

  while (passwordMaxLength > password.length) {
    let allCharIndent = Math.floor(Math.random() * allChar.length);
    password += allChar[allCharIndent];
  }
  inputValue.value = password;
}

//function to copy input value
function copyCopy() {
  let copying = inputValue.select();
  document.execCommand('copy');
}

button.addEventListener('click', keyVortex);
cupy.addEventListener('click', copyCopy);
