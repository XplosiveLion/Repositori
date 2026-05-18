"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

export default function ProviderForm() {
  const router = useRouter();

  const [businessName, setBusinessName] = useState("");

  const [type, setType] = useState(1);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/inventory/supplier`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            business_name: businessName,

            type,
          }),
        },
      );

      if (!response.ok) {
        throw new Error();
      }

      router.push("/");

      router.refresh();
    } catch {
      alert("Failed to create provider");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <input
        type="text"
        placeholder="Business Name"
        value={businessName}
        onChange={(e) => setBusinessName(e.target.value)}
        className="border p-2 rounded"
      />

      <select
        value={type}
        onChange={(e) => setType(Number(e.target.value))}
        className="border p-2 rounded"
      >
        <option value={1}>Business</option>

        <option value={2}>Person</option>
      </select>

      <button disabled={loading} className="bg-black text-white p-2 rounded">
        {loading ? "Saving..." : "Save Provider"}
      </button>
    </form>
  );
}
