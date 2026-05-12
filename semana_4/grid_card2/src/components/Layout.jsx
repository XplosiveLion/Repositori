import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useState } from "react";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const drawerWidth = 240;

export default function Layout() {
  const isMobile = useMediaQuery("(max-width:768px)");

  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ display: "flex" }}>
      <Navbar
        isMobile={isMobile}
        toggleDrawer={() => setOpen(!open)}
      />

      <Sidebar
        isMobile={isMobile}
        open={open}
        closeDrawer={() => setOpen(false)}
      />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: "100%",
          ml: isMobile ? 0 : `${drawerWidth}px`,
          mt: "64px",
          p: 3,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}