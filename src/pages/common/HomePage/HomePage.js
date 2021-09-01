import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { UIActions } from "../../../actions";
import { TagsBoard } from "../../../common";
import { PostList } from "./PostList";


const pageFilters = {
  postsFilters: {
    limit: 3,
  },
  tagsFilters: {}
}
export const HomePage = (props) => {
  // const [pageFilters, setFilters] = 
  const ref = useRef({})
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(UIActions.fetchDataHomePage(pageFilters));
  }, []);
  return (
    <div className="row">
      <PostList />
      <TagsBoard/>
    </div>
  );
};
