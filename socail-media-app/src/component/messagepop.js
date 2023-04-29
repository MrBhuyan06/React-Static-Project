const MessagePop = ({ imgLink, f_name, textMsg, smallmsg }) => {
  return (
    <>
      <div className="message-pop">
        <div className="profile-picture">
          <img src={imgLink} alt="" />
        </div>
        <div className="message-body">
          <b>{f_name}</b> {textMsg}
          <small className="text-muted">{smallmsg}</small>
        </div>
      </div>
    </>
  );
};
export default MessagePop;
