/*  */
/*  */
/* import React, { useState } from "react"; */
import { useForm } from "../../hooks/useForm";
import "./style.css";

export const FormWithCustomHook = () => {
  /*  */
  const [value, handleInputChange] = useForm({
    name: "",
    email: "",
  });

  const { name, email } = value;

  const submitData = (e) => {
    e.preventDefault();
    console.log(value);
  };

  return (
    <form onSubmit={submitData}>
      <div className="container">
        <div className="col-md-8 mx-auto">
          <div className="card">
            <div className="card-body">
              <div className="form-group mb-3">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Name"
                  autoComplete="off"
                  value={name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  autoComplete="off"
                  value={email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group mb-3">
                <button className="btn btn-primary">Enviar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
