# J Luxe Backend Server

A Node.js/Express backend server for the J Luxe luxury jewelry website, providing authentication, product search, and API endpoints.

## Features

- **User Authentication**: Registration, login, and JWT token management
- **Product Search**: Real-time search with filtering and sorting
- **Product Management**: CRUD operations for jewelry products
- **Security**: Password hashing, JWT tokens, rate limiting, and CORS
- **Validation**: Input validation using express-validator
- **Error Handling**: Comprehensive error handling and logging

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcryptjs
- **Validation**: express-validator
- **Security**: helmet, express-rate-limit
- **CORS**: cors middleware

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. **Clone the repository and navigate to the server directory:**
   ```bash
   cd server
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create environment variables (optional):**
   Create a `.env` file in the server directory:
   ```env
   PORT=5000
   JWT_SECRET=your-super-secret-jwt-key-change-in-production
   FRONTEND_URL=http://localhost:5173
   ```

4. **Start the server:**
   ```bash
   # Development mode with auto-restart
   npm run dev
   
   # Production mode
   npm start
   ```

The server will start on `http://localhost:5000` (or the port specified in your environment variables).

## API Endpoints

### Authentication

#### POST `/api/auth/register`
Register a new user account.

**Request Body:**
```json
{
  "name": "John Doe",
  "username": "johndoe",
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Response:**
```json
{
  "success": true,
  "user": {
    "id": 2,
    "name": "John Doe",
    "username": "johndoe",
    "email": "john@example.com",
    "avatar": null,
    "createdAt": "2024-12-19T10:30:00.000Z"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### POST `/api/auth/login`
Authenticate an existing user.

**Request Body:**
```json
{
  "username": "johndoe",
  "password": "securepassword123"
}
```

**Response:**
```json
{
  "success": true,
  "user": {
    "id": 2,
    "name": "John Doe",
    "username": "johndoe",
    "email": "john@example.com",
    "avatar": null,
    "createdAt": "2024-12-19T10:30:00.000Z"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### GET `/api/auth/profile`
Get the authenticated user's profile (requires JWT token).

**Headers:**
```
Authorization: Bearer <jwt-token>
```

**Response:**
```json
{
  "user": {
    "id": 2,
    "name": "John Doe",
    "username": "johndoe",
    "email": "john@example.com",
    "avatar": null,
    "createdAt": "2024-12-19T10:30:00.000Z"
  }
}
```

### Products

#### GET `/api/products`
Get all products.

**Response:**
```json
{
  "success": true,
  "products": [...],
  "total": 8
}
```

#### GET `/api/products/search`
Search products with filters and sorting.

**Query Parameters:**
- `q`: Search query string
- `category`: Filter by category
- `minPrice`: Minimum price filter
- `maxPrice`: Maximum price filter
- `sortBy`: Sort field (name, price, category)
- `order`: Sort order (asc, desc)

**Example:**
```
GET /api/products/search?q=diamond&category=Necklaces&minPrice=1000&sortBy=price&order=desc
```

#### GET `/api/products/:id`
Get a specific product by ID.

**Response:**
```json
{
  "success": true,
  "product": {
    "id": 1,
    "name": "Royal Pendant",
    "category": "Necklaces",
    "price": 1299,
    "description": "A stunning royal pendant...",
    "image": "/product.webp",
    "sizes": ["16\"", "18\"", "20\"", "22\""],
    "features": ["18K Gold Plated", "Genuine Gemstones", "Adjustable Chain", "Elegant Design"],
    "tags": ["pendant", "royal", "gold", "luxury"],
    "inStock": true,
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

#### GET `/api/products/category/:category`
Get products by category.

**Response:**
```json
{
  "success": true,
  "products": [...],
  "total": 3,
  "category": "Necklaces"
}
```

### Health Check

#### GET `/api/health`
Check if the server is running.

**Response:**
```json
{
  "status": "OK",
  "message": "J Luxe Backend is running"
}
```

## Demo Account

For testing purposes, a demo account is pre-configured:

- **Username**: `demo`
- **Password**: `password`

## Security Features

- **Password Hashing**: All passwords are hashed using bcryptjs
- **JWT Authentication**: Secure token-based authentication
- **Rate Limiting**: Prevents abuse with request rate limiting
- **Input Validation**: All user inputs are validated and sanitized
- **CORS Protection**: Configurable cross-origin resource sharing
- **Helmet Security**: Adds various HTTP headers for security

## Development

### Project Structure
```
server/
├── package.json          # Dependencies and scripts
├── server.js            # Main server file
├── README.md            # This file
└── .env                 # Environment variables (create this)
```

### Adding New Features

1. **New Routes**: Add new route handlers in `server.js`
2. **Middleware**: Add custom middleware functions
3. **Validation**: Use express-validator for input validation
4. **Error Handling**: Use try-catch blocks and proper error responses

### Testing

Test the API endpoints using tools like:
- **Postman**: API testing and development
- **Insomnia**: REST client
- **cURL**: Command-line HTTP client

## Production Deployment

1. **Environment Variables**: Set proper production values
2. **Database**: Replace in-memory storage with a real database (MongoDB, PostgreSQL)
3. **HTTPS**: Enable HTTPS in production
4. **Logging**: Implement proper logging (Winston, Morgan)
5. **Monitoring**: Add health checks and monitoring
6. **Load Balancing**: Use a reverse proxy (Nginx, Apache)

## Contributing

1. Follow the existing code style
2. Add proper error handling
3. Include input validation
4. Test your changes thoroughly
5. Update documentation as needed

## License

MIT License - see the main project README for details.

## Support

For questions or issues, please refer to the main project documentation or create an issue in the project repository.
