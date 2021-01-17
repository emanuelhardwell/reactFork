/*  */
/*  */

import { getHeroeById } from "./base/08-exportacionesPro";

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const heroe = getHeroeById(2);
//     resolve(heroe);
//     /*  console.log(heroe); */
//     reject("No se pudo encontrar al heroe");
//   }, 2000);
// });

// promesa
//   .then((heroeFinal) => {
//     console.log("heroe", heroeFinal);
//   })
//   .catch((err) => console.warn(err));

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);
      if (heroe) {
        resolve(heroe);
      } else {
        reject("No se pudo encontrar al heroe");
      }
      /* console.log(heroe); */
    }, 2000);
  });
};

getHeroeByIdAsync(10)
  .then((heroe) => console.log("heroe", heroe))
  .catch((err) => console.log(err));
