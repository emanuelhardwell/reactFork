/*  */
/*  */
import React, { useMemo, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import "../04-useRef/style.css";

export const MemoHook = () => {
  /* usamos el metodo del componente useCounter */
  const { counter, incrementar } = useCounter(1000);
  const [show, setShow] = useState(true);

  const procesoPesado = (iteraciones) => {
    for (let i = 0; i < iteraciones; i++) {
      console.log("Ahi vamos .........");
    }
    return `${iteraciones} iteraciones ejecutadas`;
  };

  const memoProceso = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <div>
      <h1>Memo Hook</h1>
      <h2>USeMemo {counter}</h2>
      <hr></hr>
      <p>{memoProceso}</p>
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
