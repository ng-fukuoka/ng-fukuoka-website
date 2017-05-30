import { NgFukuokaPage } from './app.po';

describe('ng-fukuoka App', () => {
  let page: NgFukuokaPage;

  beforeEach(() => {
    page = new NgFukuokaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
