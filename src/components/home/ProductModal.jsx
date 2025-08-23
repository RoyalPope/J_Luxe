import { useState } from 'react';

const ProductModal = ({ product, isOpen, onClose, onAddToCart, onBuyNow }) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  if (!isOpen || !product) return null;

  const handleAddToCart = () => {
    onAddToCart(product, quantity, selectedSize);
    onClose();
  };

  const handleBuyNow = () => {
    onBuyNow(product, quantity, selectedSize);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-75 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
        >
          <i className="fas fa-times text-2xl"></i>
        </button>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
          {/* Product Image */}
          <div className="relative">
            {product.image ? (
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-96 object-cover rounded-lg"
              />
            ) : (
              <div className="w-full h-96 bg-gray-800 rounded-lg flex items-center justify-center">
                <div className="text-gray-400 text-center">
                  <i className="fas fa-gem text-6xl mb-4"></i>
                  <p>Product Image</p>
                </div>
              </div>
            )}
          </div>
          
          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-white font-playfair mb-2">{product.name}</h2>
              <p className="text-2xl font-bold text-gold mb-4">${product.price.toLocaleString()}</p>
              <p className="text-gray-300 leading-relaxed">{product.description}</p>
            </div>
            
            {/* Size Selection */}
            {product.sizes && (
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Select Size</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded-md transition-colors ${
                        selectedSize === size
                          ? 'border-gold bg-gold text-black'
                          : 'border-gray-600 text-gray-300 hover:border-gold'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Quantity */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Quantity</h3>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-gray-600 rounded-md flex items-center justify-center text-gray-300 hover:border-gold transition-colors"
                >
                  <i className="fas fa-minus"></i>
                </button>
                <span className="text-white text-lg font-semibold w-16 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-gray-600 rounded-md flex items-center justify-center text-gray-300 hover:border-gold transition-colors"
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
            </div>
            
            {/* Product Features */}
            {product.features && (
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <i className="fas fa-check text-gold mr-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={handleAddToCart}
                disabled={!selectedSize && product.sizes}
                className="flex-1 py-3 bg-gold text-black font-semibold rounded-sm hover:bg-gold-dark transition duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <i className="fas fa-shopping-cart mr-2"></i>
                Add to Cart
              </button>
              <button
                onClick={handleBuyNow}
                disabled={!selectedSize && product.sizes}
                className="flex-1 py-3 bg-black border border-gold text-gold font-semibold rounded-sm hover:bg-gold hover:text-black transition duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <i className="fas fa-credit-card mr-2"></i>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
