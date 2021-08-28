import { ProfilePage } from "./../pages";

const prefix = "/user";

export const userRoutes = [
  {
    path: `${prefix}/profile/:id`,
    exact: true,
    roles: ["ROLE_USER"],
    component: (props) => <ProfilePage {...props} />,
  },
  {
    path: `${prefix}/page2`,
    exact: true,
    roles: ["ROLE_USER"],
    component: (props) => <div>Page2</div>,
  },
  {
    path: `${prefix}/page3`,
    exact: false,
    roles: ["ROLE_ADMIN", "ROLE_USER"],
    component: (props) => <div>Page3</div>,
  },
];
