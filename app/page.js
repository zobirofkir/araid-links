import React from 'react'

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg
        fill="currentColor"
        stroke="none"
        viewBox="0 0 24 24"
        className="w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm6.5-.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM12 9.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" />
      </svg>
    ),
  },
  {
    name: 'Arraid.net',
    href: 'https://arraid.net',
    icon: (
      <svg
        fill="currentColor"
        stroke="none"
        viewBox="0 0 24 24"
        className="w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm6.93 7h-3.03a15.36 15.36 0 00-1.5-4.12 8.052 8.052 0 014.53 4.12zM12 4.1a13.21 13.21 0 011.83 5.36h-3.66A13.21 13.21 0 0112 4.1zM4.07 9a8.05 8.05 0 014.53-4.12A15.36 15.36 0 007.07 9H4.07zm0 6h3a15.36 15.36 0 001.5 4.12A8.05 8.05 0 014.07 15zm3.73 5.65A13.21 13.21 0 0112 19.9a13.21 13.21 0 01-1.83-5.36h3.66zm2.44-1.3a15.04 15.04 0 001.5-4.13h3.03a8.05 8.05 0 01-4.53 4.13zM12 20.9a13.28 13.28 0 01-1.83-5.36h3.66A13.28 13.28 0 0112 20.9zm5.93-2.9h-3.03a15.04 15.04 0 01-1.5 4.12 8.05 8.05 0 004.53-4.12z" />
      </svg>
    ),
  },
]

const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black transition-colors duration-500">
      <nav className="flex flex-col sm:flex-row gap-6 p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg">
        {socialLinks.map(({ name, href, icon }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors duration-300 font-semibold text-lg"
          >
            {icon}
            <span className="hidden sm:inline">{name}</span>
          </a>
        ))}
      </nav>
    </div>
  )
}

export default Page
