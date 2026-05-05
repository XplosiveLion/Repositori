'use client';

import { useEffect, useState } from 'react';

export default function ClientFetch() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/2')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  if (!data) return <p>⏳ Cargando en cliente...</p>;

  return (
    <div>
      <h3>{data.title}</h3>
      <p>{data.body}</p>
    </div>
  );
}