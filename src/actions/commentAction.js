import { CommentTypes } from "../constants";

export const getCommentReplies = (id, filters) => {
  return { type: CommentTypes.GET_COMMENT_REPLIES, payload: { id, filters } };
};
export const getCommentRepliesSuccess = (replies) => {
  return { type: CommentTypes.GET_COMMENT_REPLIES_SUCCESS, payload: { replies } };
};
export const getCommentRepliesFailure = (error) => {
  return { type: CommentTypes.GET_COMMENT_REPLIES_FAILURE, payload: { error } };
};
