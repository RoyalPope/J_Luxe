import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import SearchModal from './SearchModal';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const { getCartItemCount } = useCart();
  const { isAuthenticated, user } = useAuth();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const openSearchModal = () => {
    setIsSearchModalOpen(true);
  };

  const closeSearchModal = () => {
    setIsSearchModalOpen(false);
  };

  return (
    <>
      <nav className="fixed w-full z-10 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-8 lg:px-14 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold text-gold font-playfair">J Luxe</h1>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="nav-link font-montserrat text-white hover:text-gold-light transition">Home</Link>
            <Link to="/collections" className="nav-link font-montserrat text-white hover:text-gold-light transition">Collections</Link>
            <Link to="/about" className="nav-link font-montserrat text-white hover:text-gold-light transition">About</Link>
            <Link to="/contact" className="nav-link font-montserrat text-white hover:text-gold-light transition">Contact</Link>
          </div>
          <div className="flex items-center space-x-4">
            {/* Search Button */}
            <button
              onClick={openSearchModal}
              className="text-white hover:text-gold-light transition p-2 hover:bg-white hover:bg-opacity-10 rounded-lg"
              title="Search Products"
            >
              <i className="fas fa-search text-lg"></i>
            </button>
            
            {/* Profile Button */}
            {isAuthenticated ? (
              <Link 
                to="/dashboard" 
                className="text-white hover:text-gold-light transition p-2 hover:bg-white hover:bg-opacity-10 rounded-lg"
                title="Dashboard"
              >
                <i className="fas fa-user text-lg"></i>
              </Link>
            ) : (
              <Link 
                to="/login" 
                className="text-white hover:text-gold-light transition p-2 hover:bg-white hover:bg-opacity-10 rounded-lg"
                title="Login / Signup"
              >
                <i className="fas fa-user text-lg"></i>
              </Link>
            )}
            
            {/* Cart Button */}
            <Link to="/cart" className="text-white hover:text-gold-light transition relative p-2 hover:bg-white hover:bg-opacity-10 rounded-lg">
              <i className="fas fa-shopping-bag text-lg"></i>
              <span className="absolute -top-2 -right-2 bg-gold text-black rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                {getCartItemCount()}
              </span>
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white p-2 hover:bg-white hover:bg-opacity-10 rounded-lg"
              onClick={toggleMobileMenu}
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-900 bg-opacity-95 backdrop-blur-sm border-t border-gray-800">
            <div className="container mx-auto px-4 md:px-8 lg:px-14 py-4">
              <div className="flex flex-col space-y-4">
                <Link to="/" className="nav-link font-montserrat text-white hover:text-gold-light transition py-2">Home</Link>
                <Link to="/collections" className="nav-link font-montserrat text-white hover:text-gold-light transition py-2">Collections</Link>
                <Link to="/about" className="nav-link font-montserrat text-white hover:text-gold-light transition py-2">About</Link>
                <Link to="/contact" className="nav-link font-montserrat text-white hover:text-gold-light transition py-2">Contact</Link>
                
                {/* Mobile Search */}
                <button
                  onClick={openSearchModal}
                  className="text-left text-white hover:text-gold-light transition py-2 flex items-center"
                >
                  <i className="fas fa-search mr-3"></i>
                  Search Products
                </button>
                
                {/* Mobile Profile */}
                {isAuthenticated ? (
                  <Link to="/dashboard" className="text-white hover:text-gold-light transition py-2 flex items-center">
                    <i className="fas fa-user mr-3"></i>
                    Dashboard
                  </Link>
                ) : (
                  <Link to="/login" className="text-white hover:text-gold-light transition py-2 flex items-center">
                    <i className="fas fa-user mr-3"></i>
                    Login / Signup
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Search Modal */}
      <SearchModal 
        isOpen={isSearchModalOpen}
        onClose={closeSearchModal}
      />
    </>
  );
};

export default Navigation;