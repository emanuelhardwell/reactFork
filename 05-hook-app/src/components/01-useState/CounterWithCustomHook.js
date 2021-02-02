/*  */
/*  */
import React from "react";
import { useCounter } from "../../hooks/useCounter";
import "./CounterApp.css";

export const CounterWithCustomHook = () => {
  /*  */
  const {
    state,
    incrementar,
    decrementar,
    reset,
    incrementarPro,
    decrementarPro,
  } = useCounter();

  return (
    <>
      <div>
        <div className="card mb-3">
          <div className="card-body">
            <h1 className="text-dark">custom hook {state} </h1>
            <button className="btn btn-primary m-3" onClick={incrementar}>
              +1
            </button>
            <button className="btn btn-warning m-3" onClick={decrementar}>
              -1
            </button>
            <button className="btn btn-danger  m-3" onClick={reset}>
              reset
            </button>
          </div>
        </div>
      </div>
      {/*  con valores de incremento */}
      <div>
        <div className="card">
          <div className="card-body">
            <h1 className="text-dark">custom hook {state} </h1>
            <button
              className="btn btn-primary m-3"
              onClick={() => incrementarPro(5)}
            >
              +1
            </button>
            <button
              className="btn btn-warning m-3"
              onClick={() => decrementarPro(5)}
            >
              -1
            </button>
            <button className="btn btn-danger  m-3">reset</button>
          </div>
        </div>
      </div>
    </>
  );
};
