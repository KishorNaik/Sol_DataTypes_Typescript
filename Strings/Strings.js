var firstName = "Kishor";
var lastName = "Naik";
console.log(firstName);
console.log(lastName);
// String Interpolation
var fullName = "firstName : " + firstName + " lastName : " + lastName;
console.log(fullName);
// Concatc Method
fullName = firstName.concat(" ", lastName);
console.log(fullName);
// indexOf
var index = fullName.indexOf("Kishor");
console.log(index);
// Replace
var replaceWord = "I hate javascript";
console.log(replaceWord);
replaceWord = replaceWord.replace("hate", "love");
console.log(replaceWord);
// Split
var splitWord = "Apple, Banana, Orange";
var splitWordArray = splitWord.split(",");
for (var _i = 0, splitWordArray_1 = splitWordArray; _i < splitWordArray_1.length; _i++) {
    var word = splitWordArray_1[_i];
    console.log(word);
}
// toUpperCase
var lowerCaseWord = "kishor";
var upperCaseWord = lowerCaseWord.toUpperCase();
console.log(upperCaseWord);
// toLowerCase
lowerCaseWord = lowerCaseWord.toLowerCase();
console.log(lowerCaseWord);
// trim
fullName = "         kishor naik          ";
console.log(fullName.trim());
// substring
var str = "Apples are round, and apples are juicy.";
var commaIndex = str.indexOf(",");
console.log(commaIndex);
var result = str.substring(commaIndex + 2, str.length);
console.log(result);
