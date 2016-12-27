import { DoItMatePage } from './app.po';

describe('do-it-mate App', function() {
  let page: DoItMatePage;

  beforeEach(() => {
    page = new DoItMatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
