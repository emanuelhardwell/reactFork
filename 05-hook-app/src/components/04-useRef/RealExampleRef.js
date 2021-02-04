/*  */
/*  */
import React, { useState } from "react";
import { MultipleCustomHooks } from "../03-examples/MultipleCustomHooks";
import "./style.css";

export const RealExampleRef = () => {
  /*  */
  const [clickState, setClickState] = useState(false);

  return (
    <div>
      <h1>Use Ref in Case Real</h1>
      <hr></hr>
      {clickState && <MultipleCustomHooks />}
      <button className="btn btn-primary mt-3"
        onClick={() => {
          setClickState(!clickState);
        }}
      >
        Show / Hide
      </button>
    </div>
  );
};
