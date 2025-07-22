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
      'Save $15 vs. 2x 1hr',
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
      'Save $85 vs. 6x 1hr',
    ],
  },
]

export default function Pricing() {
  return (
    <section className='relative w-full bg-gradient-to-br from-slate-50 to-blue-50/30 py-10 md:py-24 px-2 sm:px-4 overflow-hidden' id="pricing">
      {/* Background decoration */}
      <div className="absolute inset-0 pricing-bg"></div>
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          {/* <div className="inline-flex items-center gap-2 bg-blue-600/10 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Simple Transparent Pricing
          </div> */}
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            Choose Your
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Adventure
            </span>
          </h2>
          <div className="space-y-2 mb-6">
            <p className="text-blue-600 font-semibold text-lg">80 feet x 110 feet • 23 separate obstacles</p>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
              All sessions include full access to the entire floating park, life jacket, and unlimited fun.
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-3 md:gap-5 max-w-2xl md:max-w-4xl mx-auto">
          {PRICING.map((tier) => (
            <div
              key={tier.label}
              className={`relative bg-white/80 backdrop-blur-sm border rounded-2xl p-2 md:p-4 flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-2xl group
                ${tier.tag === 'Best Value' 
                  ? 'border-amber-200 shadow-xl shadow-amber-100/50 ring-2 ring-amber-200/50 md:scale-105' 
                  : tier.tag === 'Most Popular' 
                  ? 'border-blue-200 shadow-lg shadow-blue-100/50 ring-1 ring-blue-200/30' 
                  : 'border-slate-200 shadow-md hover:border-blue-200'
                }
              `}
            >
              {/* Popular Badge */}
              {tier.tag && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-lg
                    ${tier.tag === 'Best Value' 
                      ? 'bg-gradient-to-r from-amber-400 to-orange-400 text-white' 
                      : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                    }`}
                  >
                    {tier.tag}
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-5 pt-2">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{tier.label}</h3>
                <div className="flex items-baseline justify-center mb-1">
                  <span className="text-3xl font-black bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-transparent">
                    ${tier.price}
                  </span>
                </div>
                <p className="text-slate-500 text-xs">per person</p>
              </div>

              {/* Features */}
              <div className="flex-grow mb-5">
                <ul className="space-y-2">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center mt-0.5
                        ${tier.tag === 'Best Value' 
                          ? 'bg-amber-100 text-amber-600' 
                          : 'bg-blue-100 text-blue-600'
                        }`}
                      >
                        <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-slate-700 text-sm font-medium leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <a
                href="#booking"
                className={`w-full text-center font-bold py-2.5 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl text-sm
                  ${tier.tag === 'Best Value'
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 shadow-amber-200'
                    : tier.tag === 'Most Popular'
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 shadow-blue-200'
                    : 'bg-slate-900 text-white hover:bg-slate-800 shadow-slate-300'
                  }
                `}
              >
                <span className="flex items-center justify-center gap-2">
                  Book {tier.label}
                  <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <div className="text-center mt-6 md:mt-12 space-y-2 md:space-y-3">
          <p className="text-slate-500">
            All prices are per person. Group discounts available for 10+ people.
          </p>
          {/* <p className="text-blue-700 text-base max-w-2xl mx-auto font-medium">
            The park is a blast for all ages, but it’s a real workout! Most adults and even athletic kids will need breaks after an hour. Two hours is perfect for maximum fun (and a great night’s sleep for the kids!).
          </p> */}
        </div>
      </div>
    </section>
  )
}