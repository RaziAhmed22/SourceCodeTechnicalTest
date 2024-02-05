import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Box, Button, TextField } from "@mui/material";
import { Grid } from "@mui/material";
import HRLogo from "../../assets/HRLogo.png";
import SourceCodeLogo from "../../assets/source-code-logo.png";
import MegaHCMLogo from "../../assets/mega-hcm-logo.png";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { loggingIn } from "./signInSlice";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = yup.object({
    employeeCode: yup
      .string("Enter your employee code")
      .required("Employee code is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      employeeCode: "",
      password: "",
    },
    validationSchema: validationSchema,
  });

  const handleLogIn = (val) => {
    dispatch(loggingIn(val));
    navigate("/attendance/summary");
  };

  return (
    <Grid
      container
      sx={{
        padding: 0,
        margin: 0,
        width: "100%",
        height: "100vh",
        background:
          "url('https://s3-alpha-sig.figma.com/img/3b2f/f499/b0df221ce95e4d14d97fd8b0d1516ef2?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=osLd8wkyv2di33NvM4OJBDsAObpBHfoLepD4xL72GFzjTD0I-xgnJ8FYsuKsXW4xIkSoqd9LY5crAP7t-IezPv5FDxG~VfNJGleJpFkTg0BdhYaSnSDUlAS1OXN4eNWIbQjXPxuCr5SDxyXartD~E-x3Hf0K1VcIdIV9mWOSqeKXiiQl7Q1PPncb7GwAwE~MoJV7~3HlD62bBjHm3-n5p5ejF0uRlJaBYHIHJE7ekm6T3xwt7M-XVBWJj8Y27j10885H3WhpMkpORyjd7zWM7YPTlP-s0nSXONY-EVaRlRZ2KsFX~-eAXpZ33JiBuR4mzczXiayEAlAiZrHP3HbbKg__')",
        backgroundSize: "cover",
        boxShadow: "inset 0 0 0 2000px rgba(255, 255, 255, 0.7)",
      }}
      spacing={2}
    >
      <Grid
        item
        xs={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box>
          <img src={HRLogo} alt="logo" style={{ objectFit: "contain" }} />
        </Box>
        <Typography
          sx={{
            margin: "10px 0px",
            fontFamily: "Kanit",
            fontSize: "24px",
            fontWeight: "600",
            lineHeight: "35px",
            letterSpacing: "0em",
          }}
        >
          <span style={{ color: "#3F4254" }}>The Ultimate </span>
          <span style={{ color: "#29A095" }}>HR Management Solution</span>
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "12px",
            fontWeight: "500",
            lineHeight: "27px",
            letterSpacing: "0em",
            color: "#7E8299",
            width: "508px",
          }}
        >
          At SourceCode, we have a reliable, secure and adaptable HR management
          built from the ground up.We are determined to help our employees to
          give their best efforts every day to achieve the goals of their job.
        </Typography>
      </Grid>
      <Grid
        item
        xs={5}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          padding: "0px !important",
          alignItems: "center",
        }}
      >
        <Card
          sx={{
            width: "395px",
            padding: "0px 50px",
            borderWidth: "3px",
            borderStyle: "solid",
            borderImage:
              "linear-gradient(135.59deg, #29A095 1.28%, rgba(88, 130, 193, 0.11) 96.26%)",
            borderRadius: "30px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "40px",
            }}
          >
            <img
              src={SourceCodeLogo}
              alt="logo"
              style={{ objectFit: "contain", width: "258px", height: "98px" }}
            />
          </Box>
          <Typography sx={{ textAlign: "center", margin: "20px 0px 10px 0px" }}>
            Log in to start your session
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              label="Employee Code"
              name="employeeCode"
              variant="outlined"
              placeholder="Employee Code"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              sx={{ width: "395px", margin: "20px 0px 25px 0px" }}
            />
            <TextField
              type="password"
              name="password"
              label="Password"
              variant="outlined"
              placeholder="Password"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              sx={{ width: "395px" }}
            />
          </form>

          <Button
            onClick={() => handleLogIn(formik.values)}
            disabled={
              !formik.values.employeeCode ||
              !(formik.values.password.length > 8)
            }
            variant="contained"
            sx={{
              width: "395px",
              height: "48px",
              background: "#29A095",
              margin: "40px 0px",
            }}
          >
            LOG IN
          </Button>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img
              src={MegaHCMLogo}
              alt="logo"
              style={{ objectFit: "contain", height: "44px" }}
            />
          </Box>

          <Typography
            sx={{
              textAlign: "center",
              fontFamily: " Inter",
              fontSize: " 13px",
              fontWeight: " 400",
              lineHeight: " 20px",
              letterSpacing: " 0em",
              margin: "40px 0px",
            }}
          >
            © 2024 MegaHCM. All Rights Reserved
          </Typography>
        </Card>
      </Grid>
    </Grid>
  );
};

export default SignIn;
