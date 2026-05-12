import Grid from "@mui/material/Grid";

import ProductCard from "../components/ProductCard";
import products from "../data";

export default function Products() {
  return (
    <Grid
      container
      spacing={3}
      justifyContent="center"
      alignItems="stretch"
    >
      {products.map((product) => (
        <Grid
          item
          key={product.id}
          xs={12}
          sm={6}
          md={4}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}