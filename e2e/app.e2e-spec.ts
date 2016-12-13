import { browser, element, by } from 'protractor';

describe('Glows functional e2e tests', function() {

  beforeEach(function() {
    browser.get('/');
  });

  it('should default to the /characteristics page', function() {
    expect(element(by.css('h3')).getText()).toEqual('Personal Information');
  });

  it('should save data when the user clicks "Save & Continue"', function() {
    // Select the 'male' option for gender.
    element.all(by.css('#gender .radio-inline')).get(0).click();

    // Navigate away.
    element(by.css('.btn-continue')).click();

    // Navigate back.
    element.all(by.css('button')).get(0).click();

    // Verify that male is still selected.
    expect(element.all(by.css('#gender .radio-inline input'))
      .get(0).isSelected()).toBeTruthy();
  });

  it('should save data when the user clicks "Back"', function() {
    // Navigate to the phone numbers page.
    browser.get('/phone_numbers');

    // Add a random extension.
    const randomExtension = String(Math.floor(Math.random() * 10000));
    element(by.css('#extension')).clear();
    element(by.css('#extension')).sendKeys(randomExtension);

    // Navigate away.
    element.all(by.css('button')).get(0).click();

    // Navigate back.
    element(by.css('.btn-continue')).click();

    // Verify that the extension is set.
    expect(element(by.css('#extension')).getAttribute('value'))
      .toEqual(randomExtension);
  });

  it('should save data when the user navigates using the navigation panel',
    function() {
      // Navigate to the phone numbers page.
      browser.get('/phone_numbers');

      // Add a random extension.
      const randomExtension = String(Math.floor(Math.random() * 10000));
      element(by.css('#extension')).clear();
      element(by.css('#extension')).sendKeys(randomExtension);

      // Navigate away.
      element.all(by.css('a.progress-bar-item')).get(0).click();

      // Navigate back.
      element.all(by.css('a.progress-bar-item')).get(1).click();

      // Verify that the extension is set.
      expect(element(by.css('#extension')).getAttribute('value'))
        .toEqual(randomExtension);
    });

});
