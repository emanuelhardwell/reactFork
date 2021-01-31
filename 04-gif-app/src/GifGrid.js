/*  */
import React, { useEffect } from "react";

export const GifGrid = ({ category }) => {
  /* con el useEffect defino cuando quiero que se ejecute una funcion  */
  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const url =
      "http://api.giphy.com/v1/gifs/search?api_key=EMkLUTqDMhIksWGffC42PtHNNshPjgwj&q=One+Punch&limit=10";
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized.url,
      };
    });
    console.log(gifs);
  };

  getGifs();

  return (
    <div>
      <h1>{category}</h1>
    </div>
  );
};
