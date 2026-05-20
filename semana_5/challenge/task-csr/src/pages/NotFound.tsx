import {
  Link,
} from "react-router-dom";

import {
  TriangleAlert,
  ArrowLeft,
} from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div
        className="
          bg-white
          rounded-[32px]
          shadow-2xl
          border
          border-gray-100
          p-10
          max-w-2xl
          w-full
          text-center
        "
      >
        <div className="w-24 h-24 rounded-3xl bg-gray-100 flex items-center justify-center mx-auto mb-8">
          <TriangleAlert size={50} />
        </div>

        <h1 className="text-6xl font-black text-gray-900">
          404
        </h1>

        <h2 className="text-3xl font-bold mt-4">
          Página no encontrada
        </h2>

        <p className="text-gray-500 mt-4 text-lg">
          La ruta que intentaste abrir no existe o fue eliminada.
        </p>

        <Link
          to="/"
          className="
            inline-flex
            items-center
            justify-center
            gap-3
            mt-8
            bg-black
            hover:bg-gray-800
            text-white
            px-8
            py-4
            rounded-2xl
            font-semibold
            shadow-md
            hover:shadow-2xl
            transition-all
          "
        >
          <ArrowLeft size={20} />
          Volver al dashboard
        </Link>
      </div>
    </main>
  );
}