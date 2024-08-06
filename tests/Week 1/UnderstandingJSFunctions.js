/* practice function declarations, arrow functions, anonymous
functions, and callback functions in JavaScript. */

//Task 1: Function Declaration
function userProfile(name) {
    console.log(`Hello ${name}`);
}
// call userProfile function
userProfile('John');

//Task 2: Arrow Function
//declaring the arrow function to double the input number
 const double = (number) =>  {console.log(number * 2)}; 
 double(5); // call the function


 //Task 3: Anonymous Function
 
 //Method 1 - using arrow Function
 const anonymousFunctionArrow = setTimeout(()=> {
    console.log('Inside arrow function. This message is delayed by 2 Seconds')
}, 2000);

//Method 2 - using Function()

const anonymousFunction = setTimeout(function() {
    console.log('This message is delayed by 2 Seconds.')
}, 2000);



//Task 4: Callback Function

//Declare Main function
function getUserData(callback) {
    //Simulate userObj creation inside setTimeout
    setTimeout(()=> console.log("UserObject"), 3000); 
    callback();
}

//Declare Call back function
function displayUserData(userData) {
    console.log(`Name is John`)
    console.log(`Age is 26`)
}

/*Call the `getUserData` function and
 log the user's name and age using the callback function.
*/
getUserData(displayUserData);