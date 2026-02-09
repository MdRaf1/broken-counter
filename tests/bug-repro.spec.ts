import { test, expect } from '@playwright/test';

test('counter should increment when button is clicked', async ({ page }) => {
  await page.goto('http://localhost:PORT');

  const counter = page.locator('#count');
  const button = page.locator('#incrementBtn');

  await expect(counter).toHaveText('0');
  
  await button.click();
  await expect(counter).toHaveText('1');

  await button.click();
  await expect(counter).toHaveText('2');
});