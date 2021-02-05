/*  */
/*  */
import React, { useCallback, useState } from "react";
import "../04-useRef/style.css";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  /*  */
  const [contador, setContador] = useState(10);

  const incrementar = useCallback(
    (num) => {
      setContador((c) => c + num);
    },
    [setContador]
  );

  return (
    <div>
      <h1>CallbackHook : {contador}</h1>
      <hr></hr>
      <ShowIncrement incrementar={incrementar} />
    </div>
  );
};
