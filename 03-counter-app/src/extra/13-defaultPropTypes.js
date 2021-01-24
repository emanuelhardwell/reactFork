import React from "react";
import PropTypes from "prop-types";

/* se destructura PROPS y sacamos SALUDO y le signamos "soy vegeta" por defecto,
en caso de que no tenga texto */
const PrimerApp = ({ saludo, subtitulo }) => {
  return (
    <>
      <h5> {saludo} </h5>
      <p>You are the best in the gym ITO </p>
      <h5>{subtitulo}</h5>
    </>
  );
};

/* para validar el tipo de dato que queremos pasar en el paraetro */
PrimerApp.propTypes = {
  saludo: PropTypes.string.isRequired,
};

PrimerApp.defaultProps = {
  subtitulo: "wirri mau mau",
};

export default PrimerApp;
