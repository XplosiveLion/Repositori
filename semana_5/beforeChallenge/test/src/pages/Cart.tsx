import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

import DeleteIcon
  from "@mui/icons-material/Delete";

export default function Cart({
  cart,
  removeFromCart,
}: any) {

  return (
    <Container sx={{ mt: 5 }}>

      <Typography
        variant="h4"
        gutterBottom
      >
        Carrito
      </Typography>

      {cart.length === 0 && (

        <Typography>
          No hay productos.
        </Typography>

      )}

      {cart.map(
        (
          item: any,
          index: number
        ) => (

          <Card
            key={index}
            sx={{ mb: 2 }}
          >

            <CardContent>

              <Typography
                variant="h6"
              >
                {item.title}
              </Typography>

              <Typography>
                ${item.price}
              </Typography>

            </CardContent>

            <CardActions>

              <Button
                color="error"
                variant="contained"
                startIcon={
                  <DeleteIcon />
                }
                onClick={() =>
                  removeFromCart(index)
                }
              >
                Eliminar
              </Button>

            </CardActions>

          </Card>

        )
      )}

    </Container>
  );
}