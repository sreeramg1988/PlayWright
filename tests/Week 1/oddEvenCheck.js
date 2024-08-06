
// declare variable
let inputNumber = 25;

//Function to check whether the input number is odd or even
function oddEven(inputNum) {
    if (inputNum % 2 == 0) {
        console.log(`${inputNum} is an even number`)
    } else {
        console.log(`${inputNum} is an odd number`)
    }
}

//Calling the function
oddEven(inputNumber);