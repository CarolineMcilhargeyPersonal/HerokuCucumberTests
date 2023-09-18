const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

// const LoginPage = require('/login.page');
// const SecurePage = require('/secure.page');

// const pages = {
//     login: LoginPage
// }

Given('I am on the homepage', async () => {
    return browser.url('https://the-internet.herokuapp.com/');
});

Then(/^I should see a title heading containing (.*)$/, async (expectedTitleHeading) => {
    const titleHeadingElement = await $('.heading');
    const actualTitleHeading = await titleHeadingElement.getText();
      expect(actualTitleHeading).toContain(expectedTitleHeading);
  });

When('I select the link with href attribute {string}', async (hrefAttribute) => {
    const selector = `a[href="${hrefAttribute}"]`;
    const linkElement = await $(selector);
    await linkElement.click();
  });

  Then('I should be redirected to a URL containing {string}', async (expectedText) => {
    const currentUrl = await browser.getUrl();
    const urlContainsText = currentUrl.includes(expectedText);
    expect(urlContainsText).toBe(true);
  });
  
  