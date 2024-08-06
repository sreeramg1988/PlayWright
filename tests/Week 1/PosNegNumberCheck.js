/* Create a JavaScript function that determines if a number is positive, negative, or zero and returns a
corresponding string indicating the type.*/

//Declare variable and assign the value
let inputNumber = -12 ;

//create the function

function checkPosNegZero(inputNum) {
    if (inputNum > 0) {
        return `${inputNum} is a positive number`;
    } else if (inputNum < 0) {
        return `${inputNum} is a Negative number`;
    } else if (inputNum == 0) {
        return `${inputNum} is Zero`;
    } else {
        return `${inputNum} is Invalid`;
    }
}

//calling function using function expression
const result = checkPosNegZero(inputNumber);

//Print result in the console
console.log(result);
