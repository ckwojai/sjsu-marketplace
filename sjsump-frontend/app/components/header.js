import Link from 'next/link'

function Header() {
  return (
    <header className="py-6">
      <nav className="bg-gray-800 border-gray-200 px-2 sm:px-4 py-4 rounded opacity-95">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link href="/logreg">
            <a className="flex items-center">
              <span className="self-center text-3xl font-semibold whitespace-nowrap text-blue-300">SJSU Marketplace</span>
            </a>
          </Link>
          <div className="flex items-center md:order-2">
            <button type="button" className="flex mr-3 text-lg bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown">
              <span className="sr-only">Open user menu</span>
              <img className="w-8 h-8 rounded-full" src="/profile_pic.jpeg" alt="user photo" />
            </button>
            <div className="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown">
              <div className="py-3 px-4">
                <span className="block text-lg text-gray-900 dark:text-white">Bonnie Green</span>
                <span className="block text-lg font-medium text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
              </div>
              <ul className="py-1" aria-labelledby="dropdown">
                <li>
                  <a href="#" className="block py-2 px-4 text-lg text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-4 text-lg text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-4 text-lg text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-4 text-lg text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                </li>
              </ul>
            </div>
            <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-lg text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
              <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
          </div>
          <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium">
              <Link href="/logreg">
                <a className="block py-2 pr-4 pl-3 font-semibold text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
              </Link>
              <Link href="/posts">
                <a className="block py-2 pr-4 pl-3 font-semibold text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Posts</a>
              </Link>
              <Link href="/logreg/login">
                <a className="block py-2 pr-4 pl-3 font-semibold text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Login</a>
              </Link>
              <Link href="/logreg/register">
                <a className="block py-2 pr-4 pl-3 font-semibold text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Register</a>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
