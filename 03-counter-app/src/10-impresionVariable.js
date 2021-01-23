import React from "react";

const PrimerApp = () => {
  const saludo = "Welcome Emanuel Vasquez";
  const edad = 23;
  const objetoPersona = {
    name: "Juan carlos",
    edad: 26,
    trabajo: "Licenciado en Biologia",
  };

  return (
    <>
      <h4> {saludo} </h4>
      <h4> {edad} </h4>
      <h5> {JSON.stringify(objetoPersona)} </h5>
      <pre> {JSON.stringify(objetoPersona, null, 3)} </pre>
      <p>You are the best in the gym ITO </p>
    </>
  );
};

export default PrimerApp;
