/*
* Given a string s consisting of words and spaces, 
* return the length of the last word in the string
*/

/*******************************Case 1*******************************/
/*
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5. 
*/
let inputString = 'Hello World';


function findLastAndPrintLengthUsingSplit(inputText){
    //split the words to array
    let splitWordArray = inputText.split(' '); 
    //get the lastWord from the array 
    let lastWord = splitWordArray[splitWordArray.length-1]; 
    //get the length of last word
    let textLength = lastWord.length;
    //print the output
    console.log(`The last word is ${lastWord} and the length is ${textLength}`);
}

findLastAndPrintLengthUsingSplit(inputString);


/*******************************Case 2*******************************/
/*
Input: s = " fly me to the moon "
Output: 4
Explanation: The last word is "moon" with length 4. 
*/

let inputText = " fly me to the moon ";

function findLastAndPrintLengthAfterTrim(input) {
    //trim and split the given text
    let trimSplitText = input.trim().split(' ');
    //get the last element
    let lastWordText = trimSplitText[trimSplitText.length-1]
    //Print the output
    console.log(`The last word in the given text is ${lastWordText} and the length is ${lastWordText.length} `);
}

findLastAndPrintLengthAfterTrim(inputText);


/*******************************Case 2*******************************/
/*
Write a function to check if two strings are anagrams.
Input: isAnagram('listen', 'silent')
Output: true
Input: isAnagram('hello', 'world')
Output: false
Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters. 
*/


function isAnagram(str1, str2) {
    //convert the given text to lowercase after removing spaces
    let text1 = str1.trim().toLowerCase();
    let text2 = str2.trim().toLowerCase();
    
    //sort and compare whether the given strings are anagrams
    if(text1.split('').sort().join('') === text2.split('').sort().join('')){
        console.log(`The ${str1} and ${str2} are anagrams`);
        return true;
    } else {
        console.log(`The ${str1} and ${str2} are not anagrams`);
        return false;
    }
}

//check Print the result
console.log(isAnagram('Listen','silent'));
console.log(isAnagram('hello','world'));
