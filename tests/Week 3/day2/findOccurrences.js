/*
* count the occurrences of a specific element in an array using JavaScript
*/

function findOccurrences(numberArray, elementToFind) {
    let numberOfOccurences = 0;

    for (const element of numberArray) {
        if(element == elementToFind) {
            numberOfOccurences++
        }
    }
    return numberOfOccurences;
}

const numArray = [9,9,5,4,9,9];
const findNum = 1;
console.log(`The number of occurrences of ${findNum} is ${findOccurrences(numArray, findNum)}`);