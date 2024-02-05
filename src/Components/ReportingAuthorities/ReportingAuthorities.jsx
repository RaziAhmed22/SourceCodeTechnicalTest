/* eslint-disable react/prop-types */
import { Box, Card, Typography } from "@mui/material";
import AuthorityImg from "../../assets/authority.png";

const ReportingAuthorities = ({ data = [] }) => {
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
          Report Authorities
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: "12px",
          justifyContent: "space-between",
        }}
      >
        {data?.map(({ title, name }, ind) => (
          <Box
            key={ind}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src={AuthorityImg} alt="authority" />
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "600",
                lineHeight: "21px",
                letterSpacing: "0em",
                color: "#000000",
                marginTop: "18px",
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "24px",
                letterSpacing: "0em",
                color: "#26327A",
                marginTop: "4px",
              }}
            >
              {name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Card>
  );
};

export default ReportingAuthorities;
