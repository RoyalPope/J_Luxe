import Content from '../components/collections/Content'

const Collections = () => {
  return (
    <>
    <header className="collection-header pt-32 pb-20 bg-black">
          <div className="container mx-auto px-14 text-center">
            
              <h1 className="text-5xl md:text-6xl font-bold mb-6 font-playfair">Our <span className="text-gold">Collections</span></h1>
              <p className="text-xl max-w-2xl mx-auto text-gray-200">Discover our exquisite range of handcrafted jewelry pieces, designed to elevate your style and make a lasting impression.</p>
          </div>
      </header>
        <div className="bg-gray-900">
        <div className="container mx-auto px-14 py-3">
            <div className="flex items-center text-sm">
                <a href="/" className="text-gray-400 hover:text-gold transition duration-300">Home</a>
                <span className="mx-2 text-gray-600">/</span>
                <span className="text-gold">Collections</span>
            </div>
        </div>
    </div>
    <Content />
      </>
  )
}

export default Collections