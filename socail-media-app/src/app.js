import React from "react";
import ReactDOM from "react-dom/client.js";
import Header from "./component/header.js";

const App = () => {
  return (
    <>
      <Header />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
