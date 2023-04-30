const Story = ({ imgLink, text, bgimg }) => {
  return (
    <div
      className="story"
      style={{
        backgroundImage: `url(${bgimg}) `,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        bg,
      }}
    >
      <div class="profile-picture">
        <img src={imgLink} alt="" />
      </div>
      <p class="name">{text}</p>
    </div>
  );
};
export default Story;
