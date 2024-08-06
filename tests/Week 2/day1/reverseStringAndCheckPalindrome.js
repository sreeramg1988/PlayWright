

/*
* Function to reverse a string
* Accepts a valid String as an input
* returns the reverse of a given string
*/
function reverseTheString(inputString) {
    let reverseString = '';
    const charArray = inputString.split('');

    for(let i = inputString.length -1 ; i >= 0 ; i--) {
        reverseString += charArray[i];
    }

    return reverseString;
}

/*
* Function to check whether a string is palindrome using strict equality check
* returns true if input and reverse are the same
* returns false if input != reverse
*/

function isPalindrome(input,reverse) {
    if(input === reverse) {
        return true;
    } else {
        return false;
    }
}
//Declare the user input
let inputStr = 'malayalam';
//Call the reverse function
const reversedString = reverseTheString(inputStr);
//print the Reversed String
console.log(`The reversed String is ${reversedString}`); 

//Declare success and failure messages for palindrome check
const palindromeSuccessMessage = `The string ${inputStr} is a palindrome`;
const palindromeFailureMessage = `The string ${inputStr} is not a palindrome`;

//Check whether the String is Palindrome or not using ternary operator
let palindromeCheckResult = isPalindrome(inputStr, reversedString) ? palindromeSuccessMessage: palindromeFailureMessage;
console.log(palindromeCheckResult);
