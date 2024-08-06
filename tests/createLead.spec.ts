import { test } from "@playwright/test";

test('Create a Lead', async({page})=> {
   page.setDefaultTimeout(40000);
   await page.goto("http://leaftaps.com/opentaps/control/main");

   await page.locator("#username").fill("DemoSalesManager");

   const password = page.getByLabel("Password");
   await password.fill("crmsfa");

//   await page.locator(".decorativeSubmit").click();

//click Submit button
await page.click(".decorativeSubmit");

//click CRMSFA
await page.click("#button");
// click Create Lead
await page.getByText('Create Lead').click();

//Enter the mandatory fields in the form
await page.locator("#createLeadForm_companyName").fill('company1');
await page.locator("#createLeadForm_firstName").fill('name1');
await page.locator("#createLeadForm_lastName").fill('lastName1');

//select values from drop down
await page.selectOption('#createLeadForm_generalCountryGeoId', {label: 'Canada'});

await page.selectOption('#createLeadForm_generalStateProvinceGeoId', {label: 'Nova Scotia'});
await page.selectOption('#createLeadForm_generalStateProvinceGeoId', {index: 3});
await page.selectOption('#createLeadForm_generalStateProvinceGeoId', {value: 'QC'});


//Print all options from the drop down
const dropDown = page.locator('#createLeadForm_generalCountryGeoId');
const dropDownCount = await dropDown.count();

for( let i = 0 ; i < dropDownCount; i++) {
   console.log(`The values listed in the dropdown are ${await dropDown.nth(i).innerText()}`)
   console.log(`The values listed in the dropdown are ${await dropDown.allInnerTexts()}`)

}

await page.click(".smallSubmit");


})