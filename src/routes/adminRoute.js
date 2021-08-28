import { AdminDashBoard } from "./../pages";

const prefix = "/admin";

export const adminRoutes = [
  {
    path: `${prefix}`,
    exact: true,
    roles: ["ROLE_ADMIN"],
    component: (props) => <AdminDashBoard {...props} />,
  },
  {
    path: `${prefix}/page2`,
    exact: false,
    roles: ["ROLE_ADMIN"],
    component: (props) => <div>Page2</div>,
  },
  {
    path: `${prefix}/page3`,
    exact: false,
    roles: ["ROLE_ADMIN"],
    component: (props) => <div>Page3</div>,
  },
];
