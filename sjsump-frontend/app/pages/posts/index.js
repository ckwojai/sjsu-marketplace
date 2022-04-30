import Link from 'next/link'
import Container from '../../components/container'
import Post from "../../components/post"
import { getAllPosts } from '../../lib/api-client'

export default function PostsPage({allPosts}) {
  return (
    <Container>
      <div className="flex flex-row-reverse">
        <Link href="/posts/new">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Create New Post
          </button>
        </Link>
      </div>
      {allPosts.length ? (
        allPosts.map((post) => {
          return <Post {...post} />
        })
      ) : null
      }
    </Container>
  )
}

export async function getServerSideProps() {
  const allPosts = await getAllPosts();
  return {
    props: { allPosts },
  }
}
