const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// In-memory storage (replace with database in production)
let users = [
  {
    id: 1,
    username: 'demo',
    email: 'demo@example.com',
    name: 'Demo User',
    password: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // 'password'
    avatar: null,
    createdAt: new Date('2024-01-01')
  }
];

let products = [
  {
    id: 1,
    name: "Royal Pendant",
    category: "Necklaces",
    price: 1299,
    description: "A stunning royal pendant crafted with the finest materials. This piece features intricate detailing and premium craftsmanship that makes it perfect for special occasions.",
    image: "/product.webp",
    sizes: ["16\"", "18\"", "20\"", "22\""],
    features: ["18K Gold Plated", "Genuine Gemstones", "Adjustable Chain", "Elegant Design"],
    tags: ["pendant", "royal", "gold", "luxury"],
    inStock: true,
    createdAt: new Date('2024-01-01')
  },
  {
    id: 2,
    name: "Elegance Bracelet",
    category: "Bracelets",
    price: 899,
    description: "A sophisticated bracelet that combines elegance with comfort. Perfect for everyday wear or special events.",
    image: null,
    sizes: ["6.5\"", "7\"", "7.5\"", "8\""],
    features: ["Sterling Silver", "Adjustable Fit", "Lightweight Design", "Timeless Style"],
    tags: ["bracelet", "elegance", "silver", "comfortable"],
    inStock: true,
    createdAt: new Date('2024-01-01')
  },
  {
    id: 3,
    name: "Infinity Necklace",
    category: "Necklaces",
    price: 1499,
    description: "The infinity symbol represents endless love and connection. This necklace is perfect for expressing eternal bonds.",
    image: null,
    sizes: ["16\"", "18\"", "20\""],
    features: ["White Gold", "Diamond Accents", "Symbolic Design", "Premium Quality"],
    tags: ["necklace", "infinity", "love", "symbolic"],
    inStock: true,
    createdAt: new Date('2024-01-01')
  },
  {
    id: 4,
    name: "Celestial Bracelet",
    category: "Bracelets",
    price: 1199,
    description: "Inspired by the stars and celestial bodies, this bracelet features cosmic-inspired design elements.",
    image: null,
    sizes: ["7\"", "7.5\"", "8\""],
    features: ["Rose Gold", "Stellar Motifs", "Comfortable Fit", "Unique Design"],
    tags: ["bracelet", "celestial", "stars", "cosmic"],
    inStock: true,
    createdAt: new Date('2024-01-01')
  },
  {
    id: 5,
    name: "Diamond Necklace",
    category: "Necklaces",
    price: 2499,
    description: "A luxurious diamond necklace that sparkles with every movement. The perfect statement piece for any occasion.",
    image: null,
    sizes: ["16\"", "18\"", "20\""],
    features: ["Natural Diamonds", "18K White Gold", "Brilliant Cut", "Certified Quality"],
    tags: ["necklace", "diamond", "luxury", "sparkle"],
    inStock: true,
    createdAt: new Date('2024-01-01')
  },
  {
    id: 6,
    name: "Royal Bracelet",
    category: "Bracelets",
    price: 1799,
    description: "Fit for royalty, this bracelet features premium materials and exquisite craftsmanship that sets it apart.",
    image: null,
    sizes: ["7\"", "7.5\"", "8\""],
    features: ["Platinum", "Royal Design", "Premium Finish", "Exclusive Style"],
    tags: ["bracelet", "royal", "platinum", "premium"],
    inStock: true,
    createdAt: new Date('2024-01-01')
  },
  {
    id: 7,
    name: "Emerald Ring",
    category: "Rings",
    price: 1899,
    description: "A stunning emerald ring with intricate gold setting.",
    image: null,
    sizes: ["6", "7", "8", "9"],
    features: ["Natural Emerald", "18K Gold", "Intricate Setting", "Premium Quality"],
    tags: ["ring", "emerald", "gold", "intricate"],
    inStock: true,
    createdAt: new Date('2024-01-01')
  },
  {
    id: 8,
    name: "Sapphire Earrings",
    category: "Earrings",
    price: 1299,
    description: "Elegant sapphire earrings perfect for formal occasions.",
    image: null,
    sizes: ["One Size"],
    features: ["Natural Sapphires", "White Gold", "Elegant Design", "Formal Style"],
    tags: ["earrings", "sapphire", "elegant", "formal"],
    inStock: true,
    createdAt: new Date('2024-01-01')
  }
];

// JWT Secret (use environment variable in production)
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid or expired token' });
    }
    req.user = user;
    next();
  });
};

// Routes

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'J Luxe Backend is running' });
});

// Authentication Routes

// User Registration
app.post('/api/auth/register', [
  body('name').trim().isLength({ min: 2 }).withMessage('Name must be at least 2 characters long'),
  body('username').trim().isLength({ min: 3 }).withMessage('Username must be at least 3 characters long'),
  body('email').isEmail().normalizeEmail().withMessage('Must be a valid email'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, username, email, password } = req.body;

    // Check if user already exists
    const existingUser = users.find(u => u.username === username || u.email === email);
    if (existingUser) {
      return res.status(400).json({ error: 'Username or email already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = {
      id: users.length + 1,
      name,
      username,
      email,
      password: hashedPassword,
      avatar: null,
      createdAt: new Date()
    };

    users.push(newUser);

    // Generate JWT token
    const token = jwt.sign(
      { userId: newUser.id, username: newUser.username },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    // Remove password from response
    const { password: _, ...userWithoutPassword } = newUser;

    res.status(201).json({
      success: true,
      user: userWithoutPassword,
      token
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// User Login
app.post('/api/auth/login', [
  body('username').trim().notEmpty().withMessage('Username is required'),
  body('password').notEmpty().withMessage('Password is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, password } = req.body;

    // Find user by username or email
    const user = users.find(u => u.username === username || u.email === username);
    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Check password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id, username: user.username },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;

    res.json({
      success: true,
      user: userWithoutPassword,
      token
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get user profile (protected route)
app.get('/api/auth/profile', authenticateToken, (req, res) => {
  try {
    const user = users.find(u => u.id === req.user.userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const { password: _, ...userWithoutPassword } = user;
    res.json({ user: userWithoutPassword });
  } catch (error) {
    console.error('Profile error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Product Routes

// Search products
app.get('/api/products/search', (req, res) => {
  try {
    const { q: query, category, minPrice, maxPrice, sortBy = 'name', order = 'asc' } = req.query;

    let filteredProducts = [...products];

    // Search by query
    if (query) {
      const searchTerm = query.toLowerCase();
      filteredProducts = filteredProducts.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchTerm))
      );
    }

    // Filter by category
    if (category) {
      filteredProducts = filteredProducts.filter(product => 
        product.category.toLowerCase() === category.toLowerCase()
      );
    }

    // Filter by price range
    if (minPrice) {
      filteredProducts = filteredProducts.filter(product => product.price >= parseFloat(minPrice));
    }
    if (maxPrice) {
      filteredProducts = filteredProducts.filter(product => product.price <= parseFloat(maxPrice));
    }

    // Sort products
    filteredProducts.sort((a, b) => {
      let aValue = a[sortBy];
      let bValue = b[sortBy];

      if (typeof aValue === 'string') {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }

      if (order === 'desc') {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }
      return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
    });

    res.json({
      success: true,
      products: filteredProducts,
      total: filteredProducts.length
    });
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all products
app.get('/api/products', (req, res) => {
  try {
    res.json({
      success: true,
      products,
      total: products.length
    });
  } catch (error) {
    console.error('Products error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get product by ID
app.get('/api/products/:id', (req, res) => {
  try {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json({
      success: true,
      product
    });
  } catch (error) {
    console.error('Product error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get products by category
app.get('/api/products/category/:category', (req, res) => {
  try {
    const category = req.params.category;
    const categoryProducts = products.filter(p => 
      p.category.toLowerCase() === category.toLowerCase()
    );

    res.json({
      success: true,
      products: categoryProducts,
      total: categoryProducts.length,
      category
    });
  } catch (error) {
    console.error('Category error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 J Luxe Backend server running on port ${PORT}`);
  console.log(`📱 Health check: http://localhost:${PORT}/api/health`);
  console.log(`🔍 Search API: http://localhost:${PORT}/api/products/search`);
  console.log(`🔐 Auth API: http://localhost:${PORT}/api/auth`);
});

module.exports = app;
