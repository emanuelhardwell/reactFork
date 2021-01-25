/*  */

import { getImagen } from "../../base/11-async-await";

/*  */
describe("Pruebas con Async, await and Fetch", () => {
  test("Debe retornar la URL de la imagen", async () => {
    const url = await getImagen();
    console.log(url);
    expect(url.includes("https://")).toBe(true);
  });
});
