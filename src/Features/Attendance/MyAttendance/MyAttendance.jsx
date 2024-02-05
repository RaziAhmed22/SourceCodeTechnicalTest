import { Box, Card, Typography } from "@mui/material";
import ProgressCard from "../../../Components/ProgressCard/ProgressCard";
import FilterIcon from "../../../assets/filter-icon.png";
import DonutChart from "../../../Components/Charts/DonutChart/DonutChart";
import BulletList from "../../../Components/BulletList/BulletList";
import JobList from "../../../Components/JobList/JobList";
import Annoucement from "../../../Components/Announcement/Annoucement";
import InterviewList from "../../../Components/InterviewList/InterviewList";
import CertificationList from "../../../Components/CertificationList/CertificationList";
import ReportingAuthorities from "../../../Components/ReportingAuthorities/ReportingAuthorities";
import SocialMedia from "../../../Components/SocialMedia/SocialMedia";
import Profile from "../../../Components/Profile/Profile";
import {
  certificationListData,
  interviewListData,
  jobListData,
  progressData,
  reportingAuthoritiesData,
} from "./data";

const MyAttendance = () => {
  return (
    <>
      <Profile />
      <Typography
        sx={{
          marginTop: "10px",
          fontSize: "18px",
          fontWeight: "400",
          lineHeight: "27px",
          marginLeft: "24px",
        }}
      >
        <span
          style={{
            fontSize: "18px",
            fontWeight: "700",
            lineHeight: "27px",
          }}
        >
          My Attendance Summary{" "}
        </span>
        (January-2024)
      </Typography>
      <Box
        sx={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {progressData?.map((item, ind) => (
          <ProgressCard key={ind} {...item} />
        ))}
      </Box>
      <Box sx={{ display: "flex", marginTop: "20px" }}>
        <Box>
          <Card
            sx={{
              padding: "24px 24px 12px 24px",
              width: "370px",
              position: "relative",
              borderRadius: "16px",
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
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "24px",
                  letterSpacing: "0.005em",
                }}
              >
                Number of Leave Remains
              </Typography>
              <img src={FilterIcon} alt="filter-icon" />
            </Box>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: "400",
                lineHeight: "18px",
                letterSpacing: "0.005em",
                color: "#848D9A",
              }}
            >
              As of now August 28, 2023.
            </Typography>
            <Box
              sx={{
                "& .Target-root": { height: "320px !important" },
              }}
            >
              <DonutChart />
            </Box>
            <Box>
              <Typography
                sx={{
                  position: "absolute",
                  top: 215,
                  left: 140,
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                Total Leave
              </Typography>
              <Typography
                sx={{
                  position: "absolute",
                  top: 235,
                  left: 170,
                  fontSize: "24px",
                  fontWeight: "800",
                  lineHeight: "36px",
                  letterSpacing: "0.005em",
                  color: "#008EFF",
                }}
              >
                16
              </Typography>
            </Box>
            <BulletList />
            <BulletList />
            <BulletList />
          </Card>
          <Card
            sx={{
              marginTop: "12px",
              borderRadius: "12px",
              padding: "20px",
              marginBottom: "12px",
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
              Recent Added Jobs
            </Typography>
            {jobListData?.map((item, ind) => (
              <JobList key={ind} {...item} />
            ))}
          </Card>
        </Box>
        <Box sx={{ marginLeft: "16px", width: "100%" }}>
          <Annoucement />
          <InterviewList data={interviewListData} />
        </Box>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ width: "613px" }}>
          <ReportingAuthorities data={reportingAuthoritiesData} />
          <CertificationList data={certificationListData} />
        </Box>
        <Box sx={{ width: "568px", marginLeft: "24px" }}>
          <SocialMedia />
        </Box>
      </Box>
    </>
  );
};

export default MyAttendance;
