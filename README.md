# J Luxe - Luxury Jewelry Website

A modern, responsive luxury jewelry e-commerce website built with React, featuring elegant design, real-time search, user authentication, and a comprehensive shopping experience.

## ✨ Features

### 🏠 **Home Page**
- **Hero Section**: Stunning hero with background image and call-to-action buttons
- **Featured Collection**: Showcase of premium jewelry pieces with interactive product cards
- **Contact Section**: Easy-to-use contact form for customer inquiries
- **Navigation**: Fixed navigation with smooth scrolling and mobile responsiveness

### 🔍 **Real-Time Search**
- **Instant Search**: Real-time product search as you type
- **Smart Filtering**: Search by product name, category, description, and tags
- **Quick Categories**: Popular category shortcuts for easy browsing
- **Search Results**: Interactive search results with product details and navigation

### 🔐 **User Authentication**
- **User Registration**: Create new accounts with email verification
- **User Login**: Secure authentication with username/email and password
- **Google Sign-In**: OAuth integration for seamless login experience
- **JWT Tokens**: Secure, stateless authentication system
- **Protected Routes**: Secure access to user-specific features

### 🛍️ **Shopping Experience**
- **Product Catalog**: Comprehensive collection of luxury jewelry
- **Category Filtering**: Browse by jewelry type (Necklaces, Bracelets, Rings, Earrings)
- **Product Details**: Detailed product information with size options and features
- **Shopping Cart**: Persistent cart with quantity management and item removal
- **Product Modals**: Interactive product previews with detailed information

### 📱 **Collections Page**
- **Advanced Filtering**: Sort by price, name, and category
- **Pagination**: Smooth page navigation for large product catalogs
- **Category Buttons**: Quick category selection for focused browsing
- **Product Grid**: Responsive grid layout with hover effects

### 📞 **Contact & Support**
- **Contact Form**: Professional contact form for customer inquiries
- **Appointment Booking**: Schedule private appointments with luxury consultants
- **FAQ Section**: Interactive dropdown FAQ with smooth animations
- **Location Information**: Store locations and contact details
- **Social Connection**: Social media integration and community engagement

### 👤 **User Dashboard**
- **Profile Management**: Update personal information and preferences
- **Order History**: Track past purchases and order status
- **Wishlist**: Save favorite items for future reference
- **Account Settings**: Customize notification preferences and account settings
- **Loyalty Program**: Track loyalty points and rewards

### 🎨 **Design & UX**
- **Luxury Aesthetic**: Premium design with gold accents and elegant typography
- **Responsive Design**: Mobile-first approach with tablet and desktop optimization
- **Smooth Animations**: CSS transitions and hover effects for premium feel
- **Accessibility**: WCAG compliant design with proper contrast and navigation
- **Performance**: Optimized images and efficient code for fast loading

## 🚀 Tech Stack

### **Frontend**
- **React 18**: Modern React with hooks and functional components
- **Vite**: Fast build tool and development server
- **React Router DOM**: Client-side routing and navigation
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Context API**: Global state management for cart and authentication

### **Backend**
- **Node.js**: JavaScript runtime environment
- **Express.js**: Fast, unopinionated web framework
- **JWT**: JSON Web Tokens for secure authentication
- **bcryptjs**: Password hashing for security
- **express-validator**: Input validation and sanitization
- **CORS**: Cross-origin resource sharing support
- **Helmet**: Security middleware for HTTP headers

### **Development Tools**
- **ESLint**: Code quality and consistency
- **PostCSS**: CSS processing and optimization
- **Font Awesome**: Icon library for UI elements

## 📦 Installation

### **Prerequisites**
- Node.js (v16 or higher)
- npm or yarn package manager

### **Frontend Setup**
1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd J_Luxe
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173`

### **Backend Setup**
1. **Navigate to server directory:**
   ```bash
   cd server
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create environment file (optional):**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start backend server:**
   ```bash
   npm run dev
   ```

5. **Backend will run on:**
   `http://localhost:5000`

## 🏗️ Project Structure

```
J_Luxe/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── home/           # Home page components
│   │   ├── collections/    # Collections page components
│   │   ├── Contact/        # Contact page components
│   │   └── about/          # About page components
│   ├── context/            # React Context providers
│   │   ├── CartContext.jsx # Shopping cart state management
│   │   ├── SearchContext.jsx # Search functionality
│   │   └── AuthContext.jsx # User authentication
│   ├── pages/              # Page components
│   │   ├── Home.jsx        # Home page
│   │   ├── Collections.jsx # Collections page
│   │   ├── About.jsx       # About page
│   │   ├── Contacts.jsx    # Contact page
│   │   ├── Cart.jsx        # Shopping cart page
│   │   ├── Login.jsx       # User login page
│   │   ├── Signup.jsx      # User registration page
│   │   └── Dashboard.jsx   # User dashboard
│   ├── assets/             # Static assets (images, videos)
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global styles
├── server/                 # Backend server
│   ├── server.js           # Express server setup
│   ├── package.json        # Backend dependencies
│   └── README.md           # Backend documentation
├── public/                 # Public assets
├── package.json            # Frontend dependencies
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.js          # Vite configuration
└── README.md               # Project documentation
```

## 🔑 Key Components

### **SearchModal**
- Real-time search functionality
- Product filtering and sorting
- Quick category navigation
- Responsive design for all devices

### **ProductModal**
- Detailed product information
- Size and quantity selection
- Add to cart functionality
- Product features and descriptions

### **CartContext**
- Global shopping cart state
- Add/remove items
- Quantity management
- Persistent cart storage

### **AuthContext**
- User authentication state
- Login/logout functionality
- Protected route management
- JWT token handling

### **Navigation**
- Responsive navigation menu
- Search integration
- User authentication status
- Mobile menu with smooth animations

## 🎯 Usage Examples

### **Searching Products**
```jsx
import { useSearch } from '../context/SearchContext';

const { performSearch, searchResults } = useSearch();

// Search for products
performSearch('diamond necklace');
```

### **Managing Cart**
```jsx
import { useCart } from '../context/CartContext';

const { addToCart, removeFromCart, getCartItemCount } = useCart();

// Add item to cart
addToCart(product, quantity, size);
```

### **User Authentication**
```jsx
import { useAuth } from '../context/AuthContext';

const { login, logout, isAuthenticated, user } = useAuth();

// Login user
const result = await login({ username, password });
```

## 🔒 Security Features

- **Password Hashing**: bcryptjs for secure password storage
- **JWT Authentication**: Stateless authentication with token expiration
- **Input Validation**: Server-side validation for all user inputs
- **Rate Limiting**: Protection against brute force attacks
- **CORS Protection**: Secure cross-origin resource sharing
- **Helmet Security**: HTTP security headers

## 🚀 Performance Optimizations

- **Image Optimization**: WebP format for faster loading
- **Code Splitting**: Lazy loading for better performance
- **Memoization**: React.memo and useMemo for optimization
- **Efficient Rendering**: Optimized re-renders with proper state management
- **Bundle Optimization**: Vite for fast builds and hot reloading

## 📱 Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: Responsive breakpoints for all screen sizes
- **Touch Friendly**: Optimized for touch interactions
- **Progressive Enhancement**: Enhanced experience on larger screens

## 🧪 Testing

### **Frontend Testing**
- Component testing with React Testing Library
- Integration testing for user workflows
- Accessibility testing for WCAG compliance

### **Backend Testing**
- API endpoint testing
- Authentication flow testing
- Error handling validation
- Performance testing

## 🚀 Deployment

### **Frontend Deployment**
- Build optimization with Vite
- Static file hosting (Netlify, Vercel, AWS S3)
- CDN integration for global performance
- Environment variable configuration

### **Backend Deployment**
- Node.js hosting (Heroku, DigitalOcean, AWS)
- Environment variable management
- Database connection setup
- SSL certificate configuration

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### **Development Guidelines**
- Follow React best practices
- Use functional components with hooks
- Maintain consistent code style
- Add proper error handling
- Include comprehensive documentation

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Design Inspiration**: Luxury jewelry brands and modern e-commerce trends
- **Icons**: Font Awesome for beautiful iconography
- **Typography**: Google Fonts for elegant typography
- **Community**: React and Node.js communities for excellent documentation

## 📞 Support

- **Documentation**: Comprehensive guides and API references
- **Issues**: Report bugs and request features via GitHub Issues
- **Discussions**: Community discussions and Q&A
- **Email**: Contact the development team for enterprise support

## 🔮 Future Enhancements

- **Payment Integration**: Stripe/PayPal payment processing
- **Inventory Management**: Real-time stock tracking
- **Multi-language Support**: Internationalization (i18n)
- **Advanced Analytics**: User behavior tracking and insights
- **Mobile App**: React Native mobile application
- **AI Recommendations**: Machine learning product suggestions
- **Virtual Try-On**: AR/VR jewelry visualization
- **Loyalty Program**: Advanced rewards and points system

---

**Built with ❤️ by the J Luxe Development Team**

*Experience luxury, delivered digitally.*
