import { Outlet } from "react-router-dom";
import SideBar from "../../Components/SideBar/SideBar";

const Attendance = () => {
  return (
    <SideBar>
      <Outlet />
    </SideBar>
  );
};

export default Attendance;
