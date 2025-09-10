import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
  const location = useLocation()
  
  const menuItems = [
    { path: '/', label: 'Dashboard'},
    { path: '/tickets', label: 'Tickets'},
    { path: '/teamsDashboard', label: 'Teams' },
    { path: '/productPage', label: 'Product'},
    { path: '/infrastructure', label: 'Infrastructure' },
    { path: '/safe', label: 'Safe' },
    { path: '/documents', label: 'Documents' },
    { path: '/knowledge-bases', label: 'Knowledge bases'},
    { path: '/tasks', label: 'Tasks' },
    { path: '/communication', label: 'Communication' },
    { path: '/reports', label: 'Reports' }
  ]

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`sidebar-item ${location.pathname === item.path ? 'active' : ''}`}
          >
            {/* <span className="sidebar-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="9" cy="9" r="2"></circle>
                <path d="M21 15.5c-1.5-1.5-4-1.5-5.5 0"></path>
                <path d="M12 12l9 9"></path>
              </svg>
            </span> */}
            <span className="sidebar-label">{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar

// import React from "react";
// import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import { Avatar, styled, useTheme, Tooltip } from "@mui/material";
// import MuiDrawer from "@mui/material/Drawer";
// import { useLocation, useNavigate } from "react-router-dom";
// import { grey } from "@mui/material/colors";
// import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
// import corelia from "../assets/corelia.jpeg";

// const drawerWidth = 240;

// const openedMixin = (theme) => ({
//   width: drawerWidth,
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: "hidden",
// });

// const closedMixin = (theme) => ({
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: "hidden",
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up("sm")]: {
//     width: `calc(${theme.spacing(8)} + 1px)`,
//   },
// });

// const Drawer = styled(MuiDrawer, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   width: drawerWidth,
//   flexShrink: 0,
//   whiteSpace: "nowrap",
//   boxSizing: "border-box",
//   ...(open && {
//     ...openedMixin(theme),
//     "& .MuiDrawer-paper": openedMixin(theme),
//   }),
//   ...(!open && {
//     ...closedMixin(theme),
//     "& .MuiDrawer-paper": closedMixin(theme),
//   }),
// }));

// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "flex-end",
//   padding: theme.spacing(0, 1),
//   ...theme.mixins.toolbar,
// }));

// const Array1 = [
//   { text: "Dashboard", icon: <DashboardOutlinedIcon />, path: "/dashboard" },
//   { text: "Tickets", path: "/tickets" },
//   { text: "Teams", path: "/teamsdashboard" },
//   { text: "products", path: "/productpage" },
//   { text: "Infrastructure", path: "/infrastructure" },
//   { text: "Safe", path: "/safe" },
//   { text: "Documents", path: "/documents" },
//   { text: "Knowledge", path: "/knowledge" },
//   { text: "Tasks", path: "/tasks" },
//   { text: "Communication", path: "/communication" },
//   { text: "Reports", path: "/reports" },
// ];

// const SideBar = ({ open, handleDrawerClose }) => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const theme = useTheme();

//   return (
//     <Drawer variant="permanent" open={open}>
//       <Divider />
//       <Avatar
//         sx={{
//           alignContent: "center",
//           textAlign: "center",
//           width: 200,
//           marginLeft: 1,
//           height: 72,
//           borderRadius: 0,
//         }}
//         alt="Randa Erfan"
//         src={corelia}
//       />

//       <Divider />

//       <List>
//         {Array1.map((item) => (
//           <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
//             <Tooltip title={open ? null : item.text} placement="left">
//               <ListItemButton
//                 onClick={() => {
//                   navigate(item.path);
//                 }}
//                 sx={{
//                   minHeight: 48,
//                   justifyContent: open ? "initial" : "center",
//                   px: 2.5,
//                   bgcolor:
//                     location.pathname === item.path
//                       ? theme.palette.mode === "dark"
//                         ? grey[800]
//                         : grey[300]
//                       : null,
//                 }}
//               >
//                 <ListItemIcon
//                   sx={{
//                     minWidth: 0,
//                     mr: open ? 3 : "auto",
//                     justifyContent: "center",
//                   }}
//                 >
//                   {item.icon}
//                 </ListItemIcon>
//                 <ListItemText
//                   primary={item.text}
//                   sx={{ opacity: open ? 1 : 0 }}
//                 />
//               </ListItemButton>
//             </Tooltip>
//           </ListItem>
//         ))}
//       </List>
//     </Drawer>
//   );
// };

// export default SideBar;
