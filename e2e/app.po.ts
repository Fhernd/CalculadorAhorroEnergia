import { browser, element, by } from 'protractor';

export class EnergyCostPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('iz-root h1')).getText();
  }
}
