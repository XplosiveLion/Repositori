import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Box,
} from "@mui/material";

import { Link } from "react-router-dom";

const drawerWidth = 240;

export default function Sidebar({
  isMobile,
  open,
  closeDrawer,
}) {
  const drawerContent = (
    <Box sx={{width: drawerWidth,mt: "64px",}}>
      <List>
        <ListItemButton
          component={Link}
          to="/"
          onClick={closeDrawer}
        >
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton
          component={Link}
          to="/products"
          onClick={closeDrawer}
        >
          <ListItemText primary="Products" />
        </ListItemButton>

        <ListItemButton
          component={Link}
          to="/about"
          onClick={closeDrawer}
        >
          <ListItemText primary="About" />
        </ListItemButton>
      </List>
    </Box>
  );

  // MOBILE
  if (isMobile) {
    return (
      <Drawer
        open={open}
        onClose={closeDrawer}
      >
        {drawerContent}
      </Drawer>
    );
  }

  // DESKTOP
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      {drawerContent}
    </Drawer>
  );
}