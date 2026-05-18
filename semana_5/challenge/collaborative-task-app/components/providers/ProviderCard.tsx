"use client";

import {
  Building2,
  Mail,
  Phone,
  BadgeInfo,
  UserRound,
  BriefcaseBusiness,
} from "lucide-react";

import { Provider } from "@/types/provider.types";

interface Props {
  provider: Provider;

  openModal: (provider: Provider) => void;
}

export default function ProviderCard({ provider, openModal }: Props) {
  return (
    <div
      onClick={() => openModal(provider)}
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
      {/* HEADER */}

      <div
        className="
          flex
          justify-between
          items-start
          gap-4
        "
      >
        <div className="flex-1">
          <h2
            className="
              text-2xl
              font-bold
              text-gray-900
              break-words
            "
          >
            {provider.business_name}
          </h2>

          <div
            className="
              flex
              items-center
              gap-2
              mt-2
            "
          >
            <div
              className="
                px-3
                py-1
                rounded-full
                bg-gray-100
                text-xs
                font-semibold
                text-gray-700
              "
            >
              {provider.type === 1 ? "Business" : "Person"}
            </div>
          </div>
        </div>

        {/* ICON */}

        <div
          className={`
            w-14
            h-14
            rounded-2xl
            flex
            items-center
            justify-center
            shadow-sm
            ${provider.type === 1 ? "bg-blue-100" : "bg-green-100"}
          `}
        >
          {provider.type === 1 ? (
            <Building2 size={28} />
          ) : (
            <UserRound size={28} />
          )}
        </div>
      </div>

      {/* CONTENT */}

      <div
        className="
          mt-6
          space-y-4
        "
      >
        {/* EMAIL */}

        <div
          className="
            flex
            items-center
            gap-3
            bg-gray-50
            rounded-2xl
            p-3
          "
        >
          <div
            className="
              w-10
              h-10
              rounded-xl
              bg-white
              flex
              items-center
              justify-center
              shadow-sm
            "
          >
            <Mail size={18} />
          </div>

          <div>
            <p
              className="
                text-xs
                text-gray-500
              "
            >
              Correo
            </p>

            <p
              className="
                text-sm
                font-medium
                text-gray-800
                break-all
              "
            >
              {provider.email || "Sin correo"}
            </p>
          </div>
        </div>

        {/* PHONE */}

        <div
          className="
            flex
            items-center
            gap-3
            bg-gray-50
            rounded-2xl
            p-3
          "
        >
          <div
            className="
              w-10
              h-10
              rounded-xl
              bg-white
              flex
              items-center
              justify-center
              shadow-sm
            "
          >
            <Phone size={18} />
          </div>

          <div>
            <p
              className="
                text-xs
                text-gray-500
              "
            >
              Teléfono
            </p>

            <p
              className="
                text-sm
                font-medium
                text-gray-800
              "
            >
              {provider.phone || "Sin teléfono"}
            </p>
          </div>
        </div>

        {/* RFC */}

        <div
          className="
            flex
            items-center
            gap-3
            bg-gray-50
            rounded-2xl
            p-3
          "
        >
          <div
            className="
              w-10
              h-10
              rounded-xl
              bg-white
              flex
              items-center
              justify-center
              shadow-sm
            "
          >
            <BadgeInfo size={18} />
          </div>

          <div>
            <p
              className="
                text-xs
                text-gray-500
              "
            >
              RFC
            </p>

            <p
              className="
                text-sm
                font-medium
                text-gray-800
              "
            >
              {provider.rfc || "Sin RFC"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
