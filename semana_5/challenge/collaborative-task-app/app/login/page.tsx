import LoginForm from "@/components/forms/LoginForm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface Props {
  searchParams: Promise<{
    error?: string;
  }>;
}

export default async function LoginPage({
  searchParams,
}: Props) {
  const cookieStore =
    await cookies();

  const token =
    cookieStore.get("token");

  if (token) {
    redirect("/");
  }

  const { error } =
    await searchParams;

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
      <LoginForm error={error} />
    </main>
  );
}