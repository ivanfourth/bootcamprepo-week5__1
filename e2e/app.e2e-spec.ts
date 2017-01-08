import { Zad11Page } from './app.po';

describe('zad1-1 App', function() {
  let page: Zad11Page;

  beforeEach(() => {
    page = new Zad11Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
