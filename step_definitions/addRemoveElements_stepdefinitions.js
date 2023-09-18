const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const addRemoveElementsPage = require('../Page/addRemoveElements.page.js');
// const SecurePage = require('/secure.page');

const pages = {
    addRemoveElements: addRemoveElementsPage
}

Given('I am on the add remove elements page', async () => {
    return browser.url('https://the-internet.herokuapp.com/add_remove_elements/');
});


    When('I select add element', async () => {
       addRemoveElementsPage.clickaddElementbutton
  });

  Then('I should the element has been added to the page', async () => {
    const DeleteElement = await $('#elements');
    await expect(DeleteElement).toBeDisplayed();
  });
  
  When('I select delete element', async () => {
    addRemoveElementsPage.clickDeleteElementbutton
});

Then('I should see the element has been removed from the page', async () => {
    expect(addRemoveElementsPage.DeleteElementbutton).not.toBeDisplayed()

  });


  
  