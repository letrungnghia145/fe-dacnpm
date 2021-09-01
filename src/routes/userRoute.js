import { ProfilePage, PostPage } from "./../pages";

const prefix = "/user";

export const userRoutes = [
  {
    path: `${prefix}/profile`,
    exact: true,
    roles: ["ROLE_USER", "ROLE_ADMIN"],
    component: (props) => <ProfilePage {...props} />,
  },
  {
    path: `${prefix}/post/create`,
    exact: true,
    roles: ["ROLE_USER", "ROLE_ADMIN"],
    component: (props) => <PostPage {...props} />,
  },
  {
    path: `${prefix}/page3`,
    exact: false,
    roles: ["ROLE_USER"],
    component: (props) => <div>Page3</div>,
  },
];
