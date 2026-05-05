import Link from 'next/link';
import Counter from './components/Counter';
import ClientFetch from './components/ClientFetch';

export default async function Home() {
  // 🔴 SSR (se ejecuta en el servidor)
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    cache: 'no-store',
  });

  const data = await res.json();

  return (
    <div>
      <h1>Demo SSR vs CSR</h1>

      {/* 🔴 SSR */}
      <h2>🖥️ SSR (Server-Side Rendering)</h2>
      <p><strong>Este contenido ya viene del servidor:</strong></p>
      <h3>{data.title}</h3>
      <p>{data.body}</p>

      <hr />

      {/* ⚡ CSR */}
      <h2>⚡ CSR (Client-Side Rendering)</h2>
      <p><strong>Esto carga después en el navegador:</strong></p>
      <ClientFetch />

      <hr />

      {/* 🎮 Interacción CSR */}
      <h2>🎮 Interacción (CSR)</h2>
      <Counter />

      <hr />

      {/* 🔗 Routing */}
      <h2>🔄 Routing (CSR)</h2>
      <Link href="/posts">Ir a Posts</Link>
    </div>
  );
}