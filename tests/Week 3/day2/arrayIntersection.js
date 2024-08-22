/*
*    Create a JavaScript program that defines a function to compute the  
*    intersection of two arrays. The intersection should include elements *    that appear in both arrays without any duplicates.
*/


function intersection(arrayOne, arrayTwo) {

    let interSectionArray = [];
    for (let i = 0; i < arrayOne.length; i++) {
        for (let j = 0; j < arrayTwo.length; j++) {
            //checks whether element in arrayOne is in arrayTwo
            //Also skips adding the common element if it's already present
            if(arrayOne[i] == arrayTwo[j] && !interSectionArray.includes(arrayOne[i])) { 

                interSectionArray.push(arrayOne[i]);
            } 
        }
    }
    return interSectionArray;

}

const caseOne = [1, 2, 3, 5, 9,5];
const caseTwo = [1, 3, 5, 8];
const caseThree = [3, 3, 3, 3, 3];
const caseFour = [3, 3, 3, 3];
const interSectionResults = intersection(caseOne, caseTwo);
if(interSectionResults.length > 0) {
    console.log(`The common element(s) in the given array is : ${interSectionResults}`);
} else{
    console.log(`There are no common elements in the given arrays`);
}
