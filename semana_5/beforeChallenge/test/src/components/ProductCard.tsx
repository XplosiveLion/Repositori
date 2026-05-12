import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
} from "@mui/material";

export default function ProductCard({
  product,
  addToCart,
}: any) {

  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "0 auto",
        transition: "0.3s",

        "&:hover": {
          transform: "scale(1.03)",
        },
      }}
      elevation={4}
    >

      <CardMedia
        component="img"
        height="200"
        image={product.image}
      />

      <CardContent>

        <Typography variant="h5">
          {product.title}
        </Typography>

        <Typography>
          ${product.price}
        </Typography>

      </CardContent>

      <CardActions>

        <Button
          variant="contained"
          fullWidth
          onClick={() =>
            addToCart(product)
          }
        >
          Agregar
        </Button>

      </CardActions>

    </Card>
  );
}