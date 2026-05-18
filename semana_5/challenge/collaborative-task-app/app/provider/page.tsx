import Link from "next/link";

import { Users, RefreshCcw, Plus } from "lucide-react";

import ProviderList from "@/components/providers/ProviderList";
import ProviderPolling from "@/components/providers/ProvidersPolling";

import { getProviders } from "@/services/provider.service";

export default async function ProviderPage() {
  const providers = await getProviders();

  return (
    <main className="min-h-screen bg-gray-100 p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        <div
          className="
            flex
            flex-col
            lg:flex-row
            lg:items-center
            lg:justify-between
            gap-5
            mb-10
          "
        >
          <div className="flex items-center gap-4">
            <div
              className="
                w-16
                h-16
                rounded-2xl
                bg-white
                shadow-md
                flex
                items-center
                justify-center
              "
            >
              <Users size={34} />
            </div>

            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Providers
              </h1>

              <p className="text-gray-500 mt-2 text-sm md:text-base">
                Administración y edición de proveedores.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/provider/create"
              className="
              flex
              items-center
              justify-center
              gap-3

              bg-black
              hover:bg-gray-800

              text-white

              px-6
              py-4

              rounded-2xl

              shadow-md
              hover:shadow-2xl
              hover:-translate-y-0.5

              transition-all
              duration-300

              font-semibold
            "
            >
              <Plus size={20} />
              Agregar proveedor
            </Link>

            <div
              className="
                bg-white
                px-5
                py-4
                rounded-2xl
                shadow-md
                border
                flex
                items-center
                gap-4
              "
            >
              <div
                className="
                  w-12
                  h-12
                  rounded-xl
                  bg-gray-100
                  flex
                  items-center
                  justify-center
                "
              >
                <RefreshCcw size={22} />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Actualización automática
                </p>

                <p className="text-lg font-semibold">Cada 30 segundos</p>
              </div>
            </div>
          </div>
        </div>

        <ProviderPolling />

        <ProviderList providers={providers} />
      </div>
    </main>
  );
}
