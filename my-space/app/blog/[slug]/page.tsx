import React from 'react'

interface Post {
    title: string,
    content: string,
    slug: string
}

interface Props {
    params: { slug: string }
}

const Blog = async ({ params }: Props) => {
  const posts: Post[] = await fetch('http://localhost:3000/api/content', { cache: 'no-store' }).then(
    (res) => res.json()
  );

  const post = posts.find((post) => post.slug === params.slug)!;

  return (
    <div>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
    </div>
  )
}

export default Blog