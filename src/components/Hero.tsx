import overview from '../assets/kidsOverview.jpg'
import logo from '../assets/logo.png'

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

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-end justify-center pb-8 md:pb-12">
      <img
        src={overview}
        alt="Kids playing at Jordanelle Aqua Park"
        className="absolute inset-0 w-full h-full object-cover object-center z-0 scale-105"
        draggable={false}
      />
      {/* Gradient overlay for readability and polish */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent z-10" />
      <div className="relative z-20 flex flex-col items-center text-center px-4 w-full">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
          Welcome to <span className="text-[#F7C873]">Jordanelle Aqua Park!</span>
        </h1>
        <a
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
          className="mt-3 bg-[#F7C873] text-[#1B4F8C] font-semibold px-4 py-2 rounded-lg shadow-sm text-sm hover:bg-[#3A6BAA] hover:text-[#F7C873] transition-all duration-300 inline-flex items-center gap-1"
        >
          Book Now
        </a>
        {/* Centered logo below Book Now button */}
        <img
          src={logo}
          alt="Jordanelle Aqua Park Logo Large"
          className="mt-6 w-28 h-28 md:w-36 md:h-36 drop-shadow-xl mx-auto"
          style={{ pointerEvents: 'none' }}
        />
      </div>
    </section>
  )
} 