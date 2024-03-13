import { expect, test } from '@playwright/test';
import { FullFabricCareersPage } from '../pages/careersPage';

test.beforeEach(async ({ page }) => {
  const fullFabricCareersPage = new FullFabricCareersPage(page);

  await fullFabricCareersPage.goto();
});
test('Should have correct URL for careers page', async ({ page }) => {
  await expect(page).toHaveURL('https://www.fullfabric.com/company/careers');
});
test('Should see that the QA Role Exists on page', async ({ page }) => {
  const fullFabricCareersPage = new FullFabricCareersPage(page);
  await expect(fullFabricCareersPage.seniorQARoleListing).toHaveText(
    'Senior Quality Assurance Engineer'
  );
});

test('Should be able to see the company values', async ({ page }) => {});
