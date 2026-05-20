import { useState } from "react";

import {
  Building2,
  Mail,
  Phone,
  BadgeInfo,
  UserRound,
} from "lucide-react";

import type {
  Provider,

} from "../../services/provider.service";

import EditProviderModal from "./EditProviderModal";



import {
  useAuth,
} from "../../context/AuthContext";

interface Props {
  provider: Provider;
  onUpdated: () => void;
}

export default function ProviderCard({
  provider,
  onUpdated,
}: Props) {
  const { role } = useAuth();

  const [open, setOpen] =
    useState(false);

  function handleOpen() {
    if (role !== "editor") {
      alert(
        "No tienes permiso para editar proveedores."
      );

      return;
    }

    setOpen(true);
  }

  return (
    <>
      <div
        onClick={handleOpen}
        className="
          bg-white
          rounded-3xl
          p-6
          shadow-md
          hover:shadow-2xl
          hover:-translate-y-1
          transition-all
          duration-300
          cursor-pointer
          border
          border-gray-100
        "
      >
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 break-words">
              {provider.business_name}
            </h2>

            <div className="flex items-center gap-2 mt-2">
              <div className="px-3 py-1 rounded-full bg-gray-100 text-xs font-semibold text-gray-700">
                {provider.type === 1
                  ? "Business"
                  : "Person"}
              </div>
            </div>
          </div>

          <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center shadow-sm">
            {provider.type === 1 ? (
              <Building2 size={28} />
            ) : (
              <UserRound size={28} />
            )}
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <InfoRow
            icon={<Mail size={18} />}
            label="Correo"
            value={
              provider.email ||
              "Sin correo"
            }
          />

          <InfoRow
            icon={<Phone size={18} />}
            label="Teléfono"
            value={
              provider.phone ||
              "Sin teléfono"
            }
          />

          <InfoRow
            icon={<BadgeInfo size={18} />}
            label="RFC"
            value={
              provider.rfc ||
              "Sin RFC"
            }
          />
        </div>
      </div>

      {open && (
        <EditProviderModal
          provider={provider}
          closeModal={() =>
            setOpen(false)
          }
          onUpdated={onUpdated}
        />
      )}
    </>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 bg-gray-50 rounded-2xl p-3 overflow-hidden">
      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm shrink-0">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-xs text-gray-500">
          {label}
        </p>

        <p className="text-sm font-medium text-gray-800 truncate">
          {value}
        </p>
      </div>
    </div>
  );
}