/*  */
/*  */
import { useState } from "react";

export const useCounter = (numberInitial = 10) => {
  const [counter, setCounter] = useState(numberInitial);

  const incrementar = () => {
    setCounter(counter + 1);
  };

  const decrementar = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(numberInitial);
  };

  /*  */
  const incrementarPro = (valor) => {
    setCounter(counter + valor);
  };

  const decrementarPro = (valor) => {
    setCounter(counter - valor);
  };

  return {
    counter,
    incrementar,
    decrementar,
    reset,
    incrementarPro,
    decrementarPro,
  };
};
