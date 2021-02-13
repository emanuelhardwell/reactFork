import React from "react";
import "./style.css";

export const LoginScreen = ({ history }) => {
  /*  */
  const handleLogin = () => {
    /* history.push("/"); */
    history.replace("/");
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
