import vid from '../../assets/eli.mp4'

const Hero = () => {
  return (
    <section class="hero-section flex items-center justify-center">
        <div class="video-bg">
            <video autoPlay muted loop playsInline>
                <source src={vid} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
        <div class="hero-content text-center px-4">
            <h1 class="text-5xl md:text-7xl font-bold mb-6 font-playfair">Welcome to <span class="text-gold">J Luxe</span></h1>
            <p class="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-montserrat font-light">Discover timeless elegance and exquisite craftsmanship in our luxury jewelry collection</p>
            <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center">
                <a href="#" class="px-8 py-3 bg-gold text-black font-semibold rounded-sm hover:bg-gold-dark transition">Shop Collection</a>
                <a href="#" class="px-8 py-3 border border-gold text-gold font-semibold rounded-sm hover:bg-gold hover:bg-opacity-10 transition">Learn More</a>
            </div>
        </div>
    </section>
  )
}

export default Hero