import { useState } from "react";
import { useSelector } from "react-redux";
import { userService } from "../../../apis";

export const ActionControl = (props) => {
  const { post, auth } = props;
  const [isVoted, setVoted] = useState(false);
  const [isShared, setShared] = useState(false);
  const sharers = useSelector((state)=> state.page.sharers);
  const voters = useSelector((state)=> state.page.voters);

  const check = sharers && sharers.data.filter(u=>u.id === auth.id).length > 0;

  const handleSharePost = (status) => {
    if (status) {
      userService.removeSharedPost(auth.id, post).then((response) => {
        if (response.status === 200) setShared(false);
      });
    } else {
      userService.addSharedPost(auth.id, post).then((response) => {
        if (response.status === 200) setShared(true);
      });
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "end" }}>
      <span className={`btn btn-outline-primary btn-round btn-sm mr-2`}>
        <i className="fa fa-heart-o mr-1" aria-hidden="true"></i>
        Vote
      </span>
      <span className={`btn btn${ check ? "-" : "-outline-" }primary btn-round btn-sm`}
        onClick={() => {
          handleSharePost(isShared);
        }}
      >
        <i className="fa fa-bookmark-o mr-1" aria-hidden="true"></i>
        Share to profile
      </span>
    </div>
  );
};
