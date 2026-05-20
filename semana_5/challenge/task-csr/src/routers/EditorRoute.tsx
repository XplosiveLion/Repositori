import { Navigate } from "react-router-dom";

import {
  useAuth,
} from "../context/AuthContext";

export default function EditorRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { role } = useAuth();

  if (role !== "editor") {
    alert(
      "No tienes permiso para acceder a esta sección."
    );

    return (
      <Navigate
        to="/"
        replace
      />
    );
  }

  return children;
}