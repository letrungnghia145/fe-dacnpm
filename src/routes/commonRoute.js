import { HomePage, LoginPage, PostDetailsPage, RegisterPage, UserInfoPage } from "../pages";

const prefix = "";

export const commonRoutes = [
  {
    path: `/`,
    exact: true,
    roles: [],
    component: (props) => <HomePage {...props} />,
  },
  {
    path: `/login`,
    exact: true,
    roles: [],
    component: (props) => <LoginPage {...props} />,
  },
  {
    path: `/register`,
    exact: true,
    roles: [],
    component: (props) => <RegisterPage {...props} />,
  },
  {
    path: `/post/:id`,
    exact: true,
    roles: [],
    component: (props) => <PostDetailsPage {...props} />,
  },
  {
    path: `/userInfo/:id`,
    exact: true,
    roles: [],
    component: (props) => <UserInfoPage {...props} />,
  },
];
