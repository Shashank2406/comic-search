import { ComicAppPage } from './app.po';

describe('comic-app App', function() {
  let page: ComicAppPage;

  beforeEach(() => {
    page = new ComicAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
