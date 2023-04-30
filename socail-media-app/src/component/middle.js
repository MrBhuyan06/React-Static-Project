import { feedData, storyData } from "../data/mockdata.js";
import Story from "./story.js";
import Feed from "./feed.js";
import { feedData } from "../data/mockdata.js";

const Middle = ({}) => {
  return (
    <div className="middle">
      <div className="storeis">
        {storyData.map((story, index) => {
          return <Story {...story} key={index} />;
        })}
      </div>
      <form action="" className="create-post">
        <div className="profile-picture">
          <img
            src="https://media.licdn.com/dms/image/C4E03AQGmCWo7X7mHjA/profile-displayphoto-shrink_400_400/0/1644122702759?e=1687996800&v=beta&t=lxUObIMT3vuPlTrdEFyBA8DbKxT6kX7ANiegX6NQEVI"
            alt=""
          />
        </div>
        <input type="text" placeholder="feel free to psot" id="create-post" />
        <input type="submit" className="btn btn-primary" />
      </form>
      <div className="feeds">
        {feedData.map((feed, index) => {
          return <Feed {...feed} key={index} />;
        })}
      </div>
    </div>
  );
};
export default Middle;
