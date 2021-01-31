/*  */
import React, { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

export const GifExpertApp = () => {
  const [categorias, setCategorias] = useState(["One Punch"]);

  //const handleAdd = () => {
  /* Forma 1 de agregar */
  /* setCategorias([...categorias, "Hola bebe"]); */
  /* Forma de 2 de agregar */
  // setCategorias((cats) => [...cats, "Hola bebe"]);
  //};

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategorias={setCategorias} />
      <hr />

      {/* <button onClick={handleAdd}>Agregar</button> */}
      <ol>
        {categorias.map((category) => {
          /* el KEY no puede ser el indice */
          return <GifGrid key={category} category={category} />;
        })}
      </ol>
    </>
  );
};
