import { KendoAngular2QuickstartCliPage } from './app.po';

describe('kendo-angular2-quickstart-cli App', () => {
  let page: KendoAngular2QuickstartCliPage;

  beforeEach(() => {
    page = new KendoAngular2QuickstartCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
