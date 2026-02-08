import { test, expect } from '@playwright/test';

test('counter increments when the Increase button is clicked', async ({ page }) => {
  // Navigate to the local server or file path where the app is hosted
  await page.goto('http://localhost:8080'); // Adjust to your local dev server URL

  const countSpan = page.locator('#count');
  const incrementBtn = page.locator('#incrementBtn');

  // Assert initial state
  await expect(countSpan).toHaveText('0');

  // Click the button
  await incrementBtn.click();

  // Assert count incremented to 1
  await expect(countSpan).toHaveText('1');

  // Click several more times
  await incrementBtn.click();
  await incrementBtn.click();

  // Assert count incremented to 3
  await expect(countSpan).toHaveText('3');
});