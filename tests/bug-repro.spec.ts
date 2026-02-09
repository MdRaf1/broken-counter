import { test, expect } from '@playwright/test';

test('counter increments when button is clicked', async ({ page }) => {
  await page.goto('http://localhost:PORT');

  const countDisplay = page.locator('#count');
  const incrementBtn = page.locator('#incrementBtn');

  await expect(countDisplay).toHaveText('0');

  await incrementBtn.click();
  await expect(countDisplay).toHaveText('1');

  await incrementBtn.click();
  await expect(countDisplay).toHaveText('2');
});