import overview from '../assets/overview.png'

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
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-2xl mb-6">
        Welcome to <span className="text-brand-gold drop-shadow">Jordanelle Aqua Park!</span>
        </h1>
        <a
          href="#booking"
          className="mt-4 bg-brand-gold text-brand-blue font-bold px-8 py-4 rounded shadow-lg text-xl hover:bg-brand-blue hover:text-brand-gold border-2 border-brand-gold transition-colors duration-150"
        >
          Book Now
        </a>
      </div>
    </section>
  )
} 