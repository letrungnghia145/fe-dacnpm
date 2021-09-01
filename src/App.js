import { push } from "connected-react-router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, Route, Switch } from "react-router-dom";
import { AuthActions } from "./actions";
import "./App.css";
import { Footer, Header, Heading, PostCardItem, PrivateRoute } from "./common";
import { Confirm } from "./Confirm";
import { TOKEN_KEY } from "./constants";
import { routes } from "./routes";
import { HomePage } from "./pages";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem(TOKEN_KEY)) {
      dispatch(AuthActions.authorizeUser());
    }
  });
  return (
    <>
      <Header />
      <div className="container">
        <Heading />
        {showRoutes(routes)}
      </div>
      <Footer />
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

const showLinks = (routes) => {
  return routes.map((route, index) => {
    return (
      <div key={index}>
        <Link to={route.path}>{route.path}</Link>
        <br />
      </div>
    );
  });
};
