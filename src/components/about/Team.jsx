import React from 'react'

const Team = () => {
  return (
    <section class="py-16 bg-gray-900">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center font-playfair">Meet Our <span class="text-gold">Team</span></h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* <!-- Team Member 1 --> */}
                <div class="team-member relative group">
                    <div class="aspect-w-3 aspect-h-4 bg-gray-800 rounded-lg overflow-hidden mb-4">
                        <svg class="w-full h-full" viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
                            <rect width="300" height="400" fill="#1a1a1a"></rect>
                            <circle cx="150" cy="120" r="60" fill="#333"></circle>
                            <path d="M150,180 C100,180 60,220 60,270 L60,400 L240,400 L240,270 C240,220 200,180 150,180 Z" fill="#333"></path>
                            <circle cx="150" cy="120" r="55" fill="#444"></circle>
                        </svg>
                        <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <div class="flex space-x-4">
                                <a href="#" class="social-icon w-10 h-10 rounded-full bg-gold flex items-center justify-center hover:bg-gold-dark transition">
                                    <i class="fab fa-linkedin-in text-black"></i>
                                </a>
                                <a href="#" class="social-icon w-10 h-10 rounded-full bg-gold flex items-center justify-center hover:bg-gold-dark transition">
                                    <i class="fab fa-instagram text-black"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <h3 class="text-xl font-bold mb-1 text-center">Elise Luxe</h3>
                    <p class="text-gold text-center">Creative Director</p>
                </div>
                
                {/* <!-- Team Member 2 --> */}
                <div class="team-member relative group">
                    <div class="aspect-w-3 aspect-h-4 bg-gray-800 rounded-lg overflow-hidden mb-4">
                        <svg class="w-full h-full" viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
                            <rect width="300" height="400" fill="#1a1a1a"></rect>
                            <circle cx="150" cy="120" r="60" fill="#333"></circle>
                            <path d="M150,180 C100,180 60,220 60,270 L60,400 L240,400 L240,270 C240,220 200,180 150,180 Z" fill="#333"></path>
                            <circle cx="150" cy="120" r="55" fill="#444"></circle>
                        </svg>
                        <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <div class="flex space-x-4">
                                <a href="#" class="social-icon w-10 h-10 rounded-full bg-gold flex items-center justify-center hover:bg-gold-dark transition">
                                    <i class="fab fa-linkedin-in text-black"></i>
                                </a>
                                <a href="#" class="social-icon w-10 h-10 rounded-full bg-gold flex items-center justify-center hover:bg-gold-dark transition">
                                    <i class="fab fa-instagram text-black"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <h3 class="text-xl font-bold mb-1 text-center">Marcus Chen</h3>
                    <p class="text-gold text-center">Master Jeweler</p>
                </div>
                
                {/* <!-- Team Member 3 --> */}
                <div class="team-member relative group">
                    <div class="aspect-w-3 aspect-h-4 bg-gray-800 rounded-lg overflow-hidden mb-4">
                        <svg class="w-full h-full" viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
                            <rect width="300" height="400" fill="#1a1a1a"></rect>
                            <circle cx="150" cy="120" r="60" fill="#333"></circle>
                            <path d="M150,180 C100,180 60,220 60,270 L60,400 L240,400 L240,270 C240,220 200,180 150,180 Z" fill="#333"></path>
                            <circle cx="150" cy="120" r="55" fill="#444"></circle>
                        </svg>
                        <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <div class="flex space-x-4">
                                <a href="#" class="social-icon w-10 h-10 rounded-full bg-gold flex items-center justify-center hover:bg-gold-dark transition">
                                    <i class="fab fa-linkedin-in text-black"></i>
                                </a>
                                <a href="#" class="social-icon w-10 h-10 rounded-full bg-gold flex items-center justify-center hover:bg-gold-dark transition">
                                    <i class="fab fa-instagram text-black"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <h3 class="text-xl font-bold mb-1 text-center">Sophia Reyes</h3>
                    <p class="text-gold text-center">Design Director</p>
                </div>
                
                {/* <!-- Team Member 4 --> */}
                <div class="team-member relative group">
                    <div class="aspect-w-3 aspect-h-4 bg-gray-800 rounded-lg overflow-hidden mb-4">
                        <svg class="w-full h-full" viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
                            <rect width="300" height="400" fill="#1a1a1a"></rect>
                            <circle cx="150" cy="120" r="60" fill="#333"></circle>
                            <path d="M150,180 C100,180 60,220 60,270 L60,400 L240,400 L240,270 C240,220 200,180 150,180 Z" fill="#333"></path>
                            <circle cx="150" cy="120" r="55" fill="#444"></circle>
                        </svg>
                        <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <div class="flex space-x-4">
                                <a href="#" class="social-icon w-10 h-10 rounded-full bg-gold flex items-center justify-center hover:bg-gold-dark transition">
                                    <i class="fab fa-linkedin-in text-black"></i>
                                </a>
                                <a href="#" class="social-icon w-10 h-10 rounded-full bg-gold flex items-center justify-center hover:bg-gold-dark transition">
                                    <i class="fab fa-instagram text-black"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <h3 class="text-xl font-bold mb-1 text-center">James Wilson</h3>
                    <p class="text-gold text-center">Gemologist</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Team