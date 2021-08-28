import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { UIActions } from "../../../actions";

export const ProfilePage = (props) => {
  const { match } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(UIActions.fetchDataProfilePage(match.params.id));
  }, []);
  return <div>ProfilePage {match.params.id}</div>;
};
