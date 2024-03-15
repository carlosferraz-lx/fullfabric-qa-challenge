import { expect, test } from '@playwright/test';
import { FullFabricCareersPage } from '../pages/careersPage';

test.beforeEach(async ({ page }) => {
  const fullFabricCareersPage = new FullFabricCareersPage(page);

  await fullFabricCareersPage.goto();
});
test('Should have correct URL for careers page', async ({ page }) => {
  await expect(page).toHaveURL('https://www.fullfabric.com/company/careers');
});

test('Should have the Full Fabric logo', async ({ page }) => {
  const fullFabricCareersPage = new FullFabricCareersPage(page);

  await expect(fullFabricCareersPage).toBeTruthy();
});

test('Should have the Abvailable Positions heading', async ({ page }) => {
  const fullFabricCareersPage = new FullFabricCareersPage(page);

  await expect(fullFabricCareersPage.availablePositionsHeading).toBeTruthy();
});
test('Should see that the QA Role Exists on page', async ({ page }) => {
  const fullFabricCareersPage = new FullFabricCareersPage(page);

  await expect(fullFabricCareersPage.seniorQARoleListing).toHaveText(
    'Senior Quality Assurance Engineer'
  );
});

test('Should be able to see the company values', async ({ page }) => {
  const fullFabricCareersPage = new FullFabricCareersPage(page);

  await expect(fullFabricCareersPage.companyValues).toBeTruthy();
  await expect(fullFabricCareersPage.excelenceValue).toHaveText('Excellence');
  await expect(fullFabricCareersPage.empathyValue).toHaveText('Empathy');
  await expect(fullFabricCareersPage.simplicityValue).toHaveText('Simplicity');
  await expect(fullFabricCareersPage.innovationValue).toHaveText('Innovation');
});
