import { Outlet } from "react-router-dom";
import SideBar from "../../Components/SideBar/SideBar";

const Dashboard = () => {
  return (
    <>
      <SideBar />;
      <Outlet />
    </>
  );
};

export default Dashboard;
