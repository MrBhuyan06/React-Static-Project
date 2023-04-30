import SideBar from "./sidebar.js";
import Middle from "./middle.js";
const Main = () => {
  return (
    <main>
      <div className="container">
        <SideBar />
        <Middle />
      </div>
    </main>
  );
};
export default Main;
