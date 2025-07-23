import overview from '../assets/overview.png'

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
    <section className="relative h-screen w-full flex items-center justify-center">
      <img
        src={overview}
        alt="Aerial view of Jordanelle Aqua Park and lake"
        className="absolute inset-0 w-full h-full object-cover object-center z-0 scale-105"
        draggable={false}
      />
      {/* Gradient overlay for readability and polish */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent z-10" />
      <div className="relative z-20 flex flex-col items-center text-center px-4">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-2xl mb-4">
        Welcome to <span className="text-brand-gold drop-shadow">Jordanelle Aqua Park!</span>
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
          className="mt-3 bg-brand-gold text-brand-blue font-bold px-6 py-3 rounded shadow-lg text-lg hover:bg-brand-blue hover:text-brand-gold border-2 border-brand-gold transition-colors duration-150"
        >
          Book Now
        </a>
      </div>
    </section>
  )
} 