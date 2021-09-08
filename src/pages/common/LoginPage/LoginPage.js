import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { AuthActions } from "../../../actions";
import { URL } from "../../../constants";

export const LoginPage = (props) => {
  const { state } = props.location;
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [user, setInput] = useState({email: "", password: ""});
  const doLogin = (event) => {
    event.preventDefault();
    dispatch(AuthActions.authenticateUser(user));
  };
  if (auth) {
    const redirect = state ? state.from : auth.role === "ROLE_ADMIN" ? "/admin/dashboard" : URL.HOME_URL;
    return <Redirect to={redirect} />;
  }
  return (
      <div
        className="lgu-container"
      >
        <div className="card card-login py-4" style={{width: "500px"}}>
          <form className="form-login" onSubmit={event=>{doLogin(event)}}>
            <div className="card-header card-header-primary text-center" >
              <h4 className="card-title">Login to continue</h4>
            </div>
            <div className="card-body px-4 pb-4 pt-2">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="ion-ios-contact" />
                  </span>
                </div>
                <input type="email" name="email" className="form-control" placeholder="Email..." required
                  value={user.email}
                  onChange={(event) => {setInput({...user, email: event.target.value})}}
                />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="ion-ios-lock" />
                  </span>
                </div>
                <input type="password" className="form-control" placeholder="Password..." required
                  value={user.password}
                  onChange={(event) => {setInput({...user, password: event.target.value})}}
                />
              </div>
            </div>
            <div className="footer text-center">
              <button
                type="submit"
                className="btn btn-outline-white font-weight-bold mr-3"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
  );
};
