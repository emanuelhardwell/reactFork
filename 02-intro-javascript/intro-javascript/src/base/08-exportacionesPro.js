/*  */
/*  */

/* FORMA 1 DE EXPORTAR */
/* import { heroes } from "./data/heroes"; */

/* FORMA 2 DE EXPORTAR */
/* import { heroes, owners } from "./data/heroes"; */

/* FORMA 3 DE EXPORTAR */
/* import heroes, { owners } from "../data/heroes"; */

import heroes from "../data/heroes";
/* console.log(owners); */

export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);
/* console.log(getHeroeById(2)); */

export const getHeroeByOwner = (owner) =>
  heroes.filter((heroe) => heroe.owner === owner);
/* console.log(getHeroeByOwner("Marvel")); */
