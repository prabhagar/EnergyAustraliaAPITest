import { test, expect } from '@playwright/test';

test('GET /festivals API Test', async ({ context }) => {
  // Define base URL
  const baseUrl = 'https://eacp.energyaustralia.com.au/codingtest/api/v1';

  // Build API endpoint URL
  const url = `${baseUrl}/festivals`;

  // Send GET request
  const response = await context.get(url);

  // Check for successful response (200 status code)
  expect(response.status()).toBe(200);

  // Optional: Validate response data (if schema is available)
  // You'll need to implement data validation based on the API's response format.

  console.log('API Test Passed!');
});


test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


(async () => {
    const browser = await chromium.launch(); // Optional: Set headless: false for debugging
    const context = await browser.newContext();

    const url = 'https://eacp.energyaustralia.com.au/codingtest/api/v1/festivals';
    const acceptHeader = 'text/plain';

    try {
        const response = await context.get(url, { headers: { accept: acceptHeader } });

        // Validation: Check for successful response status code (200)
        expect(response.status()).toBe(200);

        // Validation: Check for expected response content type (based on API documentation)
        const contentType = response.headers().get('content-type');
        expect(contentType).toContain(acceptHeader); // Adjust based on expected type

        // Advanced Validation: Parse response data if applicable and perform further checks
        // (Example assuming JSON response)
        const data = await response.json();
        // ... assertions on the data object based on the API's response structure ...
    } catch (error) {
        console.error('Error during API request:', error);
    } finally {
        await browser.close();
    }
})();