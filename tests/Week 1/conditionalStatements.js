/*
Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser launch messages, and
`runTests` with `switch` for test type messages.
*/


//Create function launchBrowser

function launchBrowser(browserName) {
    if (browserName == 'chrome') {
        console.log (`${browserName} is selected for running the tests`);
    } else {
        console.log (`${browserName} is selected for running the tests`);
    }
}

//create function runTests

function runTests(testType) {
    switch(testType) {
        case 'smoke' :
             console.log ('Smoke Test');
             break;
        case 'sanity':
             console.log ('Sanity Test');
             break;
        case 'regression':
             console.log ('Regression Test');
             break;
        default :
         console.log ('Smoke Test');
    }
}

//call functions
launchBrowser('Edge');
runTests('regression');