import IMG_6621 from '../assets/IMG_6621.jpg'
import IMG_6587 from '../assets/IMG_6587.jpg'
import IMG_6548 from '../assets/IMG_6548.jpg'
import IMG_6533 from '../assets/IMG_6533 (2).jpg'
import IMG_6617 from '../assets/IMG_6617 (1).PNG'
import kidJumping from '../assets/kidJumping.PNG'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

// Professional SVG icons for benefits
const FamilyIcon = () => (
  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#E0F7FF]">
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#0179D0]" stroke="currentColor" strokeWidth="1.5">
      <circle cx="7" cy="14" r="3" stroke="#0179D0" strokeWidth="1.5" />
      <circle cx="17" cy="14" r="3" stroke="#0179D0" strokeWidth="1.5" />
      <circle cx="12" cy="8" r="3" stroke="#0179D0" strokeWidth="1.5" />
      <path d="M2 21c0-2.5 3.5-4 6-4s6 1.5 6 4" stroke="#0179D0" strokeWidth="1.5" />
      <path d="M10 21c0-2.5 3.5-4 6-4s6 1.5 6 4" stroke="#0179D0" strokeWidth="1.5" />
    </svg>
  </span>
)
// const LifeguardIcon = () => (
//   <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#FFE0E0]">
//     <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#FF6B6B]" stroke="currentColor" strokeWidth="1.5">
//       <circle cx="12" cy="12" r="9" stroke="#FF6B6B" strokeWidth="1.5" />
//       <path d="M12 7v10M7 12h10" stroke="#FF6B6B" strokeWidth="1.5" />
//     </svg>
//   </span>
// )
const SunIcon = () => (
  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#FFF9E0]">
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#FFD600]" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="5" stroke="#FFD600" strokeWidth="1.5" />
      <path stroke="#FFD600" strokeWidth="1.5" d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41" />
    </svg>
  </span>
)
const BeachIcon = () => (
  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#E0FFE6]">
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#00C896]" stroke="currentColor" strokeWidth="1.5">
      <path d="M2 20h20M4 17c2-2 6-2 8 0" stroke="#00C896" strokeWidth="1.5" />
      <circle cx="18" cy="8" r="3" stroke="#00C896" strokeWidth="1.5" />
      <path d="M16 8a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" fill="#00C896" />
    </svg>
  </span>
)

export function WhyAquaPark() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }
  
  return (
    <section ref={ref} className="relative w-full bg-gradient-to-b from-[#E0F7FF] to-white py-8 md:py-16 overflow-hidden" id="about">
      {/* Top wave divider */}
      {/* <div className="absolute top-0 left-0 w-full z-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-12 md:h-20">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#B2E6E0" fillOpacity="0.25" />
        </svg>
      </div> */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-[5vw] flex flex-col md:flex-row items-center gap-6 md:gap-12">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col items-center md:items-start w-full max-w-xl text-center md:text-left">
          <h2 className="font-poppins font-extrabold text-[20px] md:text-[28px] text-[#013A63] mb-2">Why an Aqua Park?</h2>
          <h3 className="italic font-open-sans text-[#4A5568] text-[16px] md:text-[18px] mb-3 font-light">
            Because Just Swimming Is <span className="relative inline-block text-[#FFD600] font-semibold">
              Boring
              <span className="absolute left-0 -bottom-1 w-full h-2 block">
                <svg viewBox="0 0 80 8" fill="none" className="w-full h-full"><path d="M0 4 Q20 8 40 4 T80 4" stroke="#FFD600" strokeWidth="3" fill="none"/></svg>
              </span>
            </span>
          </h3>
          <p className="font-open-sans text-[#4A5568] text-[14px] md:text-[16px] leading-relaxed mb-4" style={{lineHeight:1.8}}>
            It's not just a float—it's a floating water playground. With giant inflatable slides, trampolines, climbing walls, balance beams, and launch pads, Jordanelle Aqua Park brings out the fun in everyone.
          </p>
          {/* Benefits List */}
          <ul className="space-y-3 mb-6 w-full">
            <li className="flex items-center gap-2 group cursor-pointer transition-transform duration-200 hover:scale-105 justify-center md:justify-start">
              <FamilyIcon />
              <span className="font-open-sans text-[#013A63] text-[14px] group-hover:text-[#00C896] group-hover:scale-105 transition-all duration-200">Fun for all ages</span>
            </li>
            {/* <li className="flex items-center gap-2 group cursor-pointer transition-transform duration-200 hover:scale-105 justify-center md:justify-start">
              <LifeguardIcon />
              <span className="font-open-sans text-[#013A63] text-[14px] group-hover:text-[#FF6B6B] group-hover:scale-105 transition-all duration-200">Safe and lifeguard-supervised</span>
            </li> */}
            <li className="flex items-center gap-2 group cursor-pointer transition-transform duration-200 hover:scale-105 justify-center md:justify-start">
              <SunIcon />
              <span className="font-open-sans text-[#013A63] text-[14px] group-hover:text-[#FFD600] group-hover:scale-105 transition-all duration-200">No screens, just sunshine</span>
            </li>
            <li className="flex items-center gap-2 group cursor-pointer transition-transform duration-200 hover:scale-105 justify-center md:justify-start">
              <BeachIcon />
              <span className="font-open-sans text-[#013A63] text-[14px] group-hover:text-[#00C896] group-hover:scale-105 transition-all duration-200">Perfect boating break</span>
            </li>
            <li className="flex items-center gap-2 group cursor-pointer transition-transform duration-200 hover:scale-105 justify-center md:justify-start">
              <SunIcon />
              <span className="font-open-sans text-[#013A63] text-[14px] group-hover:text-[#FFD600] group-hover:scale-105 transition-all duration-200">Huge Floating Park</span>
            </li>
            {/* <li className="flex items-center gap-4 group cursor-pointer transition-transform duration-200 hover:scale-105">
              <SunIcon />
              <span className="font-open-sans text-[#013A63] text-[18px] group-hover:text-[#FFD600] group-hover:scale-105 transition-all duration-200">80 feet x 110 feet • 23 separate obstacles — way above average for floating parks!</span>
            </li> */}
          </ul>
          {/* CTA Button removed */}
        </div>
        {/* Right: Masonry Photo Grid */}
        <div className="flex-1 flex flex-col items-center w-full max-w-4xl">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-3 w-full"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Column 1 */}
            <div className="grid gap-2 md:gap-3">
              <motion.div 
                className="overflow-hidden rounded-xl shadow-lg group h-64"
                variants={itemVariants}
              >
                <img 
                  src={IMG_6621} 
                  alt="Kids enjoying Jordanelle Aqua Park" 
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-110" 
                />
              </motion.div>
              <motion.div 
                className="overflow-hidden rounded-xl shadow-lg group h-40"
                variants={itemVariants}
              >
                <img 
                  src={IMG_6587} 
                  alt="Family fun at Jordanelle Aqua Park" 
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-110" 
                />
              </motion.div>
              <motion.div 
                className="overflow-hidden rounded-xl shadow-lg group h-52"
                variants={itemVariants}
              >
                <img 
                  src={IMG_6548} 
                  alt="Aqua park adventure" 
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-110" 
                />
              </motion.div>
            </div>
            
            {/* Column 2 */}
            <div className="grid gap-2 md:gap-3">
              <motion.div 
                className="overflow-hidden rounded-xl shadow-lg group h-44"
                variants={itemVariants}
              >
                <img 
                  src={IMG_6533} 
                  alt="Water slides and fun" 
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-110" 
                />
              </motion.div>
              <motion.div 
                className="overflow-hidden rounded-xl shadow-lg group h-64"
                variants={itemVariants}
              >
                <img 
                  src={IMG_6617} 
                  alt="Kids jumping and playing" 
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110" 
                />
              </motion.div>
              <motion.div 
                className="overflow-hidden rounded-xl shadow-lg group h-40"
                variants={itemVariants}
              >
                <img 
                  src={kidJumping} 
                  alt="Kids jumping into the water" 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  style={{ objectPosition: 'center 30%' }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Bottom wave divider */}
      {/* <div className="absolute bottom-0 left-0 w-full z-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-12 md:h-20">
          <path d="M0,40 C360,0 1080,80 1440,40 L1440,80 L0,80 Z" fill="#B2E6E0" fillOpacity="0.25" />
        </svg>
      </div> */}
    </section>
  )
} 