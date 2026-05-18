import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import {
  User,
  Mail,
  Shield,
  BadgeCheck,
} from "lucide-react";

import { getProfile } from "@/services/profile.service";

export default async function ProfilePage() {
  const cookieStore = await cookies();

  const token =
    cookieStore.get("token")?.value;

  if (!token) {
    redirect("/login");
  }

  const profile =
    await getProfile(token);

  return (
    <main
      className="
        min-h-screen
        bg-gray-100
        p-6
        md:p-10
      "
    >
      <div
        className="
          max-w-4xl
          mx-auto
        "
      >
        <div
          className="
            bg-white
            rounded-[32px]
            shadow-2xl
            border
            border-gray-100
            p-8
          "
        >
          <div
            className="
              flex
              items-center
              gap-5
              mb-8
            "
          >
            <div
              className="
                w-16
                h-16
                rounded-2xl
                bg-gray-100
                flex
                items-center
                justify-center
              "
            >
              <User size={34} />
            </div>

            <div>
              <h1
                className="
                  text-4xl
                  font-bold
                "
              >
                Perfil
              </h1>

              <p
                className="
                  text-gray-500
                  mt-1
                "
              >
                Información del usuario autenticado.
              </p>
            </div>
          </div>

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              gap-5
            "
          >
            <div className="bg-gray-50 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <User size={18} />
                <p className="text-sm text-gray-500">
                  Username
                </p>
              </div>

              <p className="text-xl font-semibold">
                {profile.username || "Sin username"}
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <Mail size={18} />
                <p className="text-sm text-gray-500">
                  Correo
                </p>
              </div>

              <p className="text-xl font-semibold break-all">
                {profile.email || "Sin correo"}
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <BadgeCheck size={18} />
                <p className="text-sm text-gray-500">
                  Nombre
                </p>
              </div>

              <p className="text-xl font-semibold">
                {profile.first_name || "Sin nombre"}{" "}
                {profile.last_name || ""}
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <Shield size={18} />
                <p className="text-sm text-gray-500">
                  Rol
                </p>
              </div>

              <p className="text-xl font-semibold">
                {profile.is_superuser
                  ? "Superuser"
                  : profile.is_staff
                    ? "Staff"
                    : "Viewer"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}