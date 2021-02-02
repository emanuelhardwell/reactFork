/*  */
/*  */
import React, { useState } from "react";
import "./CounterApp.css";

export const CounterApp = () => {
  /*  */
  const [counter, setCounter] = useState({
    counter1: 10,
    counter2: 15,
    counter3: 20,
    counter4: 25,
  });

  const { counter1, counter2 } = counter;

  return (
    <div>
      <h1> {counter1}</h1>
      <h1> {counter2}</h1>
      <hr></hr>
      <button
        className="btn btn-primary"
        onClick={() => {
          setCounter({
            ...counter /* usamos el operador SPREAD */,
            counter1: counter1 + 1,
          });
        }}
      >
        +1
      </button>
    </div>
  );
};
