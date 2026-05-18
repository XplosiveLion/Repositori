"use client";

export default function GlobalError({ error }: { error: Error }) {
  return (
    <div className="p-10">
      <h2>Something went wrong</h2>
      <p>{error.message}</p>
    </div>
  );
}
