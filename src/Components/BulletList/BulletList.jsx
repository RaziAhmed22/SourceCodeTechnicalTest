import { Box, Typography } from "@mui/material";

const BulletList = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "12px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <span
          style={{
            height: "16px",
            width: "16px",
            backgroundColor: "#42A5F5",
            borderRadius: "50%",
            display: "inline-block",
          }}
        />
        <span style={{ marginLeft: "16px" }}>Sick Leave</span>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography
          sx={{
            marginRight: "8px",
            fontSize: "14px",
            fontWeight: "600",
            lineHeight: "21px",
            letterSpacing: "0.005em",
          }}
        >
          5
        </Typography>
        <Box
          sx={{
            color: "#29AB91",
            width: "55px",
            height: "28px",
            borderRadius: "16px",
            background: "#8C62FF1A",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          43%
        </Box>
      </Box>
    </Box>
  );
};

export default BulletList;
