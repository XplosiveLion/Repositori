import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar({
  isMobile,
  toggleDrawer,
}) {
  return (
    <AppBar position="fixed" sx={{
        zIndex: 1300,
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(25, 118, 210, 0.8)",
    }}>
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

        <Typography variant="h6">
          React Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
}