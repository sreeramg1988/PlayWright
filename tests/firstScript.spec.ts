import {chromium, test} from '@playwright/test'

test(`Launch Browser`, async () => {
    //Create browser instance
  const browser =  await chromium.launch({headless:false}); //, channel : "chrome"

  //create browser context
  const browserContext = await browser.newContext();


  //create page
  const page = await browserContext.newPage();

  // launch URL
 await page.goto("https://google.ca", {timeout : 3000});

  //get title
//   const title = await page.title();
//   console.log(`Title of the page is ${title}`);
  console.log(`Page title is ${await page.title()} `);

   //wait for 5s
 await page.waitForTimeout(7000);

  //close the page
  page.close();
  //close the context
  browserContext.close();
  //close the browser
  browser.close();

})


test.only(`Test to launch the browser`, async () => {


    //Create a browser instance
    const browser = await chromium.launch({headless: false}); //, channel: "chrome"
    
    
    //Create the browser context
    const browserContext = await browser.newContext();
    
    
    //Create a new page
    const page = await browserContext.newPage();
    
    
    //Load the url
    await page.goto("http://leaftaps.com/opentaps/control/main");
    
    
    //Get the url of the page
    const url = page.url();
    console.log(`The url of the page is ${url}`);
    
    
    //Get the title of the page
    const title = await page.title();
    console.log(`The title of the page is ${title}`);
    
    //console.log(`The title of the page is ${await page.title()}`);
    
    await page.waitForTimeout(5000);
    
    
    //Gracefully clearing the resources
    //Close the page
    await page.close();
    
    
    //Close the browser context 
    await browserContext.close();
    
    
    //Close the browser
    await browser.close();
    
    
    })
    