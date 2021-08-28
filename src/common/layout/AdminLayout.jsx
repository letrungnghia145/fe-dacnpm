import React from "react";
import { Switch } from "react-router-dom";
import { Footer, Header, PrivateRoute } from "../components";

export const AdminLayout = (props) => {
  console.log("AdminLayout");
  return (
    <>
      <Header></Header>
      <Switch>
        {fakeAdminRoutes.map((route, index) => (
          <PrivateRoute
            path={route.path}
            component={route.component}
            exact={route.isExact}
            key={index}
          />
        ))}
      </Switch>
      <Footer></Footer>
    </>
  );
};

const fakeAdminRoutes = [
  {
    path: "/admin/page1",
    isExact: false,
    component: (props) => <div>{console.log(props)}Page1</div>,
    roles: ["ROLE_ADMIN"],
  },
  {
    path: "/admin/page2",
    isExact: true,
    component: (props) => <div>Page2</div>,
    roles: ["ROLE_ADMIN"],
  },
  {
    path: "/admin/page3",
    isExact: false,
    component: (props) => <div>Page3</div>,
    roles: ["ROLE_ADMIN"],
  },
];
