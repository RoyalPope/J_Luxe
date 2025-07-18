import Content from '../components/collections/Content'

const Collections = () => {
  return (
    <>
    <header class="collection-header pt-32 pb-20">
          <div class="container mx-auto px-14 text-center">
            
              <h1 class="text-5xl md:text-6xl font-bold mb-6 font-playfair">Our <span class="text-gold">Collections</span></h1>
              <p class="text-xl max-w-2xl mx-auto text-gray-200">Discover our exquisite range of handcrafted jewelry pieces, designed to elevate your style and make a lasting impression.</p>
          </div>
      </header>
        <div class="bg-gray-900">
        <div class="container mx-auto px-4 py-3">
            <div class="flex items-center text-sm">
                <a href="#" class="text-gray-400 hover:text-gold transition">Home</a>
                <span class="mx-2 text-gray-600">/</span>
                <span class="text-gold">Collections</span>
            </div>
        </div>
    </div>
    <Content />
      </>
  )
}

export default Collections