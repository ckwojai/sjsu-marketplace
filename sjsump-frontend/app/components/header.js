import Link from 'next/link'
import Container from '../components/container'

function Header() {
  return (
    <header className="py-6">
      <a className="text-xl">SJSU Marketplace</a>
      <Container>
        <nav className="flex space-x-8 text-lg">
          <Link href="/posts">
            <a>Posts</a>
          </Link>
        </nav>
      </Container>
    </header>
  )
}

export default Header
