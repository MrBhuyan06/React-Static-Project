import SideBar from "./sidebar.js";
import Middle from "./middle.js";
import Right from "./right.js";
const Main = () => {
  return (
    <main>
      <div className="container">
        <SideBar />
        <Middle />
        <Right />
      </div>
    </main>
  );
};
export default Main;
