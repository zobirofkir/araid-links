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

const featuredPosts = [
  {
    id: 1,
    title: "Comment augmenter vos abonnés Instagram",
    date: "1 juin 2025",
    excerpt: "Conseils et astuces pour augmenter organiquement votre portée Instagram en 2025.",
  },
  {
    id: 2,
    title: "L'importance de la communauté sur les réseaux sociaux",
    date: "15 mai 2025",
    excerpt: "Construire des connexions authentiques qui durent au-delà des simples abonnés.",
  },
]

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-yellow-50 via-white to-yellow-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-700 p-6 flex flex-col items-center">
      
      {/* Profile Header */}
      <header className="max-w-3xl w-full bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
        <img
          src="arraid-logo.jpg"
          alt="Profil"
          className="w-28 h-28 rounded-full border-4 border-yellow-400 mb-4 shadow-md"
        />
        <h1 className="text-3xl font-extrabold text-yellow-600 dark:text-yellow-400 mb-2">
          ARRAID 𝐵𝒴 𝒜𝑅𝒯 𝒢𝒮𝐻 𝒟𝐸𝒞𝒪
        </h1>
        <p className="text-gray-700 dark:text-gray-300 max-w-xl">
          ✨ Artisanat en cuivre et laiton<br/>
          🏺 Pièces uniques et décor marocain authentique<br/>
          📩 Commandes personnalisées<br/>
          🚚 Livraison dans le monde entier
        </p>

        {/* Stats */}
        <div className="flex gap-12 mt-6">
          <div className="text-center">
            <span className="block text-2xl font-bold text-yellow-600 dark:text-yellow-400">12.3K</span>
            <span className="text-gray-600 dark:text-gray-400">Abonnés</span>
          </div>
          <div className="text-center">
            <span className="block text-2xl font-bold text-yellow-600 dark:text-yellow-400">870</span>
            <span className="text-gray-600 dark:text-gray-400">Abonnements</span>
          </div>
          <div className="text-center">
            <span className="block text-2xl font-bold text-yellow-600 dark:text-yellow-400">132</span>
            <span className="text-gray-600 dark:text-gray-400">Publications</span>
          </div>
        </div>
      </header>

      {/* Featured Posts Section */}
      <section className="max-w-3xl w-full mt-12 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 border-b border-yellow-300 dark:border-yellow-600 pb-2">
          Articles en vedette
        </h2>
        <ul className="space-y-6">
          {featuredPosts.map(({ id, title, date, excerpt }) => (
            <li key={id} className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <h3 className="text-xl font-semibold text-yellow-600 dark:text-yellow-400 hover:underline cursor-pointer">{title}</h3>
              <time className="block text-sm text-gray-500 dark:text-gray-400 mb-2">{date}</time>
              <p className="text-gray-700 dark:text-gray-300">{excerpt}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Social Links */}
      <nav className="max-w-3xl w-full mt-12 bg-yellow-50 dark:bg-gray-800 rounded-xl shadow-lg p-6 flex justify-center gap-8">
        {socialLinks.map(({ name, href, icon }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-800 dark:hover:text-yellow-600 transition-colors duration-300 font-semibold text-lg"
          >
            {icon}
            <span className="hidden sm:inline">{name}</span>
          </a>
        ))}
      </nav>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} ARRAID 𝐵𝒴 𝒜𝑅𝒯 𝒢𝒮𝐻 𝒟𝐸𝒞𝒪. Tous droits réservés.
      </footer>
    </div>
  )
}

export default Page
