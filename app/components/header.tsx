'use client'

import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'

// Header component for Garry Payton Law website
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-midnight/95 backdrop-blur-sm border-b border-warmGold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Garry Payton Law"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="ml-2 text-white font-semibold">Garry Payton Law</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-white hover:text-warmGold transition-colors"
            >
              Home
            </Link>
            <Link
              href="/practice-areas"
              className="text-white hover:text-warmGold transition-colors"
            >
              Practice Areas
            </Link>
            <Link
              href="/staff"
              className="text-white hover:text-warmGold transition-colors"
            >
              Staff
            </Link>
            <Link
              href="/faq"
              className="text-white hover:text-warmGold transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="/client-toolkit"
              className="text-white hover:text-warmGold transition-colors"
            >
              Client Toolkit
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-warmGold transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-warmGold transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            <Link
              href="/"
              className="block text-white hover:text-warmGold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/practice-areas"
              className="block text-white hover:text-warmGold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Practice Areas
            </Link>
            <Link
              href="/staff"
              className="block text-white hover:text-warmGold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Staff
            </Link>
            <Link
              href="/faq"
              className="block text-white hover:text-warmGold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/client-toolkit"
              className="block text-white hover:text-warmGold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Client Toolkit
            </Link>
            <Link
              href="/contact"
              className="block text-white hover:text-warmGold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
} 