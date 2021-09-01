import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UIActions } from "../../../actions";
import { InfoBoard } from "./InfoBoard";
import { PostedPostsList } from "./PostedPostsList";
import { SharedPostsList } from "./SharedPostList";
import { TabBoard } from "./TabBoard";
// import { InfoBoard } from "./InfoBoard";


export const ProfilePage = (props) => {
  const auth = useSelector((state) => state.auth);
  const pageFilters = {
    id: auth.id,
    sharedPostsFilters: { limit: 3 },
    postedPostsFilters: { limit: 3 }
  }
  const dispatch = useDispatch();
  const { id } = auth;
  useEffect(() => {
      dispatch(UIActions.fetchDataProfilePage(pageFilters));
  }, []);
  return (
    <>
      <div className="row">
        <div className="col-lg-6">
          <img
            className="img-fluid rounded mb-4"
            src="http://placehold.it/750x450"
            alt=""
          />
          <TabBoard />
        </div>
        <div className="col-lg-6">
          <InfoBoard user={auth} />
          <PostedPostsList id={id} />
        </div>
      </div>
      <hr />
      <h4 className="bg-primary text-white text-bold" style={{padding: "10px", fontWeight: "bold"}}>Shared posts list</h4>
      <hr></hr>
      <SharedPostsList id={id} />
    </>
  );
};
