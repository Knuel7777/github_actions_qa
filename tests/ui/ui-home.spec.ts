import { test, expect } from "@playwright/test";

test("UI - Ver página principal de JSONPlaceholder", async ({ page }) => {
  await page.goto("https://jsonplaceholder.typicode.com/");

  // Simular navegación
  await page.click('a[href="/posts"]');

  await expect(page).toHaveURL("https://jsonplaceholder.typicode.com/posts");

  // Validar contenido visible
  const items = page.locator("body pre");
  await expect(items).toBeVisible();
});
