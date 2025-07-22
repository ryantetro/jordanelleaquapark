import React from 'react'
import { Button } from './ui/Button'

// SVG icons for steps
const TicketIcon = () => (
  <svg aria-label="Ticket" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="10" rx="2" fill="white" stroke="currentColor"/><path d="M7 7v10M17 7v10" stroke="#0179D0" strokeWidth="2"/></svg>
)
const CalendarIcon = () => (
  <svg aria-label="Calendar" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="3" fill="#D7F1FF" stroke="#40B8FF"/><path d="M16 3v4M8 3v4" stroke="#40B8FF" strokeWidth="2"/><circle cx="18" cy="17" r="2" fill="#40B8FF" stroke="white" strokeWidth="1.5"/></svg>
)
const PhoneCheckIcon = () => (
  <svg aria-label="Smartphone" className="w-8 h-8" fill="none" stroke="#00C896" strokeWidth="2" viewBox="0 0 24 24"><rect x="6" y="2" width="12" height="20" rx="3" fill="white" stroke="#00C896"/><path d="M10 18l2 2 4-4" stroke="#00C896" strokeWidth="2"/></svg>
)
const LightningIcon = () => (
  <svg aria-label="Lightning" className="w-8 h-8" fill="none" stroke="#FFB74D" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 2L3 14h7v8l8-12h-7z" fill="url(#lightning-gradient)" stroke="#FFB74D"/><defs><linearGradient id="lightning-gradient" x1="3" y1="2" x2="21" y2="22" gradientUnits="userSpaceOnUse"><stop stopColor="#FFB74D"/><stop offset="1" stopColor="#FFD54F"/></linearGradient></defs></svg>
)

const steps = [
  {
    title: 'Step 1: Choose Your Pass',
    desc: 'Pick between our 2-hour or 4-hour passes—perfect for any lake day.',
    icon: <TicketIcon />,
    iconBg: 'bg-[#0179D0]',
    iconHover: 'hover:scale-110',
    cta: <a href="#pricing" className="text-[#0179D0] font-semibold text-sm inline-flex items-center gap-1 mt-2 hover:underline">See Pricing <span aria-hidden>→</span></a>,
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
    <section className="relative w-full py-8 md:py-24 bg-gradient-to-b from-[#F1FAFF] to-white overflow-hidden">
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
        <h2 className="font-extrabold text-[28px] md:text-[40px] text-[#013A63] text-center mb-4 md:mb-12 font-poppins relative inline-block">
          How to Book in 3 Easy Steps
          <span className="block h-6 mt-1 w-full mx-auto relative">
            <svg className="absolute left-1/2 -translate-x-1/2 w-[220px] md:w-[320px] h-6" viewBox="0 0 320 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id="wave-underline" d="M0 12 Q40 24 80 12 T160 12 T240 12 T320 12" stroke="#40B8FF" strokeWidth="4" fill="none">
                <animate attributeName="d" values="M0 12 Q40 24 80 12 T160 12 T240 12 T320 12;M0 12 Q40 0 80 12 T160 12 T240 12 T320 12;M0 12 Q40 24 80 12 T160 12 T240 12 T320 12" dur="3s" repeatCount="indefinite" />
              </path>
            </svg>
          </span>
        </h2>
        <p className="text-[#4A5568] text-[18px] font-open-sans text-center mb-6 md:mb-12">Fast. Simple. Guaranteed Fun.</p>
        {/* Step Cards Grid */}
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 w-full max-w-2xl md:max-w-4xl mb-4 md:mb-6">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`group flex flex-col items-center text-center bg-white/95 backdrop-blur-lg rounded-[20px] shadow-xl transition-all duration-300 px-3 py-5 md:px-6 md:py-10 hover:-translate-y-1.5 hover:shadow-2xl focus-within:shadow-2xl focus-within:-translate-y-1.5 cursor-pointer ${i === 0 ? 'hover:ring-2 hover:ring-[#0179D0]/30' : ''}`}
                tabIndex={0}
                aria-label={step.title}
              >
                <div className={`mb-4 md:mb-6 flex items-center justify-center rounded-full w-14 h-14 md:w-20 md:h-20 transition-transform duration-300 ${step.iconBg} ${step.iconHover} shadow-md`}>
                  {step.icon}
                </div>
                <h3 className="font-poppins font-semibold text-[#013A63] text-[18px] md:text-[22px] mb-1 md:mb-2">{step.title}</h3>
                <p className="font-open-sans text-[#4A5568] text-[15px] md:text-[18px] mb-1 md:mb-2">{step.desc}</p>
                {step.cta}
              </div>
            ))}
          </div>
        </div>
        {/* Pro Tip Pill Banner */}
        <div className="inline-flex items-center bg-[#FFDA6C] text-[#013A63] font-semibold rounded-full px-6 py-2 shadow-md mb-10">
          <span className="mr-2"><LightningIcon /></span>
          Pro Tip: Weekend sessions go fast—reserve early to secure your perfect time.
        </div>
        {/* CTA Button */}
        <Button className="relative overflow-hidden bg-[#0179D0] hover:bg-[#00C896] text-white font-bold px-10 py-5 rounded-xl shadow-xl text-xl transition-all duration-300 group focus:outline-none focus:ring-4 focus:ring-[#40B8FF]/40 focus:ring-offset-2 hover:scale-105 hover:shadow-[0_0_24px_4px_rgba(0,200,150,0.25)]">
          <span className="relative z-10">RESERVE NOW</span>
          <span className="absolute inset-0 pointer-events-none group-hover:animate-ripple-glow" />
        </Button>
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
        <p className="text-[#013A63]/80 text-sm mt-4 max-w-md text-center">
          Booking only takes a minute—choose your session time and secure your 2-hour or 4-hour adventure today.
        </p>
      </div>
    </section>
  )
} 