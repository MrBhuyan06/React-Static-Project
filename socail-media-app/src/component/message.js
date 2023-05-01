const Message = ({ imgLink, name, message }) => {
  return (
    <div class="message">
      <div class="profile-picture">
        <img src={imgLink} alt="" />
      </div>
      <div class="message-body">
        <h5>{name}</h5>
        <p class="text-bold">{message}</p>
      </div>
    </div>
  );
};
export default Message;
