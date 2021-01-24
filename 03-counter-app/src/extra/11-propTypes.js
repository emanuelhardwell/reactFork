import React from "react";
import PropTypes from "prop-types";

/* se destructura PROPS y sacamos SALUDO y le signamos "soy vegeta" por defecto,
en caso de que no tenga texto */
const PrimerApp = ({ saludo }) => {
  return (
    <>
      <h5> {saludo} </h5>
      <p>You are the best in the gym ITO </p>
    </>
  );
};

/* para validar el tipo de dato que queremos pasar en el paraetro */
PrimerApp.propTypes = {
  saludo: PropTypes.string.isRequired,
};

export default PrimerApp;
