import { ElememoPage } from './app.po';

describe('elememo App', () => {
  let page: ElememoPage;

  beforeEach(() => {
    page = new ElememoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
