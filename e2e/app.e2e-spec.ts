import { JsonPage } from './app.po';

describe('json App', () => {
  let page: JsonPage;

  beforeEach(() => {
    page = new JsonPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
