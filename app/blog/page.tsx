import Link from 'next/link';
import React from 'react'

interface Post {
    title: string,
    content: string,
    slug: string
}

const Blogs = async () => {
  const posts: Post[] = await fetch('http://localhost:3000/api/content').then((res) => res.json());

  return (
    <div className='p-10 space-y-10'>
        {posts && (
            posts.map((post: Post) => (
                <div key={post.slug}>
                   <Link href={`/blog/${post.slug}`} className='text-[40px]'>{post.title}</Link>
                </div>             
            ))
        )}
    </div>
  )
}

export default Blogs