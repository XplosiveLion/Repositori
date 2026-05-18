"use client";

import { useRouter } from "next/navigation";

interface Props {
  id: number;
}

export default function DeleteProviderButton({ id }: Props) {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/inventory/supplier/${id}`,
        {
          method: "DELETE",
        },
      );

      if (!response.ok) {
        throw new Error();
      }

      router.push("/");

      router.refresh();
    } catch {
      alert("Failed to delete provider");
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 text-white px-4 py-2 rounded"
    >
      Delete
    </button>
  );
}
