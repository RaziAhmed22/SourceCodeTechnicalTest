import { Box, Card, Typography } from "@mui/material";
import DropDownButton from "../DropDownButton/DropDownButton";

const Annoucement = () => {
  return (
    <Card
      sx={{
        padding: "12px 16px",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "600",
            lineHeight: "27px",
            letterSpacing: "0em",
          }}
        >
          Announcement{" "}
        </Typography>
        <DropDownButton />
      </Box>
      <Typography
        sx={{
          marginTop: "12px",
          fontSize: "14px",
          fontWeight: "600",
          lineHeight: "22px",
          letterSpacing: "0em",
        }}
      >
        Quaid E Azam Day & Christmas
      </Typography>
      <Typography
        sx={{
          marginTop: "8px",
          marginBottom: "18px",
          fontSize: "14px",
          fontWeight: "400",
          lineHeight: "24px",
          letterSpacing: "0.005em",
          color: "#32363E",
          opacity: "0.8",
        }}
      >
        Dear Team,
        <br />
        We wanted to inform you that the office will be closed on Monday,
        December 25th, 2023, in celebration of Quaid E Azam Day &
        Christmas.Please be advised that all team members are expected to resume
        work on Tuesday, December 26th, 2023. Work from home or leave requests
        on this day will not be permitted, and absences may result in sandwich
        leave deduction as per company policy. We wish you a delightful holiday
        filled with joy and relaxation.
        <br />
        Best Regards,
      </Typography>
    </Card>
  );
};

export default Annoucement;
