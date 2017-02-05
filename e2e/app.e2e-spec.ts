import { WebiksTaskPage } from './app.po';

describe('webiks-task App', function() {
  let page: WebiksTaskPage;

  beforeEach(() => {
    page = new WebiksTaskPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
