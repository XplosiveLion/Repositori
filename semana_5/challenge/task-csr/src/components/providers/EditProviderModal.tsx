import { useState } from "react";

import {
  Truck,
  Mail,
  Phone,
  Building2,
  User,
  Save,
  X,
  Trash2,
} from "lucide-react";

import {
  updateProvider,
  softDeleteProvider,
} from "../../services/provider.service";

import { isEmpty, isValidEmail } from "../../utils/validators";

import type { Provider } from "../../services/provider.service";

import { getApiErrorMessage } from "../../utils/apiError";

interface Props {
  provider: Provider;
  closeModal: () => void;
  onUpdated: () => void;
}

export default function EditProviderModal({
  provider,
  closeModal,
  onUpdated,
}: Props) {
  const [businessName, setBusinessName] = useState(
    provider.business_name || "",
  );

  const [email, setEmail] = useState(provider.email || "");

  const [phone, setPhone] = useState(provider.phone || "");

  const [rfc, setRfc] = useState(provider.rfc || "");

  const [type, setType] = useState(provider.type);

  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    const confirm1 = confirm("¿Deseas eliminar este proveedor?");

    if (!confirm1) return;

    const confirm2 = confirm(
      "El proveedor se archivará y dejará de mostrarse. ¿Confirmas la acción?",
    );

    if (!confirm2) return;

    try {
      setLoading(true);

      await softDeleteProvider(provider);

      alert("Proveedor archivado correctamente");

      await onUpdated();

      closeModal();
    } catch (error) {
      console.error(error);

      alert("No se pudo archivar el proveedor");
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit() {
    const confirmed = confirm("¿Deseas guardar los cambios?");

    if (!confirmed) return;
    
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

      await updateProvider({
        ...provider,
        business_name: businessName,
        email: email || null,
        phone: phone || null,
        rfc: rfc || null,
        type,
      });

      alert("Proveedor actualizado correctamente");

      await onUpdated();

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
              <Truck size={32} />
            </div>

            <div>
              <h2 className="text-3xl font-bold">Editar proveedor</h2>

              <p className="text-gray-500 mt-1">
                Modifica la información del proveedor.
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
            icon={<Building2 size={16} />}
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

        <div className="p-8 border-t border-gray-100 bg-gray-50 flex flex-col sm:flex-row gap-4">
          <button
            onClick={handleSubmit}
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
      disabled:bg-gray-200
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
            Eliminar proveedor
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
