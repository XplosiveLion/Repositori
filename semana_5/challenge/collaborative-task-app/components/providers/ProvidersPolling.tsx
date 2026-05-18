"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

export default function ProvidersPolling() {
  const router = useRouter();

  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setUpdating(true);

      router.refresh();

      setTimeout(() => {
        setUpdating(false);
      }, 1000);
    }, 30000);

    return () => clearInterval(interval);
  }, [router]);

  return (
    <div className="mb-4 text-sm text-gray-500">
      {updating ? "Updating providers..." : "Live updates enabled"}
    </div>
  );
}
