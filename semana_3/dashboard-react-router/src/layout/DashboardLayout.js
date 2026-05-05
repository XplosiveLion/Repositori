import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Box,
  useMediaQuery
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;

export default function DashboardLayout() {

  const isMobile = useMediaQuery("(max-width:600px)");
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const toggleDrawer = () => setOpen(!open);

  // 🔗 navegación real
  const handleNavigation = (path) => {
    navigate(path);
    if (isMobile) setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>

      {/* APPBAR */}
      <AppBar position="fixed">
        <Toolbar>
          {isMobile && (
            <IconButton color="inherit" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6">
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      {/* DRAWER */}
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? open : true}
        onClose={toggleDrawer}
        sx={{
          width: drawerWidth,
          "& .MuiDrawer-paper": { width: drawerWidth }
        }}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavigation("/")}>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavigation("/users")}>
              <ListItemText primary="Users" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavigation("/settings")}>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      {/* CONTENIDO DINÁMICO */}
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, mt: 8 }}
      >
        <Outlet /> {/* 👈 aquí se renderizan las páginas */}
      </Box>

    </Box>
  );
}