/*Write a JavaScript function that evaluates a student's score and returns their grade using a switch statement
to assess score ranges
*/

//create function to return the grade using switch statement
function returnGradeForScore(score) {
    switch(true) {
        case score >= 80 && score <=100 :
            return 'A';
        case score >= 70 && score < 80 :
            return 'B';
        case score >= 60 && score < 70 :
            return 'C';
        case score >= 40 && score < 60 :
            return 'D';
        case score < 40 && score >= 0  :
            return 'F';    
        default : return `Given score ${score} is Invalid`;    
    }
}

//Declare the input score
const inputScore = 0;
//Print result
const grade = returnGradeForScore(inputScore);
console.log(grade);
