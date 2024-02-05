/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import JobIcon from "../../assets/job-icon.png";

const JobList = ({ title, location, time }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        background: "#F9F9F9",
        borderRadius: "10px",
        padding: "10px",
        marginTop: "10px",
      }}
    >
      <img src={JobIcon} alt="job-icon" style={{ objectFit: "contain" }} />
      <Box sx={{ marginLeft: "12px" }}>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "600",
            lineHeight: "18px",
            letterSpacing: "0em",
            color: "#333333",
            marginBottom: "4px",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: "400",
            lineHeight: "15px",
            letterSpacing: "0em",
            color: "#8F8F8F",
          }}
        >
          {location} - {time}
        </Typography>
      </Box>
    </Box>
  );
};

export default JobList;
