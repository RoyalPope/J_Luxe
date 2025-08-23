import React, { useState, useMemo } from 'react';
import { useCart } from '../../context/CartContext';
import ProductModal from '../home/ProductModal';

const Content = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Featured');
  const [filterBy, setFilterBy] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const { addToCart } = useCart();

  // Product data with more details
  const products = [
    {
      id: 1,
      name: "Royal Pendant",
      price: 1299,
      image: null,
      description: "A stunning royal pendant crafted with the finest materials. This piece features intricate detailing and premium craftsmanship that makes it perfect for special occasions.",
      sizes: ["16\"", "18\"", "20\"", "22\""],
      features: ["18K Gold Plated", "Genuine Gemstones", "Adjustable Chain", "Elegant Design"],
      category: "Necklaces",
      badge: "NEW",
      material: "18K Gold",
      isNew: true,
      isOnSale: false
    },
    {
      id: 2,
      name: "Elegance Bracelet",
      price: 899,
      image: null,
      description: "A sophisticated bracelet that combines elegance with comfort. Perfect for everyday wear or special events.",
      sizes: ["6.5\"", "7\"", "7.5\"", "8\""],
      features: ["Sterling Silver", "Adjustable Fit", "Lightweight Design", "Timeless Style"],
      category: "Bracelets",
      material: "Sterling Silver",
      isNew: false,
      isOnSale: false
    },
    {
      id: 3,
      name: "Infinity Necklace",
      price: 1299,
      originalPrice: 1499,
      image: null,
      description: "The infinity symbol represents endless love and connection. This necklace is perfect for expressing eternal bonds.",
      sizes: ["16\"", "18\"", "20\""],
      features: ["White Gold", "Diamond Accents", "Symbolic Design", "Premium Quality"],
      category: "Necklaces",
      badge: "SALE",
      material: "White Gold",
      isNew: false,
      isOnSale: true
    },
    {
      id: 4,
      name: "Celestial Bracelet",
      price: 1199,
      image: null,
      description: "Inspired by the stars and celestial bodies, this bracelet features cosmic-inspired design elements.",
      sizes: ["7\"", "7.5\"", "8\""],
      features: ["Rose Gold", "Stellar Motifs", "Comfortable Fit", "Unique Design"],
      category: "Bracelets",
      material: "Rose Gold",
      isNew: false,
      isOnSale: false
    },
    {
      id: 5,
      name: "Diamond Necklace",
      price: 2499,
      image: null,
      description: "A luxurious diamond necklace that sparkles with every movement. The perfect statement piece for any occasion.",
      sizes: ["16\"", "18\"", "20\""],
      features: ["Natural Diamonds", "18K White Gold", "Brilliant Cut", "Certified Quality"],
      category: "Necklaces",
      material: "18K White Gold",
      isNew: false,
      isOnSale: false
    },
    {
      id: 6,
      name: "Royal Bracelet",
      price: 1799,
      image: null,
      description: "Fit for royalty, this bracelet features premium materials and exquisite craftsmanship that sets it apart.",
      sizes: ["7\"", "7.5\"", "8\""],
      features: ["Platinum", "Royal Design", "Premium Finish", "Exclusive Style"],
      category: "Bracelets",
      material: "Platinum",
      isNew: false,
      isOnSale: false
    },
    {
      id: 7,
      name: "Starburst Necklace",
      price: 1899,
      image: null,
      description: "A stunning starburst design that captures the brilliance of the night sky in elegant jewelry form.",
      sizes: ["16\"", "18\"", "20\""],
      features: ["18K Gold", "Diamond Accents", "Starburst Pattern", "Premium Finish"],
      category: "Necklaces",
      badge: "BEST SELLER",
      material: "18K Gold",
      isNew: false,
      isOnSale: false
    },
    {
      id: 8,
      name: "Petal Bracelet",
      price: 1599,
      image: null,
      description: "Delicate petal design that creates a beautiful floral-inspired bracelet perfect for spring and summer.",
      sizes: ["7\"", "7.5\"", "8\""],
      features: ["Rose Gold", "Petal Design", "Adjustable Fit", "Seasonal Style"],
      category: "Bracelets",
      material: "Rose Gold",
      isNew: false,
      isOnSale: false
    },
    {
      id: 9,
      name: "Trinity Bracelet",
      price: 1399,
      image: null,
      description: "Three interlocking circles representing the past, present, and future in elegant jewelry form.",
      sizes: ["7\"", "7.5\"", "8\""],
      features: ["White Gold", "Trinity Design", "Symbolic Meaning", "Timeless Style"],
      category: "Bracelets",
      material: "White Gold",
      isNew: false,
      isOnSale: false
    },
    {
      id: 10,
      name: "Venus Necklace",
      price: 1099,
      originalPrice: 1299,
      image: null,
      description: "Inspired by the goddess of love and beauty, this necklace features elegant curves and romantic design.",
      sizes: ["16\"", "18\"", "20\""],
      features: ["18K Gold", "Venus Motif", "Romantic Design", "Premium Quality"],
      category: "Necklaces",
      badge: "SALE",
      material: "18K Gold",
      isNew: false,
      isOnSale: true
    },
    {
      id: 11,
      name: "Square Pendant",
      price: 1699,
      image: null,
      description: "Modern geometric design with clean lines and contemporary appeal for the fashion-forward individual.",
      sizes: ["16\"", "18\"", "20\""],
      features: ["Platinum", "Geometric Design", "Modern Style", "Contemporary Appeal"],
      category: "Necklaces",
      material: "Platinum",
      isNew: false,
      isOnSale: false
    },
    {
      id: 12,
      name: "Heart Necklace",
      price: 1999,
      image: null,
      description: "A classic heart pendant that symbolizes love and affection, perfect for romantic occasions.",
      sizes: ["16\"", "18\"", "20\""],
      features: ["18K Gold", "Heart Design", "Romantic Symbol", "Classic Style"],
      category: "Necklaces",
      badge: "NEW",
      material: "18K Gold",
      isNew: true,
      isOnSale: false
    },
    // Additional products for pagination
    {
      id: 13,
      name: "Moonstone Ring",
      price: 899,
      image: null,
      description: "Elegant ring featuring a beautiful moonstone that changes color with the light.",
      sizes: ["6", "7", "8", "9"],
      features: ["Sterling Silver", "Natural Moonstone", "Adjustable Band", "Mystical Appeal"],
      category: "Rings",
      material: "Sterling Silver",
      isNew: false,
      isOnSale: false
    },
    {
      id: 14,
      name: "Pearl Earrings",
      price: 699,
      image: null,
      description: "Classic pearl earrings that add sophistication to any outfit.",
      sizes: ["One Size"],
      features: ["Freshwater Pearls", "14K Gold Posts", "Timeless Design", "Versatile Style"],
      category: "Earrings",
      material: "14K Gold",
      isNew: false,
      isOnSale: false
    },
    {
      id: 15,
      name: "Emerald Necklace",
      price: 2899,
      image: null,
      description: "Stunning emerald necklace that captures the beauty of nature in precious stone form.",
      sizes: ["16\"", "18\"", "20\""],
      features: ["Natural Emerald", "18K Gold", "Colombian Origin", "Premium Quality"],
      category: "Necklaces",
      material: "18K Gold",
      isNew: false,
      isOnSale: false
    },
    {
      id: 16,
      name: "Sapphire Bracelet",
      price: 2199,
      image: null,
      description: "Elegant sapphire bracelet featuring the deep blue beauty of precious sapphires.",
      sizes: ["7\"", "7.5\"", "8\""],
      features: ["Natural Sapphires", "Platinum Setting", "Blue Beauty", "Luxury Design"],
      category: "Bracelets",
      material: "Platinum",
      isNew: false,
      isOnSale: false
    }
  ];

  const categories = ['All', 'Necklaces', 'Bracelets', 'Rings', 'Earrings', 'Limited Edition'];
  const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Newest First', 'Best Selling'];
  const filterOptions = ['All', 'Price Range', 'Material', 'New Arrivals', 'On Sale'];

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    // Category filter
    if (activeCategory !== 'All') {
      filtered = filtered.filter(product => product.category === activeCategory);
    }

    // Additional filters
    if (filterBy === 'New Arrivals') {
      filtered = filtered.filter(product => product.isNew);
    } else if (filterBy === 'On Sale') {
      filtered = filtered.filter(product => product.isOnSale);
    }

    // Sorting
    switch (sortBy) {
      case 'Price: Low to High':
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case 'Price: High to Low':
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case 'Newest First':
        filtered = [...filtered].sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case 'Best Selling':
        // For demo purposes, we'll sort by price as a proxy for best selling
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      default:
        // Featured - keep original order
        break;
    }

    return filtered;
  }, [activeCategory, sortBy, filterBy]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredAndSortedProducts.slice(startIndex, endIndex);

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
    addToCart(product, quantity, size);
    // You could add navigation to checkout here
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1); // Reset to first page when changing category
  };

  const handleSortChange = (sortOption) => {
    setSortBy(sortOption);
    setCurrentPage(1); // Reset to first page when changing sort
  };

  const handleFilterChange = (filterOption) => {
    setFilterBy(filterOption);
    setCurrentPage(1); // Reset to first page when changing filter
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const generatePageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  return (
    <>
      <main className="py-12">
        <div className="container mx-auto px-12">
          {/* Category Filter */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 font-playfair">Browse by <span className="text-gold">Category</span></h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`category-btn px-6 py-2 rounded-sm border border-gold transition ${
                    activeCategory === category
                      ? 'bg-gold text-black'
                      : 'text-gold hover:bg-gold hover:text-black'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Filter and Sort */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">Showing <span className="text-white">{startIndex + 1}</span> to <span className="text-white">{Math.min(endIndex, filteredAndSortedProducts.length)}</span> of <span className="text-white">{filteredAndSortedProducts.length}</span> products</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <select 
                  value={sortBy}
                  onChange={(e) => handleSortChange(e.target.value)}
                  className="appearance-none bg-gray-900 border border-gray-700 text-white py-2 px-4 pr-8 rounded-sm focus:outline-none focus:border-gold"
                >
                  {sortOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gold">
                  <i className="fas fa-chevron-down text-xs"></i>
                </div>
              </div>
              <div className="relative">
                <select 
                  value={filterBy}
                  onChange={(e) => handleFilterChange(e.target.value)}
                  className="appearance-none bg-gray-900 border border-gray-700 text-white py-2 px-4 pr-8 rounded-sm focus:outline-none focus:border-gold"
                >
                  {filterOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gold">
                  <i className="fas fa-chevron-down text-xs"></i>
                </div>
              </div>
              <div className="flex border border-gray-700 rounded-sm">
                <button className="px-3 py-2 bg-gray-900 text-gold border-r border-gray-700">
                  <i className="fas fa-th-large"></i>
                </button>
                <button className="px-3 py-2 bg-gray-900 text-gray-400 hover:text-gold">
                  <i className="fas fa-list"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {currentProducts.map((product) => (
              <div key={product.id} className="product-card bg-gray-900 rounded-lg overflow-hidden cursor-pointer">
                <div className="relative">
                  {product.badge && (
                    <span className={`absolute top-4 left-4 text-xs font-bold px-2 py-1 rounded-sm z-10 ${
                      product.badge === 'SALE' ? 'bg-red-600 text-white' : 'bg-gold text-black'
                    }`}>
                      {product.badge}
                    </span>
                  )}
                  <div className="h-64 overflow-hidden">
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
                  </div>
                  
                  {/* Product Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                    <div className="product-info">
                      <h3 className="text-lg font-semibold text-white">{product.name}</h3>
                      <p className="text-gold font-bold">
                        ${product.price.toLocaleString()}
                        {product.originalPrice && (
                          <span className="line-through text-gray-400 text-sm ml-2">${product.originalPrice.toLocaleString()}</span>
                        )}
                      </p>
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
                  <p className="text-gold font-bold mb-3">
                    ${product.price.toLocaleString()}
                    {product.originalPrice && (
                      <span className="line-through text-gray-400 text-sm ml-2">${product.originalPrice.toLocaleString()}</span>
                    )}
                  </p>
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

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <nav className="flex items-center space-x-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`w-10 h-10 flex items-center justify-center rounded-sm border transition ${
                    currentPage === 1
                      ? 'border-gray-700 text-gray-600 cursor-not-allowed'
                      : 'border-gray-700 text-gray-400 hover:border-gold hover:text-gold'
                  }`}
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                
                {generatePageNumbers().map((page, index) => (
                  <React.Fragment key={index}>
                    {page === '...' ? (
                      <span className="text-gray-600 px-2">...</span>
                    ) : (
                      <button
                        onClick={() => handlePageChange(page)}
                        className={`w-10 h-10 flex items-center justify-center rounded-sm border font-medium transition ${
                          currentPage === page
                            ? 'border-gold bg-gold text-black'
                            : 'border-gray-700 text-white hover:border-gold hover:text-gold'
                        }`}
                      >
                        {page}
                      </button>
                    )}
                  </React.Fragment>
                ))}
                
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`w-10 h-10 flex items-center justify-center rounded-sm border transition ${
                    currentPage === totalPages
                      ? 'border-gray-700 text-gray-600 cursor-not-allowed'
                      : 'border-gray-700 text-gray-400 hover:border-gold hover:text-gold'
                  }`}
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </nav>
            </div>
          )}
        </div>
      </main>

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

export default Content;