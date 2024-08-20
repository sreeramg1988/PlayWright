import { test, expect } from "@playwright/test";

const pageUrl = 'https://login.salesforce.com/';
const userName = 'sgkautomation+test1@gmail.com';
const userPassword = 'Pass@123';
const pageTitle = 'Home | Salesforce';
const pageURL = 'https://testleaf-d6-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home';

test('Test to Create a new account', async({page})=> {
    page.setDefaultTimeout(6000);
    //Launch app
    await page.goto(pageUrl);
    //Enter credentials
    await page.locator('#username').fill(userName);
    await page.locator('#password').fill(userPassword);
    //Click on Login
    await page.locator('#Login').click();

    //wait for page load
    await page.waitForTimeout(8000);
    await page.waitForLoadState('domcontentloaded', {timeout : 5000});

    //Verify the URL 
    expect(page.url()).toBe(pageURL);
   
    //Wait for page load
    await page.waitForTimeout(3000);
   
    //Verify the title 
    expect(await page.title()).toBe(pageTitle);
   
    //Click App Launcher using the class locator
    await page.locator('.slds-icon-waffle').click();

    //Click View All using getByText
    await page.getByText('View All').click();
    
    //Enter ‘Service’ in the App Launcher Search box using getByPlaceHolder
    await page.getByPlaceholder('Search apps or items...').fill('Service');
    
    //Click Service using index based XPath
    let xpathExpression_Service = '(//div[@class=\'slds-truncate\'])[1]';
    await page.locator(xpathExpression_Service).click();
    
    //wait for page load
    await page.waitForTimeout(3000);
    
    //Click Accounts using attribute based CSS selector
    let attributeSelector = 'a[title=\'Accounts\']';
    await page.locator(attributeSelector).click();

    //wait for page load
    await page.waitForTimeout(3000);
    
    //Click New using getByRole
    await page.getByRole('button', {name : 'New'}).click();
    
    //wait for page load
    await page.waitForTimeout(3000);

    //Enter Account name using attribute based CSS selector
    let accountName = 'Account3'
    let accountNameSelector = 'input[class=\'slds-input\'][name=\'Name\']';
    await page.locator(accountNameSelector).fill(accountName);
    
    //Click Save button using XPath
    let saveBtnXpathExpression = '//li[contains(@class,\'slds-button-group-item\')]/following::button[text()=\'Save\']';
    await page.locator(saveBtnXpathExpression).click(); 

    //Verify the toast message displayed
    let xpathExpressionToast = '//span[contains(@class,\'toastMessage\')]'
    let successMessage = `Account \"${accountName}\" was created.`;
    expect(await page.locator(xpathExpressionToast).innerText({timeout : 8000})).toBe(successMessage);
});