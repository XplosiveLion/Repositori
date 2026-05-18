import {
  Package,
} from "lucide-react";

import CreateProductForm from "@/components/products/CreateProductForm";

export default function CreateProductPage() {
  return (
    <main
      className="
        min-h-screen
        bg-gray-100
        p-6
        md:p-10
      "
    >
      <div
        className="
          max-w-3xl
          mx-auto
          bg-white
          rounded-[32px]
          shadow-2xl
          border
          border-gray-100
          p-8
        "
      >
        <div
          className="
            flex
            items-center
            gap-5
            mb-8
          "
        >
          <div
            className="
              w-16
              h-16
              rounded-2xl
              bg-gray-100
              flex
              items-center
              justify-center
            "
          >
            <Package size={32} />
          </div>

          <div>
            <h1
              className="
                text-4xl
                font-bold
              "
            >
              Crear producto
            </h1>

            <p
              className="
                text-gray-500
                mt-1
              "
            >
              Agrega un nuevo producto al catálogo.
            </p>
          </div>
        </div>

        <CreateProductForm />
      </div>
    </main>
  );
}