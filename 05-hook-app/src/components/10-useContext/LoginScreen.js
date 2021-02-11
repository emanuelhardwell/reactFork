/*  */
import React, { useContext } from "react";
import { userContext } from "./UserContext";

export const LoginScreen = () => {
  /*  */
  const { setUser } = useContext(userContext);

  const newUser = {
    id: 12345,
    name: "Emanuel",
    email: "emanuel@gmail.com",
  };
  return (
    <div>
      <h1>Login Screen</h1>
      <hr></hr>
      <button className="btn btn-primary" onClick={() => setUser(newUser)}>
        Actualizar dato
      </button>
    </div>
  );
};
