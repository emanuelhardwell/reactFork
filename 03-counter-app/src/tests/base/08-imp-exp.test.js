/*  */

import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

/*  */
describe("Probar el archivo 08-imp-exp", () => {
  test("deberia retornar el elemento buscado por ID", () => {
    const id = 1;
    const heroe = getHeroeById(id);
    /* console.log(heroe); */

    const heroeFinal = heroes.find((h) => h.id === id);
    expect(heroe).toEqual(heroeFinal);
  });

  /* deberia retornar UNDEFINED si no encuentra el ID */
  test("deberia retornar UNDEFINED si no encuentra el ID  ", () => {
    const id = 10;
    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined);
  });

  /* Debe retornar un arreglo con los heroes de DC */
  test("Debe retornar un arreglo con los heroes de DC ", () => {
    const owner = "DC";
    const ownerList = getHeroesByOwner(owner);
    /* console.log(ownerList); */

    const ownerFinal = heroes.filter((h) => h.owner === owner);
    expect(ownerList).toEqual(ownerFinal);
  });

  /* Debe retornar un arreglo con los heroes de Marvel */
  test("Debe retornar un arreglo con los heroes de Marvel ", () => {
    const owner = "Marvel";
    const ownerList = getHeroesByOwner(owner);

    expect(ownerList.length).toBe(2);
  });
});
