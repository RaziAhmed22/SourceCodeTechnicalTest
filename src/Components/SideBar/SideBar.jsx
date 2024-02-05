/* eslint-disable react/prop-types */
import { Fragment, useState } from "react";
import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Header from "../Header/Header";
import { Box, Collapse } from "@mui/material";
import LeftArrow from "../../assets/side-bar-arrow.png";
import MegaHCMLogo from "../../assets/mega-hcm-logo2.png";
import { sideBarOptions } from "./SideBarOptions";
import { useLocation, useNavigate } from "react-router-dom";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const ListItemIconStyled = styled(ListItemIcon)(() => ({
  minWidth: 0,
  marginRight: 8,
}));

const ListItemButtonStyled = styled(ListItemButton)(() => ({
  padding: 0,
}));

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: "0px 24px",
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const SideBar = ({ children }) => {
  const location = useLocation();
  const path = location.pathname.split("/");
  const [open, setOpen] = useState(true);
  const [show, setShow] = useState(path?.[1]);
  const [active] = useState(path?.[1]);
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleCollapse = (id) => setShow(id);

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <CssBaseline />
      <Header handleDrawerOpen={handleDrawerOpen} open={open} />

      <Drawer
        sx={{
          color: "#ffffff !important",
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            color: "#ffffff !important",
            background: "#29A095 !important",
            width: drawerWidth,
            boxSizing: "border-box",

            "& .MuiList-padding": {
              paddingTop: "0px !important",
              paddingBottom: "0px !important",
            },
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{ background: "#29A095" }}>
          <IconButton
            onClick={() => navigate("/")}
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <img src={MegaHCMLogo} alt="logo" />
            <img
              src={LeftArrow}
              alt="closing-arrow"
              onClick={handleDrawerClose}
            />
          </IconButton>
        </DrawerHeader>
        <Divider sx={{ border: "1px dashed #FFFFFF", margin: "0px 10px" }} />
        {sideBarOptions?.map((data) => {
          const { id, option, icon, children, link, navPath } = data || {};
          return (
            <Fragment key={id}>
              <List sx={{ "& .MuiSvgIcon-root": { color: "#FFFFFF" } }}>
                <ListItem
                  onClick={() => link && navigate(navPath)}
                  sx={{
                    "& .Mui-selected": {
                      backgroundColor: "#fff !important",
                      color: "#29A095",
                    },
                  }}
                  disablePadding
                >
                  <ListItemButton selected={link === active}>
                    <ListItemIconStyled>
                      <span
                        style={{
                          color: !(link === active) ? "#FFFFFF" : "#29A095",
                        }}
                        className="material-symbols-outlined"
                      >
                        {icon}
                      </span>
                    </ListItemIconStyled>
                    <ListItemText primary={option} />
                    {!!children?.length &&
                      (link === active && show ? (
                        <ExpandMore
                          style={{
                            color: !show === id ? "#FFFFFF" : "#29A095",
                          }}
                          onClick={() => handleCollapse(null)}
                        />
                      ) : (
                        <ExpandLess
                          style={{
                            color: !show === id ? "#FFFFFF" : "#29A095",
                          }}
                          onClick={() => handleCollapse(active)}
                        />
                      ))}
                  </ListItemButton>
                </ListItem>
              </List>
              {!!children?.length && (
                <Collapse
                  in={link === active && show}
                  timeout="auto"
                  unmountOnExit
                >
                  {children.map((data) => {
                    return (
                      <ListItem
                        onClick={() => navigate(data?.path)}
                        key={data.id}
                        sx={{
                          pl: 4,
                          "& .MuiSvgIcon-root": { color: "#FFFFFF" },
                          "& .MuiListItem-padding": {
                            paddingTop: "0px !important",
                            paddingBottom: "0px !important",
                          },
                        }}
                      >
                        <ListItemButtonStyled
                          sx={
                            data?.path === path?.[2]
                              ? {
                                  backgroundColor: "#fff !important",
                                  color: "#29A095",
                                  paddingX: "10px",
                                }
                              : {
                                  paddingX: "10px",
                                }
                          }
                        >
                          <ListItemText primary={data.option} />
                        </ListItemButtonStyled>
                      </ListItem>
                    );
                  })}
                </Collapse>
              )}
            </Fragment>
          );
        })}
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
};

export default SideBar;
