/* eslint-disable react/prop-types */
import { Box, Button, Card, Chip, Typography } from "@mui/material";
import Profile from "../../../Components/Profile/Profile";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import AttendanceCard from "../../../Components/AttendanceCard/AttendanceCard";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import FilterIcon from "../../../assets/filter-icon.png";
import Table from "../../../Components/Table/Table";
import { headers, rows } from "./TableData";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import OnTimeLogo from "../../../assets/on-time.png";
import OffDayLogo from "../../../assets/off-day.png";
import { attendanceData } from "./attendanceData";
import { useSelector } from "react-redux";

const ArrivalStatus = ({ status }) => {
  if (status === "On Time")
    return (
      <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <img src={OnTimeLogo} alt="on-time" />
        <Typography sx={{ color: "#2BA58D" }}>{status}</Typography>
      </Box>
    );
  if (status === "Off Day")
    return (
      <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <img src={OffDayLogo} alt="off-day" />
        <Typography sx={{ color: "#F6C549" }}>{status}</Typography>
      </Box>
    );
};

const AttendanceSumary = () => {
  const user = useSelector((state) => state.signIn.user);

  console.log(user);

  const keys = rows?.[0] ? Object.keys(rows?.[0]) : [];

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#EDEDED",
      color: "#3C3C3C",
      fontWeight: 700,
      textAlign: "left",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      textAlign: "left",
    },
  }));

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    background: "#EBEBEB !important",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "#21252B",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));
  return (
    <>
      <Profile />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            marginTop: "10px",
            fontSize: "18px",
            fontWeight: "400",
            lineHeight: "27px",
            marginLeft: "24px",
          }}
        >
          <span
            style={{
              fontSize: "18px",
              fontWeight: "700",
              lineHeight: "27px",
            }}
          >
            My Attendance Summary{" "}
          </span>
          (January-2024)
        </Typography>
        <Button
          variant="contained"
          sx={{ background: "#27988E", textTransform: "none" }}
          endIcon={<AddOutlinedIcon />}
        >
          View Attendance Report
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {attendanceData?.map((item, ind) => (
          <AttendanceCard key={ind} {...item} />
        ))}
      </Box>
      <Card sx={{ padding: "24px 0px", marginTop: "24px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "24px",
          }}
        >
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: "#21252B" }} />
            </SearchIconWrapper>
            <StyledInputBase
              sx={{ width: "320px" }}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <img
            src={FilterIcon}
            alt="filter-icon"
            style={{ marginRight: "24px", objectFit: "contain" }}
            height={28}
            width={28}
          />
        </Box>
        <Box sx={{ padding: "0 24px" }}>
          <Table headers={headers}>
            <TableBody>
              {rows.map((row, ind) => (
                <StyledTableRow key={ind}>
                  {keys.map((key) => (
                    <StyledTableCell key={key} align="right">
                      {key === "attSource" ? (
                        <Chip
                          label={row[key]}
                          color={ind % 2 === 0 ? "info" : "success"}
                        />
                      ) : key === "status" ? (
                        <ArrivalStatus status={row[key]} />
                      ) : (
                        row[key]
                      )}
                    </StyledTableCell>
                  ))}
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Card>
    </>
  );
};

export default AttendanceSumary;
