import React from "react";
import { Route, Switch } from "react-router-dom";
import { Header, Footer, PrivateRoute } from "../components";

export const UserLayout = (props) => {
  const { match } = props;
  return (
    <>
      <Header></Header>
      <Switch>
        {fakeUserRoutes.map((route, index) => {
          return route.isPrivate ? (
            <PrivateRoute
              path={`${match.url}${route.path}`}
              render={(props) => route.component(props)}
              exact={route.isExact}
              key={index}
            />
          ) : (
            <Route
              path={`${match.url}${route.path}`}
              render={(props) => route.component(props)}
              exact={route.isExact}
              key={index}
            />
          );
        })}
      </Switch>
      <Footer></Footer>
    </>
  );
};

const fakeUserRoutes = [
  {
    path: "/page1",
    isExact: false,
    component: (props) => <div>Page1</div>,
    isPrivate: false,
    roles: ["ROLE_USER"],
  },
  {
    path: "/page2",
    isExact: false,
    component: (props) => <div>Page2</div>,
    isPrivate: true,
    roles: ["ROLE_USER", "ROLE_ADMIN"],
  },
  {
    path: "/page3",
    isExact: false,
    component: (props) => <div>Page3</div>,
    isPrivate: false,
    roles: ["ROLE_USER"],
  },
];
