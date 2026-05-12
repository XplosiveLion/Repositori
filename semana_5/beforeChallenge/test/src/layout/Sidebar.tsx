import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Badge,
} from "@mui/material";

import ShoppingCartIcon
  from "@mui/icons-material/ShoppingCart";

import {
  Link,
  useLocation,
} from "react-router-dom";

export default function Sidebar({
  cartCount,
}: any) {

  const location = useLocation();

  const links = [
    {
      name: "Home",
      path: "/",
    },

    {
      name: "Productos",
      path: "/products",
    },

    {
      name: "Carrito",
      path: "/cart",
      cart: true,
    },
  ];

  return (
    <Box
      sx={{
        width: 240,
      }}
    >
      <Toolbar />

      <List>

        {links.map((link) => (

          <ListItemButton
            key={link.path}
            component={Link}
            to={link.path}
            selected={
              location.pathname ===
              link.path
            }
          >

            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent:
                  "space-between",
              }}
            >

              <ListItemText
                primary={link.name}
              />

              {link.cart && (

                <Badge
                  badgeContent={
                    cartCount
                  }
                  color="error"
                >
                  <ShoppingCartIcon />
                </Badge>

              )}

            </Box>

          </ListItemButton>

        ))}

      </List>
    </Box>
  );
}