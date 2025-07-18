import React from 'react'

const Content = () => {
  return (
    <main class="py-12">
        <div class="container mx-auto px-12">
            {/* <!-- Category Filter --> */}
            <div class="mb-12">
                <h2 class="text-2xl font-bold mb-6 font-playfair">Browse by <span class="text-gold">Category</span></h2>
                <div class="flex flex-wrap gap-3">
                    <button class="category-btn px-6 py-2 rounded-sm border border-gold transition text-gold">All</button>
                    <button class="category-btn px-6 py-2 rounded-sm border border-gold text-gold hover:bg-gold hover:text-black transition">Necklaces</button>
                    <button class="category-btn px-6 py-2 rounded-sm border border-gold hover:bg-gold hover:text-black transition active bg-gold text-black">Bracelets</button>
                    <button class="category-btn px-6 py-2 rounded-sm border border-gold text-gold hover:bg-gold hover:text-black transition">Rings</button>
                    <button class="category-btn px-6 py-2 rounded-sm border border-gold text-gold hover:bg-gold hover:text-black transition">Earrings</button>
                    <button class="category-btn px-6 py-2 rounded-sm border border-gold text-gold hover:bg-gold hover:text-black transition">Limited Edition</button>
                </div>
            </div>

            {/* <!-- Filter and Sort --> */}
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <div class="mb-4 md:mb-0">
                    <p class="text-gray-400">Showing <span class="text-white">24</span> of <span class="text-white">86</span> products</p>
                </div>
                <div class="flex flex-col sm:flex-row gap-4">
                    <div class="relative">
                        <select class="appearance-none bg-gray-900 border border-gray-700 text-white py-2 px-4 pr-8 rounded-sm focus:outline-none focus:border-gold">
                            <option>Sort by: Featured</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                            <option>Newest First</option>
                            <option>Best Selling</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gold">
                            <i class="fas fa-chevron-down text-xs"></i>
                        </div>
                    </div>
                    <div class="relative">
                        <select class="appearance-none bg-gray-900 border border-gray-700 text-white py-2 px-4 pr-8 rounded-sm focus:outline-none focus:border-gold">
                            <option>Filter by: All</option>
                            <option>Price Range</option>
                            <option>Material</option>
                            <option>New Arrivals</option>
                            <option>On Sale</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gold">
                            <i class="fas fa-chevron-down text-xs"></i>
                        </div>
                    </div>
                    <div class="flex border border-gray-700 rounded-sm">
                        <button class="px-3 py-2 bg-gray-900 text-gold border-r border-gray-700">
                            <i class="fas fa-th-large"></i>
                        </button>
                        <button class="px-3 py-2 bg-gray-900 text-gray-400 hover:text-gold">
                            <i class="fas fa-list"></i>
                        </button>
                    </div>
                </div>
            </div>
    
            {/* <!-- Products Grid --> */}
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
                {/* <!-- Product 1 --> */}
                <div class="product-card bg-gray-900 rounded-lg overflow-hidden cursor-pointer">
                    <div class="relative">
                        <span class="absolute top-4 left-4 bg-gold text-black text-xs font-bold px-2 py-1 rounded-sm z-10">NEW</span>
                        <div class="h-64 overflow-hidden">
                            <svg class="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                                <rect width="400" height="400" fill="#1a1a1a"></rect>
                                <path d="M200,100 C240,100 270,130 270,170 C270,210 240,240 200,240 C160,240 130,210 130,170 C130,130 160,100 200,100 Z" fill="none" stroke="#D4AF37" stroke-width="8"></path>
                                <path d="M200,120 C230,120 250,140 250,170 C250,200 230,220 200,220 C170,220 150,200 150,170 C150,140 170,120 200,120 Z" fill="none" stroke="#B8860B" stroke-width="4"></path>
                                <circle cx="200" cy="170" r="15" fill="#D4AF37"></circle>
                                <path d="M200,240 L200,280" stroke="#D4AF37" stroke-width="8"></path>
                                <path d="M170,280 L230,280" stroke="#D4AF37" stroke-width="8"></path>
                            </svg>
                        </div>
                        <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                            <div class="product-info">
                                <h3 class="text-lg font-semibold text-white">Royal Pendant</h3>
                                <p class="text-gold font-bold">$1,299</p>
                            </div>
                        </div>
                        <button class="add-to-cart absolute bottom-4 right-4 bg-gold w-10 h-10 rounded-full flex items-center justify-center hover:bg-gold-dark transition">
                            <i class="fas fa-shopping-cart text-black"></i>
                        </button>
                    </div>
                </div>

                {/* <!-- Product 2 --> */}
                <div class="product-card bg-gray-900 rounded-lg overflow-hidden cursor-pointer">
                    <div class="relative">
                        <div class="h-64 overflow-hidden">
                            <svg class="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                                <rect width="400" height="400" fill="#1a1a1a"></rect>
                                <path d="M100,200 C100,150 150,120 200,120 C250,120 300,150 300,200 C300,250 250,280 200,280 C150,280 100,250 100,200 Z" fill="none" stroke="#D4AF37" stroke-width="8"></path>
                                <circle cx="150" cy="200" r="10" fill="#D4AF37"></circle>
                                <circle cx="200" cy="200" r="10" fill="#D4AF37"></circle>
                                <circle cx="250" cy="200" r="10" fill="#D4AF37"></circle>
                            </svg>
                        </div>
                        <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                            <div class="product-info">
                                <h3 class="text-lg font-semibold text-white">Elegance Bracelet</h3>
                                <p class="text-gold font-bold">$899</p>
                            </div>
                        </div>
                        <button class="add-to-cart absolute bottom-4 right-4 bg-gold w-10 h-10 rounded-full flex items-center justify-center hover:bg-gold-dark transition">
                            <i class="fas fa-shopping-cart text-black"></i>
                        </button>
                    </div>
                </div>

                {/* <!-- Product 3 --> */}
                <div class="product-card bg-gray-900 rounded-lg overflow-hidden cursor-pointer">
                    <div class="relative">
                        <span class="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-sm z-10">SALE</span>
                        <div class="h-64 overflow-hidden">
                            <svg class="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                                <rect width="400" height="400" fill="#1a1a1a"></rect>
                                <path d="M150,120 C150,120 200,180 250,120" fill="none" stroke="#D4AF37" stroke-width="8"></path>
                                <path d="M150,120 L150,280" fill="none" stroke="#D4AF37" stroke-width="8"></path>
                                <path d="M250,120 L250,280" fill="none" stroke="#D4AF37" stroke-width="8"></path>
                                <path d="M150,200 L250,200" fill="none" stroke="#D4AF37" stroke-width="8"></path>
                                <circle cx="150" cy="200" r="15" fill="#B8860B"></circle>
                                <circle cx="250" cy="200" r="15" fill="#B8860B"></circle>
                            </svg>
                        </div>
                        <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                            <div class="product-info">
                                <h3 class="text-lg font-semibold text-white">Infinity Necklace</h3>
                                <p class="text-gold font-bold">$1,299 <span class="line-through text-gray-400 text-sm">$1,499</span></p>
                            </div>
                        </div>
                        <button class="add-to-cart absolute bottom-4 right-4 bg-gold w-10 h-10 rounded-full flex items-center justify-center hover:bg-gold-dark transition">
                            <i class="fas fa-shopping-cart text-black"></i>
                        </button>
                    </div>
                </div>

                {/* <!-- Product 4 --> */}
                <div class="product-card bg-gray-900 rounded-lg overflow-hidden cursor-pointer">
                    <div class="relative">
                        <div class="h-64 overflow-hidden">
                            <svg class="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                                <rect width="400" height="400" fill="#1a1a1a"></rect>
                                <circle cx="200" cy="200" r="80" fill="none" stroke="#D4AF37" stroke-width="8"></circle>
                                <circle cx="200" cy="200" r="60" fill="none" stroke="#B8860B" stroke-width="4"></circle>
                                <path d="M200,120 L200,280" stroke="#D4AF37" stroke-width="4"></path>
                                <path d="M120,200 L280,200" stroke="#D4AF37" stroke-width="4"></path>
                                <circle cx="200" cy="200" r="15" fill="#D4AF37"></circle>
                            </svg>
                        </div>
                        <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                            <div class="product-info">
                                <h3 class="text-lg font-semibold text-white">Celestial Bracelet</h3>
                                <p class="text-gold font-bold">$1,199</p>
                            </div>
                        </div>
                        <button class="add-to-cart absolute bottom-4 right-4 bg-gold w-10 h-10 rounded-full flex items-center justify-center hover:bg-gold-dark transition">
                            <i class="fas fa-shopping-cart text-black"></i>
                        </button>
                    </div>
                </div>

                {/* <!-- Product 5 --> */}
                <div class="product-card bg-gray-900 rounded-lg overflow-hidden cursor-pointer">
                    <div class="relative">
                        <div class="h-64 overflow-hidden">
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
                        </div>
                        <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                            <div class="product-info">
                                <h3 class="text-lg font-semibold text-white">Diamond Necklace</h3>
                                <p class="text-gold font-bold">$2,499</p>
                            </div>
                        </div>
                        <button class="add-to-cart absolute bottom-4 right-4 bg-gold w-10 h-10 rounded-full flex items-center justify-center hover:bg-gold-dark transition">
                            <i class="fas fa-shopping-cart text-black"></i>
                        </button>
                    </div>
                </div>

                {/* <!-- Product 6 --> */}
                <div class="product-card bg-gray-900 rounded-lg overflow-hidden cursor-pointer">
                    <div class="relative">
                        <div class="h-64 overflow-hidden">
                            <svg class="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                                <rect width="400" height="400" fill="#1a1a1a"></rect>
                                <path d="M120,200 C120,150 150,120 200,120 C250,120 280,150 280,200 C280,250 250,280 200,280 C150,280 120,250 120,200 Z" fill="none" stroke="#D4AF37" stroke-width="8"></path>
                                <path d="M140,200 C140,160 160,140 200,140 C240,140 260,160 260,200 C260,240 240,260 200,260 C160,260 140,240 140,200 Z" fill="none" stroke="#B8860B" stroke-width="4"></path>
                                <circle cx="200" cy="160" r="10" fill="#D4AF37"></circle>
                                <circle cx="200" cy="240" r="10" fill="#D4AF37"></circle>
                                <circle cx="160" cy="200" r="10" fill="#D4AF37"></circle>
                                <circle cx="240" cy="200" r="10" fill="#D4AF37"></circle>
                            </svg>
                        </div>
                        <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                            <div class="product-info">
                                <h3 class="text-lg font-semibold text-white">Royal Bracelet</h3>
                                <p class="text-gold font-bold">$1,799</p>
                            </div>
                        </div>
                        <button class="add-to-cart absolute bottom-4 right-4 bg-gold w-10 h-10 rounded-full flex items-center justify-center hover:bg-gold-dark transition">
                            <i class="fas fa-shopping-cart text-black"></i>
                        </button>
                    </div>
                </div>

                {/* <!-- Product 7 --> */}
                <div class="product-card bg-gray-900 rounded-lg overflow-hidden cursor-pointer">
                    <div class="relative">
                        <span class="absolute top-4 left-4 bg-gold text-black text-xs font-bold px-2 py-1 rounded-sm z-10">BEST SELLER</span>
                        <div class="h-64 overflow-hidden">
                            <svg class="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                                <rect width="400" height="400" fill="#1a1a1a"></rect>
                                <circle cx="200" cy="200" r="80" fill="none" stroke="#D4AF37" stroke-width="8"></circle>
                                <path d="M160,160 L240,240" stroke="#D4AF37" stroke-width="6"></path>
                                <path d="M160,240 L240,160" stroke="#D4AF37" stroke-width="6"></path>
                                <circle cx="200" cy="200" r="30" fill="none" stroke="#B8860B" stroke-width="4"></circle>
                                <circle cx="200" cy="200" r="10" fill="#D4AF37"></circle>
                            </svg>
                        </div>
                        <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                            <div class="product-info">
                                <h3 class="text-lg font-semibold text-white">Starburst Necklace</h3>
                                <p class="text-gold font-bold">$1,899</p>
                            </div>
                        </div>
                        <button class="add-to-cart absolute bottom-4 right-4 bg-gold w-10 h-10 rounded-full flex items-center justify-center hover:bg-gold-dark transition">
                            <i class="fas fa-shopping-cart text-black"></i>
                        </button>
                    </div>
                </div>

                {/* <!-- Product 8 --> */}
                <div class="product-card bg-gray-900 rounded-lg overflow-hidden cursor-pointer">
                    <div class="relative">
                        <div class="h-64 overflow-hidden">
                            <svg class="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                                <rect width="400" height="400" fill="#1a1a1a"></rect>
                                <path d="M150,150 C150,150 200,100 250,150 C300,200 250,250 200,250 C150,250 100,200 150,150 Z" fill="none" stroke="#D4AF37" stroke-width="8"></path>
                                <path d="M175,175 C175,175 200,150 225,175 C250,200 225,225 200,225 C175,225 150,200 175,175 Z" fill="none" stroke="#B8860B" stroke-width="4"></path>
                                <circle cx="200" cy="200" r="10" fill="#D4AF37"></circle>
                            </svg>
                        </div>
                        <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                            <div class="product-info">
                                <h3 class="text-lg font-semibold text-white">Petal Bracelet</h3>
                                <p class="text-gold font-bold">$1,599</p>
                            </div>
                        </div>
                        <button class="add-to-cart absolute bottom-4 right-4 bg-gold w-10 h-10 rounded-full flex items-center justify-center hover:bg-gold-dark transition">
                            <i class="fas fa-shopping-cart text-black"></i>
                        </button>
                    </div>
                </div>

                {/* <!-- Additional Products (9-12) --> */}
                {/* <!-- Product 9 --> */}
                <div class="product-card bg-gray-900 rounded-lg overflow-hidden cursor-pointer">
                    <div class="relative">
                        <div class="h-64 overflow-hidden">
                            <svg class="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                                <rect width="400" height="400" fill="#1a1a1a"></rect>
                                <path d="M130,200 L270,200" stroke="#D4AF37" stroke-width="8"></path>
                                <path d="M150,180 L250,180" stroke="#D4AF37" stroke-width="6"></path>
                                <path d="M150,220 L250,220" stroke="#D4AF37" stroke-width="6"></path>
                                <circle cx="150" cy="200" r="15" fill="#B8860B"></circle>
                                <circle cx="250" cy="200" r="15" fill="#B8860B"></circle>
                                <circle cx="200" cy="200" r="10" fill="#D4AF37"></circle>
                            </svg>
                        </div>
                        <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                            <div class="product-info">
                                <h3 class="text-lg font-semibold text-white">Trinity Bracelet</h3>
                                <p class="text-gold font-bold">$1,399</p>
                            </div>
                        </div>
                        <button class="add-to-cart absolute bottom-4 right-4 bg-gold w-10 h-10 rounded-full flex items-center justify-center hover:bg-gold-dark transition">
                            <i class="fas fa-shopping-cart text-black"></i>
                        </button>
                    </div>
                </div>

                {/* <!-- Product 10 --> */}
                <div class="product-card bg-gray-900 rounded-lg overflow-hidden cursor-pointer">
                    <div class="relative">
                        <span class="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-sm z-10">SALE</span>
                        <div class="h-64 overflow-hidden">
                            <svg class="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                                <rect width="400" height="400" fill="#1a1a1a"></rect>
                                <circle cx="200" cy="150" r="30" fill="none" stroke="#D4AF37" stroke-width="6"></circle>
                                <path d="M200,180 L200,250" stroke="#D4AF37" stroke-width="6"></path>
                                <path d="M170,220 L230,220" stroke="#D4AF37" stroke-width="6"></path>
                                <circle cx="200" cy="150" r="10" fill="#B8860B"></circle>
                            </svg>
                        </div>
                        <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                            <div class="product-info">
                                <h3 class="text-lg font-semibold text-white">Venus Necklace</h3>
                                <p class="text-gold font-bold">$1,099 <span class="line-through text-gray-400 text-sm">$1,299</span></p>
                            </div>
                        </div>
                        <button class="add-to-cart absolute bottom-4 right-4 bg-gold w-10 h-10 rounded-full flex items-center justify-center hover:bg-gold-dark transition">
                            <i class="fas fa-shopping-cart text-black"></i>
                        </button>
                    </div>
                </div>

                {/* <!-- Product 11 --> */}
                <div class="product-card bg-gray-900 rounded-lg overflow-hidden cursor-pointer">
                    <div class="relative">
                        <div class="h-64 overflow-hidden">
                            <svg class="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                                <rect width="400" height="400" fill="#1a1a1a"></rect>
                                <path d="M150,150 L250,150" stroke="#D4AF37" stroke-width="8"></path>
                                <path d="M150,250 L250,250" stroke="#D4AF37" stroke-width="8"></path>
                                <path d="M150,150 L150,250" stroke="#D4AF37" stroke-width="8"></path>
                                <path d="M250,150 L250,250" stroke="#D4AF37" stroke-width="8"></path>
                                <path d="M170,170 L230,170" stroke="#B8860B" stroke-width="4"></path>
                                <path d="M170,230 L230,230" stroke="#B8860B" stroke-width="4"></path>
                                <path d="M170,170 L170,230" stroke="#B8860B" stroke-width="4"></path>
                                <path d="M230,170 L230,230" stroke="#B8860B" stroke-width="4"></path>
                                <circle cx="200" cy="200" r="10" fill="#D4AF37"></circle>
                            </svg>
                        </div>
                        <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                            <div class="product-info">
                                <h3 class="text-lg font-semibold text-white">Square Pendant</h3>
                                <p class="text-gold font-bold">$1,699</p>
                            </div>
                        </div>
                        <button class="add-to-cart absolute bottom-4 right-4 bg-gold w-10 h-10 rounded-full flex items-center justify-center hover:bg-gold-dark transition">
                            <i class="fas fa-shopping-cart text-black"></i>
                        </button>
                    </div>
                </div>

                {/* <!-- Product 12 --> */}
                <div class="product-card bg-gray-900 rounded-lg overflow-hidden cursor-pointer">
                    <div class="relative">
                        <span class="absolute top-4 left-4 bg-gold text-black text-xs font-bold px-2 py-1 rounded-sm z-10">NEW</span>
                        <div class="h-64 overflow-hidden">
                            <svg class="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                                <rect width="400" height="400" fill="#1a1a1a"></rect>
                                <path d="M150,150 C150,150 200,100 250,150 C300,200 250,250 200,300 C150,250 100,200 150,150 Z" fill="none" stroke="#D4AF37" stroke-width="8"></path>
                                <path d="M175,175 C175,175 200,150 225,175 C250,200 225,225 200,250 C175,225 150,200 175,175 Z" fill="none" stroke="#B8860B" stroke-width="4"></path>
                                <circle cx="200" cy="200" r="10" fill="#D4AF37"></circle>
                            </svg>
                        </div>
                        <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                            <div class="product-info">
                                <h3 class="text-lg font-semibold text-white">Heart Necklace</h3>
                                <p class="text-gold font-bold">$1,999</p>
                            </div>
                        </div>
                        <button class="add-to-cart absolute bottom-4 right-4 bg-gold w-10 h-10 rounded-full flex items-center justify-center hover:bg-gold-dark transition">
                            <i class="fas fa-shopping-cart text-black"></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* <!-- Pagination --> */}
            <div class="flex justify-center mt-12">
                <nav class="flex items-center space-x-2">
                    <a href="#" class="w-10 h-10 flex items-center justify-center rounded-sm border border-gray-700 text-gray-400 hover:border-gold hover:text-gold transition">
                        <i class="fas fa-chevron-left"></i>
                    </a>
                    <a href="#" class="page-link w-10 h-10 flex items-center justify-center rounded-sm border border-gold font-medium">1</a>
                    <a href="#" class="page-link w-10 h-10 flex items-center justify-center rounded-sm border border-gray-700 text-white hover:border-gold hover:text-gold transition">2</a>
                    <a href="#" class="page-link w-10 h-10 flex items-center justify-center rounded-sm border border-gray-700 text-white hover:border-gold hover:text-gold transition">3</a>
                    <span class="text-gray-600 px-2">...</span>
                    <a href="#" class="page-link w-10 h-10 flex items-center justify-center rounded-sm border border-gray-700 text-white hover:border-gold hover:text-gold transition active bg-gold">7</a>
                    <a href="#" class="w-10 h-10 flex items-center justify-center rounded-sm border border-gray-700 text-gray-400 hover:border-gold hover:text-gold transition">
                        <i class="fas fa-chevron-right"></i>
                    </a>
                </nav>
            </div>
        </div>
    </main>
  )
}

export default Content