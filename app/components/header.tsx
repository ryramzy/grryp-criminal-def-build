import Link from 'next/link'
import { useState } from 'react'

// Header component for Garry Payton Law website
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-midnight/80 backdrop-blur-sm border-b border-tealBlue/20" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="Garry Payton Law Home">
            <span className="text-xl font-bold text-sandBeige">Garry Payton Law</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-sandBeige hover:text-warmGold focus:outline-none focus:ring-2 focus:ring-warmGold rounded-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
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

          {/* Navigation */}
          <nav 
            className={`${isMenuOpen ? 'block' : 'hidden'} md:flex md:space-x-8 absolute md:relative top-16 md:top-0 left-0 right-0 bg-midnight md:bg-transparent p-4 md:p-0 border-b md:border-0 border-tealBlue/20`}
            role="navigation"
            aria-label="Main navigation"
          >
            <Link 
              href="/" 
              className="block md:inline-block py-2 md:py-0 text-sandBeige hover:text-warmGold transition-colors"
              aria-current="page"
            >
              Home
            </Link>
            <Link 
              href="/practice-areas" 
              className="block md:inline-block py-2 md:py-0 text-sandBeige hover:text-warmGold transition-colors"
            >
              Practice Areas
            </Link>
            <Link 
              href="/staff" 
              className="block md:inline-block py-2 md:py-0 text-sandBeige hover:text-warmGold transition-colors"
            >
              Staff
            </Link>
            <Link 
              href="/contact" 
              className="block md:inline-block py-2 md:py-0 text-sandBeige hover:text-warmGold transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Call Button */}
          <div className="flex items-center">
            <a
              href="tel:+13126710751"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-sandBeige bg-softRed hover:bg-warmGold transition-colors focus:outline-none focus:ring-2 focus:ring-warmGold"
              aria-label="Call us at +1 312-671-0751"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </header>
  )
} 