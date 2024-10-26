import test, { expect } from '@playwright/test'

test('decrement counter', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Decrement' }).click()
  await expect(page.getByLabel('Count')).toHaveText('-1')
})

test('increment counter', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Increment' }).click()
  await expect(page.getByLabel('Count')).toHaveText('1')
})
