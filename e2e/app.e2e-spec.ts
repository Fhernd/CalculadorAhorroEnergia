import { EnergyCostPage } from './app.po';

describe('energy-cost App', function() {
  let page: EnergyCostPage;

  beforeEach(() => {
    page = new EnergyCostPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('iz works!');
  });
});
