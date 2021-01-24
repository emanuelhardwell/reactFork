/*  */
/*  */
/*  */
import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(0);

  const click = () => {
    /* forma 1 de usar el useState */
    /*  setCounter(counter + 1); */

    /* forma 2 de usar el useState */
    setCounter((c) => c + 1);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <h2> {counter} </h2>
      {/* crear una funcion externa y despues llamarla */}
      <button onClick={click}> +1 </button>
    </div>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

export default CounterApp;
