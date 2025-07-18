const Kuote = () => {
  return (
    <section class="py-24 parallax kuote">
        <div class="container mx-auto px-4 text-center">
            <svg class="w-16 h-16 mx-auto mb-6" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path d="M30,30 L30,70 L70,70 L70,30 Z" fill="none" stroke="#D4AF37" stroke-width="4"></path>
                <path d="M40,40 L40,60 L60,60 L60,40 Z" fill="none" stroke="#D4AF37" stroke-width="2"></path>
                <circle cx="50" cy="50" r="5" fill="#D4AF37"></circle>
            </svg>
            <blockquote class="text-2xl md:text-3xl font-playfair italic mb-6 max-w-3xl mx-auto">
                "Jewelry is not merely an accessory, but a reflection of one's soul—a tangible expression of beauty that transcends time."
            </blockquote>
            <p class="text-gold font-bold">— Jonathan Luxe, Founder</p>
        </div>
    </section>
  )
}

export default Kuote