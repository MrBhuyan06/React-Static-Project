import {
  BiHomeAlt2,
  BiCompass,
  BiMessageAdd,
  BiBookBookmark,
  BiAnalyse,
  BiColor,
} from "react-icons/bi";
import MenuItem from "./menuitem.js";
import { useEffect, useState } from "react";
import { sideBarData } from "../data/mockdata.js";

const SideBar = () => {
  console.log(sideBarData);
  return (
    <>
      <div className="left">
        <div className="top-profile">
          <div className="profile-picture">
            <img
              src="https://media.licdn.com/dms/image/C4E03AQGmCWo7X7mHjA/profile-displayphoto-shrink_400_400/0/1644122702759?e=1687996800&v=beta&t=lxUObIMT3vuPlTrdEFyBA8DbKxT6kX7ANiegX6NQEVI"
              alt=""
            />
          </div>
          <p className="text-muted">@gudu</p>
        </div>
        <div className="side-bar">
          {sideBarData.map((menudata, index) => {
            return <MenuItem {...menudata} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default SideBar;
