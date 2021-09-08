import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

export const UserInfoPage = (props) => {
  const { id } = props.match.params;
  const auth = useSelector((state) => state.auth);
  if (auth && auth.id === parseInt(id)) {
    return <Redirect to="/user/profile" />;
  }
  return <div></div>;
};
