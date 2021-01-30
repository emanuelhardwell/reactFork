/*  */
import React, { useState } from "react";
import { AddCategory } from "./AddCategory";

export const GifExpertApp = () => {
  /*  const categorias = [
    "One Push",
    "Dragon Ball",
    "Super Campeones",
    "Pecados Capitales",
  ]; */

  const [categorias, setCategorias] = useState([
    "One Push",
    "Dragon Ball",
    "Super Campeones",
    "Pecados Capitales",
  ]);

  //const handleAdd = () => {
  /* Forma 1 de agregar */
  /* setCategorias([...categorias, "Hola bebe"]); */
  /* Forma de 2 de agregar */
  // setCategorias((cats) => [...cats, "Hola bebe"]);
  //};

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory />
      <hr />

      {/* <button onClick={handleAdd}>Agregar</button> */}
      <ol>
        {categorias.map((category) => {
          /* el KEY no puede ser el indice */
          return <li key={category}> {category}</li>;
        })}
      </ol>
    </>
  );
};
