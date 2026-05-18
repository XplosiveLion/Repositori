"use client";

import { LogOut } from "lucide-react";
import { logoutAction } from "@/actions/auth.actions";

export default function LogoutButton() {
  return (
    <form action={logoutAction}>
      <button
        type="submit"
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
        <LogOut size={18} />
        Cerrar sesión
      </button>
    </form>
  );
}