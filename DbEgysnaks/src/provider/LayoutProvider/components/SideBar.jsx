import React from "react";
 import { Avatar, Tooltip, Typography,Divider,IconButton ,ListItem,
  ListItemButton,List,
  ListItemIcon,
  ListItemText } from "@mui/material";

 import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MuiDrawer from "@mui/material/Drawer";
 
 import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import ManageHistorySharpIcon from '@mui/icons-material/ManageHistorySharp';

import { styled, useTheme } from "@mui/material/styles";
 import { useLocation,useNavigate } from "react-router-dom";

import { grey } from "@mui/material/colors";

export default function SideBar({ open, handleDrawerClose }) {
  const theme = useTheme();
  const navigate = useNavigate();
  let location = useLocation();

  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  }));

  const drawerWidth = 240;

  const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
  });

  const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),

    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  const Array1 = [
    { text: "Dashboard", icon: <HomeOutlinedIcon />, path: "/" },
    { text: "Manage Team", icon: <PeopleOutlinedIcon />, path: "/team" },
    {
      text: "Contacts Information",
      icon: <ContactsOutlinedIcon />,
      path: "/contacts",
    },
    {
      text: "Invoices Balances",
      icon: <ReceiptOutlinedIcon />,
      path: "/invoices",
    },
  ];

  const Array2 = [
    { text: "Profile Form", icon: <PersonOutlinedIcon />, path: "/form" },
    {
      text: "Calendar",
      icon: <CalendarTodayOutlinedIcon />,
      path: "/calendar",
    },
    {
      text: "FAQ Page",
      icon: <HelpOutlineOutlinedIcon />,
      path: "/faq",
    },
    {
      text: "Updates",
      icon: <ManageHistorySharpIcon />,
      path: "/Updates",
    },
  ];

  const Array3 = [
    { text: "Bar Chart", icon: <BarChartOutlinedIcon />, path: "/nivoCharts/bar" },
    { text: "Pie Chart", icon: <PieChartOutlineOutlinedIcon />, path: "/nivoCharts/pie" },
    { text: "Line Chart", icon: <TimelineOutlinedIcon />, path: "/nivoCharts/line" },
    { text: "Geography Chart", icon: <MapOutlinedIcon />, path: "/nivoCharts/geography" },
  ];

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>

      <Avatar
        alt="Remy Sharp"
        // src="/static/images/avatar/1.jpg"
        sx={{
          mx: "auto",
          width: open ? 88 : 44,
          height: open ? 88 : 44,
          mt: 2,
          border: "2px soild gray",
          transition: "110.25s",
        }}
      />
      <Typography
        align="center"
        fontSize={open ? 20 : 0}
        sx={{ transition: "100.25s" }}
      >
        khaled
      </Typography>
      <Typography
        align="center"
        fontSize={open ? 15 : 0}
        sx={{ transition: "100.25s", color: theme.palette.info.main }}
      >
        admin
      </Typography>

      <Divider />
      <List>
        {Array1.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
            <Tooltip placement="right" title={open?null: item.text}>
              <ListItemButton
                onClick={() => {
                  navigate(item.path);
                }}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  bgcolor:
                    location.pathname == item.path
                      ? theme.palette.mode === "dark"
                        ? grey[800]
                        : grey[400]
                      : null,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
      <Divider />

      <List>
        {Array2.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
            <Tooltip placement="right" title={open?null: item.text}>
              <ListItemButton
                onClick={() => {
                  navigate(item.path);
                }}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  bgcolor:
                    location.pathname == item.path
                      ? theme.palette.mode === "dark"
                        ? grey[800]
                        : grey[400]
                      : null,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
      <Divider />

      <List>
        {Array3.map((item) => (
          <Tooltip key={item.path} placement="right" title={open?null: item.text}>
            <ListItem  disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={() => {
                  navigate(item.path);
                }}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  bgcolor:
                    location.pathname == item.path
                      ? theme.palette.mode === "dark"
                        ? grey[800]
                        : grey[400]
                      : null,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </Tooltip>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
}
