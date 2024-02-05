import { Box, Card, Typography } from "@mui/material";
import DropDownButton from "../DropDownButton/DropDownButton";
import SocialMediaIframeImg from "../../assets/social-media-iframe-img.png";

const SocialMedia = () => {
  return (
    <Card
      sx={{
        marginY: "16px",
        padding: "24px",
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
          Source Code
        </Typography>
        <DropDownButton text="Facebook" />
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <img
          src={SocialMediaIframeImg}
          alt="Social Media"
          width={520}
          height={620}
          style={{ objectFit: "cover", marginTop: "16px" }}
        />
      </Box>
    </Card>
  );
};

export default SocialMedia;
