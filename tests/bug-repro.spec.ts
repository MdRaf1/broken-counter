import { test, expect } from '@playwright/test';

test('counter should increment when button is clicked', async ({ page }) => {
  await page.goto('http://localhost:8080'); // Adjust port as needed

  const countElement = page.locator('#count');
  const incrementBtn = page.locator('#incrementBtn');

  // Check initial state
  await expect(countElement).toHaveText('0');

  // Click the button
  await incrementBtn.click();

  // Check if it updated to 1
  await expect(countElement).toHaveText('1');

  // Click again
  await incrementBtn.click();
  await expect(countElement).toHaveText('2');
});