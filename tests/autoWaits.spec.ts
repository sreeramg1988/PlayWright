import { expect, test } from "@playwright/test";

test('check Invisibility of an element', async({page}) => {
page.setDefaultTimeout(40000);
await page.goto("https://leafground.com/waits.xhtml");

await  page.locator('.card')
           .filter({hasText :"Wait for Invisibility (1 - 10 Sec)"})
           .getByRole('button')
           .filter({hasText : 'Click'})
           .click();

//soft assertion
await expect.soft(
    page.locator('.card')
        .filter({hasText :"Wait for Invisibility (1 - 10 Sec)"})
        .getByRole('button')
        .filter({hasText : 'I am about to hide'})
            ).not.toBeVisible({timeout : 10000});

});