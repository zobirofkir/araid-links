"use client";

import React, { useState } from "react"
import { FaInstagram, FaGlobe, FaEnvelope, FaPhone } from "react-icons/fa"

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: <FaInstagram className="w-6 h-6" aria-hidden="true" />,
  },
  {
    name: "Arraid.net",
    href: "https://arraid.net",
    icon: <FaGlobe className="w-6 h-6" aria-hidden="true" />,
  },
]

const featuredPosts = [
  {
    id: 1,
    title: "Comment augmenter vos abonnés Instagram",
    date: "1 juin 2025",
    excerpt:
      "Conseils et astuces pour augmenter organiquement votre portée Instagram en 2025.",
  },
  {
    id: 2,
    title: "L'importance de la communauté sur les réseaux sociaux",
    date: "15 mai 2025",
    excerpt:
      "Construire des connexions authentiques qui durent au-delà des simples abonnés.",
  },
]

const Page = () => {
  const [isFollowing, setIsFollowing] = useState(false)

  const toggleFollow = () => setIsFollowing((prev) => !prev)

  return (
    <div className="min-h-screen bg-gradient-to-tr from-yellow-50 via-white to-yellow-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-700 p-6 flex flex-col items-center font-sans">
      {/* Profile Header */}
      <header className="max-w-3xl w-full bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
        <img
          src="arraid-logo.jpg"
          alt="Profil ARRAID"
          className="w-28 h-28 rounded-full border-4 border-yellow-400 mb-4 shadow-md object-cover"
          loading="lazy"
        />
        <h1 className="text-3xl font-extrabold text-yellow-600 dark:text-yellow-400 mb-2">
          ARRAID 𝐵𝒴 𝒜𝑅𝒯 𝒢𝒮𝐻 𝒟𝐸𝒞𝒪
        </h1>
        <p className="text-gray-700 dark:text-gray-300 max-w-xl leading-relaxed">
          ✨ Artisanat en cuivre et laiton<br />
          🏺 Pièces uniques et décor marocain authentique<br />
          📩 Commandes personnalisées<br />
          🚚 Livraison dans le monde entier
        </p>

        {/* Follow Button */}
        <button
          onClick={toggleFollow}
          className={`mt-6 px-6 py-2 rounded-full font-semibold transition-colors duration-300
          ${
            isFollowing
              ? "bg-yellow-400 text-white hover:bg-yellow-500"
              : "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
          }`}
          aria-pressed={isFollowing}
        >
          {isFollowing ? "Abonné" : "S'abonner"}
        </button>

        {/* Stats */}
        <div className="flex gap-12 mt-8">
          <div className="text-center">
            <span className="block text-2xl font-bold text-yellow-600 dark:text-yellow-400">
              12.3K
            </span>
            <span className="text-gray-600 dark:text-gray-400">Abonnés</span>
          </div>
          <div className="text-center">
            <span className="block text-2xl font-bold text-yellow-600 dark:text-yellow-400">
              870
            </span>
            <span className="text-gray-600 dark:text-gray-400">Abonnements</span>
          </div>
          <div className="text-center">
            <span className="block text-2xl font-bold text-yellow-600 dark:text-yellow-400">
              132
            </span>
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
            <li
              key={id}
              className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-0"
            >
              <h3 className="text-xl font-semibold text-yellow-600 dark:text-yellow-400 hover:underline cursor-pointer">
                {title}
              </h3>
              <time className="block text-sm text-gray-500 dark:text-gray-400 mb-2">
                {date}
              </time>
              <p className="text-gray-700 dark:text-gray-300">{excerpt}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Social Links */}
      <nav className="max-w-3xl w-full mt-12 bg-yellow-50 dark:bg-gray-800 rounded-xl shadow-lg p-6 flex justify-center gap-10">
        {socialLinks.map(({ name, href, icon }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className="flex items-center gap-3 text-yellow-600 dark:text-yellow-400 hover:text-yellow-800 dark:hover:text-yellow-600 transition-colors duration-300 font-semibold text-lg"
          >
            {icon}
            <span className="hidden sm:inline">{name}</span>
          </a>
        ))}
      </nav>

      {/* Contact Section */}
      <section className="max-w-3xl w-full mt-12 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 border-b border-yellow-300 dark:border-yellow-600 pb-2 w-full text-center">
          Contactez-nous
        </h2>
        <div className="flex flex-col sm:flex-row gap-6 text-yellow-600 dark:text-yellow-400 font-semibold text-lg">
          <a
            href="mailto:contact@arraid.net"
            className="flex items-center gap-2 hover:text-yellow-800 dark:hover:text-yellow-600 transition-colors"
          >
            <FaEnvelope className="w-6 h-6" />
            contact@arraid.net
          </a>
          <a
            href="tel:+212600000000"
            className="flex items-center gap-2 hover:text-yellow-800 dark:hover:text-yellow-600 transition-colors"
          >
            <FaPhone className="w-6 h-6" />
            +212 600 000 000
          </a>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-3xl w-full mt-12 bg-yellow-400 rounded-xl shadow-lg p-8 text-center text-white font-bold text-xl cursor-pointer select-none hover:bg-yellow-500 transition-colors">
        Découvrez nos nouveautés artisanales !
      </section>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-500 dark:text-gray-400 select-none">
        &copy; {new Date().getFullYear()} ARRAID 𝐵𝒴 𝒜𝑅𝒯 𝒢𝒮𝐻 𝒟𝐸𝒞𝒪. Tous droits réservés.
      </footer>
    </div>
  )
}

export default Page
