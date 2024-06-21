const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let newStr = str.slice(0, 3);

//Use a template literal to print the original and modified string in a descriptive phrase.

console.log(`We changed ${str} to ${str.slice(3,str.length).concat(newStr)}`);


//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

let userInput = Number(input.question("How many letters will move from the beginning of the string to the end ? "));


//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

if (userInput < str.length){
    let newStr2 = str.slice(0, userInput);
    console.log(`We changed ${str} to ${str.slice(userInput, str.length).concat(newStr2)}`);
} else if (userInput == str.length) {
    console.log("Sorry, that is the length of the string, try a new number")
} else {
    let newStr2 = str.slice(0, 3);
    console.log(`You entered ${userInput} which is longer than the length of ${str} so it defaulted to move three characters here: ${str.slice(3,str.length).concat(newStr2)}`);
}