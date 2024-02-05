/* eslint-disable react/prop-types */
import { Box, Card, Typography } from "@mui/material";
import PDFLogo from "../../assets/pdf-logo.png";
import IconButton from "@mui/material/IconButton";
import MoreIcon from "@mui/icons-material/MoreVert";

const CertificationList = ({ data = [] }) => {
  return (
    <Card
      sx={{
        marginY: "16px",
        padding: "12px 16px",
        width: "100%",
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
        Certification
      </Typography>
      {data.map(({ certification, date }, ind) => (
        <Box
          key={ind}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              marginTop: "16px",
            }}
          >
            <Card
              sx={{
                padding: "4px 8px",
              }}
            >
              <img
                src={PDFLogo}
                alt="pdf-logo"
                style={{ objectFit: "contain" }}
              />
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
                {certification}
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: "400",
                  lineHeight: "18px",
                  color: "#8F8F8F",
                }}
              >
                {date}
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

export default CertificationList;
