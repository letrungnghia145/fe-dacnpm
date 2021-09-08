import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router";
import { PostActions, UIActions } from "../../../actions";
import { postService } from "../../../apis";
import { TagBoard } from "../../../common";
import { CommentForm } from "./CommentForm";
import { CommentList } from "./CommentList";
import { PostContent } from "./PostContent";
import { RelatedPostList } from "./RelatedPostList";

export const PostDetailsPage = (props) => {
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const auth = useSelector((state) => state.auth);
  const voters = useSelector((state) => state.page.voters);
  const isVoted = voters ? voters.data.find(v => v.id === auth ? auth.id : v.id) ? true : false : false;
  const pageFilters = {
    postsFilters: { limit: 3 },
    tagsFilters: { limit: 10 },
    postCommentsFilters: { limit: 3 },
    postVotersFilters: { id: auth? `eq:${auth.id}`: null },
    id: match.params.id,
  };
  const onComment = (content) => {
    const comment = {
      content,
      author: auth ? auth : null,
    };
    postService.addComment(pageFilters.id, comment).then(response => {
      if (response.status === 201) {
        dispatch(PostActions.getPostComments(pageFilters.id, pageFilters.postCommentsFilters))
      }
    });
  };

  useEffect(() => {
    if (auth && auth.id) {
      dispatch(UIActions.fetchDataPostDetailsPage(pageFilters));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  return (
    <>
      <div className="row">
        <div className="col-lg-8" style={{ marginTop: "-14px" }}>
          <PostContent />
          <hr />
          <div style={{display: 'flex', justifyContent: 'end'}}>
            <button className={`btn btn${!isVoted?"-outline":""}-info btn-round btn-sm mr-2`}>
              <i className="fa fa-heart-o mr-1" aria-hidden="true"></i>
              {isVoted ? "Voted":"Vote"}
            </button>
            <button className="btn btn-outline-info btn-round btn-sm">
              <i className="fa fa-bookmark-o mr-1" aria-hidden="true"></i>
              Share to profile
            </button>
          </div>
          <hr />
          <CommentList id={pageFilters.id} />
          <CommentForm message="Leave a comment" onComment={onComment} />
        </div>
        <TagBoard />
      </div>
      <hr></hr>
      <h3>Related Posts</h3>
      <hr></hr>
      <RelatedPostList />
    </>
  );
};
