import { go } from "connected-react-router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postService } from "../../../apis";
import { UIActions } from './../../../actions';
import { Utils } from "./../../../helper";
import { SelectCategoryInput } from "./SelectCategoryInput";
import { SelectTagsBoard } from "./SelectTagsBoard";

export const PostPage = (props) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [post, setPostProps] = useState({
    title: "",
    content: "",
    user: auth ? auth : null,
    tags: [],
    keyword: "",
    category: {},
  });

  const handleInput = (event) => {
    const { value, name } = event.target;
    setPostProps({ ...post, [name]: value });
  };

  const onCreatePost = (event) => {
    event.preventDefault();
    if (post.tags.length === 0) {
      Utils.alertNotice("Please select tags");
    } else {
      postService.createPost(post).then((response) => {
        if (response.status === 201)
          Utils.alertSuccess("Your post created").then((result) => {
            if (result.isConfirmed) {
              dispatch(go(0));
            }
          });
      });
    }
  };
  const pageFilters = {
    categoriesFilters: { limit: 10 }
  }
  useEffect(()=>{
    dispatch(UIActions.fetchDataPostPage(pageFilters))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div className="wrapper">
      <div className="row no-gutters">
        <div className="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch">
          <div className="contact-wrap w-100 p-md-5 p-4">
            <h3 className="mb-4">Create post</h3>
            <div id="form-message-warning" className="mb-4" />
            <div id="form-message-success" className="mb-4">
              Let's create your new post!
            </div>
            <form
              className="contactForm"
              onSubmit={(event) => onCreatePost(event)}
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="label" htmlFor="keyword">
                      Keyword
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="keyword"
                      placeholder="Main search keyword..."
                      required
                      value={post.keyword}
                      onChange={(event) => handleInput(event)}
                      />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <SelectCategoryInput post={post} setPostProps={setPostProps} />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="label" htmlFor="title">
                      Post title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      placeholder="Enter post title..."
                      value={post.title}
                      onChange={(event) => handleInput(event)}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="label" htmlFor="content">
                      Content
                    </label>
                    <textarea
                      style={{ padding: "15px" }}
                      name="content"
                      className="form-control"
                      cols={30}
                      rows={6}
                      placeholder="Enter post content..."
                      value={post.content}
                      onChange={(event) => handleInput(event)}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Create post"
                      className="btn btn-primary"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div
          className="col-lg-4 col-md-5 d-flex align-items-stretch"
          style={{ color: "white" }}
        >
          <SelectTagsBoard post={post} setPostProps={setPostProps} />
        </div>
      </div>
    </div>
  );
};
