import { loginAction } from "@/actions/auth.actions";
import { Lock, Mail, LogIn } from "lucide-react";

interface Props {
  error?: string;
}

function getErrorMessage(error?: string) {
  if (error === "empty") {
    return "Debes llenar todos los campos.";
  }

  if (error === "email") {
    return "Ingresa un correo válido.";
  }

  if (error === "token") {
    return "No se recibió token de autenticación.";
  }

  if (error === "credentials") {
    return "Credenciales incorrectas.";
  }

  return null;
}

export default function LoginForm({ error }: Props) {
  const message = getErrorMessage(error);

  return (
    <form
      action={loginAction}
      className="
        bg-white
        rounded-[32px]
        shadow-2xl
        border
        border-gray-100
        w-full
        max-w-md
        p-8
      "
    >
      <div
        className="
          flex
          items-center
          gap-4
          mb-8
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
          "
        >
          <LogIn size={34} />
        </div>

        <div>
          <h1
            className="
              text-3xl
              font-bold
            "
          >
            Login
          </h1>

          <p
            className="
              text-gray-500
              text-sm
              mt-1
            "
          >
            Accede a tu cuenta
          </p>
        </div>
      </div>

      {message && (
        <div
          className="
            bg-red-50
            text-red-600
            rounded-2xl
            p-4
            text-sm
            mb-5
          "
        >
          {message}
        </div>
      )}

      <div className="space-y-5">
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
            <Mail size={16} />
            Correo electrónico
          </label>

          <input
            type="email"
            name="email"
            placeholder="correo@empresa.com"
            required
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
        </div>

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
            <Lock size={16} />
            Contraseña
          </label>

          <input
            type="password"
            name="password"
            placeholder="Ingresa tu contraseña"
            required
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
        </div>
      </div>

      <button
        type="submit"
        className="
          w-full
          bg-blue-600
          hover:bg-blue-700
          text-white
          py-4
          rounded-2xl
          font-semibold
          transition
          mt-8
        "
      >
        Iniciar sesión
      </button>
    </form>
  );
}
