import { Locator, Page } from '@playwright/test';

export class FullFabricCareersPage {
  readonly page: Page;
  readonly homePageLogo: Locator;
  readonly availablePositionsHeading: Locator;
  readonly ourMissionHeading: Locator;
  readonly companyValues: Locator;
  readonly excelenceValue: Locator;
  readonly empathyValue: Locator;
  readonly simplicityValue: Locator;
  readonly innovationValue: Locator;
  readonly acceptCookiesBtn: Locator;
  readonly seniorQARoleListing: Locator;

  constructor(page: Page) {
    this.page = page;
    this.acceptCookiesBtn = page.getByText('Allow all cookies');
    this.seniorQARoleListing = page.getByText(
      'Senior Quality Assurance Engineer'
    );
    this.homePageLogo = page.getByLabel('home');
    this.availablePositionsHeading = page.getByText('Positions available');
    this.ourMissionHeading = page.getByText('Our mission');
    this.companyValues = page.getByText('What we value as a company');
    this.excelenceValue = page.getByText('Excellence');
    this.empathyValue = page.getByText('Empathy');
    this.simplicityValue = page.getByText('Simplicity');
    this.innovationValue = page.getByText('Innovation');
  }

  async goto() {
    const process = require('process');
    const url = process.env.BASE_URL;

    await this.page.goto(url);
    await this.acceptCookiesBtn.click();
  }
}
