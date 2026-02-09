import { test, expect } from '@playwright/test';

test('counter increments when button is clicked', async ({ page }) => {
  await page.goto('http://localhost:PORT');
  
  const countDisplay = page.locator('#count');
  const incrementBtn = page.locator('#incrementBtn');

  // Initial state
  await expect(countDisplay).toHaveText('0');

  // Click button
  await incrementBtn.click();

  // Check if it incremented
  await expect(countDisplay).toHaveText('1');

  // Click again
  await incrementBtn.click();
  await expect(countDisplay).toHaveText('2');
});