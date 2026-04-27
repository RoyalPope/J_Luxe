import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import ProductModal from './ProductModal';


const Feature = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addToCart, getCartItemCount } = useCart();

  // Product data with more details
  const products = [
    {
      id: 1,
      name: "Royal Pendant",
      price: 1299,
      image: "/product_royal_pendant.png",
      description: "A stunning royal pendant crafted with the finest materials. This piece features intricate detailing and premium craftsmanship that makes it perfect for special occasions.",
      sizes: ["16\"", "18\"", "20\"", "22\""],
      features: ["18K Gold Plated", "Genuine Gemstones", "Adjustable Chain", "Elegant Design"]
    },
    {
      id: 2,
      name: "Elegance Bracelet",
      price: 899,
      image: "/product_elegance_bracelet.png",
      description: "A sophisticated bracelet that combines elegance with comfort. Perfect for everyday wear or special events.",
      sizes: ["6.5\"", "7\"", "7.5\"", "8\""],
      features: ["Sterling Silver", "Adjustable Fit", "Lightweight Design", "Timeless Style"]
    },
    {
      id: 3,
      name: "Infinity Necklace",
      price: 1499,
      image: "/product_infinity_necklace.png",
      description: "The infinity symbol represents endless love and connection. This necklace is perfect for expressing eternal bonds.",
      sizes: ["16\"", "18\"", "20\""],
      features: ["White Gold", "Diamond Accents", "Symbolic Design", "Premium Quality"]
    },
    {
      id: 4,
      name: "Celestial Bracelet",
      price: 1199,
      image: "/product_celestial_bracelet.png",
      description: "Inspired by the stars and celestial bodies, this bracelet features cosmic-inspired design elements.",
      sizes: ["7\"", "7.5\"", "8\""],
      features: ["Rose Gold", "Stellar Motifs", "Comfortable Fit", "Unique Design"]
    },
    {
      id: 5,
      name: "Diamond Necklace",
      price: 2499,
      image: "/product_diamond_necklace.png",
      description: "A luxurious diamond necklace that sparkles with every movement. The perfect statement piece for any occasion.",
      sizes: ["16\"", "18\"", "20\""],
      features: ["Natural Diamonds", "18K White Gold", "Brilliant Cut", "Certified Quality"]
    },
    {
      id: 6,
      name: "Royal Bracelet",
      price: 1799,
      image: "/product_celestial_bracelet.png",
      description: "Fit for royalty, this bracelet features premium materials and exquisite craftsmanship that sets it apart.",
      sizes: ["7\"", "7.5\"", "8\""],
      features: ["Platinum", "Royal Design", "Premium Finish", "Exclusive Style"]
    }
  ];

  const openProductModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeProductModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = (product, quantity, size) => {
    addToCart(product, quantity, size);
  };

  const handleBuyNow = (product, quantity, size) => {
    // For now, just add to cart. In a real app, this would redirect to checkout
    addToCart(product, quantity, size);
    // You could add navigation to checkout here
  };

  return (
    <>
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-8 lg:px-14">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-playfair">Featured <span className="text-gold">Collection</span></h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Explore our handcrafted pieces designed to elevate your style and make a statement.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="product-card bg-gray-900 rounded-lg overflow-hidden cursor-pointer">
                <div className="relative h-80 overflow-hidden">
                  {product.image ? (
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      onClick={() => openProductModal(product)}
                    />
                  ) : (
                    <div 
                      className="w-full h-full bg-gray-800 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer"
                      onClick={() => openProductModal(product)}
                    >
                      <div className="text-center text-gray-400">
                        <i className="fas fa-gem text-6xl mb-4"></i>
                        <p className="text-lg">{product.name}</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Product Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                    <div className="product-info">
                      <h3 className="text-xl font-semibold text-white">{product.name}</h3>
                      <p className="text-gold font-bold">${product.price.toLocaleString()}</p>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    <button 
                      className="add-to-cart bg-gold w-10 h-10 rounded-full flex items-center justify-center hover:bg-gold-dark transition duration-300 transform hover:scale-110"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(product, 1, product.sizes ? product.sizes[0] : 'One Size');
                      }}
                      title="Add to Cart"
                    >
                      <i className="fas fa-shopping-cart text-black"></i>
                    </button>
                    <button 
                      className="add-to-cart bg-black border border-gold w-10 h-10 rounded-full flex items-center justify-center hover:bg-gold hover:text-black transition duration-300 transform hover:scale-110"
                      onClick={(e) => {
                        e.stopPropagation();
                        openProductModal(product);
                      }}
                      title="View Details"
                    >
                      <i className="fas fa-eye text-gold"></i>
                    </button>
                  </div>
                </div>
                
                {/* Product Details */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">{product.name}</h3>
                  <p className="text-gold font-bold mb-3">${product.price.toLocaleString()}</p>
                  <div className="flex space-x-2">
                    <button 
                      className="flex-1 py-2 bg-gold text-black font-semibold rounded-sm hover:bg-gold-dark transition duration-300 text-sm"
                      onClick={() => handleAddToCart(product, 1, product.sizes ? product.sizes[0] : 'One Size')}
                    >
                      <i className="fas fa-shopping-cart mr-2"></i>
                      Add to Cart
                    </button>
                    <button 
                      className="flex-1 py-2 border border-gold text-gold font-semibold rounded-sm hover:bg-gold hover:text-black transition duration-300 text-sm"
                      onClick={() => openProductModal(product)}
                    >
                      <i className="fas fa-eye mr-2"></i>
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="/collections" className="px-8 py-3 border border-gold text-gold font-semibold rounded-sm hover:bg-gold hover:text-black transition duration-300 transform hover:scale-105">View All Collection</a>
          </div>
        </div>
      </section>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeProductModal}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
      />
    </>
  );
};

export default Feature;