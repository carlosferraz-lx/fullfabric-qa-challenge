import { Locator, Page } from '@playwright/test';

export class FullFabricCareersPage {
  readonly page: Page;
  readonly acceptCookiesBtn: Locator;
  readonly seniorQARoleListing: Locator;

  constructor(page: Page) {
    this.page = page;
    this.acceptCookiesBtn = page.getByText('Allow all cookies');
    this.seniorQARoleListing = page.getByText(
      'Senior Quality Assurance Engineer'
    );
  }

  async goto() {
    const process = require('process');
    const url = process.env.BASE_URL;

    await this.page.goto(url);
    await this.acceptCookiesBtn.click();
  }
}
