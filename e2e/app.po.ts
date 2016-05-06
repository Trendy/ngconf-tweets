export class NgconfTweetsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ngconf-tweets-app h1')).getText();
  }
}
