import RegisterForm from "@/components/forms/RegisterForm";

export default function RegisterPage() {
  return (
    <main
      className="
        min-h-screen
        bg-gray-100
        flex
        items-center
        justify-center
        p-6
      "
    >
      <RegisterForm />
    </main>
  );
}