import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.airbus.com/en/innovation/innovation-ecosystem/airbus-upnext');
  await page.getByRole('button', { name: 'Accept All Cookies' }).click();
  await page.locator('#optimate').getByRole('link', { name: 'Learn more' }).click();
  await page.getByText('Gate-to-gate support').click({
    button: 'right'
  });
  await page.getByText('Gate-to-gate support').click();
  await expect(page.getByText('Gate-to-gate support')).toBeVisible();
  await expect(page.locator('#content')).toContainText('VERTEX');
});