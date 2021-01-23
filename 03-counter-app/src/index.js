/*  */
/*  */
import React from "react";
import ReactDOM from "react-dom";
import PrimerApp from "./PrimerApp";
import "./index.css";

/* const saludo = <h1>Hola mundo ...welcome Emanuel</h1>;

const divRoot = document.querySelector("#root");

ReactDOM.render(saludo, divRoot); */

const divRoot = document.querySelector("#root");
ReactDOM.render(<PrimerApp />, divRoot);
