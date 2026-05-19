import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoapps.qspiders.com/ui/button?sublist=0');
  await page.getByRole('link', { name: 'Text Field' }).click();
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('hariprasath');
  await page.getByRole('textbox', { name: 'Email Id' }).click();
  await page.getByRole('textbox', { name: 'Email Id' }).fill('hari@123');
});