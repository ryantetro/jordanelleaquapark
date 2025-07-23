import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'

// Declare FareHarbor types
declare global {
  interface Window {
    FH?: {
      open: (options: {
        shortname: string
        fallback: string
        fullItems: string
        flow: number
        view: { item: number }
      }) => void
    }
  }
}

interface HeaderProps {
  className?: string
}

// Smooth scroll function
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}

const navLinks = [
  { name: 'Home', to: '/', isAnchor: false },
  { name: 'How to Book', to: 'booking', isAnchor: true },
  { name: 'Pricing', to: 'pricing', isAnchor: true },
  { name: 'FAQ', to: '/FAQ', isAnchor: false },
  { name: 'Contact', to: '/contact', isAnchor: false },
]

const JORDANELLE_BLUE = '#1B4F8C'

export function Header({ className }: HeaderProps = {}) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isAnimatingOut, setIsAnimatingOut] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isCompact, setIsCompact] = useState(false)
  const [isOnLightBackground, setIsOnLightBackground] = useState(false)
  const [isHero, setIsHero] = useState(true)
  const navigate = useNavigate()
  const location = useLocation()

  // Listen for hash or query param to scroll after navigation
  useEffect(() => {
    if (location.hash) {
      const section = location.hash.replace('#', '')
      setTimeout(() => scrollToSection(section), 100)
    } else if (location.search) {
      const params = new URLSearchParams(location.search)
      const scroll = params.get('scroll')
      if (scroll) setTimeout(() => scrollToSection(scroll), 100)
    }
  }, [location])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Check if we're on a page with a light background
      const path = window.location.pathname
      const lightBackgroundPages = ['/FAQ', '/contact']
      const isLightPage = lightBackgroundPages.includes(path)
      
      // For home page, check scroll position to determine background
      if (path === '/' || path === '') {
        // On home page, check if we're over light sections
        const isOverLightSection = currentScrollY > 400 // Adjust this value based on when pricing section starts
        setIsOnLightBackground(isOverLightSection)
      } else {
        setIsOnLightBackground(isLightPage)
      }
      
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

  useEffect(() => {
    const checkBackground = () => {
      // Check if we're on a page with a light background
      const path = window.location.pathname
      const lightBackgroundPages = ['/FAQ', '/contact']
      const isLightPage = lightBackgroundPages.includes(path)
      setIsOnLightBackground(isLightPage)
    }

    checkBackground()
    // Listen for route changes
    const handleRouteChange = () => checkBackground()
    window.addEventListener('popstate', handleRouteChange)
    return () => window.removeEventListener('popstate', handleRouteChange)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      setIsHero(window.scrollY < 80)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => {
    setIsAnimatingOut(true)
    setTimeout(() => {
      setMenuOpen(false)
      setIsAnimatingOut(false)
    }, 500)
  }

  // Dynamic text color based on background
  const getTextColor = () => {
    if (isOnLightBackground) {
      return 'text-[#013A63]' // Dark blue for light backgrounds
    }
    return 'text-white' // White for dark backgrounds (like hero image)
  }

  // Dynamic background based on page
  const getBackground = () => {
    if (menuOpen) {
      return 'bg-white'
    }
    if (isHero) {
      return 'bg-transparent'
    }
    if (isOnLightBackground) {
      return 'bg-white'
    }
    return `backdrop-blur-md bg-[${JORDANELLE_BLUE}]/95`
  }

  // Always keep animation/visibility classes, but allow FAQ to override bg/text/shadow
  const baseHeaderClasses = `fixed top-0 left-0 w-full z-30 transition-all duration-300 ${getBackground()} ${
    isVisible ? 'translate-y-0' : '-translate-y-full'
  }`
  const mergedClassName = `${baseHeaderClasses} ${className ? className : getTextColor()}`

  // Handler for nav links
  const handleNavClick = (link: typeof navLinks[0]) => (e: any) => {
    if (link.isAnchor) {
      e.preventDefault()
      if (location.pathname === '/') {
        scrollToSection(link.to)
      } else {
        // Use hash for scrolling after navigation
        navigate(`/#${link.to}`)
      }
      closeMenu()
    }
  }

  return (
    <header className={mergedClassName}>
      <div className={`max-w-7xl mx-auto flex items-center justify-between px-6 transition-all duration-300 ${
        isCompact ? 'py-1 md:py-2' : 'py-2'
      }`}>
        <Link to="/" className="flex items-center space-x-2 group">
          <img
            src={logo}
            alt="Jordanelle Aqua Park Logo"
            className={`rounded-md transition-all duration-300 group-hover:scale-105 ${
              isCompact ? 'h-10 w-10 md:h-12 md:w-12' : 'h-14 w-14 md:h-12 md:w-12'
            }`}
          />
          <span className={`font-bold transition-all duration-300 ${
            isCompact ? 'text-base md:text-xl' : 'text-lg md:text-xl'
          } md:inline hidden text-[#F7C873]`}>
            Jordanelle Aqua Park
          </span>
        </Link>
        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.isAnchor ? '/' : link.to}
                  onClick={handleNavClick(link)}
                  className={`${getTextColor()} font-semibold hover:text-brand-gold transition-colors duration-150 px-3 py-2 rounded-lg drop-shadow-lg text-[14px] hover:bg-white/10`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link
          to="https://fareharbor.com/embeds/book/jordanellerentals/items/638160/?full-items=yes&flow=1442956"
          onClick={(e) => {
            e.preventDefault()
            if (window.FH) {
              window.FH.open({ 
                shortname: 'jordanellerentals', 
                fallback: 'simple', 
                fullItems: 'yes', 
                flow: 1442956, 
                view: { item: 638160 } 
              })
            } else {
              // Fallback to direct link if FH is not loaded
              window.open(e.currentTarget.href, '_blank')
            }
          }}
          className={`ml-4 bg-[#F7C873] text-[#1B4F8C] font-semibold px-4 py-2 rounded-lg shadow-sm text-sm hover:bg-[#3A6BAA] hover:text-[#F7C873] transition-all duration-300 inline-flex items-center gap-1 hidden md:inline-block drop-shadow-lg`}
        >
          Book Now
        </Link>
        {/* Hamburger Icon for Mobile */}
        <button
          className={`md:hidden flex items-center justify-center rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all duration-300 ${
            isCompact ? 'p-1' : 'p-1'
          }`}
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <svg className={`text-brand-gold transition-all duration-300 drop-shadow-lg ${
            isCompact ? 'w-5 h-5' : 'w-6 h-6'
          }`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Modern Mobile Menu Overlay with smooth close transition */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center md:hidden p-4 pt-20">
          {/* Blurred dark backdrop */}
          <div
            className={`absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300 ${isAnimatingOut ? 'opacity-0' : 'opacity-100'}`}
            onClick={closeMenu}
            aria-label="Close menu backdrop"
          />
          {/* Centered popup-style menu panel */}
          <div className={`relative w-full max-w-md mx-auto bg-[#1B4F8C] rounded-2xl shadow-2xl pb-6 pt-4 px-6 flex flex-col items-center ${isAnimatingOut ? 'animate-popupOut' : 'animate-popupIn'}`}>
            {/* Logo and close button */}
            <div className="w-full flex items-center justify-between mb-6">
              <img src={logo} alt="Jordanelle Aqua Park Logo" className="h-16 w-16 rounded-md" />
              <button
                className="p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
                onClick={closeMenu}
              >
                <svg className="w-8 h-8 text-brand-blue" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {/* Nav links */}
            <nav className="w-full">
              <ul className="flex flex-col space-y-4 text-center">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.isAnchor ? '/' : link.to}
                      onClick={handleNavClick(link)}
                      className="text-xl text-white font-semibold hover:text-[#F7C873] transition-colors duration-150 py-3 block rounded-xl hover:bg-[#F7C873]/10"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            {/* Book Now button */}
            <Link
              to="https://fareharbor.com/embeds/book/jordanellerentals/items/638160/?full-items=yes&flow=1442956"
              onClick={(e) => {
                e.preventDefault()
                closeMenu()
                if (window.FH) {
                  window.FH.open({ 
                    shortname: 'jordanellerentals', 
                    fallback: 'simple', 
                    fullItems: 'yes', 
                    flow: 1442956, 
                    view: { item: 638160 } 
                  })
                } else {
                  // Fallback to direct link if FH is not loaded
                  window.open(e.currentTarget.href, '_blank')
                }
              }}
              className="mt-6 bg-[#F7C873] text-[#1B4F8C] font-semibold px-4 py-2 rounded-lg shadow-sm text-sm hover:bg-white hover:text-[#1B4F8C] transition-all duration-300 inline-flex items-center gap-1 w-full text-center justify-center"
            >
              Book Now
            </Link>
          </div>
          <style>{`
            @keyframes popupIn {
              0% { transform: scale(0.8) translateY(20px); opacity: 0; }
              100% { transform: scale(1) translateY(0); opacity: 1; }
            }
            @keyframes popupOut {
              0% { transform: scale(1) translateY(0); opacity: 1; }
              100% { transform: scale(0.8) translateY(20px); opacity: 0; }
            }
            .animate-popupIn {
              animation: popupIn 0.3s cubic-bezier(0.4,0,0.2,1) both;
            }
            .animate-popupOut {
              animation: popupOut 0.3s cubic-bezier(0.4,0,0.2,1) both;
            }
          `}</style>
        </div>
      )}
    </header>
  )
} 