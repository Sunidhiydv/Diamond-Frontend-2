import React from 'react'

export default function Hero() {
  return (
    <>
      <section className="h-screen w-full">
        <div
          className="relative backdrop-brightness-50 bg-cover bg-center bg-[url('diamond.jpeg')] h-full w-full"
          data-aos="fade-up"
        >
          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center p-6 md:p-10 bg-gradient-to-t from-black/80 via-black/50 to-transparent text-center">
            <div className="max-w-2xl">
              <h2 className="text-white font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                The Brilliance of Nature, The Luxury of Diamonds
              </h2>
              <p className="text-white text-lg sm:text-xl md:text-2xl font-light mb-6">
                Discover Timeless Beauty in Every Stone. Crafted for Generations.
              </p>
              <a
                href="/manufacture"
                className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-700 text-white py-3 px-6 rounded-full text-lg sm:text-xl font-semibold hover:bg-yellow-600 transition-all duration-300"
              >
                Explore Our Diamonds
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
