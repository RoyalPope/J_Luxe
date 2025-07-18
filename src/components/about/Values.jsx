import React from 'react'

const Values = () => {
  return (
    <section class="py-16 bg-black">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center font-playfair">Our <span class="text-gold">Values</span></h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="value-card bg-gray-900 p-6 rounded-lg border border-gray-800">
                    <div class="w-16 h-16 rounded-full bg-gold bg-opacity-20 flex items-center justify-center mb-6 mx-auto">
                        <i class="fas fa-star text-2xl text-gold"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-4 text-center">Excellence</h3>
                    <p class="text-gray-200 text-center">We pursue perfection in every detail, never compromising on quality or craftsmanship.</p>
                </div>
                
                <div class="value-card bg-gray-900 p-6 rounded-lg border border-gray-800">
                    <div class="w-16 h-16 rounded-full bg-gold bg-opacity-20 flex items-center justify-center mb-6 mx-auto">
                        <i class="fas fa-heart text-2xl text-gold"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-4 text-center">Passion</h3>
                    <p class="text-gray-200 text-center">Our love for jewelry drives us to create pieces that inspire emotion and connection.</p>
                </div>
                
                <div class="value-card bg-gray-900 p-6 rounded-lg border border-gray-800">
                    <div class="w-16 h-16 rounded-full bg-gold bg-opacity-20 flex items-center justify-center mb-6 mx-auto">
                        <i class="fas fa-handshake text-2xl text-gold"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-4 text-center">Integrity</h3>
                    <p class="text-gray-200 text-center">We maintain the highest ethical standards in our sourcing, production, and business practices.</p>
                </div>
                
                <div class="value-card bg-gray-900 p-6 rounded-lg border border-gray-800">
                    <div class="w-16 h-16 rounded-full bg-gold bg-opacity-20 flex items-center justify-center mb-6 mx-auto">
                        <i class="fas fa-lightbulb text-2xl text-gold"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-4 text-center">Innovation</h3>
                    <p class="text-gray-200 text-center">While honoring tradition, we continuously explore new techniques and designs to evolve our craft.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values