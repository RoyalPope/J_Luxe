const Connect = () => {
  return (
    <section class="py-16 bg-black">
        <div class="container mx-auto px-12 text-center">
            <h2 class="text-3xl md:text-4xl font-bold mb-6 font-playfair">Connect With <span class="text-gold">Us</span></h2>
            <p class="text-gray-200 mb-12 max-w-2xl mx-auto">Follow us on social media for the latest collections, behind-the-scenes content, and exclusive events.</p>
            
            <div class="flex justify-center space-x-6">
                <a href="#" class="social-icon w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gold transition">
                    <i class="fab fa-instagram text-2xl text-white hover:text-black"></i>
                </a>
                <a href="#" class="social-icon w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gold transition">
                    <i class="fab fa-facebook-f text-2xl text-white hover:text-black"></i>
                </a>
                <a href="#" class="social-icon w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gold transition">
                    <i class="fab fa-pinterest-p text-2xl text-white hover:text-black"></i>
                </a>
                <a href="#" class="social-icon w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gold transition">
                    <i class="fab fa-twitter text-2xl text-white hover:text-black"></i>
                </a>
                <a href="#" class="social-icon w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gold transition">
                    <i class="fab fa-youtube text-2xl text-white hover:text-black"></i>
                </a>
            </div>
            
            <div class="mt-16">
                <h3 class="text-2xl font-bold mb-6 font-playfair">Subscribe to Our <span class="text-gold">Newsletter</span></h3>
                <p class="text-gray-200 mb-8 max-w-2xl mx-auto">Be the first to know about new collections, exclusive events, and special offers.</p>
                
                <form class="max-w-md mx-auto flex">
                    <input type="email" placeholder="Your email address" class="flex-1 px-12 py-3 rounded-l-sm input-field text-white focus:outline-none" required="" />
                    <button type="submit" class="px-6 py-3 bg-gold text-black font-bold rounded-r-sm hover:bg-gold-dark transition">Subscribe</button>
                </form>
                <p class="text-xs text-gray-400 mt-4">By subscribing, you agree to our <a href="#" class="text-gold hover:underline">Privacy Policy</a>.</p>
            </div>
        </div>
    </section>
  )
}

export default Connect