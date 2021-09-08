import { Link } from "react-router-dom";
import { URL } from './../../constants';

export const PostUtilItem = (props) => {
  const { title, content, id } = props.post;
  const { actionText } = props;
  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-body pb-5 px-4">
          <h5 className="card-title">{title}</h5>
          <p className="card-text rlt-item-content">{content}</p>

          <Link to={`${URL.POST_DETAILS_URL}/${id}`} className="btn btn-info">
            {actionText}
          </Link>
        </div>
      </div>
    </div>
  );
};
