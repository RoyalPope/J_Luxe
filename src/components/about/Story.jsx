const Story = () => {
  return (
    <section class="py-16 bg-black">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row items-center gap-12">
                <div class="md:w-1/2">
                    <h2 class="text-3xl md:text-4xl font-bold mb-6 font-playfair">The <span class="text-gold">J Luxe</span> Legacy</h2>
                    <p class="text-gray-200 mb-6">Founded in 1985 by master jeweler Jonathan Luxe, our brand has grown from a small atelier in Paris to an internationally recognized name in luxury jewelry. What began as a passion project has evolved into a legacy of excellence, with each piece telling a unique story of craftsmanship and artistry.</p>
                    <p class="text-gray-200 mb-6">Our philosophy is simple: create timeless pieces that celebrate life's most precious moments. Every J Luxe creation is meticulously crafted using only the finest materials, ethically sourced from around the world.</p>
                    <p class="text-gray-200">Today, under the creative direction of Elise Luxe, we continue to honor our heritage while embracing innovation. Our designs blend traditional techniques with contemporary vision, resulting in jewelry that transcends trends and becomes tomorrow's heirlooms.</p>
                </div>
                <div class="md:w-1/2">
                    <div class="relative">
                        <div class="absolute -top-4 -left-4 w-64 h-64 border-2 border-gold opacity-30"></div>
                        <svg class="w-full h-auto" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                            <rect width="600" height="400" fill="#1a1a1a"></rect>
                            <text x="300" y="100" font-family="Playfair Display" font-size="60" fill="#D4AF37" text-anchor="middle">J Luxe</text>
                            <text x="300" y="150" font-family="Montserrat" font-size="24" fill="#ffffff" text-anchor="middle">EST. 1985</text>
                            <circle cx="300" cy="250" r="80" fill="none" stroke="#D4AF37" stroke-width="4"></circle>
                            <path d="M260,250 C260,230 280,210 300,210 C320,210 340,230 340,250 C340,270 320,290 300,290 C280,290 260,270 260,250 Z" fill="none" stroke="#B8860B" stroke-width="2"></path>
                            <circle cx="300" cy="250" r="10" fill="#D4AF37"></circle>
                            <path d="M240,200 L360,300" stroke="#D4AF37" stroke-width="1"></path>
                            <path d="M240,300 L360,200" stroke="#D4AF37" stroke-width="1"></path>
                        </svg>
                        <div class="absolute -bottom-4 -right-4 w-64 h-64 border-2 border-gold opacity-30"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Story