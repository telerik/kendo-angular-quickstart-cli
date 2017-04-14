import { browser, element, by } from 'protractor';

export class KendoAngular2QuickstartCliPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
