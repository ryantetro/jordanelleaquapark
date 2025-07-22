import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import logo from '../assets/logo.png'
// Removed: import Link from 'next/link'

export function Footer() {
  // Contact form state
  const [contact, setContact] = useState({ name: '', email: '', message: '' })
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setContact({ ...contact, [e.target.name]: e.target.value })
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    window.location.href = `mailto:info@jordanelleaquapark.com?subject=Contact from ${encodeURIComponent(contact.name)}&body=${encodeURIComponent(contact.message + '\n\nFrom: ' + contact.name + ' (' + contact.email + ')')}`
  }

  return (
    <footer className="w-full bg-[#181C1B] text-white pt-12 pb-6 mt-12 border-t-4 border-[#6B5432]">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* Left: Logo & Location */}
        <div className="flex flex-col items-start gap-6">
          <img src={logo} alt="Jordanelle Aqua Park Logo" className="h-20 w-auto mb-2 drop-shadow-lg" />
          <div>
            <div className="font-poppins font-bold text-lg text-[#F7C873] mb-1">Jordanelle Aqua Park</div>
            <div className="text-white/90 text-base leading-relaxed">
              Hailstone Recreation Area – Jordanelle State Park<br />
              515 UT-319, Heber City, UT 84032
            </div>
            <div className="text-[#6CA6D9] text-sm mt-2">Located near Jordanelle Rentals & Marina, right on the waterfront.</div>
            <a href="https://goo.gl/maps/2Qw2v8Qw2v82" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#3A6BAA] font-semibold hover:underline mt-2">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10.5a8.38 8.38 0 0 1-1.9.5A8.5 8.5 0 1 1 12 3v1.5" /><path d="M12 7v5l4 2" /></svg>
              Get Directions
            </a>
          </div>
        </div>
        {/* Center: Quick Links */}
        <div className="flex flex-col gap-4 md:items-center">
          <div className="font-poppins font-bold text-lg text-[#F7C873] mb-2">Quick Links</div>
          <a href="#booking" className="text-white/90 hover:text-[#F7C873] font-medium transition-colors py-1">Book Now</a>
          <a href="/FAQ" className="text-white/90 hover:text-[#F7C873] font-medium transition-colors py-1">FAQ</a>
          <a href="#about" className="text-white/90 hover:text-[#F7C873] font-medium transition-colors py-1">About</a>
          <a href="#contact" className="text-white/90 hover:text-[#F7C873] font-medium transition-colors py-1">Contact</a>
        </div>
        {/* Right: Contact Form */}
        <div className="flex flex-col gap-4 bg-[#232A2B] rounded-2xl p-6 shadow-xl border border-[#6B5432]/30">
          <div className="font-poppins font-bold text-lg text-[#F7C873] mb-1">Have questions? Ask us!</div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input name="name" type="text" required placeholder="Your Name" value={contact.name} onChange={handleChange} className="rounded-md px-3 py-2 bg-white/90 text-[#181C1B] placeholder-[#6B5432]/70 text-sm focus:outline-none focus:ring-2 focus:ring-[#3A6BAA]" />
            <input name="email" type="email" required placeholder="Your Email" value={contact.email} onChange={handleChange} className="rounded-md px-3 py-2 bg-white/90 text-[#181C1B] placeholder-[#6B5432]/70 text-sm focus:outline-none focus:ring-2 focus:ring-[#3A6BAA]" />
            <textarea name="message" required placeholder="Your Message" value={contact.message} onChange={handleChange} className="rounded-md px-3 py-2 bg-white/90 text-[#181C1B] placeholder-[#6B5432]/70 text-sm focus:outline-none focus:ring-2 focus:ring-[#3A6BAA] min-h-[60px]" />
            <button type="submit" className="mt-1 bg-[#F7C873] hover:bg-[#3A6BAA] text-[#232A2B] hover:text-[#F7C873] font-bold rounded-full py-2 px-4 text-sm transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#F7C873] focus:ring-offset-2">Send Message</button>
          </form>
          <div className="text-xs text-[#6CA6D9] mt-1">We’ll get back to you as soon as possible.</div>
        </div>
      </div>
      {/* Bottom legal strip */}
      <div className="mt-10 border-t border-[#6B5432]/40 pt-4 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 text-[#6CA6D9] text-[13px]">
        <div className="mb-2 md:mb-0">© {new Date().getFullYear()} Jordanelle Aqua Park. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#privacy" className="hover:underline hover:text-[#F7C873] transition-all">Privacy Policy</a>
          <a href="#terms" className="hover:underline hover:text-[#F7C873] transition-all">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
} 