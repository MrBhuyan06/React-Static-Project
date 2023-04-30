import React, { useState } from "react";

import CustomIcon from "./customicon.js";
import MessagePop from "./messagepop.js";
import { messagePop } from "../data/mockdata.js";

const MenuItem = ({ icon, name, count, msgCount }) => {
  console.log(icon);
  [classActive, setClassActive] = useState("");

  console.log("gg", icon, name);
  if (name === "Notification") {
    return (
      <a className="menu-item">
        <CustomIcon className="menu-icon" name={icon} />
        <span className="notification-count">{count}</span>
        <h3>{name}</h3>
        <div className="message-popup">
          {messagePop.map((message, index) => {
            return <MessagePop {...message} />;
          })}
        </div>
      </a>
    );
  }
  if (name === "Message") {
    return (
      <a className="menu-item ">
        <CustomIcon name={icon} />
        <span className="notification-count">{msgCount}</span>
        <h3>{name}</h3>
      </a>
    );
  }

  return (
    <>
      <a
        onClick={() => {
          setClassActive("active");

          console.log(classActive);
        }}
        className={
          classActive === "active" ? "menu-item  active  " : "menu-item  "
        }
      >
        <CustomIcon className="icon-menu" name={icon} />
        <h3>{name}</h3>
      </a>
    </>
  );
};
export default MenuItem;
