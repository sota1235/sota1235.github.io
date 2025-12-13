import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

const urls = ['/', '/biography', '/blog']

test.describe('Accessibility tests', () => {
  for (const url of urls) {
    test(`should not have accessibility violations on ${url}`, async ({
      page,
    }) => {
      await page.goto(url)

      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze()

      expect(accessibilityScanResults.violations).toEqual([])
    })
  }
})
