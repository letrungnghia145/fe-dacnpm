import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UserActions } from "../../../../actions";
import { URL } from "../../../../constants";
import { Utils } from "../../../../helper";
import { postService } from './../../../../apis';

export const PostedPostItem = (props) => {
    const { title, createdDate, id, countViews } = props.post;
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth)
    const handleDeletePost = (event) => {
      event.preventDefault();
      Utils.alertNotice("Are you sure you want to delete?", "Delete", "danger").then((result) => {
        if(result.isConfirmed) {
          postService.deletePosts([id]).then(response => {
            if(response.status === 200) dispatch(UserActions.getUserPostedPosts(auth.id, {limit: 3, page: 1}))
          });
        }
      })
    }
    return (
      <details style={{marginTop: "10px"}}>
        <summary className="summary-description">
            <div>{title}</div>
            <Link to={`${URL.POST_DETAILS_URL}/${id}`} className="badge badge-pill badge-success p-2"
             style={{marginLeft: "10px"}}>{`${countViews} views`}</Link>
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
            <Link to={`${URL.POST_DELETE_URL}`} className="btn btn-outline-danger btn-round btn-sm"
              onClick={(event) => {handleDeletePost(event)}}
            >Delete post</Link>
          </div>
        </div>
      </details>
    );
  };