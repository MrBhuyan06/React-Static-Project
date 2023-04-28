import React from "react";

import CustomIcon from "./customicon.js";

const MenuItem = ({ icon, name }) => {
  console.log(icon);

  console.log("gg", icon, name);
  return (
    <>
      <a className="menu-item active">
        <CustomIcon name={icon} />
        <h3>{name}</h3>
      </a>
    </>
  );
};
export default MenuItem;
