
//Create a promise
let conditionalPromise = new Promise((resolve, reject) => {
    let randomNumber = Math.random(); //Generates random number
    if(randomNumber > 0.5) {
        resolve('Resolved successfully');
    } else {
        reject('Rejected');
    }
});

//using the promise
conditionalPromise.then((success) => {
    console.log(success); //runs if the promise is resolved
}).catch((error)=> {
    console.error(error); //runs if the promise is rejected
});