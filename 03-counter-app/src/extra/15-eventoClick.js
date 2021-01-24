/*  */
/*  */
/*  */
import React from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {
  const click = (e) => {
    console.log(e);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <h2> {value} </h2>
      {/* crear una funcion externa y despues llamarla */}
      <button onClick={click}> +1 </button>
      {/* crear la funcion adentro del evento   */}
      <button onDoubleClick={(e) => console.log(e)}> +5 </button>
    </div>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

export default CounterApp;
