import { useState } from 'react'
import { MainLayout } from '../layouts/MainLayout'
import { PlusIcon, XMarkIcon } from '@heroicons/react/24/outline'

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

const FAQS = [
  {
    question: 'What is Jordanelle Aqua Park?',
    answer: (
      <>
        Jordanelle Aqua Park is a <b>floating water playground</b> featuring <b>giant inflatables</b>, slides, trampolines, and more—perfect for all ages and adventure levels.
      </>
    ),
  },
  {
    question: 'What are the session options?',
    answer: (
      <>
        Sessions run <b>hourly from 10:00 AM to 6:00 PM</b>. Each session lasts 50 minutes. <b>Hourly sessions</b> fill quickly—book early!
      </>
    ),
  },
  {
    question: 'How do I book tickets?',
    answer: (
      <>
        Visit our <a 
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
          className="text-[#00C896] underline hover:drop-shadow-glow font-semibold"
        >
          Booking Page
        </a> to select your session and reserve your spot instantly.
      </>
    ),
  },
  {
    question: 'Age or height requirement?',
    answer: (
      <>
        All participants <b>must be 6 years old</b> and able to swim. <ul className="list-disc ml-6 mt-2 text-[16px]"> <li>Children under 10 require a supervising adult on the inflatables.</li> <li>Life jackets are provided and required for all guests.</li> </ul>
      </>
    ),
  },
  {
    question: 'What should I bring?',
    answer: (
      <ul className="list-disc ml-6 mt-2 text-[16px]"> <li>Swimsuit</li> <li>Towel</li> <li>Sunscreen</li> <li>Water bottle</li> <li>Water shoes (optional)</li> <li>GoPro / waterproof pouch (optional)</li> </ul>
    ),
  },
  {
    question: 'Are life jackets required?',
    answer: (
      <>
        Life jackets are <b>provided and required</b> for all guests, regardless of age or swimming ability.
      </>
    ),
  },
  {
    question: 'Is it safe?',
    answer: (
      <>
        The park is <b>monitored at all times by trained park staff</b>. Safety is our top priority, with clear rules and regular equipment checks.
      </>
    ),
  },
  {
    question: 'Cancellation/Refund Policy',
    answer: (
      <>
        We offer a <b>24-hour refund policy</b>. If weather closes the park, you can <b>reschedule or receive a full refund</b>.
      </>
    ),
  },
  {
    question: 'What if it rains?',
    answer: (
      <>
        We operate <b>rain or shine</b>. If severe weather forces closure, you may <b>reschedule or receive a refund</b>.
      </>
    ),
  },
  {
    question: 'Where is it located?',
    answer: (
      <>
        515 UT-319, Heber City, UT 84032. <a href="https://goo.gl/maps/2Qw2v8Qw2v82" target="_blank" rel="noopener noreferrer" className="text-[#00C896] underline hover:drop-shadow-glow font-semibold">Get Directions</a>. Note: Jordanelle State Park entry fees apply.
      </>
    ),
  },
  {
    question: 'Can I just watch?',
    answer: (
      <>
        <b>Spectators welcome at no charge</b>. Bring a chair and enjoy the fun from the beach!
      </>
    ),
  },
  {
    question: 'Group bookings/private events?',
    answer: (
      <>
        Yes! Birthdays, youth groups, corporate events—<a href="mailto:info@jordanelleaquapark.com" className="text-[#00C896] underline hover:drop-shadow-glow font-semibold">contact us</a> for details.
      </>
    ),
  },
  {
    question: 'Still have questions?',
    answer: (
      <>
        <a href="#contact" className="text-[#00C896] underline hover:drop-shadow-glow font-semibold">Contact us</a>, call <a href="tel:14356157397" className="text-[#00C896] underline">(435) 615-7397</a>, or email info@jordanelleaquapark.com.
      </>
    ),
  },
  {
    question: 'Is the park physically demanding?',
    answer: (
      <>
        Yes! The park is super fun but also a real workout. Most guests need breaks after an hour, and adults may feel sore the next day. Plan your session accordingly!
      </>
    ),
  },
  {
    question: 'Is the park monitored for safety?',
    answer: (
      <>
        Our trained park staff monitor the park at all times. All guests must be able to swim and follow safety rules. We provide life jackets and maintain strict safety protocols.
      </>
    ),
  },
]

function Accordion({ faqs }: { faqs: typeof FAQS }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  return (
    <div className="space-y-3 w-full">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i
        return (
          <div
            key={faq.question}
            className={`faq-card rounded-xl transition-all duration-300 w-full ${isOpen ? 'faq-card-open' : ''}`}
          >
            <button
              className="w-full flex items-center justify-between px-5 py-4 text-left focus:outline-none focus:ring-2 focus:ring-[#00C896]/20 focus:ring-offset-2 rounded-xl group"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              style={{ minHeight: '56px' }}
            >
              <span className="font-poppins font-semibold text-[15px] md:text-[16px] text-[#013A63] group-hover:text-[#00C896] transition-colors duration-200 pr-4">
                {faq.question}
              </span>
              <span className="ml-4 flex items-center justify-center w-7 h-7 rounded-full bg-[#F8F9FA] group-hover:bg-[#00C896]/10 transition-all duration-200 flex-shrink-0">
                {isOpen ? (
                  <XMarkIcon className="w-4 h-4 text-[#00C896] transition-all duration-200" />
                ) : (
                  <PlusIcon className="w-4 h-4 text-[#6B7280] group-hover:text-[#00C896] transition-all duration-200" />
                )}
              </span>
            </button>
            <div
              className={`faq-answer transition-all duration-300 ease-in-out ${isOpen ? 'faq-answer-open' : ''}`}
              aria-hidden={!isOpen}
            >
              {isOpen && (
                <div className="px-5 pb-5 pt-2 text-[14px] md:text-[15px] text-[#4A5568] font-open-sans leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default function FAQPage() {
  return (
    <MainLayout headerClassName="fixed top-0 left-0 w-full z-30 text-[#013A63] transition-all duration-300 backdrop-blur-sm bg-transparent">
      <div className="min-h-screen w-full bg-white py-12 px-4 flex flex-col items-center pt-28">
        {/* Hero Section */}
        <section className="w-full max-w-4xl mx-auto text-center mb-8">
          <h1 className="font-poppins font-extrabold text-[28px] md:text-[36px] text-[#013A63] mb-4">
            Frequently Asked Questions
          </h1>
          <p className="font-open-sans text-[16px] md:text-[18px] text-[#4A5568] max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about your Jordanelle Aqua Park adventure
          </p>
        </section>
        
        {/* FAQ Accordion */}
        <div className="w-full max-w-4xl mx-auto">
          <Accordion faqs={FAQS} />
        </div>
        
        {/* CTA Section */}
        <section className="w-full max-w-lg mx-auto mt-6 text-center">
          <div className="bg-[#1B4F8C] rounded-xl p-4 md:p-5 shadow-lg border border-[#6B5432]/30">
            <h2 className="font-poppins font-semibold text-[14px] md:text-[16px] text-white mb-2">
              Ready to Book?
            </h2>
            <p className="font-open-sans text-[12px] md:text-[13px] text-white/80 mb-3 max-w-sm mx-auto">
              Secure your spot for the ultimate water park experience
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
              className="bg-[#F7C873] text-[#1B4F8C] font-semibold px-4 py-2 rounded-lg shadow-sm text-sm hover:bg-[#3A6BAA] hover:text-[#F7C873] transition-all duration-300 inline-flex items-center gap-1"
            >
              Book Now
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </section>
      </div>
      <style>{`
        .faq-card {
          border: 1px solid #E1E8ED;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.95);
        }
        .faq-card:hover {
          border-color: #00C896;
          box-shadow: 0 8px 32px rgba(0,0,0,0.12);
          transform: translateY(-2px);
        }
        .faq-card.faq-card-open {
          border-color: #00C896;
          box-shadow: 0 8px 32px rgba(0, 200, 150, 0.15);
        }
        .faq-answer {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease-in-out;
        }
        .faq-answer.faq-answer-open {
          max-height: 500px;
          opacity: 1;
        }
        .drop-shadow-glow { 
          filter: drop-shadow(0 0 8px rgba(0, 200, 150, 0.4)); 
        }
        .faq-card button:hover .faq-card {
          border-color: #00C896;
        }
      `}</style>
    </MainLayout>
  )
} 