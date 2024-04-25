import { test, expect } from '@playwright/test';

test.only('test', async ({ browser }) => {
  //await page.goto('about:blank');
  const context = await browser.newContext({
    // Provide authentication credentials
    httpCredentials: {
        username: 'preview',
        password: 'spotlight'
    }
});
const page = await context.newPage();
  //await page.goto('chrome-error://chromewebdata/');
  await page.goto('https://uat.spotlightstores.com/');
  await page.locator(".cookie-notify-closeBtn").click();
  await page.waitForLoadState("load");
  await page.locator(".js-header-popover").hover();
  await page.locator('a[title="Sign up!"]').click();
  await page.getByLabel('* Email address / login:').click();
  await page.getByLabel('* Email address / login:').fill('test28@yopmail.com');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByLabel('* First name:').click();
  await page.getByLabel('* First name:').fill('test');
  await page.getByLabel('* Last name:').click();
  await page.getByLabel('* Last name:').fill('test');
  await page.getByLabel('* Mobile:').click();
  await page.getByLabel('* Mobile:').fill('0412345678');
  await page.getByLabel('* Post code:').click();
  await page.getByLabel('* Post code:').fill('1212');
  await page.getByLabel('* Password:').click();
  await page.getByLabel('* Password:').fill('Anila12');
  await page.getByLabel('* Confirm password:').click();
  await page.getByLabel('* Confirm password:').fill('Anila12');
  await page.getByRole('checkbox').nth(1).check();
  await page.getByRole('button', { name: 'Sign Up' }).click();
  await page.waitForTimeout(500000);
  await page.goto('https://uat.spotlightstores.com/my-account#/my-account/dashboard');
});