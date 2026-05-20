import { useEffect, useState } from "react";

import {
  Users,
  RefreshCcw,
  Plus,
} from "lucide-react";

import {
  getProviders,
} from "../services/provider.service";

import type {
  Provider,

} from "../services/provider.service";

import ProviderCard from "../components/providers/ProviderCard";
import CreateProviderModal from "../components/providers/CreateProviderModal";
import {
  useAuth,
} from "../context/AuthContext";

export default function Providers() {
  const { role } = useAuth();

  const [providers, setProviders] =
    useState<Provider[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [openCreate, setOpenCreate] =
    useState(false);

  async function loadProviders() {
    try {
      const data =
        await getProviders();

      const list = Array.isArray(data)
        ? data
        : data?.data || [];

      setProviders(
        list.filter(
          (provider: Provider) =>
            provider.is_archived !== true
        )
      );
    } catch (error) {
      console.error(error);
      setProviders([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadProviders();

    const interval = setInterval(
      loadProviders,
      30000
    );

    return () =>
      clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-10">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center">
              <Users size={34} />
            </div>

            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Providers
              </h1>

              <p className="text-gray-500 mt-2">
                Administración y edición de proveedores.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            {role === "editor" && (
              <button
                onClick={() =>
                  setOpenCreate(true)
                }
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
                  transition-all
                  font-semibold
                "
              >
                <Plus size={20} />
                Agregar proveedor
              </button>
            )}

            <div className="bg-white px-5 py-4 rounded-2xl shadow-md border flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                <RefreshCcw size={22} />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Actualización automática
                </p>

                <p className="text-lg font-semibold">
                  Cada 30 segundos
                </p>
              </div>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="bg-white rounded-3xl shadow-md p-8 text-center text-gray-500">
            Cargando proveedores...
          </div>
        ) : providers.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-md p-8 text-center text-gray-500">
            No hay proveedores para mostrar.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {providers.map((provider) => (
              <ProviderCard
                key={provider.id}
                provider={provider}
                onUpdated={loadProviders}
              />
            ))}
          </div>
        )}

        {openCreate && (
          <CreateProviderModal
            closeModal={() =>
              setOpenCreate(false)
            }
            onCreated={loadProviders}
          />
        )}
      </div>
    </main>
  );
}