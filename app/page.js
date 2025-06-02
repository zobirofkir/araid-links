"use client";

import React, { useState } from "react";
import { FaInstagram, FaGlobe, FaEnvelope, FaPhone } from "react-icons/fa";

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
];

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
];

const Page = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  const toggleFollow = () => setIsFollowing((prev) => !prev);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-yellow-50 via-white to-yellow-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-700 p-8 flex flex-col items-center font-sans">
      {/* Profile Header */}
      <header className="max-w-4xl w-full bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-10 flex flex-col items-center text-center transition-transform transform hover:scale-[1.02] duration-300">
        <img
          src="arraid-logo.jpg"
          alt="Profil ARRAID"
          className="w-32 h-32 rounded-full border-4 border-yellow-400 mb-6 shadow-lg object-cover"
          loading="lazy"
          decoding="async"
        />
        <h1 className="text-4xl font-extrabold text-yellow-600 dark:text-yellow-400 mb-3 tracking-wide leading-tight">
          ARRAID <span className="italic font-serif">𝐵𝒴 𝒜𝑅𝒯 𝒢𝒮𝐻 𝒟𝐸𝒞𝒪</span>
        </h1>
        <p className="text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed text-lg">
           Artisanat en cuivre et laiton<br />
          Pièces uniques et décor marocain authentique<br />
          Commandes personnalisées<br />
          🚚 Livraison dans le monde entier
        </p>

        {/* Follow Button */}
        <button
          onClick={toggleFollow}
          aria-pressed={isFollowing}
          className={`mt-8 px-10 py-3 rounded-full font-semibold text-lg shadow-md transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-300
            ${
              isFollowing
                ? "bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-400"
                : "bg-yellow-100 text-yellow-700 hover:bg-yellow-200 focus:ring-yellow-200"
            }`}
        >
          {isFollowing ? "Abonné" : "S'abonner"}
        </button>
      </header>

      {/* Social Links */}
      <nav className="max-w-4xl w-full mt-14 bg-yellow-50 dark:bg-gray-800 rounded-2xl shadow-xl p-8 flex flex-wrap justify-center gap-12">
        {socialLinks.map(({ name, href, icon }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className="flex items-center gap-4 text-yellow-600 dark:text-yellow-400 hover:text-yellow-800 dark:hover:text-yellow-600 transition-colors duration-300 font-semibold text-xl tracking-wide px-4 py-3 rounded-lg hover:scale-105 transform shadow-sm hover:shadow-md"
          >
            {icon}
            <span>{name}</span>
          </a>
        ))}
      </nav>

      {/* Featured Posts Section */}
      <section className="max-w-4xl w-full mt-16 bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-10">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8 border-b-4 border-yellow-400 dark:border-yellow-600 pb-3 tracking-wide">
          Articles en vedette
        </h2>
        <ul className="space-y-10">
          {featuredPosts.map(({ id, title, date, excerpt }) => (
            <li
              key={id}
              className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-0"
            >
              <h3 className="text-2xl font-semibold text-yellow-600 dark:text-yellow-400 hover:underline cursor-pointer transition-colors duration-200">
                {title}
              </h3>
              <time className="block text-sm text-gray-500 dark:text-gray-400 mb-3">
                {date}
              </time>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                {excerpt}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl w-full mt-16 bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-10 flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8 border-b-4 border-yellow-400 dark:border-yellow-600 pb-3 w-full">
          Contactez-nous
        </h2>
        <div className="flex flex-col sm:flex-row gap-12 text-yellow-600 dark:text-yellow-400 font-semibold text-xl tracking-wide">
          <a
            href="mailto:contact@arraid.net"
            className="flex items-center gap-4 hover:text-yellow-800 dark:hover:text-yellow-600 transition-colors duration-300"
          >
            <FaEnvelope className="w-7 h-7" />
            contact@arraid.net
          </a>
          <a
            href="tel:+212600000000"
            className="flex items-center gap-4 hover:text-yellow-800 dark:hover:text-yellow-600 transition-colors duration-300"
          >
            <FaPhone className="w-7 h-7" />
            +212 600 000 000
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 mb-8 text-center text-gray-500 dark:text-gray-400 select-none text-sm">
        &copy; {new Date().getFullYear()} ARRAID{" "}
        <span className="italic font-serif">𝐵𝒴 𝒜𝑅𝒯 𝒢𝒮𝐻 𝒟𝐸𝒞𝒪</span>. Tous droits
        réservés.
      </footer>
    </div>
  );
};

export default Page;
