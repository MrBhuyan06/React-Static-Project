import CustomIcon from "./customicon.js";
import * as Icons from "react-icons/bi";
import SearchBar from "./searchbar.js";
import Message from "./message.js";
import { messageData } from "../data/mockdata.js";
import Request from "./request.js";
import { requestData } from "../data/mockdata.js";
const Right = () => {
  return (
    <>
      <div className="right">
        <div className="messages">
          <div className="heading">
            <h4>Messages</h4>
            <CustomIcon name={"BiBookmarkPlus"} />
          </div>

          <SearchBar />

          <div className="category">
            <h6 className="active">Primary</h6>
            <h6>General</h6>
            <h6 className="message-requests">Request(7)</h6>
          </div>

          {messageData.map((message, index) => {
            return <Message {...message} key={index} />;
          })}
        </div>
        <div class="friend-request">
          <h4>Request</h4>
          {requestData.map((data, index) => {
            return <Request {...data} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};
export default Right;
