import { useEffect, useRef } from 'react'

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

const PRICING = [
  {
    label: '1 Hour',
    price: 25,
    tag: '',
    features: [
      'Full park access',
      'Life jacket included',
      'All ages 6+',
    ],
  },
  {
    label: '2 Hours',
    price: 35,
    tag: 'Most Popular',
    features: [
      'Full park access',
      'Life jacket included',
      'All ages 6+',
    ],
  },
  {
    label: '6 Hours',
    price: 65,
    tag: 'Best Value',
    features: [
      'Full park access',
      'Life jacket included',
      'All ages 6+',
      'Come & go all day',
    ],
  },
]

export default function Pricing() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // On mobile, scroll to center the middle card (2 Hours)
    const handleResize = () => {
      if (window.innerWidth < 768 && scrollContainerRef.current) {
        const container = scrollContainerRef.current
        const cardWidth = 280 + 16 // card width + gap
        const scrollPosition = cardWidth // Scroll to show the middle card
        container.scrollLeft = scrollPosition
      }
    }

    handleResize() // Initial call
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className='relative w-full bg-gradient-to-br from-slate-50 to-blue-50/30 py-8 md:py-16 px-2 sm:px-4' id="pricing">
      {/* Background decoration */}
      <div className="absolute inset-0 pricing-bg"></div>
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 leading-tight">
            Choose Your
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Adventure
            </span>
          </h2>
          <div className="space-y-1 mb-4">
            <p className="text-blue-600 font-semibold text-[16px]">80 feet x 110 feet • 23 separate obstacles</p>
            <p className="text-slate-600 text-[15px] max-w-2xl mx-auto leading-relaxed">
              All sessions include full access to the entire floating park, life jacket, and unlimited fun.
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div ref={scrollContainerRef} className="flex md:grid md:grid-cols-3 gap-x-3 md:gap-x-4 px-4 md:px-0 overflow-x-auto md:overflow-visible snap-x snap-mandatory max-w-full mx-auto scroll-smooth overflow-y-visible">
          {/* Mobile centering: Add padding to center the middle card */}
          <div className="flex md:contents gap-x-3 md:gap-x-4 overflow-y-visible">
            <div className="md:hidden w-[calc(50vw-140px)] flex-shrink-0"></div>
            {PRICING.map((tier) => (
              <div
                key={tier.label}
                className={`relative bg-white/80 backdrop-blur-sm border rounded-xl p-3 flex flex-col transition-all duration-300
                  md:hover:scale-105 md:hover:shadow-2xl group mt-6
                  hover:z-30
                  min-w-[260px] max-w-[300px] snap-center md:min-w-0 md:max-w-none flex-shrink-0 md:flex-shrink
                  ${tier.tag === 'Best Value' 
                    ? 'border-amber-200 shadow-xl shadow-amber-100/50 ring-2 ring-amber-200/50' 
                    : tier.tag === 'Most Popular' 
                    ? 'border-blue-200 shadow-lg shadow-blue-100/50 ring-1 ring-blue-200/30' 
                    : 'border-slate-200 shadow-md md:hover:border-blue-200'
                  }
                  active:scale-95 active:shadow-xl
                overflow-y-visible`}
                style={{ overflowY: 'visible' }}
              >
                {/* Popular Badge */}
                {tier.tag && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                    <div className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide shadow-lg whitespace-nowrap
                      ${tier.tag === 'Best Value' 
                        ? 'bg-gradient-to-r from-amber-400 to-orange-400 text-white' 
                        : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                      }`
                    }>
                      {tier.tag}
                    </div>
                  </div>
                )}
                {/* Header */}
                <div className="text-center mb-2 pt-2">
                  <h3 className="text-[14px] md:text-[15px] font-bold text-slate-900 mb-1">{tier.label}</h3>
                  <div className="flex items-baseline justify-center mb-0.5">
                    <span className="text-xl md:text-2xl font-black bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-transparent">
                      ${tier.price}
                    </span>
                  </div>
                  <p className="text-slate-500 text-[10px]">per person</p>
                </div>
                {/* Features */}
                <div className="flex-grow mb-2">
                  <ul className="space-y-1">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <div className={`flex-shrink-0 w-3 h-3 rounded-full flex items-center justify-center mt-0.5
                          ${tier.tag === 'Best Value' 
                            ? 'bg-amber-100 text-amber-600' 
                            : 'bg-blue-100 text-blue-600'
                          }`
                        }>
                          <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-slate-700 text-[11px] md:text-[12px] font-medium leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* CTA Button */}
                <a
                  href={`https://fareharbor.com/embeds/book/jordanellerentals/items/${tier.label === '1 Hour' ? '638158' : tier.label === '2 Hours' ? '638160' : '638161'}/?full-items=yes&flow=1442956`}
                  onClick={(e) => {
                    e.preventDefault()
                    if (window.FH) {
                      window.FH.open({ 
                        shortname: 'jordanellerentals', 
                        fallback: 'simple', 
                        fullItems: 'yes', 
                        flow: 1442956, 
                        view: { item: tier.label === '1 Hour' ? 638158 : tier.label === '2 Hours' ? 638160 : 638161 } 
                      })
                    } else {
                      // Fallback to direct link if FH is not loaded
                      window.open(e.currentTarget.href, '_blank')
                    }
                  }}
                  className={`w-full text-center font-bold py-1.5 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl text-[11px] md:text-[12px]
                    ${tier.tag === 'Best Value'
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 shadow-amber-200'
                      : tier.tag === 'Most Popular'
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 shadow-blue-200'
                      : 'bg-slate-900 text-white hover:bg-slate-800 shadow-slate-300'
                    }
                  `}
                >
                  <span className="flex items-center justify-center gap-1.5">
                    Book {tier.label}
                    <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>
              </div>
            ))}
            <div className="md:hidden w-[calc(50vw-140px)] flex-shrink-0"></div>
          </div>
        </div>

        {/* Bottom text */}
        <div className="text-center mt-4 md:mt-8 space-y-1 md:space-y-2">
          <p className="text-slate-500 text-[12px] md:text-[13px]">
            All prices are per person. Group discounts available for 10+ people.
          </p>
        </div>
      </div>
    </section>
  )
}