import { BookShoppingPage } from './app.po';

describe('book-shopping App', () => {
  let page: BookShoppingPage;

  beforeEach(() => {
    page = new BookShoppingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
