import {
  Container,
  Typography,
} from "@mui/material";

export default function Home() {

  return (
    <Container sx={{ mt: 5 }}>

      <Typography variant="h3">
        Bienvenido
      </Typography>

      <Typography>
        Mini tienda con React +
        Material UI.
      </Typography>

    </Container>
  );
}