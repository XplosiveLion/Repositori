"use client";

import { useState } from "react";

import {
  updateProviderAction,
  softDeleteProviderAction,
} from "@/actions/provider.actions";

import {
  Truck,
  Mail,
  Phone,
  Building2,
  User,
  Save,
  Trash2,
  X,
} from "lucide-react";

export default function EditProviderModal({ provider, closeModal }: any) {
  const [businessName, setBusinessName] = useState(
    provider.business_name || "",
  );

  const [email, setEmail] = useState(provider.email || "");

  const [phone, setPhone] = useState(provider.phone || "");

  const [rfc, setRfc] = useState(provider.rfc || "");

  const [type, setType] = useState(provider.type);

  async function handleSubmit() {
    const confirmed = confirm("¿Deseas guardar los cambios?");

    if (!confirmed) return;

    const formData = new FormData();

    formData.append("id", provider.id.toString());

    formData.append("business_name", businessName);

    formData.append("email", email);

    formData.append("phone", phone);

    formData.append("rfc", rfc);

    formData.append("type", type.toString());

    await updateProviderAction(formData);

    alert("Proveedor actualizado correctamente");

    closeModal();
  }

  async function handleDelete() {
    const confirm1 = confirm("¿Deseas archivar este proveedor?");

    if (!confirm1) return;

    const confirm2 = confirm(
      "El proveedor ya no aparecerá en la lista. ¿Confirmas esta acción?",
    );

    if (!confirm2) return;

    const result = await softDeleteProviderAction(provider);

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
        animate-fadeIn
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
                bg-blue-50
                flex
                items-center
                justify-center
                shrink-0
              "
            >
              <Truck size={32} />
            </div>

            <div>
              <h2
                className="
                  text-3xl
                  font-bold
                "
              >
                Editar proveedor
              </h2>

              <p
                className="
                  text-gray-500
                  mt-1
                "
              >
                Modifica la información del proveedor
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

        {/* FORM */}

        <div
          className="
            flex-1
            overflow-y-auto
            px-8
            py-6
            space-y-6
          "
          style={{
            scrollbarWidth: "none",
          }}
        >
          {/* BUSINESS NAME */}

          <div>
            <label
              className="
                flex
                items-center
                gap-2
                text-sm
                font-semibold
                mb-3
              "
            >
              <Building2 size={16} />
              Nombre del proveedor
            </label>

            <input
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              placeholder="Ej. Proveedor del Sureste"
              className="
                w-full
                border
                border-gray-300
                rounded-2xl
                p-4
                outline-none
                transition
                focus:ring-2
                focus:ring-blue-400
                focus:border-blue-400
              "
            />

            <p
              className="
                text-xs
                text-gray-500
                mt-2
              "
            >
              Nombre comercial o nombre de la persona.
            </p>
          </div>

          {/* EMAIL */}

          <div>
            <label
              className="
                flex
                items-center
                gap-2
                text-sm
                font-semibold
                mb-3
              "
            >
              <Mail size={16} />
              Correo electrónico
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="correo@empresa.com"
              className="
                w-full
                border
                border-gray-300
                rounded-2xl
                p-4
                outline-none
                transition
                focus:ring-2
                focus:ring-blue-400
                focus:border-blue-400
              "
            />

            <p
              className="
                text-xs
                text-gray-500
                mt-2
              "
            >
              Correo de contacto del proveedor.
            </p>
          </div>

          {/* PHONE */}

          <div>
            <label
              className="
                flex
                items-center
                gap-2
                text-sm
                font-semibold
                mb-3
              "
            >
              <Phone size={16} />
              Teléfono
            </label>

            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="9991234567"
              className="
                w-full
                border
                border-gray-300
                rounded-2xl
                p-4
                outline-none
                transition
                focus:ring-2
                focus:ring-blue-400
                focus:border-blue-400
              "
            />

            <p
              className="
                text-xs
                text-gray-500
                mt-2
              "
            >
              Número de contacto del proveedor.
            </p>
          </div>

          {/* RFC */}

          <div>
            <label
              className="
                flex
                items-center
                gap-2
                text-sm
                font-semibold
                mb-3
              "
            >
              <Building2 size={16} />
              RFC
            </label>

            <input
              type="text"
              value={rfc}
              onChange={(e) => setRfc(e.target.value)}
              placeholder="XAXX010101000"
              className="
                w-full
                border
                border-gray-300
                rounded-2xl
                p-4
                outline-none
                transition
                focus:ring-2
                focus:ring-blue-400
                focus:border-blue-400
              "
            />

            <p
              className="
                text-xs
                text-gray-500
                mt-2
              "
            >
              Registro Federal de Contribuyentes.
            </p>
          </div>

          {/* TYPE */}

          <div>
            <label
              className="
                flex
                items-center
                gap-2
                text-sm
                font-semibold
                mb-3
              "
            >
              <User size={16} />
              Tipo de proveedor
            </label>

            <select
              value={type}
              onChange={(e) => setType(Number(e.target.value))}
              className="
                w-full
                border
                border-gray-300
                rounded-2xl
                p-4
                outline-none
                transition
                focus:ring-2
                focus:ring-blue-400
                focus:border-blue-400
              "
            >
              <option value={1}>Business</option>

              <option value={2}>Person</option>
            </select>

            <p
              className="
                text-xs
                text-gray-500
                mt-2
              "
            >
              Business = empresa / Person = persona física.
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
            bg-gray-50
          "
        >
          <button
            onClick={handleSubmit}
            className="
              flex-1
              bg-blue-600
              hover:bg-blue-700
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
            Eliminar proveedor
          </button>
        </div>
      </div>
    </div>
  );
}
