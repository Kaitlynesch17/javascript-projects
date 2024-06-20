//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'

console.log(language.slice(0,1)+language.slice(4,5));
//2. Without using slice(), use method chaining to accomplish the same thing.
initials = language.charAt(0)+language.charAt(4);
//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
console.log(`The abbreviation for '${language}' is '${initials}'.`)
//4. Just for fun, try chaining 3 or more methods together, and then print the result.
let languageTwo = language.toUpperCase().slice(0,6).replace("v", "l");
console.log(languageTwo);
//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
notTitleCase = notTitleCase.replace("t", "T");
notTitleCase = notTitleCase.replace("c", "C");
console.log(notTitleCase);