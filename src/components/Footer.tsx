import logo from '../assets/logo.png'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

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

export function Footer() {
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

  // Handler for anchor links
  const handleAnchorClick = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    if (location.pathname === '/') {
      scrollToSection(sectionId)
    } else {
      // Navigate to home page with hash
      navigate(`/#${sectionId}`)
    }
  }

  return (
    <footer className="w-full bg-[#1B4F8C] text-white pt-8 pb-4 mt-8 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-start max-w-full">
        {/* Left: Logo & Location */}
        <div className="flex flex-col items-start gap-4 max-w-full">
          <img src={logo} alt="Jordanelle Aqua Park Logo" className="h-16 w-auto mb-1 drop-shadow-lg" />
          <div className="max-w-full">
            <div className="font-poppins font-bold text-base text-[#F7C873] mb-1">Jordanelle Aqua Park</div>
            <div className="text-white/90 text-sm leading-relaxed">
              Hailstone Recreation Area – Jordanelle State Park<br />
              515 UT-319, Heber City, UT 84032
            </div>
            <div className="text-[#6CA6D9] text-xs mt-1">Located near Jordanelle Rentals & Marina, right on the waterfront.</div>
            <a href="https://goo.gl/maps/2Qw2v8Qw2v82" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#3A6BAA] font-semibold hover:underline mt-1 text-sm">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10.5a8.38 8.38 0 0 1-1.9.5A8.5 8.5 0 1 1 12 3v1.5" /><path d="M12 7v5l4 2" /></svg>
              Get Directions
            </a>
          </div>
        </div>
        {/* Center: Quick Links */}
        <div className="flex flex-col gap-3 md:items-center max-w-full">
          <div className="font-poppins font-bold text-base text-[#F7C873] mb-1">Quick Links</div>
          <a 
            href="https://fareharbor.com/embeds/book/jordanellerentals/items/638160/?full-items=yes&flow=1442956"
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
            className="text-white/90 hover:text-[#F7C873] font-medium transition-colors py-0.5 text-sm"
          >
            Book Now
          </a>
          <Link to="/FAQ" className="text-white/90 hover:text-[#F7C873] font-medium transition-colors py-0.5 text-sm">FAQ</Link>
          <a href="#about" onClick={handleAnchorClick('about')} className="text-white/90 hover:text-[#F7C873] font-medium transition-colors py-0.5 text-sm">About</a>
          <Link to="/contact" className="text-white/90 hover:text-[#F7C873] font-medium transition-colors py-0.5 text-sm">Contact</Link>
          <a href="#pricing" onClick={handleAnchorClick('pricing')} className="text-white/90 hover:text-[#F7C873] font-medium transition-colors py-0.5 text-sm">Pricing</a>
        </div>
        {/* Right: Call to Action */}
        <div className="flex flex-col gap-3 bg-white rounded-xl p-4 shadow-xl border border-[#6B5432]/20 max-w-full">
          <div className="font-poppins font-bold text-base text-[#1B4F8C] mb-1">Ready to Book?</div>
          <p className="text-[#1B4F8C]/80 text-xs leading-relaxed mb-3">
            Secure your spot for the ultimate water park experience. Book online or contact us directly.
          </p>
          <button
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
                window.open('https://fareharbor.com/embeds/book/jordanellerentals/items/638160/?full-items=yes&flow=1442956', '_blank')
              }
            }}
            className="bg-[#F7C873] hover:bg-[#3A6BAA] text-[#1B4F8C] hover:text-[#F7C873] font-bold rounded-lg py-2 px-3 text-sm transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#F7C873] focus:ring-offset-2"
          >
            Book Now
          </button>
          <div className="text-xs text-[#3A6BAA] mt-1">
            <div className="flex items-center gap-1 mb-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:14356157397" className="hover:underline">(435) 615-7397</a>
            </div>
            <div className="flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:info@jordanelleaquapark.com" className="hover:underline">info@jordanelleaquapark.com</a>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom legal strip */}
      <div className="mt-6 pt-4 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 text-[#6CA6D9] text-xs relative max-w-full overflow-x-hidden">
        {/* Modern separator line */}
        <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent max-w-full" />
        <div className="mb-2 md:mb-0">© {new Date().getFullYear()} Jordanelle Aqua Park. All rights reserved.</div>
        <div className="flex gap-4">
          <a href="#privacy" className="hover:underline hover:text-[#F7C873] transition-all">Privacy Policy</a>
          <a href="#terms" className="hover:underline hover:text-[#F7C873] transition-all">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
} 