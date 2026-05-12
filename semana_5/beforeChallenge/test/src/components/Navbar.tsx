import {
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";

import { Link } from "react-router-dom";

export default function Navbar({
  cartCount,
}: {
  cartCount: number;
}) {
  return (
    <AppBar position="static">
      <Toolbar>

        <Typography
          variant="h6"
          sx={{ flexGrow: 1 }}
        >
          Mi Tienda
        </Typography>

        <Button
          color="inherit"
          component={Link}
          to="/"
        >
          Home
        </Button>

        <Button
          color="inherit"
          component={Link}
          to="/products"
        >
          Productos
        </Button>

        <Button
          color="inherit"
          component={Link}
          to="/cart"
        >
          Carrito ({cartCount})
        </Button>

      </Toolbar>
    </AppBar>
  );
}