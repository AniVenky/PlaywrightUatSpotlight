const { test, expect } = require('@playwright/test');

test('Test case name', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.blackwoods.com.au/");
    console.log(await page.title());
    await expect(page).toHaveTitle("Blackwoods - First for Industrial Supplies and Safety | Blackwoods");
     await page.locator(".login-rigister .dropdown").hover();
     await page.locator(".mainDeskLogin");
     await page.waitForSelector(".mainDeskLogin", {visible : true})
     await page.locator("#j_username").fill("test@yopmail.com");
     await page.locator("#j_password").fill("Anila@12");
     await page.locator(".btn-HeaderLogin").first().click();
     await page.waitForTimeout(10000);
     


})

// test('using page fixture', async ({page})=>
// {
//      //const page1 = new page();
//      await page.goto("https://hottools.com");
// })