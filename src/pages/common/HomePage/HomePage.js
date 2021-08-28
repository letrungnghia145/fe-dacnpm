import { push } from "connected-react-router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AuthActions, UIActions } from "../../../actions";

export const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(UIActions.fetchDataHomePage(), []);
  })
  return ( 
    <div>
      <button onClick={() => dispatch(push("/login"))}>LOGIN</button>
      <button onClick={() => dispatch(push("/register"))}>REGISTER</button>
      <button onClick={() => dispatch(push("/admin/page2"))}>ADMINPAGE</button>
      <button onClick={() => dispatch(push("/user/profile/1"))}>USERPAGE</button>
      <button onClick={() => dispatch(AuthActions.logout())}>LOGOUT</button>
      <button onClick={() => dispatch(push("/post/1"))}>POSTDETAILSPAGE</button>
    </div>
  );
};
