/*  */
/*  */
describe("Pruebas en el archivo demo.test.js", () => {
  test("Deben ser iguales los Strings", () => {
    const mensaje1 = "Hola Mundo";
    const mensaje2 = "Hola Mundo";

    expect(mensaje1).toBe(mensaje2);
  });
});
