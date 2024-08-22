/*
*  compute the factorial of a non-negative integer using iterative methods.
*/

import { error } from "console";


const factorial = (n:number): number => {
    let fact : number = 1;
   
    if(n < 0) { // Throw error for negative input
        throw new Error('Please provide a non-negative input')      
    } else if (n == 0){ // return 1 if input is 0
        return 1;
    } else { //Calculate factorial if non-negative input is provided
        for(let i:number = 2; i <= n; i++) {
            fact = fact * i;
        }
        console.log(`The factorial of the provided input is ${fact}`);
        return fact;
    }
    
}

let inputLimit:number = -1;

try {
    console.log(factorial(inputLimit));
} catch (error) {
    console.error(error.message);
}


