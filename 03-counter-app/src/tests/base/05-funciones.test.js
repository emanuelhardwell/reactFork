/*  */

import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe("pruebas del archivo 05-funciones", () => {
  test("getUser debe retornar un objeto ", () => {
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    expect(user).toEqual(userTest);
  });

  /* getUsuarioActivo debe devolver un objeto */
  test("getUsuarioActivo debe devolver un objeto", () => {
    const usuarioActivo = {
      uid: "ABC567",
      username: "Emanuel",
    };

    const usuario = getUsuarioActivo("Emanuel");

    expect(usuario).toEqual(usuarioActivo);
  });
});
