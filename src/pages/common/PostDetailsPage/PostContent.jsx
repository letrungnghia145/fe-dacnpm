import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const PostContent = () => {
  const post = useSelector((state) => state.page.post);
  if (post) {
    const { firstName, lastName, id } = post.author;
    return (
      <>
        <img className="img-fluid rounded" src="http://placehold.it/900x300" alt="" />
        <hr />
        <p>
          Posted on {post.createdDate}
          <span className="float-right">
            By <Link to={`/userInfo/${id}`}>{`${firstName} ${lastName}`}</Link>
          </span>
        </p>
        <hr />
        <p className="lead">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus,
          vero, obcaecati, aut, error quam sapiente nemo saepe quibusdam sit
          excepturi nam quia corporis eligendi eos magni recusandae laborum
          minus inventore?
        </p>
        <p>{post.content}</p>
      </>
    );
  } else {
    return null;
  }
};
