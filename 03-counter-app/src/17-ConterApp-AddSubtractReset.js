/*  */
/*  */
/*  */
import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const clickAdd = () => {
    setCounter(counter + 1);
  };

  const clickSubtract = () => {
    setCounter(counter - 1);
  };

  const clickReset = () => {
    setCounter(value);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <h2> {counter} </h2>
      {/* crear una funcion externa y despues llamarla */}
      <button onClick={clickAdd}> +1 </button>
      <button onClick={clickSubtract}> -1 </button>
      <button onClick={clickReset}> Reset </button>
    </div>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

export default CounterApp;
