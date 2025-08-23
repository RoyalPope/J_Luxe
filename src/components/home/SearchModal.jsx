import { useState, useEffect, useRef } from 'react';
import { useSearch } from '../../context/SearchContext';
import { Link } from 'react-router-dom';

const SearchModal = ({ isOpen, onClose }) => {
  const { searchQuery, setSearchQuery, searchResults, isSearching, performSearch } = useSearch();
  const [isVisible, setIsVisible] = useState(false);
  const searchInputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (searchQuery) {
      performSearch(searchQuery);
    }
  }, [searchQuery, performSearch]);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleClose = () => {
    setSearchQuery('');
    onClose();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Search Modal */}
      <div className={`relative w-full max-w-2xl mx-4 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
      }`}>
        {/* Search Input */}
        <div className="relative">
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search for jewelry, categories, or styles..."
            value={searchQuery}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="w-full px-6 py-4 text-lg bg-white rounded-lg shadow-2xl border-2 border-gold focus:border-gold-dark focus:outline-none"
          />
          <button
            onClick={handleClose}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>

        {/* Search Results */}
        {searchQuery && (
          <div className="mt-4 bg-white rounded-lg shadow-2xl max-h-96 overflow-y-auto">
            {isSearching ? (
              <div className="p-6 text-center text-gray-500">
                <i className="fas fa-spinner fa-spin text-2xl mb-2"></i>
                <p>Searching...</p>
              </div>
            ) : searchResults.length > 0 ? (
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}
                </h3>
                <div className="space-y-3">
                  {searchResults.map((product) => (
                    <Link
                      key={product.id}
                      to={`/collections?search=${encodeURIComponent(product.name)}`}
                      onClick={handleClose}
                      className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors group"
                    >
                      <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mr-4 group-hover:bg-gold transition-colors">
                        <i className="fas fa-gem text-gray-600 group-hover:text-white"></i>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 group-hover:text-gold transition-colors">
                          {product.name}
                        </h4>
                        <p className="text-sm text-gray-600">{product.category}</p>
                        <p className="text-sm text-gold font-semibold">
                          ${product.price.toLocaleString()}
                        </p>
                      </div>
                      <i className="fas fa-chevron-right text-gray-400 group-hover:text-gold transition-colors"></i>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <div className="p-6 text-center text-gray-500">
                <i className="fas fa-search text-3xl mb-3 text-gray-300"></i>
                <p className="text-lg">No results found</p>
                <p className="text-sm mt-1">Try different keywords or browse our collections</p>
              </div>
            )}
          </div>
        )}

        {/* Quick Categories */}
        {!searchQuery && (
          <div className="mt-4 bg-white rounded-lg shadow-2xl p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Popular Categories</h3>
            <div className="grid grid-cols-2 gap-3">
              {['Necklaces', 'Bracelets', 'Rings', 'Earrings'].map((category) => (
                <Link
                  key={category}
                  to={`/collections?category=${encodeURIComponent(category)}`}
                  onClick={handleClose}
                  className="p-3 text-center bg-gray-50 hover:bg-gold hover:text-white rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  <i className="fas fa-gem text-lg mb-2 block"></i>
                  <span className="text-sm font-medium">{category}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchModal;
