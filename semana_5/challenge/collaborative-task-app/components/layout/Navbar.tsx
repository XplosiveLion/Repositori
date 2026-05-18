"use client";

import Link from "next/link";

import {
  LayoutDashboard,
  User,
  LogIn,
} from "lucide-react";

import { usePathname } from "next/navigation";

import LogoutButton from "./LogoutButton";

interface Props {
  isLoggedIn: boolean;
}

export default function Navbar({
  isLoggedIn,
}: Props) {
  const pathname = usePathname();

  if (
    pathname === "/login" ||
    pathname === "/register"
  ) {
    return null;
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
        <div
          className="
            flex
            flex-wrap
            items-center
            gap-3
          "
        >
          <Link
            href="/"
            className="
              flex
              items-center
              gap-2
              bg-white
              border
              border-gray-100
              shadow-md
              hover:shadow-xl
              hover:-translate-y-0.5
              transition-all
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

          {isLoggedIn && (
            <Link
              href="/profile"
              className="
                flex
                items-center
                gap-2
                bg-white
                border
                border-gray-100
                shadow-md
                hover:shadow-xl
                hover:-translate-y-0.5
                transition-all
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

          {!isLoggedIn && (
            <Link
              href="/login"
              className="
                flex
                items-center
                gap-2
                bg-black
                hover:bg-gray-800
                text-white
                shadow-md
                hover:shadow-xl
                hover:-translate-y-0.5
                transition-all
                px-5
                py-3
                rounded-2xl
                font-semibold
              "
            >
              <LogIn size={18} />
              Login
            </Link>
          )}
        </div>

        {isLoggedIn && <LogoutButton />}
      </div>
    </nav>
  );
}