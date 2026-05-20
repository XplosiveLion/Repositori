import { useEffect, useState } from "react";

import {
  Package,
  Save,
  X,
  Barcode,
  FileText,
  Tag,
  DollarSign,
  Hash,
} from "lucide-react";

import { createProduct, getCategories } from "../../services/product.service";

import { isEmpty, isValidNumber } from "../../utils/validators";

import { getApiErrorMessage } from "../../utils/apiError";

interface Props {
  closeModal: () => void;
  onCreated: () => void;
}

export default function CreateProductModal({ closeModal, onCreated }: Props) {
  const [name, setName] = useState("");

  const [sku, setSku] = useState("");

  const [description, setDescription] = useState("");

  const [price, setPrice] = useState("");

  const [cost, setCost] = useState("");

  const [mainModel, setMainModel] = useState("");

  const [category, setCategory] = useState("");

  const [categories, setCategories] = useState<any[]>([]);

  const [loading, setLoading] = useState(false);

  async function loadCategories() {
    try {
      const response = await getCategories();

      const list = Array.isArray(response) ? response : response?.data || [];

      setCategories(list);
    } catch (error) {
      console.error(error);
      setCategories([]);
    }
  }

  useEffect(() => {
    loadCategories();
  }, []);

  async function handleSubmit() {
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

    if (!category) {
      alert("Debes seleccionar una categoría.");
      return;
    }

    if (mainModel && !isValidNumber(mainModel)) {
      alert("El Main Model debe ser un ID numérico.");
      return;
    }

    const confirmed = confirm("¿Deseas crear este producto?");

    if (!confirmed) return;

    try {
      setLoading(true);

      await createProduct({
        sku: sku || "",
        name,
        description,
        average_rating: "0.00",
        rating_count: 0,
        is_active: true,
        is_archived: false,
        type: 1,
        preparation_time: 0,
        is_preparation_time: false,
        main_model: mainModel ? Number(mainModel) : null,
        display_on_store: true,
        display_on_pos: true,
        outstanding: false,
        show_in_gallery: false,
        key_prod_serv: "",
        key_unit: "",
        unit: "",
        iva_rate: "0",
        ieps_rate: "0",
        user: 1,
        category: Number(category),
      });

      console.log({
        price,
        cost,
      });

      alert("Producto creado correctamente");

      await onCreated();

      closeModal();
    } catch (error) {
      console.error(error);

      alert(getApiErrorMessage(error, "No se pudo guardar."));
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
              <h2 className="text-3xl font-bold">Crear producto</h2>

              <p className="text-gray-500 mt-1">
                Agrega un nuevo producto al catálogo.
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
            placeholder="Ej. Bote new"
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
            value={price}
            setValue={setPrice}
            placeholder="Ej. 300"
            helper="Precio de venta del producto."
            type="number"
          />

          <InputField
            label="Costo"
            icon={<DollarSign size={16} />}
            value={cost}
            setValue={setCost}
            placeholder="Ej. 200"
            helper="Costo interno del producto."
            type="number"
          />

          <InputField
            label="Main Model"
            icon={<Hash size={16} />}
            value={mainModel}
            setValue={setMainModel}
            placeholder="ID del main model"
            helper="Debe ser un ID numérico válido. Déjalo vacío si no aplica."
            type="number"
          />

          <div>
            <label className="flex items-center gap-2 text-sm font-semibold mb-3">
              <Tag size={16} />
              Categoría
            </label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
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
            >
              <option value="">Selecciona una categoría</option>

              {categories.map((category: any) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>

            <p className="text-xs text-gray-500 mt-2">
              Selecciona el nombre de la categoría. Internamente se enviará su
              ID.
            </p>
          </div>
        </div>

        <div className="p-8 border-t border-gray-100 bg-gray-50">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="
              w-full
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
            {loading ? "Guardando..." : "Guardar producto"}
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
