/*  */
import React, { useState, useEffect } from "react";
import { GifGridItem } from "./GifGridItem";
import { getGifs } from "./helpers/getGif";

export const GifGrid = ({ category }) => {
  /*  */
  const [image, setImage] = useState([]);
  /* con el useEffect defino cuando quiero que se ejecute una funcion  */
  useEffect(() => {
    getGifs(category).then((imgs) => setImage(imgs));
  }, [category]);

  return (
    <div>
      <h1>{category}</h1>
      {image.map((img) => {
        /* return <li key={img.id}>{img.title} </li>; */
        /* con el {...img} estamos indicando que se van a ir todos los datos y 
         en el siguiente componenete los vamos a DESESTRUCTURAR} */
        return <GifGridItem key={img.id} {...img} />;
      })}
    </div>
  );
};
