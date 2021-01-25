/*  */
import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

/*  */
describe("Prueba del archivo 09-promesas", () => {
  test("Debe retornar un Heroe  Async", (done) => {
    const id = 1;

    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toBe(heroes[0]);
      done();
    });
  });

  /* Debe retornar un ERROR si el Heroe no existe  Async */
  test("Debe retornar un ERROR si el Heroe no existe  Async ", (done) => {
    const id = 10;

    getHeroeByIdAsync(id).catch((err) => {
      expect(err).toBe("No se pudo encontrar el héroe");
      done();
    });
  });
});
