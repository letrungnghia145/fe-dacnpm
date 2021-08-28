import { HomePage, LoginPage, PostDetailsPage, RegisterPage } from "../pages";

const prefix = "";

export const commonRoutes = [
  {
    path: `${prefix}/`,
    exact: true,
    roles: [],
    component: (props) => <HomePage {...props} />,
  },
  {
    path: `${prefix}/login`,
    exact: true,
    roles: [],
    component: (props) => <LoginPage {...props} />,
  },
  {
    path: `${prefix}/register`,
    exact: true,
    roles: [],
    component: (props) => <RegisterPage {...props} />,
  },
  {
    path: `${prefix}/post/1`,
    exact: true,
    roles: [],
    component: (props) => <PostDetailsPage {...props} />,
  },
];
