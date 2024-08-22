/* 
*Write a function to sum all the values between 1 and n, and return the sum
*/

function findSumBetweenOneAndN(n){
    let sum = 0;
    for (let index = 1; index <= n; index++) {
        let prevSum = sum;
        sum += index;
        console.log(` ${index} + ${prevSum} = ${sum} `);        
    }
    
    return sum;
}

let inputNumber = 5;
console.log(`sum of all numbers between 1 and ${inputNumber} is : ${findSumBetweenOneAndN(inputNumber)}`)