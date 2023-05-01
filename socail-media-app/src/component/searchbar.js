import CustomIcon from "./customicon.js";
import * as Icons from "react-icons/bi";
const SearchBar = () => {
  return (
    <div className="search-bar">
      <CustomIcon name={"BiSearchAlt"} />
      <input type="search" placeholder="search Message" id="message-search" />
    </div>
  );
};
export default SearchBar;
