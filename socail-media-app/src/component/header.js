import { AiOutlineSearch } from "react-icons/ai";
const Header = () => {
  return (
    <>
      <header className="">
        <nav className="container">
          <h2 className="logo">
            social- <span>App</span>
          </h2>

          <div className="search-bar">
            <AiOutlineSearch className="search-icon" />
            <input type="search" name="" id="" placeholder="search-post-here" />
          </div>

          <div className="create">
            <label htmlFor="create-post" className="btn btn-primary">
              create
            </label>
            <div className="profile-picture">
              <img
                src="https://media.licdn.com/dms/image/C4E03AQGmCWo7X7mHjA/profile-displayphoto-shrink_400_400/0/1644122702759?e=1687996800&v=beta&t=lxUObIMT3vuPlTrdEFyBA8DbKxT6kX7ANiegX6NQEVI"
                alt=""
              />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Header;
