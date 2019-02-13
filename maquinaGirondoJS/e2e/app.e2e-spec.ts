import { AngularCordovaPage } from './app.po';

describe('angular-cordova App', () => {
  let page: AngularCordovaPage;

  beforeEach(() => {
    page = new AngularCordovaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
