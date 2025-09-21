'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

// Header component for Garry Payton Law website
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/practice-areas', label: 'Practice Areas' },
    { href: '/staff', label: 'Staff' },
    { href: '/contact', label: 'Contact' },
    { href: '/faq', label: 'FAQ' },
    { href: '/client-toolkit', label: 'Client Toolkit' },
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-midnight/98 backdrop-blur-md border-b border-warmGold/30 shadow-strong' 
          : 'bg-midnight/95 backdrop-blur-sm border-b border-warmGold/20'
      }`}
    >
      <div className="container">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center group transition-all duration-200 hover:scale-105"
            aria-label="Garry A. Payton Law - Home"
          >
            <div className="relative">
              <Image
                src="/logo.jpg"
                alt="Law Offices of Garry A. Payton logo"
                width={48}
                height={48}
                className="h-12 w-12 object-contain rounded-lg shadow-soft transition-all duration-200 group-hover:shadow-glow"
                priority
              />
            </div>
            <span className="ml-3 text-sandBeige font-bold text-lg group-hover:text-warmGold transition-colors duration-200">
              Garry A. Payton Law
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1" role="navigation" aria-label="Main navigation">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                  pathname === href 
                    ? 'text-warmGold bg-warmGold/10 shadow-glow' 
                    : 'text-sandBeige hover:text-warmGold hover:bg-midnightLight/50'
                }`}
                aria-current={pathname === href ? 'page' : undefined}
              >
                {label}
                {pathname === href && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-warmGold rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-sandBeige hover:text-warmGold hover:bg-midnightLight/50 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-warmGold focus:ring-offset-2 focus:ring-offset-midnight"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="h-6 w-6 transition-transform duration-200"
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
        <div
          id="mobile-menu"
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'max-h-96 opacity-100 py-4' 
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <nav className="space-y-2 border-t border-warmGold/20 pt-4" role="navigation" aria-label="Mobile navigation">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`block px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                  pathname === href 
                    ? 'text-warmGold bg-warmGold/10 shadow-glow' 
                    : 'text-sandBeige hover:text-warmGold hover:bg-midnightLight/50'
                }`}
                onClick={() => setIsMenuOpen(false)}
                aria-current={pathname === href ? 'page' : undefined}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
} 