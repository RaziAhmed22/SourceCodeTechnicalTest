/* eslint-disable react/prop-types */
import { Box, CircularProgress, Typography } from "@mui/material";
import Trend from "../../assets/trend.png";

const ProgressCard = ({
  heading,
  trend,
  number,
  percentage,
  backgroundColor,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "296px",
        height: "119px",
        top: "423px",
        left: "311px",
        padding: "20px",
        borderRadius: "10px",
        backgroundColor,
      }}
    >
      <Box>
        <Typography
          sx={{
            color: "#fff",
            fontSize: "18px",
            fontWeight: "600",
            lineHeight: "21px",
            letterSpacing: "0em",
          }}
        >
          {heading}
        </Typography>
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: "600",
            lineHeight: "30px",
            letterSpacing: "0em",
            color: "#fff",
            margin: "10px 0px",
          }}
        >
          {number}
        </Typography>
        <Typography sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img src={Trend} alt="Trend" />
          <span
            style={{
              fontSize: "12px",
              fontWeight: "400",
              lineHeight: "18px",
              letterSpacing: "0em",
              color: "#fff",
            }}
          >
            {trend}
          </span>
        </Typography>
      </Box>
      <Box sx={{ position: "relative", display: "inlineflex" }}>
        <CircularProgress
          size={80}
          variant="determinate"
          value={percentage}
          sx={{ color: "#fff" }}
        />
        <Box
          sx={{
            top: 22,
            left: 16,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6" component="div" color="#fff">
            +{percentage}%
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProgressCard;
