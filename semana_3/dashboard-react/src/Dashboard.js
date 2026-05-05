import React, { useState } from "react";

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
  useMediaQuery,
  Card,
  CardContent,
  Grid,
  TextField,
  Button
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;

export default function Dashboard() {

  // 📱 Detecta si es móvil
  const isMobile = useMediaQuery("(max-width:600px)");

  // 🎛️ Controla abrir/cerrar menú
  const [open, setOpen] = useState(false);

  // 🧭 Controla la vista actual
  const [view, setView] = useState("Dashboard");

  const toggleDrawer = () => setOpen(!open);

  // 🔁 Cambiar vista
  const handleNavigation = (section) => {
    setView(section);

    // 📱 Cerrar drawer automáticamente en móvil
    if (isMobile) setOpen(false);
  };

  // 🎯 Render dinámico del contenido
  const renderContent = () => {
  switch (view) {

    case "Dashboard":
      return (
        <>
          <Typography variant="h4" gutterBottom>
            Dashboard
          </Typography>

          <Grid container spacing={3}>
            {[
              { title: "Usuarios", value: 120 },
              { title: "Ventas", value: "$2,500" },
              { title: "Pedidos", value: 75 }
            ].map((item, index) => (
              <Grid xs={12} md={4} key={index}>
                <Card sx={{ boxShadow: 3 }}>
                  <CardContent>
                    <Typography color="text.secondary">
                      {item.title}
                    </Typography>
                    <Typography variant="h4">
                      {item.value}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
      );

    case "Users":
      return (
        <>
          <Typography variant="h4" gutterBottom>
            Usuarios
          </Typography>

          <Box sx={{ height: 400, width: "100%" }}>
            {/* 👇 aquí irá DataGrid si lo instalas */}
            <Typography>Tabla profesional aquí</Typography>
          </Box>
        </>
      );

    case "Settings":
      return (
        <>
          <Typography variant="h4" gutterBottom>
            Configuración
          </Typography>

          <Card sx={{ maxWidth: 400, p: 2 }}>
            <Box
              component="form"
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <TextField label="Nombre" fullWidth />
              <TextField label="Email" fullWidth />
              <Button variant="contained">
                Guardar cambios
              </Button>
            </Box>
          </Card>
        </>
      );

    default:
      return null;
  }
};

  return (
    <Box sx={{ display: "flex" }}>

      {/* 🔝 APP BAR */}
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

      {/* 📂 DRAWER */}
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

          {/* 🔗 Menú dinámico */}
          {["Dashboard", "Users", "Settings"].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => handleNavigation(text)}>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}

        </List>
      </Drawer>

      {/* 📄 CONTENIDO */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8
        }}
      >
        {renderContent()}
      </Box>

    </Box>
  );
}