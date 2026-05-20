import { useState } from "react";

import {
  Package,
  Tag,
  Boxes,
  Star,
  DollarSign,
} from "lucide-react";

import type {
  Product,
} from "../../services/product.service";

import EditProductModal from "./EditProductModal";


import {
  useAuth,
} from "../../context/AuthContext";

interface Props {
  product: Product;
  onUpdated: () => void;
}

export default function ProductCard({
  product,
  onUpdated,
}: Props) {
  const { role } = useAuth();

  const [open, setOpen] =
    useState(false);

  function handleOpen() {
    if (role !== "editor") {
      alert(
        "No tienes permiso para editar productos."
      );

      return;
    }

    setOpen(true);
  }

  const categoryName =
    typeof product.category === "object"
      ? product.category?.name
      : "Sin categoría";

  const price =
    product.main_model?.presentation?.price ||
    0;

  const presentation =
    product.main_model?.presentation
      ?.nickname ||
    product.main_model?.name ||
    "Sin presentación";

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
          overflow-hidden
        "
      >
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold text-gray-900 break-words line-clamp-2">
              {product.name}
            </h2>

            <div className="flex flex-wrap items-center gap-2 mt-2">
              <div className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-semibold whitespace-nowrap">
                Product
              </div>

              {product.is_active && (
                <div className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-semibold whitespace-nowrap">
                  Active
                </div>
              )}
            </div>
          </div>

          <div className="min-w-[56px] w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center shadow-sm">
            <Package size={28} />
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <InfoRow
            icon={<Tag size={18} />}
            label="Categoría"
            value={
              categoryName ||
              "Sin categoría"
            }
          />

          <InfoRow
            icon={<Boxes size={18} />}
            label="Presentación"
            value={presentation}
          />

          <InfoRow
            icon={<DollarSign size={18} />}
            label="Precio"
            value={`$${price}`}
          />

          <InfoRow
            icon={<Star size={18} />}
            label="Rating"
            value={`${
              product.average_rating || "0.00"
            } (${
              product.rating_count || 0
            } reviews)`}
          />
        </div>

        <div className="mt-6 pt-4 border-t text-sm text-gray-400 flex flex-col sm:flex-row gap-2 sm:justify-between sm:items-center overflow-hidden">
          <span className="truncate">
            Product ID: {product.id}
          </span>

          <span className="truncate">
            SKU: {product.sku || "N/A"}
          </span>
        </div>
      </div>

      {open && (
        <EditProductModal
          product={product}
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
      <div className="min-w-[40px] w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
        {icon}
      </div>

      <div className="min-w-0 flex-1">
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