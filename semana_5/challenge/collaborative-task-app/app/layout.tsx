import "./globals.css";

import { cookies } from "next/headers";

import Navbar from "@/components/layout/Navbar";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();

  const token =
    cookieStore.get("token");

  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Navbar isLoggedIn={!!token} />

        {children}
      </body>
    </html>
  );
}