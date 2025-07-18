const Testimos = () => {
  return (
    <section class="py-16 bg-black">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center font-playfair">Client <span class="text-gold">Testimonials</span></h2>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* <!-- Testimonial 1 --> */}
                <div class="testimonial-card bg-gray-900 p-8 rounded-lg border border-gray-800">
                    <div class="flex justify-center mb-6">
                        <svg class="w-12 h-12 text-gold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.95.41-3 .96-3.22 3.59-5.39 6.37-5.7.11 1.05.82 1.87 1.73 1.87.95 0 1.74-.82 1.74-1.88 0-1.07-.8-1.9-1.74-1.9-2.84 0-5.64 1.58-7.16 4.17C8.33 8.25 7.7 9.61 7.7 11c0 1.29.52 2.73 1.87 3.73 1.01.74 2.21 1.27 3.33 1.27.11 0 .21-.01.32-.02.41.43.96.75 1.58.75 1.11 0 2-.89 2-2s-.89-2-2-2c-1.11 0-2 .89-2 2 0 .04 0 .07.01.11-.28.18-.62.31-1.09.31z"></path>
                        </svg>
                    </div>
                    <p class="text-gray-200 mb-6 text-center italic">"My engagement ring from J Luxe is beyond compare. The craftsmanship and attention to detail make it truly one-of-a-kind. I receive compliments everywhere I go."</p>
                    <div class="flex justify-center mb-2">
                        <div class="flex text-gold">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                    <p class="font-bold text-center">Emma Thompson</p>
                    <p class="text-gold text-sm text-center">New York, USA</p>
                </div>
                
                {/* <!-- Testimonial 2 --> */}
                <div class="testimonial-card bg-gray-900 p-8 rounded-lg border border-gray-800">
                    <div class="flex justify-center mb-6">
                        <svg class="w-12 h-12 text-gold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.95.41-3 .96-3.22 3.59-5.39 6.37-5.7.11 1.05.82 1.87 1.73 1.87.95 0 1.74-.82 1.74-1.88 0-1.07-.8-1.9-1.74-1.9-2.84 0-5.64 1.58-7.16 4.17C8.33 8.25 7.7 9.61 7.7 11c0 1.29.52 2.73 1.87 3.73 1.01.74 2.21 1.27 3.33 1.27.11 0 .21-.01.32-.02.41.43.96.75 1.58.75 1.11 0 2-.89 2-2s-.89-2-2-2c-1.11 0-2 .89-2 2 0 .04 0 .07.01.11-.28.18-.62.31-1.09.31z"></path>
                        </svg>
                    </div>
                    <p class="text-gray-200 mb-6 text-center italic">"I've been collecting J Luxe pieces for over a decade. Each one tells a story and has become a cherished heirloom that I'll pass down to my daughter."</p>
                    <div class="flex justify-center mb-2">
                        <div class="flex text-gold">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                    <p class="font-bold text-center">Hiroshi Tanaka</p>
                    <p class="text-gold text-sm text-center">Tokyo, Japan</p>
                </div>
                
                {/* <!-- Testimonial 3 --> */}
                <div class="testimonial-card bg-gray-900 p-8 rounded-lg border border-gray-800">
                    <div class="flex justify-center mb-6">
                        <svg class="w-12 h-12 text-gold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.95.41-3 .96-3.22 3.59-5.39 6.37-5.7.11 1.05.82 1.87 1.73 1.87.95 0 1.74-.82 1.74-1.88 0-1.07-.8-1.9-1.74-1.9-2.84 0-5.64 1.58-7.16 4.17C8.33 8.25 7.7 9.61 7.7 11c0 1.29.52 2.73 1.87 3.73 1.01.74 2.21 1.27 3.33 1.27.11 0 .21-.01.32-.02.41.43.96.75 1.58.75 1.11 0 2-.89 2-2s-.89-2-2-2c-1.11 0-2 .89-2 2 0 .04 0 .07.01.11-.28.18-.62.31-1.09.31z"></path>
                        </svg>
                    </div>
                    <p class="text-gray-200 mb-6 text-center italic">"The bespoke service at J Luxe exceeded all expectations. They transformed my vision into a masterpiece that perfectly captures my personal style."</p>
                    <div class="flex justify-center mb-2">
                        <div class="flex text-gold">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                    <p class="font-bold text-center">Isabelle Laurent</p>
                    <p class="text-gold text-sm text-center">Paris, France</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimos