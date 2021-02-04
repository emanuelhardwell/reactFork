/*  */
/*  */
import React, { useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import "../04-useRef/style.css";
import { Small } from "./Small";

export const Memorize = () => {
  /* usamos el metodo del componente useCounter */
  const { counter, incrementar } = useCounter();
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>
        USeMemo <Small value={counter} />
      </h1>
      <hr></hr>
      <button className="btn btn-primary me-3" onClick={incrementar}>
        +1
      </button>
      <button
        className="btn btn-success"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show / Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
