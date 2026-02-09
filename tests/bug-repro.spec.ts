import { test, expect } from '@playwright/test';

test('counter increments on button click', async ({ page }) => {
  // Assuming the app is served locally
  await page.goto('http://localhost:3000');

  const counter = page.locator('#count');
  const button = page.locator('#incrementBtn');

  // Check initial state
  await expect(counter).toHaveText('0');

  // Click the button
  await button.click();

  // The test will fail here if the bug is present because the value won't change to '1'
  await expect(counter).toHaveText('1');
});