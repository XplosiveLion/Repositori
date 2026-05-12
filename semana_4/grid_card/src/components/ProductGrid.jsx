import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const products = [
  {
    id: 1,
    title: "Producto 1",
    description: "Descripción corta",
    price: "$10",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    title: "Producto 2",
    description: "Descripción corta",
    price: "$20",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    title: "Producto 3",
    description: "Descripción corta",
    price: "$30",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 4,
    title: "Producto 4",
    description: "Descripción corta",
    price: "$40",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 5,
    title: "Producto 5",
    description: "Descripción corta",
    price: "$50",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 6,
    title: "Producto 6",
    description: "Descripción corta",
    price: "$60",
    image: "https://via.placeholder.com/300",
  },
];

export default function ProductGrid() {
  return (
    <Grid container spacing={3} sx={{ p: 3 }}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card
            elevation={3}
            sx={{
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: 6,
              },
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={product.image}
              alt={product.title}
            />

            <CardContent>
              <Typography variant="h6">
                {product.title}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>

              <Typography variant="h6" color="primary">
                {product.price}
              </Typography>
            </CardContent>

            <CardActions>
              <Button variant="contained" fullWidth>
                Add to Cart
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}