import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { UIActions } from "../../../actions";
import { TagsBoard } from "./../../../common";
import { CommentForm } from "./CommentForm";
import { CommentList } from "./CommentList";
import { PostContent } from "./PostContent";
import { RelatedPostList } from "./RelatedPostList";

export const PostDetailsPage = (props) => {
  const dispatch = useDispatch();
  const pageFilters = {
    postsFilters: {},
    tagsFilters: {},
    postCommentsFilters: {},
    id: props.match.params.id,
  }
  useEffect(() => {
    dispatch(UIActions.fetchDataPostDetailsPage(pageFilters));
  }, []);
  return (
    <>
      <div className="row">
        <div className="col-lg-8" style={{ marginTop: "-14px" }}>
          <PostContent />
          <hr />
          <button
            type="button"
            className="btn btn-primary btn-fab btn-round btn-sm"
            style={{ position: "relative", right: -666 }}
          >
            <i className="ion-ios-heart"/>
          </button>
          <hr />
          <CommentForm message="Leave a comment" />
          <CommentList/>
        </div>
        <TagsBoard />
      </div>
      <hr></hr>
      <RelatedPostList/>
      {/* <hr></hr> */}
    </>
  );
};
