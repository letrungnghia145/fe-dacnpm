import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostActions } from "../../../actions";
import { PostsItem } from "./PostsItem";

export const PostsList = () => {
  const posts = useSelector((state) => state.page.posts);
  const [selected, setSelected] = useState([]);
  const dispatch = useDispatch();
  const [currentPosts, setCurrentPosts] = useState([]);
  const showItems = (posts) => {
    return posts.map((post) => (
      <PostsItem key={post.id} post={post} selected={selected} setSelected={setSelected} />
    ));
  };
  useEffect(() => {
   if(posts) setCurrentPosts([...currentPosts, ...posts.data]);
  }, [posts])
  if (currentPosts.length > 0) {
    const { limit, total, page } = posts.pagination;
    return (
      <>
        <ul className="list-group">{showItems(currentPosts)}</ul>;
        <div className="show-more" onClick={() => {
            if (page < total) dispatch(PostActions.getAllPosts({ limit, page: page + 1}))
        }}>
          {page !== total ? <i className="fa fa-angle-double-down animate" aria-hidden="true" /> : null}
        </div>
      </>
    );
  }
  return <div className="text-center">No posts found.</div>;
};
