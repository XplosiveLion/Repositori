import { Typography, Card, Box, TextField, Button } from "@mui/material";

export default function SettingsPage() {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Configuración
      </Typography>

      <Card sx={{ maxWidth: 400, p: 2 }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField label="Nombre" fullWidth />
          <TextField label="Email" fullWidth />
          <Button variant="contained">
            Guardar
          </Button>
        </Box>
      </Card>
    </>
  );
}