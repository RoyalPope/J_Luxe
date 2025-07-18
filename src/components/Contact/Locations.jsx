const Locations = () => {
  return (
    <section id="locations" class="py-16 bg-black">
        <div class="container mx-auto px-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center font-playfair">Our <span class="text-gold">Locations</span></h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div class="map-container rounded-lg overflow-hidden">
                    {/* <!-- SVG Map for New York --> */}
                    <svg class="w-full h-full" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
                        <rect width="800" height="400" fill="#1a1a1a"></rect>
                        <path d="M100,100 L700,100 L700,300 L100,300 Z" fill="#2a2a2a" stroke="#444" stroke-width="2"></path>
                        <path d="M200,150 L300,150 L300,250 L200,250 Z" fill="#333" stroke="#555" stroke-width="1"></path>
                        <path d="M400,180 L500,180 L500,220 L400,220 Z" fill="#333" stroke="#555" stroke-width="1"></path>
                        <path d="M150,200 L180,200 L180,230 L150,230 Z" fill="#333" stroke="#555" stroke-width="1"></path>
                        <path d="M600,150 L650,150 L650,250 L600,250 Z" fill="#333" stroke="#555" stroke-width="1"></path>
                        <path d="M100,100 L100,300" stroke="#444" stroke-width="1"></path>
                        <path d="M200,100 L200,300" stroke="#444" stroke-width="1"></path>
                        <path d="M300,100 L300,300" stroke="#444" stroke-width="1"></path>
                        <path d="M400,100 L400,300" stroke="#444" stroke-width="1"></path>
                        <path d="M500,100 L500,300" stroke="#444" stroke-width="1"></path>
                        <path d="M600,100 L600,300" stroke="#444" stroke-width="1"></path>
                        <path d="M700,100 L700,300" stroke="#444" stroke-width="1"></path>
                        <path d="M100,100 L700,100" stroke="#444" stroke-width="1"></path>
                        <path d="M100,150 L700,150" stroke="#444" stroke-width="1"></path>
                        <path d="M100,200 L700,200" stroke="#444" stroke-width="1"></path>
                        <path d="M100,250 L700,250" stroke="#444" stroke-width="1"></path>
                        <path d="M100,300 L700,300" stroke="#444" stroke-width="1"></path>
                        <circle cx="350" cy="200" r="15" fill="#D4AF37"></circle>
                        <text x="350" y="205" font-family="Arial" font-size="12" fill="black" text-anchor="middle">J Luxe</text>
                        <text x="400" y="350" font-family="Arial" font-size="16" fill="#999" text-anchor="middle">New York Flagship Store</text>
                    </svg>
                    <div class="map-overlay"></div>
                </div>
                
                <div>
                    <h3 class="text-2xl font-bold mb-6 font-playfair">New York <span class="text-gold">Flagship</span></h3>
                    <p class="text-gray-200 mb-6">Our flagship store in the heart of New York's Fashion District offers the complete J Luxe experience. Visit us to explore our full collection and enjoy personalized service in an elegant setting.</p>
                    
                    <div class="mb-6">
                        <h4 class="text-lg font-semibold mb-3">Address:</h4>
                        <p class="text-gray-200">123 Luxury Avenue</p>
                        <p class="text-gray-200">Fashion District</p>
                        <p class="text-gray-200">New York, NY 10001</p>
                    </div>
                    
                    <div class="mb-6">
                        <h4 class="text-lg font-semibold mb-3">Contact:</h4>
                        <p class="text-gray-200">Phone: +1 (212) 555-LUXE</p>
                        <p class="text-gray-200">Email: newyork@jluxejewelry.com</p>
                    </div>
                    
                    <div class="mb-6">
                        <h4 class="text-lg font-semibold mb-3">Hours:</h4>
                        <p class="text-gray-200">Monday - Friday: 10:00 AM - 7:00 PM</p>
                        <p class="text-gray-200">Saturday: 11:00 AM - 6:00 PM</p>
                        <p class="text-gray-200">Sunday: 12:00 PM - 5:00 PM</p>
                    </div>
                    
                    <div class="flex space-x-4">
                        <a href="#" class="px-6 py-3 bg-gold text-black font-bold rounded-sm hover:bg-gold-dark transition">Get Directions</a>
                        <a href="#" class="px-6 py-3 border border-gold text-gold font-bold rounded-sm hover:bg-gold hover:text-black transition">Book a Visit</a>
                    </div>
                </div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* <!-- Paris Location --> */}
                <div class="bg-gray-900 p-6 rounded-lg">
                    <h3 class="text-xl font-bold mb-4">Paris</h3>
                    <p class="text-gray-200 mb-4">45 Rue du Faubourg Saint-Honoré<br />75008 Paris, France</p>
                    <p class="text-gray-200 mb-4">Phone: +33 1 42 68 XX XX</p>
                    <a href="#" class="text-gold hover:underline">View Details</a>
                </div>
                
                {/* <!-- Tokyo Location --> */}
                <div class="bg-gray-900 p-6 rounded-lg">
                    <h3 class="text-xl font-bold mb-4">Tokyo</h3>
                    <p class="text-gray-200 mb-4">4-4-25 Ginza, Chuo-ku<br />Tokyo 104-0061, Japan</p>
                    <p class="text-gray-200 mb-4">Phone: +81 3 6274 XX XX</p>
                    <a href="#" class="text-gold hover:underline">View Details</a>
                </div>
                
                {/* <!-- Dubai Location --> */}
                <div class="bg-gray-900 p-6 rounded-lg">
                    <h3 class="text-xl font-bold mb-4">Dubai</h3>
                    <p class="text-gray-200 mb-4">The Dubai Mall, Fashion Avenue<br />Dubai, United Arab Emirates</p>
                    <p class="text-gray-200 mb-4">Phone: +971 4 330 XX XX</p>
                    <a href="#" class="text-gold hover:underline">View Details</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Locations