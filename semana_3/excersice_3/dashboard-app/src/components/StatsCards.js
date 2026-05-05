import { Card, CardContent, Typography, Grid } from "@mui/material";

export default function StatsCards() {
  const stats = [
    { title: "Usuarios", value: 120 },
    { title: "Ventas", value: "$2,500" },
    { title: "Pedidos", value: 75 },
  ];

  return (
    <Grid container spacing={2}>
      {stats.map((item, index) => (
        <Grid xs={12} md={4} key={index}>
          <Card>
            <CardContent>
              <Typography variant="h6">{item.title}</Typography>
              <Typography variant="h4">{item.value}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}