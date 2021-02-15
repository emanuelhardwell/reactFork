import React, { useContext } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { LoginScreen } from "../components/login/LoginScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { Navbar } from "../components/ui/Navbar";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  /*  */

  const { user } = useContext(AuthContext);

  return (
    <Router>
      <div>
        <Switch>
          {/* <Route exact path="/login" component={LoginScreen} /> */}
          <PublicRoute
            exact
            path="/login"
            component={LoginScreen}
            isNotAuthenticated={user.logged}
          />

          <PrivateRoute
            path="/"
            component={DashboardRoutes}
            isAuthenticated={user.logged}
          />
        </Switch>
      </div>
    </Router>
  );
};
