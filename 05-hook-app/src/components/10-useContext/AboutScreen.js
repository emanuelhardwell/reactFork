/*  */
import React, { useContext } from "react";
import { userContext } from "./UserContext";

export const AboutScreen = () => {
  /*  */
  const { user, setUser } = useContext(userContext);

  const handleLogout = () => {
    setUser({});
  };

  return (
    <div>
      <h1>About Screen</h1>
      <hr></hr>
      <pre className="fs-2">{JSON.stringify(user, null, 3)}</pre>
      <button className="btn btn-danger" onClick={handleLogout}>
        Log Out
      </button>
    </div>
  );
};
