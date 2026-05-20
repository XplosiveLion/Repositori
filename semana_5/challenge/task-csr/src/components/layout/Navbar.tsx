import { Link, useLocation, useNavigate } from "react-router-dom";

import { LayoutDashboard, User, LogOut } from "lucide-react";

import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const { isAuthenticated, logout } = useAuth();

  const hideNavbar =
    location.pathname === "/login" || location.pathname === "/register";

  if (hideNavbar) return null;

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <nav
      className="
        sticky
        top-0
        z-50
        bg-white/90
        backdrop-blur-md
        border-b
        border-gray-200
        px-6
        py-4
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-4
        "
      >
        <div className="flex flex-wrap gap-3">
          <Link
            to="/"
            className="
              flex
              items-center
              gap-2
              bg-white
              border
              border-gray-100
              shadow-md
              hover:shadow-xl
              px-5
              py-3
              rounded-2xl
              font-semibold
              text-gray-800
            "
          >
            <LayoutDashboard size={18} />
            Dashboard
          </Link>

          {isAuthenticated && (
            <Link
              to="/profile"
              className="
                flex
                items-center
                gap-2
                bg-white
                border
                border-gray-100
                shadow-md
                hover:shadow-xl
                px-5
                py-3
                rounded-2xl
                font-semibold
                text-gray-800
              "
            >
              <User size={18} />
              Profile
            </Link>
          )}
        </div>

        {isAuthenticated && (
          <button
            onClick={handleLogout}
            className="
              flex
              items-center
              gap-2
              bg-black
              hover:bg-gray-800
              text-white
              shadow-md
              px-5
              py-3
              rounded-2xl
              font-semibold
            "
          >
            <LogOut size={18} />
            Cerrar sesión
          </button>
        )}
      </div>
    </nav>
  );
}
