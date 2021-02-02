/*  */
/*  */
import React, { useEffect, useState } from "react";
import { Message } from "./Message";
import "./style.css";

export const SimpleForm = () => {
  /*  */
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;

  useEffect(() => {
    /* console.log("Se ha ejecutado la primer VEZ"); */
  }, []);

  useEffect(() => {
    /* console.log("Se ha ejecutado el Formulario"); */
  }, [formState]);

  useEffect(() => {
    /* console.log("Se ha ejecutado el input Name"); */
  }, [name]);

  useEffect(() => {
    /* console.log("Se ha ejecutado el input Email"); */
  }, [email]);

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return (
    <div>
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
              {name=== "123" && <Message/>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
