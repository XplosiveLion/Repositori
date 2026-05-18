"use client";

import { useState } from "react";

import { Package, Save, Trash2, X, DollarSign, Barcode } from "lucide-react";

import {
  updateProductAction,
  softDeleteProductAction,
} from "@/actions/product.actions";

export default function EditProductModal({ product, closeModal }: any) {
  const [name, setName] = useState(product.name || "");

  const [sku, setSku] = useState(product.sku || "");

  const [price, setPrice] = useState(
    product.main_model?.presentation?.price || 0,
  );

  const [cost, setCost] = useState(product.main_model?.presentation?.cost || 0);

async function handleSave() {
  const confirmed = confirm(
    "¿Guardar cambios del producto?"
  );

  if (!confirmed) return;

  const formData = new FormData();

  formData.append(
    "id",
    product.id.toString()
  );

  formData.append(
    "name",
    name
  );

  formData.append(
    "sku",
    sku
  );

  formData.append(
    "price",
    price.toString()
  );

  formData.append(
    "cost",
    cost.toString()
  );

  formData.append(
    "is_active",
    String(product.is_active)
  );

  const result =
    await updateProductAction(
      formData
    );

  if (!result.ok) {
    alert(result.message);
    return;
  }

  alert(result.message);

  closeModal();

  window.location.reload();
}

async function handleDelete() {
  const confirm1 = confirm(
    "¿Deseas desactivar este producto?"
  );

  if (!confirm1) return;

  const confirm2 = confirm(
    "El producto dejará de mostrarse como activo. ¿Confirmas la acción?"
  );

  if (!confirm2) return;

  const result =
    await softDeleteProductAction(product);

  if (!result.ok) {
    alert(result.message);
    return;
  }

  alert(result.message);

  closeModal();

  window.location.reload();
}

  return (
    <div
      onClick={closeModal}
      className="
        fixed
        inset-0
        bg-black/60
        backdrop-blur-sm
        flex
        items-center
        justify-center
        p-4
        z-50
        animate-in
        fade-in
      "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          bg-white
          rounded-[32px]
          shadow-2xl
          w-full
          max-w-3xl
          max-h-[92vh]
          overflow-hidden
          flex
          flex-col
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
            p-8
            border-b
            border-gray-100
          "
        >
          <div
            className="
              flex
              items-center
              gap-5
            "
          >
            <div
              className="
                w-16
                h-16
                rounded-2xl
                bg-green-50
                flex
                items-center
                justify-center
                shrink-0
              "
            >
              <Package size={32} />
            </div>

            <div>
              <h2
                className="
                  text-3xl
                  font-bold
                "
              >
                Editar producto
              </h2>

              <p
                className="
                  text-gray-500
                  mt-1
                "
              >
                Modifica la información del producto
              </p>
            </div>
          </div>

          <button
            onClick={closeModal}
            className="
              w-11
              h-11
              rounded-xl
              bg-gray-100
              hover:bg-gray-200
              flex
              items-center
              justify-center
              transition
            "
          >
            <X size={22} />
          </button>
        </div>

        {/* BODY */}

        <div
          className="
            flex-1
            overflow-y-auto
            px-8
            py-6
            space-y-6
            hide-scrollbar
        "
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {/* NAME */}

          <div>
            <label
              className="
                flex
                items-center
                gap-2
                text-sm
                font-semibold
                mb-2
              "
            >
              <Package size={16} />
              Nombre del producto
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ej. Playera deportiva"
              className="
                w-full
                border
                border-gray-200
                rounded-2xl
                p-4
                outline-none
                focus:ring-2
                focus:ring-green-400
                transition
              "
            />

            <p
              className="
                text-xs
                text-gray-500
                mt-2
              "
            >
              Nombre principal que aparecerá en el catálogo.
            </p>
          </div>

          {/* SKU */}

          <div>
            <label
              className="
                flex
                items-center
                gap-2
                text-sm
                font-semibold
                mb-2
              "
            >
              <Barcode size={16} />
              SKU
            </label>

            <input
              type="text"
              value={sku}
              onChange={(e) => setSku(e.target.value)}
              placeholder="SKU-0001"
              className="
                w-full
                border
                border-gray-200
                rounded-2xl
                p-4
                outline-none
                focus:ring-2
                focus:ring-green-400
                transition
              "
            />

            <p
              className="
                text-xs
                text-gray-500
                mt-2
              "
            >
              Código único de identificación del producto.
            </p>
          </div>

          {/* PRICE */}

          <div>
            <label
              className="
                flex
                items-center
                gap-2
                text-sm
                font-semibold
                mb-2
              "
            >
              <DollarSign size={16} />
              Precio
            </label>

            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              placeholder="0.00"
              className="
                w-full
                border
                border-gray-200
                rounded-2xl
                p-4
                outline-none
                focus:ring-2
                focus:ring-green-400
                transition
              "
            />

            <p
              className="
                text-xs
                text-gray-500
                mt-2
              "
            >
              Precio de venta del producto.
            </p>
          </div>

          {/* COST */}

          <div>
            <label
              className="
                flex
                items-center
                gap-2
                text-sm
                font-semibold
                mb-2
              "
            >
              <DollarSign size={16} />
              Costo
            </label>

            <input
              type="number"
              value={cost}
              onChange={(e) => setCost(Number(e.target.value))}
              placeholder="0.00"
              className="
                w-full
                border
                border-gray-200
                rounded-2xl
                p-4
                outline-none
                focus:ring-2
                focus:ring-green-400
                transition
              "
            />

            <p
              className="
                text-xs
                text-gray-500
                mt-2
              "
            >
              Costo interno del producto.
            </p>
          </div>
        </div>

        {/* FOOTER */}

        <div
          className="
            p-8
            border-t
            border-gray-100
            flex
            flex-col
            sm:flex-row
            gap-4
          "
        >
          <button
            onClick={handleSave}
            className="
              flex-1
              bg-green-600
              hover:bg-green-700
              text-white
              py-4
              rounded-2xl
              font-semibold
              transition
              flex
              items-center
              justify-center
              gap-2
            "
          >
            <Save size={20} />
            Guardar cambios
          </button>

          <button
            onClick={handleDelete}
            className="
              flex-1
              bg-red-500
              hover:bg-red-600
              text-white
              py-4
              rounded-2xl
              font-semibold
              transition
              flex
              items-center
              justify-center
              gap-2
            "
          >
            <Trash2 size={20} />
            Eliminar producto
          </button>
        </div>
      </div>
    </div>
  );
}
