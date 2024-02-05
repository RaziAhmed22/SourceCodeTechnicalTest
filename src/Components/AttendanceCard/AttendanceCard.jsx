/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";

const AttendanceCard = ({ text, number }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        background: "#29AB91",
        padding: "7px 72px 6px 15px",
        borderRadius: "10px",
        marginTop: "24px",
        width: "190px",
      }}
    >
      <Typography
        sx={{
          fontSize: "14px",
          fontWeight: "400",
          lineHeight: "21px",
          letterSpacing: "0em",
          color: "#fff",
          marginBottom: "10px",
        }}
      >
        {text}
      </Typography>
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: "600",
          lineHeight: "30px",
          letterSpacing: "0em",
          color: "#fff",
        }}
      >
        {number}
      </Typography>
    </Box>
  );
};

export default AttendanceCard;
