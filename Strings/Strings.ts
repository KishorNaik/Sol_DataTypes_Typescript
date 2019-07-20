let firstName: string = "Kishor";
let lastName: string = "Naik";

console.log(firstName);
console.log(lastName);

// String Interpolation
let fullName: string = `firstName : ${firstName} lastName : ${lastName}`;
console.log(fullName);

// Concatc Method
fullName = firstName.concat(" ", lastName);
console.log(fullName);

// indexOf
let index: number = fullName.indexOf("Kishor");
console.log(index);

// Replace
let replaceWord = "I hate javascript";
console.log(replaceWord);

replaceWord = replaceWord.replace("hate", "love");
console.log(replaceWord);

// Split
let splitWord: string = "Apple, Banana, Orange";
let splitWordArray: string[] = splitWord.split(",");

for (let word of splitWordArray) {
  console.log(word);
}

// toUpperCase
let lowerCaseWord: string = "kishor";
let upperCaseWord: string = lowerCaseWord.toUpperCase();
console.log(upperCaseWord);

// toLowerCase
lowerCaseWord = lowerCaseWord.toLowerCase();
console.log(lowerCaseWord);

// trim
fullName = "         kishor naik          ";
console.log(fullName.trim());

// substring
var str = "Apples are round, and apples are juicy.";
let commaIndex = str.indexOf(",");
console.log(commaIndex);
let result = str.substring(commaIndex + 2, str.length);
console.log(result);
