/* eslint-disable react/prop-types */
import { Box, Card, Typography } from "@mui/material";
import DropDownButton from "../DropDownButton/DropDownButton";
import IconButton from "@mui/material/IconButton";
import MoreIcon from "@mui/icons-material/MoreVert";

const InterviewList = ({ data = [] }) => {
  return (
    <Card
      sx={{
        marginTop: "16px",
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
          Meeting and Interview
        </Typography>
        <DropDownButton />
      </Box>
      {data?.map(({ event, day, date }, ind) => (
        <Box
          key={ind}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "24px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <Card
              sx={{
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: "600",
                  lineHeight: "16px",
                  color: "#FFA600",
                }}
              >
                {day}
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: "600",
                  lineHeight: "16px",
                  color: "#333333",
                }}
              >
                {date}
              </Typography>
            </Card>
            <Box>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "600",
                  lineHeight: "18px",
                  color: "#333333",
                }}
              >
                {event}
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: "400",
                  lineHeight: "18px",
                  color: "#8F8F8F",
                }}
              >
                9:00 am - 11:30 am
              </Typography>
            </Box>
          </Box>
          <Box sx={{ background: "#F5F6FA", padding: "0px 1px !important" }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
              sx={{ padding: "5px !important" }}
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Box>
      ))}
    </Card>
  );
};

export default InterviewList;
