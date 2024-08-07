/*
* Write a JavaScript function named `printOddNumbers` that 
* prints odd numbers between 1 and 25
*/


//using while Loop 
function printOddNumbers(lowerRange, upperRange) {
    console.log('Printing odd numbers using for while until given range')    
    while (lowerRange<= upperRange) {
        if ((lowerRange % 2) != 0) {
            console.log(lowerRange);
        }    
        lowerRange++;
    }
}

//using for loop
function printOddNumbersUsingForLoop(lowerRange,upperRange) {
    console.log('Printing odd numbers using for loop until given range')
    for(let i = lowerRange ; i <= upperRange; i++) {
        if((lowerRange%2) != 0) {
            console.log(lowerRange);
        }
    }
}

//using do..while Loop
function printOddNumbersUsingDoWhile(lowerRange,upperRange) {
    console.log('Printing odd numbers using do..while loop until given range')
    do {
        if(lowerRange%2 != 0) {
            console.log(lowerRange);
        }
        lowerRange++;
    } while(lowerRange <= upperRange);
}

//declare lowerRange and upper Range
let lowerRange = 1;
let upperRange = 25;

//call the functions
printOddNumbers(1,25);
printOddNumbersUsingForLoop(1,25);
printOddNumbersUsingDoWhile(1,25);