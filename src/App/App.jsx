import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "../Features/NotFound/NotFound";
import SignIn from "../Features/SignIn/SignIn";
import Attendance from "../Features/Attendance";
import MyAttendance from "../Features/Attendance/MyAttendance/MyAttendance";
import AttendanceSumary from "../Features/Attendance/AttendanceSummary/AttendanceSumary";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/attendance" element={<Attendance />}>
          <Route path="my-attendance" element={<MyAttendance />} />
          <Route path="summary" element={<AttendanceSumary />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
