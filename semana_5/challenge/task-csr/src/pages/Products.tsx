import { useEffect, useState } from "react";

import {
  Package,
  RefreshCcw,
  Plus,
} from "lucide-react";

import {
  getProducts,

} from "../services/product.service";
import type {
  Product,

} from "../services/product.service";

import ProductCard from "../components/products/ProductCard";
import CreateProductModal from "../components/products/CreateProductModal";

import {
  useAuth,
} from "../context/AuthContext";


function normalizeProducts(
  response: any
) {
  if (Array.isArray(response)) {
    return response;
  }

  if (Array.isArray(response?.data)) {
    return response.data;
  }

  if (Array.isArray(response?.results)) {
    return response.results;
  }

  return [];
}

export default function Products() {
  const { role } = useAuth();

  const [products, setProducts] =
    useState<Product[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [openCreate, setOpenCreate] =
    useState(false);

  async function loadProducts() {
    try {
      const data =
        await getProducts();

      const list =
        normalizeProducts(data);

      setProducts(
        list.filter(
          (product: Product) =>
            product.is_active !== false
        )
      );
    } catch (error) {
      console.error(error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadProducts();

    const interval =
      setInterval(
        loadProducts,
        10000
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
              <Package size={34} />
            </div>

            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Productos
              </h1>

              <p className="text-gray-500 mt-2">
                Administración y edición de productos.
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
                Agregar producto
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
                  Cada 10 segundos
                </p>
              </div>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="bg-white rounded-3xl shadow-md p-8 text-center text-gray-500">
            Cargando productos...
          </div>
        ) : products.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-md p-8 text-center text-gray-500">
            No hay productos para mostrar.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onUpdated={loadProducts}
              />
            ))}
          </div>
        )}

        {openCreate && (
          <CreateProductModal
            closeModal={() =>
              setOpenCreate(false)
            }
            onCreated={loadProducts}
          />
        )}
      </div>
    </main>
  );
}
