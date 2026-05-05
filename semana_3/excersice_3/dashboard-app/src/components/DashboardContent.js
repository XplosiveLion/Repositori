import { Typography, Box } from "@mui/material";
import StatsCards from "./StatsCards";
import UsersTable from "./UsersTable";

export default function DashboardContent() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Dashboard Overview
      </Typography>

      <StatsCards />

      <Box mt={4}>
        <UsersTable />
      </Box>
    </Box>
  );
}