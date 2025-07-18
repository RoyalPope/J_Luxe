import p1 from '../../assets/product.jpg';
const Feature = () => {
  return (
    <section class="py-20 bg-black">
        <div class="container mx-auto px-14">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold mb-4 font-playfair">Featured <span class="text-gold">Collection</span></h2>
                <p class="text-gray-300 max-w-2xl mx-auto">Explore our handcrafted pieces designed to elevate your style and make a statement.</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* <!-- Product 1 --> */}
                <div class="product-card bg-gray-900 rounded-lg overflow-hidden cursor-pointer">
                    <div class="relative h-80 overflow-hidden">
                        <img src={p1} alt="product1" class="w-full h-full object-cover" />
                        <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                            <div class="product-info">
                                <h3 class="text-xl font-semibold text-white">Royal Pendant</h3>
                                <p class="text-gold font-bold">$1,299</p>
                            </div>
                        </div>
                        <button class="add-to-cart absolute bottom-4 right-4 bg-gold w-10 h-10 rounded-full flex items-center justify-center hover:bg-gold-dark transition">
                            <i class="fas fa-shopping-cart text-black"></i>
                        </button>
                    </div>
                </div>
                
                {/* <!-- Product 2 --> */}
                <div class="product-card bg-gray-900 rounded-lg overflow-hidden">
                    <div class="relative h-80 overflow-hidden">
                        <svg class="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                            <rect width="400" height="400" fill="#1a1a1a"></rect>
                            <path d="M100,200 C100,150 150,120 200,120 C250,120 300,150 300,200 C300,250 250,280 200,280 C150,280 100,250 100,200 Z" fill="none" stroke="#D4AF37" stroke-width="8"></path>
                            <circle cx="150" cy="200" r="10" fill="#D4AF37"></circle>
                            <circle cx="200" cy="200" r="10" fill="#D4AF37"></circle>
                            <circle cx="250" cy="200" r="10" fill="#D4AF37"></circle>
                        </svg>
                        <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                            <div class="product-info">
                                <h3 class="text-xl font-semibold text-white">Elegance Bracelet</h3>
                                <p class="text-gold font-bold">$899</p>
                            </div>
                        </div>
                        <button class="add-to-cart absolute bottom-4 right-4 bg-gold w-10 h-10 rounded-full flex items-center justify-center hover:bg-gold-dark transition">
                            <i class="fas fa-shopping-cart text-black"></i>
                        </button>
                    </div>
                </div>
                
                {/* <!-- Product 3 --> */}
                <div class="product-card bg-gray-900 rounded-lg overflow-hidden">
                    <div class="relative h-80 overflow-hidden">
                        <svg class="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                            <rect width="400" height="400" fill="#1a1a1a"></rect>
                            <path d="M150,120 C150,120 200,180 250,120" fill="none" stroke="#D4AF37" stroke-width="8"></path>
                            <path d="M150,120 L150,280" fill="none" stroke="#D4AF37" stroke-width="8"></path>
                            <path d="M250,120 L250,280" fill="none" stroke="#D4AF37" stroke-width="8"></path>
                            <path d="M150,200 L250,200" fill="none" stroke="#D4AF37" stroke-width="8"></path>
                            <circle cx="150" cy="200" r="15" fill="#B8860B"></circle>
                            <circle cx="250" cy="200" r="15" fill="#B8860B"></circle>
                        </svg>
                        <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                            <div class="product-info">
                                <h3 class="text-xl font-semibold text-white">Infinity Necklace</h3>
                                <p class="text-gold font-bold">$1,499</p>
                            </div>
                        </div>
                        <button class="add-to-cart absolute bottom-4 right-4 bg-gold w-10 h-10 rounded-full flex items-center justify-center hover:bg-gold-dark transition">
                            <i class="fas fa-shopping-cart text-black"></i>
                        </button>
                    </div>
                </div>
                
                {/* <!-- Product 4 --> */}
                <div class="product-card bg-gray-900 rounded-lg overflow-hidden">
                    <div class="relative h-80 overflow-hidden">
                        <svg class="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                            <rect width="400" height="400" fill="#1a1a1a"></rect>
                            <circle cx="200" cy="200" r="80" fill="none" stroke="#D4AF37" stroke-width="8"></circle>
                            <circle cx="200" cy="200" r="60" fill="none" stroke="#B8860B" stroke-width="4"></circle>
                            <path d="M200,120 L200,280" stroke="#D4AF37" stroke-width="4"></path>
                            <path d="M120,200 L280,200" stroke="#D4AF37" stroke-width="4"></path>
                            <circle cx="200" cy="200" r="15" fill="#D4AF37"></circle>
                        </svg>
                        <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                            <div class="product-info">
                                <h3 class="text-xl font-semibold text-white">Celestial Bracelet</h3>
                                <p class="text-gold font-bold">$1,199</p>
                            </div>
                        </div>
                        <button class="add-to-cart absolute bottom-4 right-4 bg-gold w-10 h-10 rounded-full flex items-center justify-center hover:bg-gold-dark transition">
                            <i class="fas fa-shopping-cart text-black"></i>
                        </button>
                    </div>
                </div>
                
                {/* <!-- Product 5 --> */}
                <div class="product-card bg-gray-900 rounded-lg overflow-hidden">
                    <div class="relative h-80 overflow-hidden">
                        <svg class="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                            <rect width="400" height="400" fill="#1a1a1a"></rect>
                            <path d="M150,150 L250,150 L250,250 L150,250 Z" fill="none" stroke="#D4AF37" stroke-width="8"></path>
                            <path d="M170,170 L230,170 L230,230 L170,230 Z" fill="none" stroke="#B8860B" stroke-width="4"></path>
                            <circle cx="200" cy="200" r="10" fill="#D4AF37"></circle>
                            <path d="M150,150 L170,170" stroke="#D4AF37" stroke-width="2"></path>
                            <path d="M250,150 L230,170" stroke="#D4AF37" stroke-width="2"></path>
                            <path d="M150,250 L170,230" stroke="#D4AF37" stroke-width="2"></path>
                            <path d="M250,250 L230,230" stroke="#D4AF37" stroke-width="2"></path>
                        </svg>
                        <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                            <div class="product-info">
                                <h3 class="text-xl font-semibold text-white">Diamond Necklace</h3>
                                <p class="text-gold font-bold">$2,499</p>
                            </div>
                        </div>
                        <button class="add-to-cart absolute bottom-4 right-4 bg-gold w-10 h-10 rounded-full flex items-center justify-center hover:bg-gold-dark transition">
                            <i class="fas fa-shopping-cart text-black"></i>
                        </button>
                    </div>
                </div>
                
                {/* <!-- Product 6 --> */}
                <div class="product-card bg-gray-900 rounded-lg overflow-hidden">
                    <div class="relative h-80 overflow-hidden">
                        <svg class="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                            <rect width="400" height="400" fill="#1a1a1a"></rect>
                            <path d="M120,200 C120,150 150,120 200,120 C250,120 280,150 280,200 C280,250 250,280 200,280 C150,280 120,250 120,200 Z" fill="none" stroke="#D4AF37" stroke-width="8"></path>
                            <path d="M140,200 C140,160 160,140 200,140 C240,140 260,160 260,200 C260,240 240,260 200,260 C160,260 140,240 140,200 Z" fill="none" stroke="#B8860B" stroke-width="4"></path>
                            <circle cx="200" cy="160" r="10" fill="#D4AF37"></circle>
                            <circle cx="200" cy="240" r="10" fill="#D4AF37"></circle>
                            <circle cx="160" cy="200" r="10" fill="#D4AF37"></circle>
                            <circle cx="240" cy="200" r="10" fill="#D4AF37"></circle>
                        </svg>
                        <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                            <div class="product-info">
                                <h3 class="text-xl font-semibold text-white">Royal Bracelet</h3>
                                <p class="text-gold font-bold">$1,799</p>
                            </div>
                        </div>
                        <button class="add-to-cart absolute bottom-4 right-4 bg-gold w-10 h-10 rounded-full flex items-center justify-center hover:bg-gold-dark transition">
                            <i class="fas fa-shopping-cart text-black"></i>
                        </button>
                    </div>
                </div>
            </div>
            
            <div class="text-center mt-12">
                <a href="#" class="px-8 py-3 border border-gold text-gold font-semibold rounded-sm hover:bg-gold hover:text-black transition">View All Collection</a>
            </div>
        </div>
    </section>
  )
}

export default Feature