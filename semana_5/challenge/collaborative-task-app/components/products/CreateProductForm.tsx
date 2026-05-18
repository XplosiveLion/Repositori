"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Package, Barcode, FileText, Tag, Save, Hash, DollarSign } from "lucide-react";

import { createProductAction } from "@/actions/product.actions";

export default function CreateProductForm() {
  const router = useRouter();

  const [name, setName] = useState("");

  const [sku, setSku] = useState("");

  const [description, setDescription] = useState("");

  const [mainModel, setMainModel] = useState("");

  const [category, setCategory] = useState("");

  const [loading, setLoading] = useState(false);

  const [price, setPrice] = useState("");

  const [cost, setCost] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!name.trim()) {
      alert("El nombre del producto es obligatorio");
      return;
    }

    if (!category.trim()) {
      alert("La categoría es obligatoria");
      return;
    }

    const formData = new FormData();

    formData.append("name", name);
    formData.append("sku", sku);
    formData.append("description", description);
    formData.append("category", category);

    formData.append("type", "1");
    formData.append("user", "1");
    formData.append("key_prod_serv", "");
    formData.append("key_unit", "");
    formData.append("unit", "");
    formData.append("iva_rate", "0");
    formData.append("ieps_rate", "0");

    try {
      setLoading(true);

      const result = await createProductAction(formData);

      alert(result.message);

      if (!result.ok) return;

      router.push("/products");
      router.refresh();
    } catch (error) {
      console.error(error);

      alert("No se pudo crear el producto");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="flex items-center gap-2 text-sm font-semibold mb-3">
          <Package size={16} />
          Nombre del producto
        </label>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ej. Bote new"
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
          required
        />
      </div>

      <div>
        <label className="flex items-center gap-2 text-sm font-semibold mb-3">
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
      </div>

      <div>
        <label className="flex items-center gap-2 text-sm font-semibold mb-3">
          <FileText size={16} />
          Descripción
        </label>

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descripción del producto"
          className="
            w-full
            border
            border-gray-300
            rounded-2xl
            p-4
            outline-none
            min-h-28
            transition
            focus:ring-2
            focus:ring-gray-400
            focus:border-gray-400
          "
        />
      </div>


      <div>
        <label className="flex items-center gap-2 text-sm font-semibold mb-3">
          <Tag size={16} />
          Categoría
        </label>

        <input
          type="number"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Ej. 8"
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
          required
        />
      </div>

      <div>
        <label className="flex items-center gap-2 text-sm font-semibold mb-3">
          <DollarSign size={16} />
          Precio
        </label>

        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Ej. 300"
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
          required
        />
      </div>

      <div>
        <label className="flex items-center gap-2 text-sm font-semibold mb-3">
          <DollarSign size={16} />
          Costo
        </label>

        <input
          type="number"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          placeholder="Ej. 200"
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
          required
        />
      </div>

      <button
        type="submit"
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
        {loading ? "Creando..." : "Crear producto"}
      </button>
    </form>
  );
}
