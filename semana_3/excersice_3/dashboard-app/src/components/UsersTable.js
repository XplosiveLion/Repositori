import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";

export default function UsersTable() {
  const users = [
    { name: "Juan Pérez", email: "juan@mail.com" },
    { name: "Ana López", email: "ana@mail.com" },
    { name: "Carlos Ruiz", email: "carlos@mail.com" },
  ];

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Usuarios
      </Typography>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {users.map((user, index) => (
            <TableRow key={index}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}