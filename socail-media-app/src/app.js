import React from "react";
import ReactDOM from "react-dom/client.js";
import Header from "./component/header.js";
import SideBar from "./component/sidebar.js";
import Main from "./component/main.js";

const App = () => {
  return (
    <>
      <Header />
      <Main />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
