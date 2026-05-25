import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type Role = "viewer" | "editor";

interface AuthContextType {
  token: string | null;
  user: any;
  role: Role;
  login: (token: string, user: any) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext =
  createContext<AuthContextType | null>(null);

/*function getRole(user: any): Role {
  return user?.is_staff || user?.is_superuser
    ? "editor"
    : "viewer";
}*/

function getRole(user: any): Role {
  return "editor";
}

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [token, setToken] =
    useState<string | null>(null);

  const [user, setUser] =
    useState<any>(null);

  const [role, setRole] =
    useState<Role>("viewer");

  useEffect(() => {
    const storedToken =
      localStorage.getItem("token");

    const storedUser =
      localStorage.getItem("user");

    if (storedToken) {
      setToken(storedToken);
    }

    if (storedUser) {
      const parsedUser =
        JSON.parse(storedUser);

      setUser(parsedUser);
      setRole(getRole(parsedUser));
    }
  }, []);

  function login(
    token: string,
    user: any
  ) {
    localStorage.setItem(
      "token",
      token
    );

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    setToken(token);
    setUser(user);
    setRole(getRole(user));
  }

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setToken(null);
    setUser(null);
    setRole("viewer");
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        role,
        login,
        logout,
        isAuthenticated: !!token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context =
    useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth debe usarse dentro de AuthProvider"
    );
  }

  return context;
}