import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";
import "./style.css";

export const LoginScreen = ({ history }) => {
  /*  */

  const { dispatch } = useContext(AuthContext);
  const handleLogin = () => {
    /* history.push("/"); */

    const lastPath = localStorage.getItem("lastPath");

    dispatch({
      type: types.login,
      payload: {
        name: "Emanuel",
      },
    });

    history.replace(lastPath);
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="card">
              <div className="card-body">
                <h2 className="text-dark mb-3 text-center">LogIn</h2>
                <button className="btn btn-primary" onClick={handleLogin}>
                  LogIn
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
