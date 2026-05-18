import CreateProviderForm from "@/components/providers/CreateProviderForm";

export default function CreateProviderPage() {
  return (
    <main
      className="
        min-h-screen
        bg-gray-100
        p-6
      "
    >
      <div
        className="
          max-w-3xl
          mx-auto
          bg-white
          rounded-3xl
          shadow-xl
          p-8
        "
      >
        <div className="mb-8">
          <h1
            className="
              text-4xl
              font-bold
            "
          >
            Crear proveedor
          </h1>

          <p
            className="
              text-gray-500
              mt-2
            "
          >
            Agrega un nuevo
            proveedor
          </p>
        </div>

        <CreateProviderForm />
      </div>
    </main>
  );
}