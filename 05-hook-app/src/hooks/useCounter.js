/*  */
/*  */
import { useState } from "react";

export const useCounter = (numberInitial = 10) => {
  const [state, setState] = useState(numberInitial);

  const incrementar = () => {
    setState(state + 1);
  };

  const decrementar = () => {
    setState(state - 1);
  };

  const reset = () => {
    setState(numberInitial);
  };

  /*  */
  const incrementarPro = (valor) => {
    setState(state + valor);
  };

  const decrementarPro = (valor) => {
    setState(state - valor);
  };

  return {
    state,
    incrementar,
    decrementar,
    reset,
    incrementarPro,
    decrementarPro,
  };
};
