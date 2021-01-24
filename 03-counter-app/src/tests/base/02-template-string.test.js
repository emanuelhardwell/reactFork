/*  */

import { getSaludo } from "../../base/02-template-string";

describe("Prueba en 02-template-string.js", () => {
  test("getSaludo debe retornar Hola Emanuel", () => {
    const nombre = "Emanuel";

    const saludo = getSaludo(nombre);

    expect(saludo).toBe("Hola " + nombre);
  });

  // getSaludo debe retornar Hola Carlos SI NO HAY argumento nombre
  test("getSaludo debe retornar Hola Carlos SI NO HAY argumento nombre", () => {
    const saludo = getSaludo();

    expect(saludo).toBe("Hola Carlos");
  });
});
