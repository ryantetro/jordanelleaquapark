import React from 'react'

export function About() {
  return (
    <section className="relative w-full pt-16 pb-20 md:pt-20 md:pb-24 bg-gradient-to-b from-white/95 to-brand-light-green/20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-brand-green/10"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue via-brand-gold to-brand-green"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue mb-4 tracking-tight">
              Welcome to 
              <span className="block text-brand-gold">Jordanelle Aqua Park</span>
            </h2>
            <div className="w-20 md:w-24 h-1 bg-brand-gold mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left column - Main description */}
          <div className="space-y-6 md:space-y-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-brand-light-green/30 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-xl md:text-2xl font-bold text-brand-blue mb-3 md:mb-4">Utah's Premier Water Adventure</h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-3 md:mb-4">
                Experience the thrill of Utah's most exciting floating obstacle course, perfectly positioned on the crystal-clear waters of Jordanelle Lake.
              </p>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Set against the breathtaking backdrop of the Wasatch Mountains, our aqua park offers an unforgettable adventure that combines the beauty of nature with heart-pumping excitement.
              </p>
            </div>
          </div>

          {/* Right column - Features */}
          <div className="space-y-4 md:space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 md:p-6 shadow-lg border border-brand-blue/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-brand-blue/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-semibold text-brand-blue mb-1 md:mb-2">Perfect for All Ages</h4>
                  <p className="text-sm md:text-base text-gray-600">Families, friends, and adventure seekers of every skill level can enjoy our safe, supervised environment.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 md:p-6 shadow-lg border border-brand-green/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-brand-green/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-semibold text-brand-green mb-1 md:mb-2">Safe & Supervised</h4>
                  <p className="text-sm md:text-base text-gray-600">Professional lifeguards and safety equipment ensure a secure and worry-free experience for everyone.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 md:p-6 shadow-lg border border-brand-gold/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-brand-gold/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-semibold text-brand-gold mb-1 md:mb-2">Unforgettable Memories</h4>
                  <p className="text-sm md:text-base text-gray-600">Create lasting memories with thrilling challenges, stunning views, and endless fun on the water.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12 md:mt-16">
          <div className="inline-block bg-gradient-to-r from-brand-blue to-brand-green p-6 md:p-8 rounded-2xl shadow-2xl">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Ready for Your Adventure?</h3>
            <p className="text-white/90 mb-4 md:mb-6 max-w-md mx-auto text-sm md:text-base">
              Join thousands of visitors who have discovered the ultimate water adventure at Jordanelle Lake.
            </p>
            <button className="bg-brand-gold hover:bg-brand-gold/90 text-brand-blue font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-sm md:text-base">
              Book Your Experience
            </button>
          </div>
        </div>
      </div>

      {/* Bottom transition */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-green via-brand-gold to-brand-blue"></div>
    </section>
  )
} 