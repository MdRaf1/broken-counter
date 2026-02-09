import { test, expect } from '@playwright/test';

test('counter increments when button is clicked', async ({ page }) => {
  await page.goto('http://localhost:3000'); // Adjust port as necessary
  
  const counter = page.locator('#count');
  const button = page.locator('#incrementBtn');
  
  await expect(counter).toHaveText('0');
  await button.click();
  
  // This assertion will fail in the buggy version
  await expect(counter).toHaveText('1');
  
  await button.click();
  await expect(counter).toHaveText('2');
});