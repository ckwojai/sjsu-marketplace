import Link from 'next/link'
import Container from '../../components/container'
import Post from "../../components/post"
import { getAllPosts } from '../../lib/api-client'

export default function PostsPage({allPosts}) {
  return (
    <Container>
      {allPosts.length ? (
        allPosts.map((post) => {
          return <Post {...post} />
        })
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
