import { Box, Button, Card, Typography } from "@mui/material";
import ProfileImg from "../../assets/profile.png";
import EditIcon from "../../assets/edit-icon.png";
import EditButtonIcon from "../../assets/edit-button-icon.png";

const Profile = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "240px",
        position: "relative",
        background:
          "url('https://s3-alpha-sig.figma.com/img/269d/dd76/462c42c51f8a480781f4ba1c4090e43d?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=THsytoPW8UqOhGB65f6Gei-vFEvCpm-qLEVQxw3TAS0EBxOjDjgHpDdPv8A-bbQx7n4FxQbE9y4z0g~VRocNiOzYQA7WuS9WtfIBdM49LsFar4ZXiDBH93dTbjQBS9c8d3uVvJYzoB2PXkURTQlEpiDlW2oyxf42eIEUzeb6oMwfDtpkRfJIbuLMxsJyC720xmUuYm~kRvjguvTrAj5-B4iqleXFgdQhKSoCPg-o-gzpep3nm-3ODSqrza1Biv9bVTG49xl5ifaPrKo3ICVuSHvvrE08NjlMJNPsUznXWLcH5AYZJWd74fiYJNhlkTTy8buRdozijXl--4m1huHbeA__')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "inset 0 0 0 2000px rgba(41, 160, 149, 0.7)",
        borderBottomLeftRadius: "20px",
        borderBottomRightRadius: "20px",
        marginBottom: "60px",
      }}
    >
      <Card
        sx={{
          position: "absolute",
          bottom: "-30px",
          left: "30px",
          width: "95%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginRight: "36px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ position: "relative" }}>
              <img
                src={ProfileImg}
                alt="profile"
                width={80}
                height={80}
                style={{
                  objectFit: "contain",
                  margin: "16px 12px 10px 16px",
                  position: "relative",
                }}
              />
              <img
                src={EditIcon}
                alt="edit-icon"
                style={{ position: "absolute", bottom: "5px", left: "65px" }}
              />
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "400",
                  lineHeight: "25px",
                  color: "#2D3748",
                }}
              >
                M Rameez
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "20px",
                  color: "#718096",
                }}
              >
                Senior
              </Typography>
            </Box>
          </Box>
          <Box>
            <Button
              sx={{
                background: "#fff",
                color: "#2D3748",
                textTransform: "none",
                borderRadius: "25px",
                width: "130px",
              }}
              variant="contained"
              startIcon={<img src={EditButtonIcon} alt="edit" />}
            >
              <Typography sx={{ marginLeft: "8px" }}>Edit</Typography>
            </Button>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default Profile;
