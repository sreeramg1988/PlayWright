//Create an enum named `Environment` with four values representing different stages of a software DEVELOPMENT process: `LOCAL`, `DEVELOPMENT`, `STAGING`, `PRODUCTION`.

enum Environment {
    'LOCAL',
    'DEVELOPMENT',
    'STAGING',
    'PRODUCTION'
}

//Write a function named `runTests` that accepts an argument of type `Environment`. The function should print a message indicating the environment against which the tests are running.
function runTests(environment:Environment):void { 
    switch (environment) {
        case Environment.LOCAL:
            console.log('Ran on LOCAL environment');
            break;
        case Environment.DEVELOPMENT:
        console.log('Ran on Dev environment');
        break;
        case Environment.STAGING:
        console.log('Ran on STAGING environment');
        break;
        case Environment.PRODUCTION:
        console.log('Ran on Prod environment');
        break;
}
}
//call the function
runTests(Environment.PRODUCTION);
runTests(Environment.STAGING);
runTests(Environment.DEVELOPMENT);
runTests(Environment.LOCAL);