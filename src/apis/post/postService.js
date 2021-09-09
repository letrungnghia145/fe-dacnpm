import { AxiosClient } from "../AxiosClient";

const client = new AxiosClient({ endpoint: "/v1/posts" });

const getPosts = (filters) => {
  return client.get(undefined, filters);
};

const getPost = (id) => {
  return client.get(`/${id}`);
};

const createPost = (post) => {
  return client.post(undefined, post);
};

// const updatePost = (post) =>{}

const deletePost = (id) => {
  return client.delete(`${id}`);
};

const getComments = (id, filters) => {
  return client.get(`/${id}/comments`, filters);
};

const addComment = (id, comment) => {
  return client.post(`/${id}/comments`, comment);
};

const addVoter = (id, voter) => {
  return client.post(`/${id}/voters`, voter);
};

const getVoters = (id, filters) => {
  return client.get(`/${id}/voters`, filters);
};

const deletePosts = (ids) => {
  const body = { ids }
  return client.delete(undefined, body);
};

export const postService = {
  getPosts: (filters) => getPosts(filters),
  getPost: (id) => getPost(id),
  createPost: (post) => createPost(post),
  // updatePost: (post) => updatePost(post),
  deletePost: (id) => deletePost(id),
  getComments: (id, filters) => getComments(id, filters),
  addComment: (id, comment) => addComment(id, comment),
  addVoter: (id, voter) => addVoter(id, voter),
  getVoters: (id, filters) => getVoters(id, filters),
  deletePosts: (ids) => deletePosts(ids),
};
