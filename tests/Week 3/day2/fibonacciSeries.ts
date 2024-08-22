/*
*  Compute the Fibonacci sequence using TypeScript
*/

function fibonacci(limit:number):number[] {
    let seriesIndexOne:number = 0;
    let seriesIndexTwo:number = 1;
    let seriesNextVal:number;
    let seriesArray:number[] = [];
    seriesArray.push(seriesIndexOne, seriesIndexTwo);
    //Index of the loop starts from 2 as first 2 indexes are already declared
    for(let i:number = 2; i < limit; i++){
        seriesNextVal = seriesIndexOne + seriesIndexTwo;
        seriesArray.push(seriesNextVal); //push the new value to array
        seriesIndexOne = seriesIndexTwo; //replace index1 by new value
        seriesIndexTwo = seriesNextVal; //replace index2 by new value
    }

    return seriesArray;
}

let inputNum:number = 10;
console.log(`The fibonacci series upto the given number ${inputNum} is ${fibonacci(inputNum)}`);