import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { PostActions, UIActions } from "../../../actions";
import { PostsList } from "./PostsList";

export const PostsPage = () => {
  const dispatch = useDispatch();
  const pageFilters = {
    postsFilters: { limit: 5 },
  };
  useEffect(() => {
    dispatch(UIActions.fetchDataAdminPostsPage(pageFilters));
  }, []);
  return (
    <div className="container">
      <div className="row" style={{ marginBottom: "10px" }}>
        <div className="col-md-12">
          <div className="promoted-checkbox float-right">
            <input id="tmp" type="checkbox" className="promoted-input-checkbox" />
            <label htmlFor="tmp">
              Save recipient
            </label>
          </div>
        </div>
      </div>
      <PostsList />
    </div>
  );
};
