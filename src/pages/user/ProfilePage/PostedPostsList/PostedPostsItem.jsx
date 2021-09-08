import { Link } from "react-router-dom";
import { URL } from "../../../../constants";

export const PostedPostItem = (props) => {
    const { title, createdDate, id } = props.post;
    return (
      <details style={{marginTop: "10px"}}>
        <summary className="summary-description">
            <div>{title}</div>
            <Link to={`${URL.POST_DETAILS_URL}/${id}`} className="badge badge-pill badge-success p-2"
             style={{marginLeft: "10px"}}>100 views</Link>
        </summary>
        <p className="details-content">
          Literally it does not mean anything. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book.
          Literally it does not mean anything. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book.
          Literally it does not mean anything. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book.
        </p>
        <div className="details-control">
          <span>Created: {createdDate}</span>
          <div>
            <Link to={`${URL.POST_EDIT_URL}`} className="btn btn-outline-warning btn-round btn-sm mr-1">Edit post</Link>
            <Link to={`${URL.POST_DELETE_URL}`} className="btn btn-outline-danger btn-round btn-sm">Delete post</Link>
          </div>
        </div>
      </details>
    );
  };