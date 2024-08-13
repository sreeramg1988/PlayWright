import { expect, test } from "@playwright/test";

test(`Create a lead`, async({page}) => {
    
    page.setDefaultTimeout(3000);
    //launch app
    await page.goto('http://leaftaps.com/opentaps/control/main');

    //enter the credentials
   await page.getByLabel('Username').fill('DemoSalesManager');
   await page.getByLabel('Password').fill('crmsfa');

    //click on login button
    await page.locator('.decorativeSubmit').click({timeout : 3000});

    //wait for page to load
    await page.waitForLoadState('domcontentloaded');

    //click on CRMSFA link
    await page.locator('div[id=button]>a').click({timeout : 3000});

    //wait and click Create lead button
    await page.waitForLoadState('domcontentloaded', {timeout : 5000});
    await page.getByText('Create Lead').click();

    //Declare the reusable values
    const companyName = 'Microsoft';
    const firstName = 'Micro';
    const lastName = 'soft';
    //enter the values in text fields
    await page.locator('#createLeadForm_companyName').fill(companyName);
    await page.locator('#createLeadForm_firstName').fill(firstName);
    await page.locator('#createLeadForm_lastName').fill(lastName);
    await page.locator('#createLeadForm_personalTitle').fill('Master');
    await page.locator('#createLeadForm_generalProfTitle').fill('Test');
    await page.locator('#createLeadForm_annualRevenue').fill('98000');
    await page.locator('#createLeadForm_departmentName').fill('Test Automation');
    await page.locator('#createLeadForm_primaryPhoneNumber').fill('9000000000');
    
    //click on create lead
    await page.locator('input[name=submitButton]').click({timeout : 30000});
    //wait for page to load
    await page.waitForLoadState('domcontentloaded', {timeout : 5000});
    //verify company name
    const actualCompanyName = await page.locator('#viewLead_companyName_sp').innerText();
    expect(actualCompanyName.substring(0, actualCompanyName.indexOf('(')).trim()).toBe(companyName);
    //verify first name
    expect(await page.locator('#viewLead_firstName_sp').innerText()).toBe(firstName);
    //verify last name
    expect(await page.locator('#viewLead_lastName_sp').innerText()).toBe(lastName);

    //verify status
    expect(await page.locator('#viewLead_statusId_sp').innerText()).toEqual('Assigned');

    //close the page
    await page.close();
});