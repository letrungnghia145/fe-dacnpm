import { go, push } from "connected-react-router";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { TOKEN_KEY, URL } from "../../../constants";

export const LoginStatus = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const doLogout = (event) => {
    event.preventDefault();
    localStorage.removeItem(TOKEN_KEY);
    dispatch(go(0));
  };
  if (auth) {
    return (
      <div className="navbar-brand float-right">
        <i className="fa fa-user-circle-o user-class" style={{ cursor: "pointer" }} aria-hidden="true" >
          <span className="mr-2" />
          {auth.email}
        </i>
        <div className="user-dropdown">
          <ul>
            <li>
              <i className="fa fa-address-card-o mr-2" aria-hidden="true" />
              <Link to={`${URL.USER_PROFILE_URL}`}>Profile</Link>
            </li>
            <li>
              <i className="fa fa-pencil mr-2" aria-hidden="true" />
              <Link to={`${URL.POST_CREATE_URL}`}>Create post</Link>
            </li>
            <li>
              <i className="fa fa-forward mr-2" aria-hidden="true" />
              <Link to="/logout" onClick={(event) => doLogout(event)}>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  return (
    <div
      className="navbar-brand float-right login"
      onClick={() => dispatch(push(URL.LOGIN_URL))}
    >
      <i className="fa fa-key mr-2" aria-hidden="true" />
      Login
    </div>
  );
};
