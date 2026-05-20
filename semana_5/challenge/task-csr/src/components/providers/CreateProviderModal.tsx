import { useState } from "react";

import { Building2, Mail, Phone, BadgeInfo, User, Save, X } from "lucide-react";

import { createProvider } from "../../services/provider.service";

import { getApiErrorMessage } from "../../utils/apiError";

import { isEmpty, isValidEmail } from "../../utils/validators";

interface Props {
  closeModal: () => void;
  onCreated: () => void;
}

export default function CreateProviderModal({ closeModal, onCreated }: Props) {
  const [businessName, setBusinessName] = useState("");

  const [email, setEmail] = useState("");

  const [phone, setPhone] = useState("");

  const [rfc, setRfc] = useState("");

  const [type, setType] = useState<1 | 2>(1);

  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    if (isEmpty(businessName)) {
      alert("El nombre del proveedor es obligatorio.");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Ingresa un correo válido.");
      return;
    }

    try {
      setLoading(true);

      await createProvider({
        business_name: businessName,
        email: email || null,
        phone: phone || null,
        rfc: rfc || null,
        credit_limit: null,
        is_archived: false,
        type,
      });

      alert("Proveedor creado correctamente");

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
              <Building2 size={32} />
            </div>

            <div>
              <h2 className="text-3xl font-bold">Crear proveedor</h2>

              <p className="text-gray-500 mt-1">Agrega un nuevo proveedor.</p>
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
            label="Nombre del proveedor"
            icon={<Building2 size={16} />}
            value={businessName}
            setValue={setBusinessName}
            placeholder="Ej. Proveedor del Sureste"
            helper="Nombre comercial o nombre de la persona."
          />

          <InputField
            label="Correo electrónico"
            icon={<Mail size={16} />}
            value={email}
            setValue={setEmail}
            placeholder="correo@empresa.com"
            helper="Correo de contacto del proveedor."
            type="email"
          />

          <InputField
            label="Teléfono"
            icon={<Phone size={16} />}
            value={phone}
            setValue={setPhone}
            placeholder="9991234567"
            helper="Número de contacto del proveedor."
          />

          <InputField
            label="RFC"
            icon={<BadgeInfo size={16} />}
            value={rfc}
            setValue={setRfc}
            placeholder="XAXX010101000"
            helper="Registro Federal de Contribuyentes."
          />

          <div>
            <label className="flex items-center gap-2 text-sm font-semibold mb-3">
              <User size={16} />
              Tipo de proveedor
            </label>

            <select
              value={type}
              onChange={(e) => setType(Number(e.target.value) as 1 | 2)}
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
              <option value={1}>Business</option>

              <option value={2}>Person</option>
            </select>

            <p className="text-xs text-gray-500 mt-2">
              Business = empresa / Person = persona física.
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
            {loading ? "Guardando..." : "Guardar proveedor"}
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
      <label className="flex items-center gap-2 text-sm font-semibold mb-3">
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
