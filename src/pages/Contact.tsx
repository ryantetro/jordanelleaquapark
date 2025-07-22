import React, { useState } from 'react'
import { MainLayout } from '../layouts/MainLayout'
import { MapPin, Clock, Phone, Mail, ArrowRight, CheckCircle, XCircle } from 'lucide-react'

const BRAND_BLUE = '#3A6BAA'
const BRAND_LIGHT_BLUE = '#6CA6D9'
const BRAND_GOLD = '#F7C873'
const BRAND_DARK = '#181C1B'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitStatus('sending')
    try {
      await new Promise(resolve => setTimeout(resolve, 1200))
      setSubmitStatus('success')
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' })
        setSubmitStatus('idle')
      }, 2500)
    } catch {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 2500)
    }
  }

  return (
    <MainLayout>
      <div className="min-h-screen w-full bg-gradient-to-br from-[#F7F7F9] via-[#F7C873]/10 to-[#6CA6D9]/10 flex flex-col items-center pt-28 pb-16 px-2">
        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info Card */}
          <section className="bg-white border border-[#E1E1E6] rounded-2xl p-8 flex flex-col gap-8 font-open-sans">
            <h1 className="font-poppins text-2xl font-bold text-[#181C1B] mb-2 pb-1 border-b-2 border-[#F7C873] inline-block w-fit">Contact Information</h1>
            <div className="flex flex-col gap-6 pl-0 md:pl-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-5 h-5 text-[#3A6BAA]" aria-hidden="true" />
                  <span className="font-semibold text-[#181C1B]">Jordanelle Aqua Park</span>
                </div>
                <div className="text-[#222] text-[15px]">515 UT-319, Heber City, UT 84032</div>
                <a href="https://goo.gl/maps/2Qw2v8Qw2v82" target="_blank" rel="noopener noreferrer" className="text-[#3A6BAA] underline text-sm mt-1 inline-block transition-colors duration-150 hover:text-[#F7C873]">Get Directions</a>
              </div>
              <div className="border-t border-[#E1E1E6] pt-5">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-5 h-5 text-[#3A6BAA]" aria-hidden="true" />
                  <span className="font-semibold text-[#181C1B]">Hours</span>
                </div>
                <div className="text-[#222] text-[15px]">June–September, Daily 10:00 AM – 6:00 PM</div>
                <div className="text-xs text-[#6CA6D9]">Hourly sessions, last entry 6:00 PM</div>
              </div>
              <div className="border-t border-[#E1E1E6] pt-5">
                <div className="flex items-center gap-2 mb-1">
                  <Phone className="w-5 h-5 text-[#3A6BAA]" aria-hidden="true" />
                  <a href="tel:14356157397" className="font-semibold text-[#181C1B] hover:text-[#3A6BAA]">(435) 615-7397</a>
                </div>
                <div className="text-xs text-[#6CA6D9]">Call or text for quick help</div>
              </div>
              <div className="border-t border-[#E1E1E6] pt-5">
                <div className="flex items-center gap-2 mb-1">
                  <Mail className="w-5 h-5 text-[#3A6BAA]" aria-hidden="true" />
                  <a href="mailto:info@jordanelleaquapark.com" className="font-semibold text-[#181C1B] hover:text-[#3A6BAA]">info@jordanelleaquapark.com</a>
                </div>
                <div className="text-xs text-[#6CA6D9]">Replies within 24–48 hours</div>
              </div>
            </div>
          </section>

          {/* Contact Form Card */}
          <section className="bg-white border border-[#E1E1E6] rounded-2xl p-7 font-open-sans flex flex-col justify-center">
            <h2 className="font-poppins text-xl font-bold text-[#181C1B] mb-4">Send Us a Message</h2>
            {submitStatus === 'success' && (
              <div className="mb-4 flex items-center gap-2 bg-[#F7C873]/40 border border-[#F7C873] text-[#3A6BAA] rounded-lg px-3 py-2">
                <CheckCircle className="w-5 h-5" />
                <span>Message sent! We'll reply soon.</span>
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mb-4 flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 rounded-lg px-3 py-2">
                <XCircle className="w-5 h-5" />
                <span>Something went wrong. Please try again.</span>
              </div>
            )}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#181C1B] mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-[#E1E1E6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A6BAA] font-open-sans"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#181C1B] mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-[#E1E1E6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A6BAA] font-open-sans"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#181C1B] mb-1">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-[#E1E1E6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A6BAA] font-open-sans"
                >
                  <option value="">Select a subject</option>
                  <option value="General Question">General Question</option>
                  <option value="Booking Inquiry">Booking Inquiry</option>
                  <option value="Group Event">Group Event</option>
                  <option value="Directions">Directions/Location</option>
                  <option value="Weather">Weather/Closure</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#181C1B] mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-[#E1E1E6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A6BAA] font-open-sans resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              <button
                type="submit"
                disabled={submitStatus === 'sending'}
                className="w-full bg-gradient-to-r from-[#3A6BAA] to-[#6CA6D9] text-white font-bold py-2 rounded-lg mt-2 flex items-center justify-center gap-2 disabled:opacity-60 transition-all"
              >
                {submitStatus === 'sending' ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </section>
        </div>
      </div>
    </MainLayout>
  )
}