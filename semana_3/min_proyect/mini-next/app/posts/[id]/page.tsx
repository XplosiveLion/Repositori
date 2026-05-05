export default async function PostDetail({ params }: any) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
    { cache: 'no-store' }
  );

  const post = await res.json();

  return (
    <div>
      <h1>🖥️ Detalle SSR</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}