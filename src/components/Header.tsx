import React, { useState, useEffect } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

interface HeaderProps {
  className?: string
}

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/#about' },
  { name: 'Activities', to: '/#activities' },
  { name: 'Booking', to: '/#booking' },
  { name: 'FAQ', to: '/FAQ' },
  { name: 'Contact', to: '/contact' },
]

export function Header({ className }: HeaderProps = {}) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isAnimatingOut, setIsAnimatingOut] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isCompact, setIsCompact] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY < 10) {
        setIsVisible(true)
        setIsCompact(false)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true)
        setIsCompact(currentScrollY > 50)
      } else if (currentScrollY > 50) {
        setIsCompact(true)
      }
      setLastScrollY(currentScrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const closeMenu = () => {
    setIsAnimatingOut(true)
    setTimeout(() => {
      setMenuOpen(false)
      setIsAnimatingOut(false)
    }, 500)
  }

  // Always keep animation/visibility classes, but allow FAQ to override bg/text/shadow
  const baseHeaderClasses = `fixed top-0 left-0 w-full z-30 transition-all duration-300 border-b border-[#232A2B] ${
    isVisible ? 'translate-y-0' : '-translate-y-full'
  }`
  const mergedClassName = `${baseHeaderClasses} ${className ? className : 'bg-[#181C1B] text-white'}`

  return (
    <header className={mergedClassName}>
      <div className={`max-w-7xl mx-auto flex items-center justify-between px-6 transition-all duration-300 ${
        isCompact ? 'py-2 md:py-4' : 'py-4'
      }`}>
        <Link to="/" className="flex items-center space-x-3 group">
          <img
            src={logo}
            alt="Jordanelle Aqua Park Logo"
            className={`rounded-md transition-all duration-300 group-hover:scale-105 ${
              isCompact ? 'h-10 w-10 md:h-16 md:w-16' : 'h-16 w-16'
            }`}
          />
          <span className={`font-bold text-brand-gold tracking-wide drop-shadow-sm transition-all duration-300 ${
            isCompact ? 'text-lg md:text-2xl' : 'text-2xl'
          }`}>
            <span className={isCompact ? 'hidden sm:inline' : ''}>Jordanelle Aqua Park</span>
            <span className={isCompact ? 'sm:hidden' : 'hidden'}>Jordanelle</span>
          </span>
        </Link>
        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  className="text-white font-medium hover:text-brand-gold transition-colors duration-150 px-2 py-1 rounded"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link
          to="/#booking"
          className={`ml-6 bg-brand-gold text-brand-blue font-bold rounded shadow hover:bg-brand-blue hover:text-brand-gold border-2 border-brand-gold transition-all duration-300 hidden md:inline-block ${
            isCompact ? 'px-3 py-1 text-sm' : 'px-5 py-2'
          }`}
        >
          Book Now
        </Link>
        {/* Hamburger Icon for Mobile */}
        <button
          className={`md:hidden flex items-center justify-center rounded focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all duration-300 ${
            isCompact ? 'p-1' : 'p-2'
          }`}
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <svg className={`text-brand-gold transition-all duration-300 ${
            isCompact ? 'w-6 h-6' : 'w-8 h-8'
          }`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Modern Mobile Menu Overlay with smooth close transition */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col md:hidden">
          {/* Blurred dark backdrop */}
          <div
            className={`absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300 ${isAnimatingOut ? 'opacity-0' : 'opacity-100'}`}
            onClick={closeMenu}
            aria-label="Close menu backdrop"
          />
          {/* Slide-up/down menu panel */}
          <div className={`relative mt-auto w-full rounded-t-3xl bg-white shadow-2xl pb-8 pt-6 px-6 flex flex-col items-center ${isAnimatingOut ? 'animate-slideDown' : 'animate-slideUp'}`}>
            {/* Logo and close button */}
            <div className="w-full flex items-center justify-between mb-6">
              <img src={logo} alt="Jordanelle Aqua Park Logo" className="h-12 w-12 rounded-md" />
              <button
                className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-brand-gold"
                aria-label="Close menu"
                onClick={closeMenu}
              >
                <svg className="w-8 h-8 text-brand-blue" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {/* Nav links */}
            <nav className="w-full flex-1">
              <ul className="flex flex-col space-y-6 text-center">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.to}
                      className="text-2xl text-brand-blue font-semibold hover:text-brand-gold transition-colors duration-150 py-2 block rounded-lg hover:bg-brand-gold/10"
                      onClick={closeMenu}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            {/* Sticky Book Now button */}
            <Link
              to="/#booking"
              className="mt-8 bg-brand-gold text-brand-blue font-bold px-8 py-4 rounded-xl shadow-lg text-xl hover:bg-brand-blue hover:text-brand-gold border-2 border-brand-gold transition-colors duration-150 w-full text-center sticky bottom-4"
              onClick={closeMenu}
            >
              Book Now
            </Link>
          </div>
          <style>{`
            @keyframes slideUp {
              0% { transform: translateY(100%); opacity: 0; }
              100% { transform: translateY(0); opacity: 1; }
            }
            @keyframes slideDown {
              0% { transform: translateY(0); opacity: 1; }
              100% { transform: translateY(100%); opacity: 0; }
            }
            .animate-slideUp {
              animation: slideUp 0.5s cubic-bezier(0.4,0,0.2,1) both;
            }
            .animate-slideDown {
              animation: slideDown 0.5s cubic-bezier(0.4,0,0.2,1) both;
            }
          `}</style>
        </div>
      )}
    </header>
  )
} 