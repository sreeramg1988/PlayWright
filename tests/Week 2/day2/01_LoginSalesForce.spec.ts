import { chromium, test } from "@playwright/test";

test(`Login to SalesForce application`, async() => {
    const browser = await chromium.launch({headless : false});
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();

    page.setDefaultTimeout(3000);

    //navigate to salesforce 
    await page.goto("https://login.salesforce.com/", {timeout : 3000});
    //enter username
    await page.locator("#username").fill('emailAddress');
    //enter password
    await page.locator("#password").fill('Password');
    //click on Login button
    await page.locator("#Login").click();

    //wait for 10s
    await page.waitForTimeout(10000);
    //print the page title
    console.log(`The title of the page is ${await page.title()}`);
    //print the current URL 
    console.log(`The URL of the page is ${page.url()}`);

    //close page, context and the browser
    await page.close();
    await browserContext.close();
    await browser.close();



});