import { expect, test } from "@playwright/test";


const pageUrl = 'http://leaftaps.com/opentaps/control/main';
const userName = 'DemoSalesManager';
const password = 'crmsfa';



test('Edit a lead', async({page}) => {
    page.setDefaultTimeout(3000);
    //launch app
    await page.goto(pageUrl);

    //enter the credentials
   await page.getByLabel('Username').fill(userName);
   await page.getByLabel('Password').fill(password);

    //click on login button
    await page.locator('.decorativeSubmit').click({timeout : 3000});

    //wait for page to load
    await page.waitForLoadState('domcontentloaded');

    //click on CRMSFA link
    await page.locator('div[id=button]>a').click({timeout : 3000});

    //wait and click on lead link
    await page.waitForLoadState('domcontentloaded', {timeout : 5000});
    await page.getByRole('link', {name : 'Leads'}).click();
    //click on find leads link
    await page.getByRole('link', {name : 'Find Leads'}).click();
    //Enter the firstName
    await page.waitForLoadState('domcontentloaded', {timeout : 5000});
    await page.getByRole('textbox', {name : 'First name:'}).fill('Testuser');
    //click Find Leads button and wait 
    await page.getByRole('button', {name : 'Find Leads'}).click({timeout : 3000});
    page.setDefaultTimeout(3000);
    // click on the first leadID
    await page.locator("//div[contains(@class,'partyId')]/a[@class='linktext']").first().click({timeout :  3000});

    //wait for pageload
    page.setDefaultTimeout(5000);

    //Click on Edit
    await page.getByRole('link', {name : 'Edit'}).click();

    let updatedCompanyName = 'TCS';
    let updatedRevenue = '720000';
    let updatedDepartment = 'Telecom';
    let updatedDescription = 'Edited via VSCODE';

    //Edit the fields
    await page.locator('#updateLeadForm_companyName').fill(updatedCompanyName);
    await page.locator('#updateLeadForm_annualRevenue').fill(updatedRevenue);
    await page.locator('#updateLeadForm_departmentName').fill(updatedDepartment);
    await page.locator('#updateLeadForm_description').fill(updatedDescription);
    //click on submit button
    await page.locator("input[value='Update']").click({timeout : 3000});

    //Verify the updated fields
    
    //companyName
    const actualCompanyName = await page.locator('#viewLead_companyName_sp').innerText();
    expect(actualCompanyName.substring(0, actualCompanyName.indexOf('(')).trim()).toBe(updatedCompanyName);
    
    //verify the revenue field
    const actualRevenue = await page.locator('#viewLead_annualRevenue_sp').innerText();
    expect(parseInt(actualRevenue.replace('$', '').replace(',',''))).toEqual(parseInt(updatedRevenue));
    
    //verify department name
    expect(await page.locator('#viewLead_departmentName_sp').innerText()).toBe(updatedDepartment);
    
    //verify description
    expect(await page.locator('#viewLead_description_sp').innerText()).toBe(updatedDescription);

    //print the title of the page
    console.log(`The page title is ${await page.title()}`);
})