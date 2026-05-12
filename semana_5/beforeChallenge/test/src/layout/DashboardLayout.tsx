import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  Switch,
} from "@mui/material";

import MenuIcon
  from "@mui/icons-material/Menu";

import { useState } from "react";

import DarkModeIcon
  from "@mui/icons-material/DarkMode";

import LightModeIcon
  from "@mui/icons-material/LightMode";

import Sidebar from "./Sidebar";

const drawerWidth = 240;

export default function DashboardLayout({
  children,
  cartCount,
  darkMode,
  setDarkMode,
}: any) {

  const isMobile =
    useMediaQuery("(max-width:768px)");

  const [open, setOpen] =
    useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>

      <CssBaseline />

      {/* HEADER */}

      <AppBar
        position="fixed"
        sx={{
          zIndex: 1201,
        }}
      >
        <Toolbar>

          {isMobile && (

            <IconButton
              color="inherit"
              edge="start"
              onClick={toggleDrawer}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>

          )}

          <Typography
            variant="h6"
            sx={{ flexGrow: 1 }}
          >
            Mi Dashboard
          </Typography>

          <Box
            sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
            }}
            >

            <LightModeIcon />

            <Switch
                checked={darkMode}
                onChange={() =>
                setDarkMode(!darkMode)
                }
            />

            <DarkModeIcon />

            </Box>

        </Toolbar>
      </AppBar>

      {/* SIDEBAR MOBILE */}

      {isMobile ? (

        <Drawer
          open={open}
          onClose={toggleDrawer}
        >
          <Sidebar
            cartCount={cartCount}
          />
        </Drawer>

      ) : (

        /* SIDEBAR DESKTOP */

        <Drawer
          variant="permanent"
          open
          sx={{
            width: drawerWidth,

            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Sidebar
            cartCount={cartCount}
          />
        </Drawer>

      )}

      {/* CONTENIDO */}

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8,
        }}
      >
        {children}
      </Box>

    </Box>
  );
}