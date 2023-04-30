import CustomIcon from "./customicon.js";
import * as Icons from "react-icons/bi";
const Feed = ({
  imgLink,
  name,
  loaction,
  time,
  doticon,
  postimg,
  hearticon,
  commenticon,
  shareIcon,
  bookmark,
  personone,
  persontwo,
  personthree,
}) => {
  return (
    <div className="feed">
      <div className="head">
        <div className="user">
          <div className="profile-picture">
            <img src={imgLink} alt="" />
          </div>
          <div className="info">
            <h3>{name}</h3>
            <small>{loaction}</small>
          </div>
        </div>
        <span>
          <CustomIcon name={doticon} />
        </span>
      </div>

      <div className="photo">
        <img src={postimg} alt="" />
      </div>

      <div className="action-btn">
        <div className="interation-buttons">
          <span>
            <CustomIcon name={hearticon} />
          </span>
          <span>
            <CustomIcon name={commenticon} />
          </span>
          <span>
            <CustomIcon name={shareIcon} />
          </span>
        </div>
        <div className="bookmark">
          <span>
            <CustomIcon name={bookmark} />
          </span>
        </div>
      </div>

      <div className="like-by">
        <span>
          <img src={personone} alt="" />
        </span>
        <span>
          <img src={persontwo} alt="" />
        </span>
        <span>
          <img src={personthree} alt="" />
        </span>
        <p>
          Liked by <b>Abhishek</b> and <b>234 others</b>
        </p>
      </div>

      <div className="caption">
        <p>
          <b>Lets Conntect</b> Lorem ipsum dolor sit.
          <span className="harsh-tag">#Educationd</span>
        </p>
        <div className="text-muted comments">View all 277 Comments</div>
      </div>
    </div>
  );
};
export default Feed;
