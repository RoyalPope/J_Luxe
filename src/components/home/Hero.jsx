import { Link } from 'react-router-dom';
import memeImage from '../../assets/meme.jpg'

const Hero = () => {
  return (
    <section className="hero-section flex items-center justify-center relative">
        <div className="absolute inset-0">
            <img 
                src={memeImage} 
                alt="J Luxe Hero Background" 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="hero-content text-center px-4 relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-playfair">Welcome to <span className="text-gold">J Luxe</span></h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-montserrat font-light">Discover timeless elegance and exquisite craftsmanship in our luxury jewelry collection</p>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center">
                <Link to="/collections" className="px-8 py-3 bg-gold text-black font-semibold rounded-sm hover:bg-gold-dark transition duration-300 transform hover:scale-105">Shop Collection</Link>
                <Link to="/about" className="px-8 py-3 border border-gold text-gold font-semibold rounded-sm hover:bg-gold hover:bg-opacity-10 transition duration-300 transform hover:scale-105">Learn More</Link>
            </div>
        </div>
    </section>
  )
}

export default Hero