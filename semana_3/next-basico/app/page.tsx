// IMPORTAMOS Link para navegación (CSR Routing)
import Link from 'next/link';

// Este componente es SSR por defecto (NO tiene 'use client')
export default async function Home() {

  // 🔴 SSR: Este fetch se ejecuta en el SERVIDOR
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await res.json();

  return (
    <div style={{ padding: 20 }}>

      {/* Título */}
      <h1>Ejemplo Next.js (SSR + CSR)</h1>

      {/* 🔴 SSR */}
      <h2>🖥️ SSR (Server-Side Rendering)</h2>
      <p>Este contenido viene del servidor:</p>
      <h3>{data.title}</h3>
      <p>{data.body}</p>

      <hr />

      {/* 🔗 CSR Routing */}
      <h2>🔄 Navegación CSR</h2>
      <Link href="/about">Ir a About</Link>

    </div>
  );
}