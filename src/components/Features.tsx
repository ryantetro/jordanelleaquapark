export function Features() {
  return (
    <section className="relative w-full pt-20 pb-24 md:pt-24 md:pb-32 bg-gradient-to-b from-brand-light-green/40 via-blue-50/80 to-brand-blue/10 overflow-hidden">
      {/* Removed top lake wave SVG */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-8 z-10">
        {/* Section header with wavy underline */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-blue mb-4 tracking-tight drop-shadow-lg">
            What Makes Us <span className="relative text-brand-gold">Special
              <span className="absolute left-0 -bottom-2 w-full h-2 block">
                <svg viewBox="0 0 120 10" fill="none" className="w-full h-full"><path d="M0 5 Q30 10 60 5 T120 5" stroke="#F7C873" strokeWidth="3" fill="none"/></svg>
              </span>
            </span>
          </h2>
          <p className="text-xl text-brand-blue/80 max-w-3xl mx-auto leading-relaxed">
            Discover why Jordanelle Aqua Park is the perfect destination for adventure, relaxation, and unforgettable memories.
          </p>
        </div>

        {/* Lake-style features grid */}
        <div className="grid lg:grid-cols-3 gap-10 mb-16">
          {/* Feature 1 - Floating Obstacles */}
          <div className="group relative bg-white/90 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-brand-blue/10 hover:border-brand-blue/30 backdrop-blur-md flex flex-col items-center hover:-translate-y-2">
            <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mb-6 shadow-md">
              {/* Wave icon */}
              <svg className="w-8 h-8 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15c1.5 2 4.5 2 6 0s4.5-2 6 0 4.5 2 6 0" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-brand-blue mb-4">Epic Water Obstacles</h3>
            <p className="text-brand-blue/80 leading-relaxed mb-6">
              Challenge yourself on our exciting floating obstacle course featuring slides, trampolines, balance beams, and climbing walls.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-brand-blue/70">
                <span className="w-2 h-2 bg-brand-blue rounded-full mr-3"></span>
                Multiple difficulty levels for all ages
              </li>
              <li className="flex items-center text-sm text-brand-blue/70">
                <span className="w-2 h-2 bg-brand-blue rounded-full mr-3"></span>
                Safe, commercial-grade equipment
              </li>
              <li className="flex items-center text-sm text-brand-blue/70">
                <span className="w-2 h-2 bg-brand-blue rounded-full mr-3"></span>
                Constantly updated challenges
              </li>
            </ul>
          </div>

          {/* Feature 2 - Swimming & Relaxation */}
          <div className="group relative bg-white/90 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-brand-green/10 hover:border-brand-green/30 backdrop-blur-md flex flex-col items-center hover:-translate-y-2">
            <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mb-6 shadow-md">
              {/* Sun icon */}
              <svg className="w-8 h-8 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="5" strokeWidth="2" />
                <path strokeLinecap="round" strokeWidth="2" d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-brand-green mb-4">Pure Mountain Waters</h3>
            <p className="text-brand-green/80 leading-relaxed mb-6">
              Immerse yourself in the crystal-clear waters of Jordanelle Lake, surrounded by breathtaking mountain scenery.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-brand-green/70">
                <span className="w-2 h-2 bg-brand-green rounded-full mr-3"></span>
                Pristine alpine lake environment
              </li>
              <li className="flex items-center text-sm text-brand-green/70">
                <span className="w-2 h-2 bg-brand-green rounded-full mr-3"></span>
                Designated swimming areas
              </li>
              <li className="flex items-center text-sm text-brand-green/70">
                <span className="w-2 h-2 bg-brand-green rounded-full mr-3"></span>
                Stunning Wasatch Mountain views
              </li>
            </ul>
          </div>

          {/* Feature 3 - Group Adventures */}
          <div className="group relative bg-white/90 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-brand-gold/10 hover:border-brand-gold/30 backdrop-blur-md flex flex-col items-center hover:-translate-y-2">
            <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mb-6 shadow-md">
              {/* Group icon */}
              <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="8" cy="12" r="3" strokeWidth="2" />
                <circle cx="16" cy="12" r="3" strokeWidth="2" />
                <path strokeLinecap="round" strokeWidth="2" d="M2 20c0-2.5 3.5-4 6-4s6 1.5 6 4" />
                <path strokeLinecap="round" strokeWidth="2" d="M14 20c0-2.5 3.5-4 6-4s6 1.5 6 4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-brand-gold mb-4">Perfect for Groups</h3>
            <p className="text-brand-gold/80 leading-relaxed mb-6">
              Create lasting memories with friends and family through our group packages and team-building activities.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-brand-gold/70">
                <span className="w-2 h-2 bg-brand-gold rounded-full mr-3"></span>
                Custom group packages available
              </li>
              <li className="flex items-center text-sm text-brand-gold/70">
                <span className="w-2 h-2 bg-brand-gold rounded-full mr-3"></span>
                Team building activities
              </li>
              <li className="flex items-center text-sm text-brand-gold/70">
                <span className="w-2 h-2 bg-brand-gold rounded-full mr-3"></span>
                Special event hosting
              </li>
            </ul>
          </div>
        </div>

        {/* Additional features - horizontal layout, floating look */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="flex items-start space-x-6 bg-white/80 rounded-2xl p-6 backdrop-blur-md border-2 border-brand-green/10 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
              {/* Shield icon */}
              <svg className="w-6 h-6 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l7 4v6c0 5.25-3.5 10-7 10s-7-4.75-7-10V6l7-4z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-brand-green mb-2">Safety Excellence</h3>
              <p className="text-brand-green/80">Professional lifeguards, comprehensive safety briefings, and top-quality equipment ensure your peace of mind.</p>
            </div>
          </div>
          <div className="flex items-start space-x-6 bg-white/80 rounded-2xl p-6 backdrop-blur-md border-2 border-brand-blue/10 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
              {/* All-inclusive icon */}
              <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                <path strokeLinecap="round" strokeWidth="2" d="M8 12l2 2 4-4" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-brand-blue mb-2">All-Inclusive Experience</h3>
              <p className="text-brand-blue/80">Life jackets, safety equipment, and obstacle access all included – just bring your sense of adventure!</p>
            </div>
          </div>
        </div>

        {/* Lake-style CTA */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-brand-blue/90 to-brand-green/80 p-10 md:p-14 rounded-3xl shadow-2xl border-4 border-brand-gold/30 relative overflow-hidden">
            {/* Sun sparkle */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-radial from-yellow-200/80 to-transparent rounded-full opacity-40 pointer-events-none"></div>
            <h3 className="text-3xl font-extrabold text-white mb-4 drop-shadow-lg">Ready for Your Adventure?</h3>
            <p className="text-lg text-white/90 mb-8 max-w-md mx-auto">
              Experience the ultimate water adventure at Utah's premier aqua park destination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-brand-gold hover:bg-brand-blue text-brand-blue hover:text-brand-gold font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl border-2 border-brand-gold text-lg">
                Reserve Your Spot
              </button>
              <button className="border-2 border-white text-white hover:border-brand-gold hover:text-brand-gold font-bold py-4 px-8 rounded-2xl transition-all duration-300 text-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Lake wave SVG at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-16 z-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0,40 C360,0 1080,80 1440,40 L1440,80 L0,80 Z" fill="#B2E6E0" fillOpacity="0.45" />
        </svg>
      </div>
    </section>
  )
} 