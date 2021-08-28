import { push } from "connected-react-router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { AuthActions } from "./actions";
import "./App.css";
import { PrivateRoute } from "./common";
import { Confirm } from "./Confirm";
import { TOKEN_KEY } from "./constants";
import { routes } from "./routes";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const isLoggedIn = localStorage.getItem(TOKEN_KEY);
    if (isLoggedIn) {
      dispatch(AuthActions.authorizeUser());
    }
  });
  return (
    <>
      <Switch>
        {showRoutes(routes)}
        <PrivateRoute path="/admin/dashboard" component={() => (
            <div>
              <button onClick={() => { dispatch(AuthActions.logout()); }} >LOGOUT</button>
              <button onClick={() => { dispatch(push("/")); }} >HOME</button>
            </div>
          )}
          roles={["ROLE_ADMIN"]}
        />
        <Route path="/confirm" component={Confirm} />
      </Switch>
    </>
  );
}

export default App;

const showRoutes = (routes) => {
  return routes.map((route, index) => {
    const { roles } = route;
    if (roles.length > 0) {
      return <PrivateRoute key={index} {...route} />;
    } else {
      return <Route key={index} {...route} />;
    }
  });
};
