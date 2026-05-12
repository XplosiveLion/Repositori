import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

export default function ProductCard({ product }) {
  return (
    <Card
    elevation={3}
    sx={{
        width: "100%",
        maxWidth: 350,

        minWidth: 0,

        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",

        overflow: "hidden",

        transition: "all 0.3s ease",

        "&:hover": {
        transform: "translateY(-5px)",
        boxShadow: 6,
        },
    }}
    >
    <CardMedia
    component="img"
    height="200"
    image={product.image}
    alt={product.title}
    sx={{
        objectFit: "cover",
    }}
    />

      <CardContent>
        
        <Typography variant="h6">
          {product.title}
        </Typography>



        <Typography
        variant="body2"
        color="text.secondary"
        sx={{
            width: "100%",
            wordBreak: "break-word",
            overflowWrap: "break-word",
            whiteSpace: "normal",
        }}
        >
        {product.description}
        </Typography>




        <Typography color="primary">
          {product.price}
        </Typography>
      </CardContent>

      <CardActions>
        <Button variant="contained" fullWidth>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}