import { test, expect } from '@playwright/test';

test('counter increments when button is clicked', async ({ page }) => {
  // Assuming the app is served at http://localhost:3000
  await page.goto('http://localhost:3000');

  const countLabel = page.locator('#count');
  const incrementBtn = page.locator('#incrementBtn');

  // Check initial state
  await expect(countLabel).toHaveText('0');

  // Perform click
  await incrementBtn.click();

  // Assert count incremented to 1
  await expect(countLabel).toHaveText('1');

  // Perform another click
  await incrementBtn.click();
  await expect(countLabel).toHaveText('2');
});