import { PostTypes } from "./../constants";

export const getPostDetails = (id) => {
  return { type: PostTypes.GET_POST_DETAILS, payload: { id } };
};
export const getPostDetailsSuccess = (post) => {
  return { type: PostTypes.GET_POST_DETAILS_SUCCESS, payload: { post } };
};

export const getPostVoters = (id, filters) => {
  return { type: PostTypes.GET_POST_VOTERS, payload: { id, filters } };
};

export const getAllPosts = (filters) => {
  return { type: PostTypes.GET_ALL_POSTS, payload: { filters } };
};
export const getAllPostsSuccess = (posts) => {
  return { type: PostTypes.GET_ALL_POSTS_SUCCESS, payload: { posts } };
};

export const getPostComments = (id, filters) => {
  return { type: PostTypes.GET_POST_COMMENTS, payload: { id, filters } };
};
export const getPostCommentsSuccess = (comments) => {
  return { type: PostTypes.GET_POST_COMMENTS_SUCCESS, payload: { comments } };
};

export const createNewPost = (post) => {
  return { type: PostTypes.CREATE_NEW_POST, payload: { post } };
};

export const deletePost = (id) => {
  return { type: PostTypes.DELETE_POST, payload: { id } };
};

export const addPostComment = (id, comment) => {
  return { type: PostTypes.ADD_POST_COMMENT, payload: { id, comment } };
};

export const addPostVoter = (id, voter) => {
  return { type: PostTypes.ADD_POST_VOTER, payload: { id, voter } };
};

export const deleteAllPostsByIds = (ids) => {
  return { type: PostTypes.DELETE_ALL_POST_BY_IDS, payload: { ids } };
};
