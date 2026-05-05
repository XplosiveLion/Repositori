import { Typography, Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export default function UsersPage() {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Usuarios
      </Typography>

      <Box sx={{ height: 400 }}>
        <DataGrid
          rows={[
            { id: 1, name: "Juan", email: "juan@email.com" },
            { id: 2, name: "Ana", email: "ana@email.com" }
          ]}
          columns={[
            { field: "id", headerName: "ID", width: 90 },
            { field: "name", headerName: "Nombre", flex: 1 },
            { field: "email", headerName: "Email", flex: 1 }
          ]}
        />
      </Box>
    </>
  );
}