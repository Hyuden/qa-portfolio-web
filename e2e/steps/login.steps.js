const { Given, When, Then, setDefaultTimeout, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const { expect } = require('chai');

setDefaultTimeout(30000);

let browser, page;

Given('que el usuario está en la página de login', async () => {
  browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://practicetestautomation.com/practice-test-login/');
});

When('ingresa el email {string} y la contraseña {string}', async (email, password) => {
  await page.fill('#username', email);
  await page.fill('#password', password);
  await page.click('#submit');
});

Then('debería ver el mensaje de bienvenida', async () => {
  await page.waitForURL('**/logged-in-successfully/**', { timeout: 15000 });
  const texto = await page.textContent('h1');
  expect(texto).to.include('Logged In Successfully');
});

Then('debería ver un mensaje de error', async () => {
  await page.waitForSelector('#error', { timeout: 15000 });
  const error = await page.textContent('#error');
  expect(error).to.include('Your username is invalid!');
});

After(async () => {
  if (browser) {
    await browser.close();
  }
});