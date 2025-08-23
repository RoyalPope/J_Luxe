import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  const handleQuantityChange = (productId, size, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId, size);
    } else {
      updateQuantity(productId, size, newQuantity);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-black pt-32">
        <div className="container mx-auto px-14 py-20">
          <div className="text-center">
            <div className="mb-8">
              <i className="fas fa-shopping-cart text-8xl text-gray-700"></i>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4 font-playfair">Your Cart is Empty</h1>
            <p className="text-gray-400 text-lg mb-8">Looks like you haven't added any items to your cart yet.</p>
            <Link 
              to="/collections" 
              className="px-8 py-3 bg-gold text-black font-semibold rounded-sm hover:bg-gold-dark transition duration-300 transform hover:scale-105"
            >
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-32">
      <div className="container mx-auto px-14 py-20">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4 font-playfair">Shopping <span className="text-gold">Cart</span></h1>
          <p className="text-gray-400">Review your items and proceed to checkout</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-white mb-6">Cart Items ({items.length})</h2>
              
              <div className="space-y-6">
                {items.map((item, index) => (
                  <div key={`${item.id}-${item.size}`} className="flex items-center space-x-4 p-4 border border-gray-800 rounded-lg">
                    {/* Product Image */}
                    <div className="flex-shrink-0 w-20 h-20 bg-gray-800 rounded-lg flex items-center justify-center">
                      {item.image ? (
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-lg" />
                      ) : (
                        <i className="fas fa-gem text-3xl text-gray-400"></i>
                      )}
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-white mb-1">{item.name}</h3>
                      <p className="text-gray-400 text-sm mb-2">Size: {item.size}</p>
                      <p className="text-gold font-bold text-lg">${item.price.toLocaleString()}</p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => handleQuantityChange(item.id, item.size, item.quantity - 1)}
                        className="w-8 h-8 border border-gray-600 rounded-md flex items-center justify-center text-gray-300 hover:border-gold hover:text-gold transition-colors"
                      >
                        <i className="fas fa-minus text-xs"></i>
                      </button>
                      <span className="text-white font-semibold w-12 text-center">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, item.size, item.quantity + 1)}
                        className="w-8 h-8 border border-gray-600 rounded-md flex items-center justify-center text-gray-300 hover:border-gold hover:text-gold transition-colors"
                      >
                        <i className="fas fa-plus text-xs"></i>
                      </button>
                    </div>

                    {/* Total Price */}
                    <div className="text-right">
                      <p className="text-gold font-bold text-lg">${(item.price * item.quantity).toLocaleString()}</p>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.id, item.size)}
                      className="text-red-400 hover:text-red-300 transition-colors"
                      title="Remove item"
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                ))}
              </div>

              {/* Cart Actions */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-800">
                <button
                  onClick={clearCart}
                  className="px-6 py-2 border border-red-600 text-red-400 hover:bg-red-600 hover:text-white transition duration-300 rounded-sm"
                >
                  Clear Cart
                </button>
                <Link
                  to="/collections"
                  className="px-6 py-2 border border-gold text-gold hover:bg-gold hover:text-black transition duration-300 rounded-sm"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900 rounded-lg p-6 sticky top-32">
              <h2 className="text-2xl font-semibold text-white mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal ({items.reduce((total, item) => total + item.quantity, 0)} items)</span>
                  <span>${getCartTotal().toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Shipping</span>
                  <span className="text-gold">Free</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Tax</span>
                  <span>${(getCartTotal() * 0.08).toFixed(2)}</span>
                </div>
                <hr className="border-gray-700" />
                <div className="flex justify-between text-white text-xl font-bold">
                  <span>Total</span>
                  <span className="text-gold">${(getCartTotal() * 1.08).toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full py-3 bg-gold text-black font-semibold rounded-sm hover:bg-gold-dark transition duration-300 transform hover:scale-105 mb-4">
                Proceed to Checkout
              </button>
              
              <p className="text-gray-400 text-sm text-center">
                Secure checkout powered by industry-standard encryption
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
