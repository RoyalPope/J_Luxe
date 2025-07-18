const Timeline = () => {
  return (
    <section class="py-16 bg-gray-900">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center font-playfair">Our <span class="text-gold">Journey</span></h2>
            
            <div class="max-w-3xl mx-auto">
                {/* <!-- 1985 --> */}
                <div class="flex items-start mb-12 timeline-dot">
                    <div class="w-24 text-right pr-8">
                        <span class="text-gold font-bold text-xl">1985</span>
                    </div>
                    <div class="w-12 h-12 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                        <i class="fas fa-gem text-black"></i>
                    </div>
                    <div class="pl-8 flex-1">
                        <h3 class="text-xl font-bold mb-2">The Beginning</h3>
                        <p class="text-gray-200">Jonathan Luxe opens his first atelier in Paris, creating custom pieces for a select clientele.</p>
                    </div>
                </div>
                
                {/* <!-- 1992 --> */}
                <div class="flex items-start mb-12 timeline-dot">
                    <div class="w-24 text-right pr-8">
                        <span class="text-gold font-bold text-xl">1992</span>
                    </div>
                    <div class="w-12 h-12 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                        <i class="fas fa-store text-black"></i>
                    </div>
                    <div class="pl-8 flex-1">
                        <h3 class="text-xl font-bold mb-2">First Flagship Store</h3>
                        <p class="text-gray-200">The first J Luxe boutique opens on Avenue Montaigne in Paris, showcasing our signature collections.</p>
                    </div>
                </div>
                
                {/* <!-- 2001 --> */}
                <div class="flex items-start mb-12 timeline-dot">
                    <div class="w-24 text-right pr-8">
                        <span class="text-gold font-bold text-xl">2001</span>
                    </div>
                    <div class="w-12 h-12 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                        <i class="fas fa-globe-americas text-black"></i>
                    </div>
                    <div class="pl-8 flex-1">
                        <h3 class="text-xl font-bold mb-2">International Expansion</h3>
                        <p class="text-gray-200">J Luxe expands globally with boutiques in New York, Tokyo, and Dubai.</p>
                    </div>
                </div>
                
                {/* <!-- 2010 --> */}
                <div class="flex items-start mb-12 timeline-dot">
                    <div class="w-24 text-right pr-8">
                        <span class="text-gold font-bold text-xl">2010</span>
                    </div>
                    <div class="w-12 h-12 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                        <i class="fas fa-leaf text-black"></i>
                    </div>
                    <div class="pl-8 flex-1">
                        <h3 class="text-xl font-bold mb-2">Ethical Sourcing Initiative</h3>
                        <p class="text-gray-200">Launch of our commitment to 100% ethical sourcing and sustainable practices.</p>
                    </div>
                </div>
                
                {/* <!-- 2018 --> */}
                <div class="flex items-start timeline-dot">
                    <div class="w-24 text-right pr-8">
                        <span class="text-gold font-bold text-xl">2018</span>
                    </div>
                    <div class="w-12 h-12 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                        <i class="fas fa-crown text-black"></i>
                    </div>
                    <div class="pl-8 flex-1">
                        <h3 class="text-xl font-bold mb-2">New Creative Direction</h3>
                        <p class="text-gray-200">Elise Luxe takes over as Creative Director, bringing a fresh vision while honoring our heritage.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Timeline