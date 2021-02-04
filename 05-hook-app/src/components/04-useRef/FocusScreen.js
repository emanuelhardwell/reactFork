/*  */
/*  */
import React, { useRef } from "react";
import "./style.css";

export const FocusScreen = () => {
  /*  */
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
  };

  return (
    <div className="container">
      <div className="col-md-8 mx-auto">
        <div className="card">
          <div className="card-body">
            <div className="form-group mb-3">
              <input
                ref={inputRef}
                type="text"
                className="form-control"
                placeholder="Tu nombre"
              />
            </div>
            <div className="form-group">
              <button className="btn btn-primary" onClick={handleClick}>
                Focus
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
