import { expect, test } from '@playwright/test';
import { FullFabricCareersPage } from '../pages/careersPage';

test('Validate that QA Role Exists on page', async ({ page }) => {
  const fullFabricCareersPage = new FullFabricCareersPage(page);

  await fullFabricCareersPage.goto();
  await expect(fullFabricCareersPage.seniorQARoleLink).toHaveText(
    'Senior Quality Assurance Engineer'
  );
});
