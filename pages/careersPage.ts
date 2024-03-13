import { Locator, Page } from '@playwright/test';

export class FullFabricCareersPage {
  readonly page: Page;
  readonly seniorQARoleLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.seniorQARoleLink = page.getByText('Senior Quality Assurance Engineer');
  }

  async goto() {
    const process = require('process');
    const url = process.env.BASE_URL;

    await this.page.goto(url);
  }
  async clickSeniorQARole() {
    await this.seniorQARoleLink.click();
  }
}
