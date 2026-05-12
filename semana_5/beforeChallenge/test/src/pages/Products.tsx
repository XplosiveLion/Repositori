import Container
  from "@mui/material/Container";

import Grid from "@mui/material/Grid";

import ProductCard
  from "../components/ProductCard";

import products
  from "../data/products";

export default function Products({
  addToCart,
}: any) {

  return (
    <Container sx={{ mt: 5 }}>

      <Grid
        container
        spacing={4}
        justifyContent="center"
      >

        {products.map((product) => (

          <Grid
            xs={12}
            sm={6}
            md={4}
            key={product.id}
          >

            <ProductCard
              product={product}
              addToCart={addToCart}
            />

          </Grid>

        ))}

      </Grid>

    </Container>
  );
}