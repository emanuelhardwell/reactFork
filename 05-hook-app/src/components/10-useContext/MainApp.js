/*  */
import React, { useState } from "react";
import { AppRouter } from "./AppRouter";
import { userContext } from "./UserContext";

export const MainApp = () => {
  /*  */

  const [user, setUser] = useState({});
  return (
    <div>
      <userContext.Provider value={{ user, setUser }}>
        <AppRouter />
      </userContext.Provider>
    </div>
  );
};
