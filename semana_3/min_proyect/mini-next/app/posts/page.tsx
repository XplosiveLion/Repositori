import Link from 'next/link';

export default async function PostsPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store',
  });

  const posts = await res.json();

  return (
    <div>
      <h1>🖥️ Posts (SSR)</h1>

      {posts.slice(0, 5).map((post: any) => (
        <div key={post.id}>
          <Link href={`/posts/${post.id}`}>
            {post.title}
          </Link>
        </div>
      ))}
    </div>
  );
}