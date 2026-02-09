import { test, expect } from '@playwright/test';

test('counter should increment on button click', async ({ page }) => {
  await page.goto('http://localhost:PORT');

  const countDisplay = page.locator('#count');
  const incrementBtn = page.locator('#incrementBtn');

  // Check initial state
  await expect(countDisplay).toHaveText('0');

  // Click button
  await incrementBtn.click();

  // Check if state updated
  await expect(countDisplay).toHaveText('1');
});