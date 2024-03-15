# fullfabric-qa-challenge

I've decided to use playwright/test as my framework using Typescript as programming language. In order to execute the project you should have node.js installed and also install playwright/test by running `npm install -D @playwright/test`. From there you can run `npm run headless` to execute the tests locally. There is also a github action in place and the tests are execute on push, could be executed on a nightly job just by removing the comments on the playwright.yml file.

## Alternative world where I have DB access

ONe thing that could be done for example would be querying the DB imaginnind that there was a `jobs` table with a `role` column:

```
import { expect, test } from '@playwright/test';
import { FullFabricCareersPage } from '../pages/careersPage';

test.beforeAll(async () => {
    pool = new Pool({
      user: 'some_username',
      host: 'some_host',
      database: 'some_database',
      password: 'some_password',
      port: 5432, // Common port
    });
  });

  test.beforeEach(async ({ page }) => {
  const fullFabricCareersPage = new FullFabricCareersPage(page);

  await fullFabricCareersPage.goto();
});

  test('Check for Senior QA Engineer role', async ({}) => {
    const fullFabricCareersPage = new FullFabricCareersPage(page);
    const result = await pool.query('SELECT * FROM jobs WHERE role = $1', ['Senior Quality Assurance Enginee']);

    // Assert that there is at least one row with Senior Quality Assurance Enginee role
    await expect(result.rows.length).toBeGreaterThan(0);

    // Assert the careers page for the Senior Quality Assurance Engineer role
    await expect(fullFabricCareersPage.seniorQARoleListing).toHaveText(
    'Senior Quality Assurance Engineer'
  );
  });

  test.afterAll(async () => {
    // Close the database connection after all tests are done
    await pool.end();
  });
});
```
