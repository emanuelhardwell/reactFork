/*  */
/*  */

import { retornaArreglo } from "../../base/07-deses-arr";

describe("Pruebas del archivo 07-deses-arr", () => {
  test("Debe retornar un arreglo con un String y Entero ", () => {
    const arregloTest = ["ABC", 123];

    const arreglo = retornaArreglo();

    expect(arreglo).toEqual(arregloTest);
  });

  /* Prueba 2 ..... comprobar el TIPO DE DATO de los elementos del arreglo */
  test("comprobar el TIPO DE DATO de los elementos del arreglo ", () => {
    const [letra, numero] = retornaArreglo();

    expect(letra).toBe("ABC");
    expect(typeof letra).toBe("string");

    expect(numero).toBe(123);
    expect(typeof numero).toBe("number");
  });
});
