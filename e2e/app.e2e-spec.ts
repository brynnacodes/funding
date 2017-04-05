import { FundingAppPage } from './app.po';

describe('funding-app App', () => {
  let page: FundingAppPage;

  beforeEach(() => {
    page = new FundingAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
