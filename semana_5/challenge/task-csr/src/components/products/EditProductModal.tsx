import { useState } from "react";

import {
  Package,
  Save,
  Trash2,
  X,
  DollarSign,
  Barcode,
  FileText,
} from "lucide-react";

import {
  updateProduct,
  softDeleteProduct,
} from "../../services/product.service";

import type { Product } from "../../services/product.service";

import { isEmpty, isValidNumber } from "../../utils/validators";

import { getApiErrorMessage } from "../../utils/apiError";

interface Props {
  product: Product;
  closeModal: () => void;
  onUpdated: () => void;
}

export default function EditProductModal({
  product,
  closeModal,
  onUpdated,
}: Props) {
  const [name, setName] = useState(product.name || "");

  const [sku, setSku] = useState(product.sku || "");

  const [description, setDescription] = useState(product.description || "");

  const [price, setPrice] = useState(
    product.main_model?.presentation?.price || 0,
  );

  const [cost, setCost] = useState(product.main_model?.presentation?.cost || 0);

  const [loading, setLoading] = useState(false);

  async function handleSave() {
    const confirmed = confirm("¿Guardar cambios del producto?");

    if (!confirmed) return;

    if (isEmpty(name)) {
      alert("El nombre del producto es obligatorio.");
      return;
    }

    if (price && !isValidNumber(price.toString())) {
      alert("El precio debe ser un número válido.");
      return;
    }

    if (cost && !isValidNumber(cost.toString())) {
      alert("El costo debe ser un número válido.");
      return;
    }

    try {
      setLoading(true);

      await updateProduct({
        id: product.id,
        sku: sku || null,
        name,
        description,
        average_rating: product.average_rating || "0.00",
        rating_count: product.rating_count || 0,
        is_active: product.is_active,
        is_archived: product.is_archived || false,
        type: product.type || 1,
        preparation_time: 0,
        is_preparation_time: false,
        main_model:
          typeof product.main_model === "object"
            ? product.main_model?.id
            : product.main_model || null,
        display_on_store: product.display_on_store,
        display_on_pos: product.display_on_pos,
        outstanding: false,
        show_in_gallery: false,
        key_prod_serv: "",
        key_unit: "",
        unit: "",
        iva_rate: "0",
        ieps_rate: "0",
        user: product.user || 1,
        category:
          typeof product.category === "object"
            ? product.category?.id
            : product.category,
      });

      console.log({
        price,
        cost,
      });

      alert("Producto actualizado correctamente");

      await onUpdated();

      closeModal();
    } catch (error) {
      console.error(error);

      alert(getApiErrorMessage(error, "No se pudo guardar."));
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete() {
    const confirm1 = confirm("¿Deseas desactivar este producto?");

    if (!confirm1) return;

    const confirm2 = confirm(
      "El producto dejará de mostrarse como activo. ¿Confirmas la acción?",
    );

    if (!confirm2) return;

    try {
      setLoading(true);

      await softDeleteProduct(product);

      alert("Producto desactivado correctamente");

      await onUpdated();

      closeModal();
    } catch (error) {
      console.error(error);

      alert("No se pudo desactivar el producto");
    } finally {
      setLoading(false);
    }
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
        <div className="flex justify-between items-start p-8 border-b border-gray-100">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center shrink-0">
              <Package size={32} />
            </div>

            <div>
              <h2 className="text-3xl font-bold">Editar producto</h2>

              <p className="text-gray-500 mt-1">
                Modifica la información del producto.
              </p>
            </div>
          </div>

          <button
            onClick={closeModal}
            className="w-11 h-11 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition"
          >
            <X size={22} />
          </button>
        </div>

        <div
          className="flex-1 overflow-y-auto px-8 py-6 space-y-6"
          style={{
            scrollbarWidth: "none",
          }}
        >
          <InputField
            label="Nombre del producto"
            icon={<Package size={16} />}
            value={name}
            setValue={setName}
            placeholder="Ej. Playera deportiva"
            helper="Nombre principal que aparecerá en el catálogo."
          />

          <InputField
            label="SKU"
            icon={<Barcode size={16} />}
            value={sku}
            setValue={setSku}
            placeholder="SKU-0001"
            helper="Código único de identificación del producto."
          />

          <InputField
            label="Descripción"
            icon={<FileText size={16} />}
            value={description}
            setValue={setDescription}
            placeholder="Descripción del producto"
            helper="Breve descripción del producto."
          />

          <InputField
            label="Precio"
            icon={<DollarSign size={16} />}
            value={String(price)}
            setValue={(value) => setPrice(Number(value))}
            placeholder="0.00"
            helper="Precio de venta del producto."
            type="number"
          />

          <InputField
            label="Costo"
            icon={<DollarSign size={16} />}
            value={String(cost)}
            setValue={(value) => setCost(Number(value))}
            placeholder="0.00"
            helper="Costo interno del producto."
            type="number"
          />
        </div>

        <div className="p-8 border-t border-gray-100 flex flex-col sm:flex-row gap-4 bg-gray-50">
          <button
            onClick={handleSave}
            disabled={loading}
            className="
              flex-1
              bg-black
              hover:bg-gray-800
              disabled:bg-gray-400
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
            {loading ? "Guardando..." : "Guardar cambios"}
          </button>

          <button
            onClick={handleDelete}
            disabled={loading}
            className="
              flex-1
              bg-white
              hover:bg-gray-100
              text-gray-900
              border
              border-gray-300
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
            Desactivar producto
          </button>
        </div>
      </div>
    </div>
  );
}

function InputField({
  label,
  icon,
  value,
  setValue,
  placeholder,
  helper,
  type = "text",
}: {
  label: string;
  icon: React.ReactNode;
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  helper: string;
  type?: string;
}) {
  return (
    <div>
      <label className="flex items-center gap-2 text-sm font-semibold mb-2">
        {icon}
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="
          w-full
          border
          border-gray-300
          rounded-2xl
          p-4
          outline-none
          transition
          focus:ring-2
          focus:ring-gray-400
          focus:border-gray-400
        "
      />

      <p className="text-xs text-gray-500 mt-2">{helper}</p>
    </div>
  );
}
