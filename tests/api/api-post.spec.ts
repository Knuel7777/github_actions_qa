import { test, expect } from "@playwright/test";

test("API - Obtener lista de posts", async ({ request }) => {
  const response = await request.get("https://jsonplaceholder.typicode.com/posts");
  
  expect(response.status()).toBe(200);

  const body = await response.json();

  // validar que sea array
  expect(Array.isArray(body)).toBeTruthy();
  expect(body.length).toBeGreaterThan(0);

  // validar contenido
  expect(body[0]).toHaveProperty("userId");
  expect(body[0]).toHaveProperty("id");
  expect(body[0]).toHaveProperty("title");
});