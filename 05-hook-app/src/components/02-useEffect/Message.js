/*  */
/*  */
import React, { useEffect, useState } from "react";

export const Message = () => {
  /*  */
  const [coords, setCoords] = useState({
    x: 0,
    y: 0,
  });

  const { x, y } = coords;

  useEffect(() => {
    /* console.log("Acaba de entrar"); */
    const mouseMovePro = (e) => {
      const coord = { x: e.x, y: e.y };
      setCoords(coord);
    };

    window.addEventListener("mousemove", mouseMovePro);

    return () => {
      window.removeEventListener("mousemove", mouseMovePro);
    };
  }, []);

  return (
    <>
      <h5 className="text-dark">
        Eres un crack en el desarrollo Full Satck !!!
      </h5>
      <h4 className="text-danger">
        X: {x} Y: {y}
      </h4>
    </>
  );
};
