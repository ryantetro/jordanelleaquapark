import React, { useState } from 'react'
import { MainLayout } from '../layouts/MainLayout'
import { PlusIcon, XMarkIcon } from '@heroicons/react/24/outline'

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
        Visit our <a href="#booking" className="text-[#00C896] underline hover:drop-shadow-glow font-semibold">Booking Page</a> to select your session and reserve your spot instantly.
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
        The park is <b>monitored at all times by trained lifeguards</b>. Safety is our top priority, with clear rules and regular equipment checks.
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
    question: 'Are there lifeguards on duty?',
    answer: (
      <>
        Our trained park staff monitor the park at all times, but they are <b>not certified lifeguards</b>. All guests must be able to swim and follow safety rules.
      </>
    ),
  },
]

function Accordion({ faqs }: { faqs: typeof FAQS }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  return (
    <div className="space-y-4 mt-8 w-full max-w-[900px] mx-auto">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i
        return (
          <div
            key={faq.question}
            className={`faq-card bg-white rounded-2xl shadow-md transition-all duration-300 w-full`}
          >
            <button
              className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none group"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              style={{ minHeight: '56px' }}
            >
              <span className="font-poppins font-semibold text-[17px] text-[#222]">{faq.question}</span>
              <span className="ml-4 flex items-center justify-center">
                {isOpen ? (
                  <XMarkIcon className="w-6 h-6 text-[#B0B0B0] transition-all duration-200" />
                ) : (
                  <PlusIcon className="w-6 h-6 text-[#B0B0B0] transition-all duration-200" />
                )}
              </span>
            </button>
            <div
              className={`faq-answer transition-all duration-300 ease-in-out ${isOpen ? 'faq-answer-open' : ''}`}
              aria-hidden={!isOpen}
            >
              {isOpen && <div className="px-6 pb-4 pt-0 text-[15px] text-[#444] font-open-sans leading-relaxed">{faq.answer}</div>}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default function FAQPage() {
  return (
    <MainLayout headerClassName="fixed top-0 left-0 w-full z-30 bg-[#181C1B] text-white shadow-md transition-all duration-300">
      <div className="min-h-screen w-full bg-[#F7F7F9] py-16 px-2 flex flex-col items-center mt-20">
        <section className="w-full max-w-[900px] mx-auto text-center mb-10">
          <h1 className="font-poppins font-extrabold text-[28px] md:text-[38px] text-[#181C1B] mb-4">Frequently Asked Questions</h1>
        </section>
        <Accordion faqs={FAQS} />
      </div>
      <style>{`
        .faq-card {
          border: 1.5px solid #E1E1E6;
          box-shadow: 0 4px 24px 0 rgba(0,0,0,0.04);
        }
        .faq-card.faq-card-open {
          border-color: #00C896;
        }
        .faq-answer {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: max-height 0.3s cubic-bezier(0.4,0,0.2,1), opacity 0.2s linear;
        }
        .faq-answer.faq-answer-open {
          max-height: 400px;
          opacity: 1;
        }
        .drop-shadow-glow { filter: drop-shadow(0 0 6px #00C896); }
      `}</style>
    </MainLayout>
  )
} 