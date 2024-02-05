export const sideBarOptions = [
  {
    id: 1,
    option: "Dashboard",
    icon: "grid_view",
    children: [],
  },
  {
    id: 2,
    option: "Attendance",
    icon: "settings",
    link: "attendance",
    navPath: "/attendance/summary",
    children: [
      {
        id: 21,
        option: "Attendance Request",
      },
      {
        id: 22,
        option: "My Attendance",
        path: "my-attendance",
      },
      {
        id: 23,
        option: "Attendance Summary",
        path: "summary",
      },
      {
        id: 24,
        option: "My Shift Time",
      },
    ],
  },
  {
    id: 3,
    option: "Leave",
    icon: "folder",
    children: [],
  },
  {
    id: 4,
    option: "Recruitment",
    icon: "description",
    children: [],
  },
  {
    id: 5,
    option: "Payroll",
    icon: "airplay",
    children: [],
  },
  {
    id: 6,
    option: "Loan",
    icon: "real_estate_agent",
    children: [],
  },
  {
    id: 7,
    option: "Other",
    icon: "tune",
    children: [],
  },
];
