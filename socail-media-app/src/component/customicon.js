import * as Icons from "react-icons/bi";
const CustomIcon = ({ name }) => {
  const FaIcon = Icons[name];
  if (!FaIcon) return <p>Icon not found!</p>;

  return <FaIcon />;
};
export default CustomIcon;
