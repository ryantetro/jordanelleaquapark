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
const scrollToPricing = () => {
  const pricingSection = document.getElementById('pricing')
  if (pricingSection) {
    pricingSection.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}

// SVG icons for steps
const TicketIcon = () => (
  <svg aria-label="Ticket" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="10" rx="2" fill="white" stroke="currentColor"/><path d="M7 7v10M17 7v10" stroke="#0179D0" strokeWidth="2"/></svg>
)
const CalendarIcon = () => (
  <svg aria-label="Calendar" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="3" fill="#D7F1FF" stroke="#40B8FF"/><path d="M16 3v4M8 3v4" stroke="#40B8FF" strokeWidth="2"/><circle cx="18" cy="17" r="2" fill="#40B8FF" stroke="white" strokeWidth="1.5"/></svg>
)
const PhoneCheckIcon = () => (
  <svg aria-label="Smartphone" className="w-6 h-6" fill="none" stroke="#00C896" strokeWidth="2" viewBox="0 0 24 24"><rect x="6" y="2" width="12" height="20" rx="3" fill="white" stroke="#00C896"/><path d="M10 18l2 2 4-4" stroke="#00C896" strokeWidth="2"/></svg>
)

const steps = [
  {
    title: 'Step 1: Choose Your Pass',
    desc: 'Pick between our 2-hour or 4-hour passes—perfect for any lake day.',
    icon: <TicketIcon />,
    iconBg: 'bg-[#0179D0]',
    iconHover: 'hover:scale-110',
    cta: <button onClick={scrollToPricing} className="text-[#0179D0] font-semibold text-sm inline-flex items-center gap-1 mt-2 hover:underline transition-colors duration-200">See Pricing <span aria-hidden>→</span></button>,
  },
  {
    title: 'Step 2: Select a Time',
    desc: 'Pick your session time. Sessions run hourly from 10:00 AM to 6:00 PM.',
    icon: <CalendarIcon />,
    iconBg: 'bg-gradient-to-br from-[#D7F1FF] to-[#89D8FF] border border-[#E0F7FF]',
    iconHover: 'hover:rotate-12 hover:-rotate-12',
  },
  {
    title: 'Step 3: Book Instantly Online',
    desc: 'Secure your spot in less than 2 minutes—get instant email confirmation and be ready to splash.',
    icon: <PhoneCheckIcon />,
    iconBg: 'bg-white border border-[#00C896]',
    iconHover: 'group-hover:animate-pulse',
  },
]

export function HowToBook() {
  return (
    <section className="relative w-full py-8 md:py-16 bg-gradient-to-b from-[#F1FAFF] to-white overflow-hidden" id="booking">
      {/* Animated water ripple background */}
      <div className="absolute inset-0 z-0 pointer-events-none animate-ripple-bg" />
      <style>{`
        @keyframes ripple {
          0% { background-position: 0 0, 0 0; }
          100% { background-position: 100px 40px, 80px 120px; }
        }
        .animate-ripple-bg {
          background: radial-gradient(ellipse 60% 30% at 50% 20%, #B2E6E0 0%, transparent 100%), radial-gradient(ellipse 80% 40% at 60% 80%, #B2E6E0 0%, transparent 100%);
          opacity: 0.18;
          animation: ripple 12s linear infinite alternate;
        }
      `}</style>
      <div className="relative z-10 max-w-[1200px] mx-auto px-[5vw] flex flex-col items-center">
        {/* Section Title */}
        <h2 className="font-extrabold text-[24px] md:text-[32px] text-[#013A63] text-center mb-3 md:mb-8 font-poppins relative inline-block">
          How to Book in 3 Easy Steps
          <span className="block h-4 mt-1 w-full mx-auto relative">
            <svg className="absolute left-1/2 -translate-x-1/2 w-[180px] md:w-[280px] h-4" viewBox="0 0 320 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id="wave-underline" d="M0 12 Q40 24 80 12 T160 12 T240 12 T320 12" stroke="#40B8FF" strokeWidth="3" fill="none">
                <animate attributeName="d" values="M0 12 Q40 24 80 12 T160 12 T240 12 T320 12;M0 12 Q40 0 80 12 T160 12 T240 12 T320 12;M0 12 Q40 24 80 12 T160 12 T240 12 T320 12" dur="3s" repeatCount="indefinite" />
              </path>
            </svg>
          </span>
        </h2>
        <p className="text-[#4A5568] text-[16px] font-open-sans text-center mb-4 md:mb-8">Fast. Simple. Guaranteed Fun.</p>
        {/* Step Cards Grid */}
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 w-full max-w-2xl md:max-w-4xl mb-3 md:mb-4">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`group flex flex-col items-center text-center bg-white/95 backdrop-blur-lg rounded-xl shadow-xl transition-all duration-300 px-3 py-4 md:px-4 md:py-6 hover:-translate-y-1 hover:shadow-2xl focus-within:shadow-2xl focus-within:-translate-y-1 cursor-pointer ${i === 0 ? 'hover:ring-2 hover:ring-[#0179D0]/30' : ''}`}
                tabIndex={0}
                aria-label={step.title}
              >
                <div className={`mb-3 md:mb-4 flex items-center justify-center rounded-full w-12 h-12 md:w-16 md:h-16 transition-transform duration-300 ${step.iconBg} ${step.iconHover} shadow-md`}>
                  {step.icon}
                </div>
                <h3 className="font-poppins font-semibold text-[#013A63] text-[15px] md:text-[18px] mb-1">{step.title}</h3>
                <p className="font-open-sans text-[#4A5568] text-[13px] md:text-[15px] mb-1">{step.desc}</p>
                {step.cta}
              </div>
            ))}
          </div>
        </div>
        {/* Pro Tip Pill Banner */}
        <div className="inline-flex items-center bg-[#FFDA6C] text-[#013A63] font-semibold rounded-full px-4 py-1.5 shadow-md mb-6 text-[12px] md:text-[13px]">
          <span className="mr-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </span>
          Pro Tip: Weekend sessions go fast—reserve early to secure your perfect time.
        </div>
        {/* CTA Button */}
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
              // Fallback to direct link if FH is not loaded
              window.open('https://fareharbor.com/embeds/book/jordanellerentals/items/638160/?full-items=yes&flow=1442956', '_blank')
            }
          }}
          className="relative overflow-hidden bg-[#3A6BAA] text-[#F7C873] font-semibold px-4 py-2 rounded-lg shadow-sm text-sm hover:bg-[#F7C873] hover:text-[#3A6BAA] transition-all duration-300 inline-flex items-center gap-1 group focus:outline-none focus:ring-4 focus:ring-[#40B8FF]/40 focus:ring-offset-2"
        >
          <span className="relative z-10">RESERVE NOW</span>
        </button>
        <style>{`
          @keyframes ripple-glow {
            0% { box-shadow: 0 0 0 0 rgba(0,200,150,0.18), 0 0 24px 4px rgba(0,200,150,0.25); }
            70% { box-shadow: 0 0 0 16px rgba(0,200,150,0), 0 0 32px 8px rgba(0,200,150,0.18); }
            100% { box-shadow: 0 0 0 0 rgba(0,200,150,0), 0 0 24px 4px rgba(0,200,150,0.25); }
          }
          .group:hover .group-hover\\:animate-ripple-glow {
            animation: ripple-glow 0.7s cubic-bezier(0.4,0,0.2,1);
          }
        `}</style>
        {/* <p className="text-[#013A63]/80 text-[11px] md:text-[12px] mt-3 max-w-md text-center">
          Booking only takes a minute—choose your session time and secure your 2-hour or 4-hour adventure today.
        </p> */}
      </div>
    </section>
  )
} 