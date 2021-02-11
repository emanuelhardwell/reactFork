/*  */
import React, { useContext } from "react";
import { userContext } from "./UserContext";

export const HomeScreen = () => {
  const { user } = useContext(userContext);
  console.log(user);

  return (
    <div>
      <h1 className="text-center">Home Screen</h1>
      <hr></hr>
      <pre className="fs-2">{JSON.stringify(user, null, 3)}</pre>
    </div>
  );
};
