import Link from 'next/link'
import Container from '../../components/container'
import distanceToNow from '../../lib/dateRelative'
import { getAllPosts } from '../../lib/api-client'
import { useEffect } from 'react'

export default function NotePage({allPosts}) {
  return (
    <Container>
      {allPosts.length ? (
        allPosts.map((post) => (
          <article key={post.title} className="mb-10">
            <Link as={`/posts/${post.title}`} href="/posts/[slug]">
              <a className="text-lg leading-6 font-bold">{post.title}</a>
            </Link>
            <p>{post.description}</p>
            {/* <div className="text-gray-400">
              <time>{distanceToNow(new Date(post.date))}</time>
            </div> */}
          </article>
        ))
      ) : (
        <p>No blog posted yet :/</p>
      )}
    </Container>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`http://127.0.0.1:3000/api/post`);
  console.log(res)
  const allPosts = await res.json();
  console.log(allPosts)

  return {
    props: { allPosts },
  }
}
