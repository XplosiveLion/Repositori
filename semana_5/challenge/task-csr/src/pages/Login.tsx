import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { LogIn, Mail, Lock } from "lucide-react";
import { loginUser } from "../services/auth.service";
import { useAuth } from "../context/AuthContext";
import { getApiErrorMessage } from "../utils/apiError";

export default function Login() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("Ingresa un correo válido.");
      return;
    }

    try {
      setLoading(true);

      const data = await loginUser({
        email,
        password,
      });

      /*
      console.log("LOGIN DATA:", data);
      console.log("LOGIN USER:", data.user);
      */
     
      login(data.token, data.user);

      navigate("/");
    } catch (error: any) {
      setError(getApiErrorMessage(error, "Credenciales incorrectas."));
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
          max-w-md
          p-8
        "
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center">
            <LogIn size={34} />
          </div>

          <div>
            <h1 className="text-3xl font-bold">Login</h1>

            <p className="text-gray-500 text-sm mt-1">Accede a tu cuenta</p>
          </div>
        </div>

        {error && (
          <div className="bg-gray-100 text-gray-800 rounded-2xl p-4 text-sm mb-5">
            {error}
          </div>
        )}

        <div className="space-y-5">
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold mb-2">
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
                focus:ring-gray-400
                focus:border-gray-400
              "
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-semibold mb-2">
              <Lock size={16} />
              Contraseña
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingresa tu contraseña"
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
          {loading ? "Entrando..." : "Iniciar sesión"}
        </button>

        <p className="text-center text-sm text-gray-500 mt-6">
          ¿No tienes cuenta?{" "}
          <Link to="/register" className="font-semibold text-black">
            Regístrate
          </Link>
        </p>
      </form>
    </main>
  );
}
