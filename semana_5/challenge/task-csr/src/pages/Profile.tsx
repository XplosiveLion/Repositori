import { useEffect, useState } from "react";

import {
  User,
  Mail,
  Shield,
  BadgeCheck,
} from "lucide-react";

import { getProfile } from "../services/profile.service";

export default function Profile() {
  const [profile, setProfile] =
    useState<any>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function loadProfile() {
      try {
        const data =
          await getProfile();

        setProfile(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadProfile();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-100 p-6 md:p-10">
        <div className="max-w-4xl mx-auto bg-white rounded-[32px] shadow-2xl p-8 text-gray-500">
          Cargando perfil...
        </div>
      </main>
    );
  }

  if (!profile) {
    return (
      <main className="min-h-screen bg-gray-100 p-6 md:p-10">
        <div className="max-w-4xl mx-auto bg-white rounded-[32px] shadow-2xl p-8 text-gray-500">
          No se pudo cargar el perfil.
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 p-6 md:p-10">
      <div className="max-w-4xl mx-auto">
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
          <div className="flex items-center gap-5 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center">
              <User size={34} />
            </div>

            <div>
              <h1 className="text-4xl font-bold">
                Perfil
              </h1>

              <p className="text-gray-500 mt-1">
                Información del usuario autenticado.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <ProfileCard
              icon={<User size={18} />}
              label="Username"
              value={
                profile.username ||
                "Sin username"
              }
            />

            <ProfileCard
              icon={<Mail size={18} />}
              label="Correo"
              value={
                profile.email ||
                "Sin correo"
              }
            />

            <ProfileCard
              icon={<BadgeCheck size={18} />}
              label="Nombre"
              value={`${profile.first_name || "Sin nombre"} ${
                profile.last_name || ""
              }`}
            />

            <ProfileCard
              icon={<Shield size={18} />}
              label="Rol"
              value={
                profile.is_superuser
                  ? "Superuser"
                  : profile.is_staff
                    ? "Staff"
                    : "Viewer"
              }
            />
          </div>
        </div>
      </div>
    </main>
  );
}

function ProfileCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="bg-gray-50 rounded-2xl p-5">
      <div className="flex items-center gap-3 mb-2">
        {icon}

        <p className="text-sm text-gray-500">
          {label}
        </p>
      </div>

      <p className="text-xl font-semibold break-words">
        {value}
      </p>
    </div>
  );
}