import Link from 'next/link'
import Container from '../components/container'

function Header() {
  return (
    <header className="py-6">
      <Link href="/posts">
        <a className="text-3xl font-bold text-blue-700">SJSU Marketplace</a>
      </Link>
      <Container>
        <nav className="flex space-x-8 text-xl text-teal-500">
          <Link href="/posts/new">
            <a className="text-indigo-500">New Post</a>
          </Link>
        </nav>
      </Container>
    </header>
  )
}

export default Header
