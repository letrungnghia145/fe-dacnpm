import { AxiosClient } from "../AxiosClient";

const client = new AxiosClient({ endpoint: "/v1/tags" });

const getAllTags = (filters) => {
  return client.get(undefined, filters);
};

// const getTa

const createTag = (tag) => {
  return client.post(undefined, tag);
};

const getPosts = (id, filters) => {
  return client.get(`/${id}/posts`, filters);
};

export const tagService = {
  getAllTags: (filters) => getAllTags(filters),
  //   getTag: (id) => getTag(id),
  createTag: (tag) => createTag(tag),
  getPosts: (id, filters) => getPosts(id, filters),
};
