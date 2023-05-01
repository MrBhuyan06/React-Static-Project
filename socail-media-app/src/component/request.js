const Request = ({ imgLink, name, message }) => {
  return (
    <div class="request">
      <div class="info">
        <div class="profile-picture">
          <img src={imgLink} alt="" />
        </div>
        <div>
          <h5>{name}</h5>
          <p class="text-muted">{message}</p>
        </div>
      </div>
      <div class="action">
        <button class="btn btn-primary">Accept</button>
        <button class="btn">Accept</button>
      </div>
    </div>
  );
};
export default Request;
