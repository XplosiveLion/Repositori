"use client";

export default function Error({ error }: { error: Error }) {
  return (
    <div className="p-10">
      <h2>Failed to load provider</h2>

      <p>{error.message}</p>
    </div>
  );
}
