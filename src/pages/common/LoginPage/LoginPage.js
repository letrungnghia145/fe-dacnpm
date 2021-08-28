import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { AuthActions } from "../../../actions";

export const LoginPage = (props) => {
  const { state } = props.location;
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const handleLogin = (email) => {
    dispatch(
      AuthActions.authenticateUser({
        email,
        password: "1234",
      })
    );
  }
  if (auth) {
    const redirect = state ? state.from : auth.role === "ROLE_ADMIN" ? "/admin/dashboard" : "/";
    return <Redirect to={redirect} />;
  }
  return (
    <div>
      <button onClick={() => handleLogin("nghia1k45@gmail.com")}>Login admin</button>
      <button onClick={() => handleLogin("Tiana13@gmail.com")}>Login user</button>
    </div>
  );
};
