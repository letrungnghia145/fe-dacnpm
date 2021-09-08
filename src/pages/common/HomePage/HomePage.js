import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { UIActions } from "../../../actions";
import { TagBoard } from "../../../common";
import { PostsList } from "./PostsList";


export const HomePage = (props) => {
  const dispatch = useDispatch();
  const pageFilters = {
    postsFilters: {
      limit: 3,
    },
    tagsFilters: {}
  }
  useEffect(() => {
    dispatch(UIActions.fetchDataHomePage(pageFilters));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="row">
      <PostsList />
      <TagBoard/>
    </div>
  );
};
