import { PhoenixOrderPage } from './app.po';

describe('phoenix-order App', function() {
  let page: PhoenixOrderPage;

  beforeEach(() => {
    page = new PhoenixOrderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
