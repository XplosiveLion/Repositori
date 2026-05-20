import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  UserPlus,
  User,
  Mail,
  Lock,
  ShieldCheck,
  BadgeInfo,
} from "lucide-react";

import { getApiErrorMessage } from "../utils/apiError";

import { registerUser } from "../services/auth.service";

export default function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setError("");

    if (
      !username.trim() ||
      !email.trim() ||
      !firstName.trim() ||
      !lastName.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("Ingresa un correo válido.");
      return;
    }

    if (password.length < 8) {
      setError("La contraseña debe tener mínimo 8 caracteres.");
      return;
    }

    const commonPasswords = [
      "12345678",
      "password",
      "password123",
      "123456789",
      "qwerty123",
      "admin123",
    ];

    if (commonPasswords.includes(password.toLowerCase())) {
      setError("La contraseña es demasiado común.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    try {
      setLoading(true);

      await registerUser({
        username,
        email,
        firstName,
        lastName,
        password,
        confirmPassword,
      });

      alert("Usuario registrado correctamente. Verifica tu correo.");

      navigate("/login");
    } catch (error: any) {
      setError(getApiErrorMessage(error, "No se pudo registrar el usuario."));
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="
          bg-white
          rounded-[32px]
          shadow-2xl
          border
          border-gray-100
          w-full
          max-w-2xl
          p-8
        "
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center">
            <UserPlus size={34} />
          </div>

          <div>
            <h1 className="text-3xl font-bold">Register</h1>

            <p className="text-gray-500 text-sm mt-1">Crea tu cuenta</p>
          </div>
        </div>

        {error && (
          <div className="bg-gray-100 text-gray-800 rounded-2xl p-4 text-sm mb-5">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <InputField
            label="Username"
            icon={<BadgeInfo size={16} />}
            value={username}
            setValue={setUsername}
            placeholder="kevin123"
          />

          <InputField
            label="Correo"
            icon={<Mail size={16} />}
            value={email}
            setValue={setEmail}
            placeholder="correo@empresa.com"
            type="email"
          />

          <InputField
            label="First Name"
            icon={<User size={16} />}
            value={firstName}
            setValue={setFirstName}
            placeholder="Kevin"
          />

          <InputField
            label="Last Name"
            icon={<User size={16} />}
            value={lastName}
            setValue={setLastName}
            placeholder="Alcocer"
          />

          <InputField
            label="Password"
            icon={<Lock size={16} />}
            value={password}
            setValue={setPassword}
            placeholder="********"
            type="password"
          />

          <InputField
            label="Confirm Password"
            icon={<ShieldCheck size={16} />}
            value={confirmPassword}
            setValue={setConfirmPassword}
            placeholder="********"
            type="password"
          />
        </div>

        <button
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
            mt-8
          "
        >
          {loading ? "Registrando..." : "Crear cuenta"}
        </button>

        <p className="text-center text-sm text-gray-500 mt-6">
          ¿Ya tienes cuenta?{" "}
          <Link to="/login" className="font-semibold text-black">
            Inicia sesión
          </Link>
        </p>
      </form>
    </main>
  );
}

function InputField({
  label,
  icon,
  value,
  setValue,
  placeholder,
  type = "text",
}: {
  label: string;
  icon: React.ReactNode;
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
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
    </div>
  );
}
