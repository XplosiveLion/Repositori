import { Typography, Grid, Card, CardContent } from "@mui/material";

export default function DashboardPage() {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        {[
          { title: "Usuarios", value: 120 },
          { title: "Ventas", value: "$2,500" },
          { title: "Pedidos", value: 75 }
        ].map((item, index) => (
          <Grid xs={12} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography color="text.secondary">
                  {item.title}
                </Typography>
                <Typography variant="h4">
                  {item.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}