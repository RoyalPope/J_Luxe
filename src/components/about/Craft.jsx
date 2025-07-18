const Craft = () => {
  return (
    <section class="py-16 bg-black">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center font-playfair">Our <span class="text-gold">Craftsmanship</span></h2>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div class="bg-gray-900 p-8 rounded-lg">
                    <div class="w-16 h-16 rounded-full bg-gold flex items-center justify-center mb-6 mx-auto">
                        <i class="fas fa-drafting-compass text-2xl text-black"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-4 text-center">Design</h3>
                    <p class="text-gray-200 text-center">Each piece begins as a sketch, meticulously refined until it perfectly captures our vision. Our designers draw inspiration from art, architecture, and nature.</p>
                </div>
                
                <div class="bg-gray-900 p-8 rounded-lg">
                    <div class="w-16 h-16 rounded-full bg-gold flex items-center justify-center mb-6 mx-auto">
                        <i class="fas fa-hammer text-2xl text-black"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-4 text-center">Creation</h3>
                    <p class="text-gray-200 text-center">Our master artisans bring designs to life using techniques passed down through generations, combined with cutting-edge technology.</p>
                </div>
                
                <div class="bg-gray-900 p-8 rounded-lg">
                    <div class="w-16 h-16 rounded-full bg-gold flex items-center justify-center mb-6 mx-auto">
                        <i class="fas fa-search text-2xl text-black"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-4 text-center">Perfection</h3>
                    <p class="text-gray-200 text-center">Every piece undergoes rigorous quality control, ensuring it meets our exacting standards before it bears the J Luxe name.</p>
                </div>
            </div>
            
            <div class="flex justify-center">
                <a href="#" class="inline-block px-8 py-3 bg-gold text-black font-bold rounded-sm hover:bg-gold-dark transition">Discover Our Process</a>
            </div>
        </div>
    </section>
  )
}

export default Craft