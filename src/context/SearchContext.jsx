import { createContext, useContext, useState, useMemo } from 'react';

const SearchContext = createContext();

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Sample product data for search (in a real app, this would come from an API)
  const allProducts = [
    {
      id: 1,
      name: "Royal Pendant",
      category: "Necklaces",
      price: 1299,
      description: "A stunning royal pendant crafted with the finest materials.",
      tags: ["pendant", "royal", "gold", "luxury"]
    },
    {
      id: 2,
      name: "Elegance Bracelet",
      category: "Bracelets",
      price: 899,
      description: "A sophisticated bracelet that combines elegance with comfort.",
      tags: ["bracelet", "elegance", "silver", "comfortable"]
    },
    {
      id: 3,
      name: "Infinity Necklace",
      category: "Necklaces",
      price: 1499,
      description: "The infinity symbol represents endless love and connection.",
      tags: ["necklace", "infinity", "love", "symbolic"]
    },
    {
      id: 4,
      name: "Celestial Bracelet",
      category: "Bracelets",
      price: 1199,
      description: "Inspired by the stars and celestial bodies.",
      tags: ["bracelet", "celestial", "stars", "cosmic"]
    },
    {
      id: 5,
      name: "Diamond Necklace",
      category: "Necklaces",
      price: 2499,
      description: "A luxurious diamond necklace that sparkles with every movement.",
      tags: ["necklace", "diamond", "luxury", "sparkle"]
    },
    {
      id: 6,
      name: "Royal Bracelet",
      category: "Bracelets",
      price: 1799,
      description: "Fit for royalty, this bracelet features premium materials.",
      tags: ["bracelet", "royal", "platinum", "premium"]
    },
    {
      id: 7,
      name: "Emerald Ring",
      category: "Rings",
      price: 1899,
      description: "A stunning emerald ring with intricate gold setting.",
      tags: ["ring", "emerald", "gold", "intricate"]
    },
    {
      id: 8,
      name: "Sapphire Earrings",
      category: "Earrings",
      price: 1299,
      description: "Elegant sapphire earrings perfect for formal occasions.",
      tags: ["earrings", "sapphire", "elegant", "formal"]
    }
  ];

  const performSearch = useMemo(() => {
    return (query) => {
      if (!query.trim()) {
        setSearchResults([]);
        return;
      }

      setIsSearching(true);
      
      // Simulate API delay
      setTimeout(() => {
        const results = allProducts.filter(product => {
          const searchTerm = query.toLowerCase();
          return (
            product.name.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.tags.some(tag => tag.toLowerCase().includes(searchTerm))
          );
        });
        
        setSearchResults(results);
        setIsSearching(false);
      }, 300);
    };
  }, []);

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
  };

  const value = {
    searchQuery,
    setSearchQuery,
    searchResults,
    isSearching,
    performSearch,
    clearSearch,
    allProducts
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
};
