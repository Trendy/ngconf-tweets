import { NgconfTweetsPage } from './app.po';

describe('ngconf-tweets App', function() {
  let page: NgconfTweetsPage;

  beforeEach(() => {
    page = new NgconfTweetsPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ngconf-tweets works!');
  });
});
