import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on app start
    const token = localStorage.getItem('authToken');
    const userData = localStorage.getItem('userData');
    
    if (token && userData) {
      try {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Error parsing user data:', error);
        localStorage.removeItem('authToken');
        localStorage.removeItem('userData');
      }
    }
    
    setIsLoading(false);
  }, []);

  const login = async (credentials) => {
    try {
      // Simulate API call
      const response = await mockLoginAPI(credentials);
      
      if (response.success) {
        const userData = response.user;
        setUser(userData);
        setIsAuthenticated(true);
        localStorage.setItem('authToken', response.token);
        localStorage.setItem('userData', JSON.stringify(userData));
        return { success: true };
      } else {
        return { success: false, error: response.error };
      }
    } catch (error) {
      return { success: false, error: 'Login failed. Please try again.' };
    }
  };

  const signup = async (userData) => {
    try {
      // Simulate API call
      const response = await mockSignupAPI(userData);
      
      if (response.success) {
        const newUser = response.user;
        setUser(newUser);
        setIsAuthenticated(true);
        localStorage.setItem('authToken', response.token);
        localStorage.setItem('userData', JSON.stringify(newUser));
        return { success: true };
      } else {
        return { success: false, error: response.error };
      }
    } catch (error) {
      return { success: false, error: 'Signup failed. Please try again.' };
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
  };

  const googleSignIn = async () => {
    try {
      // Simulate Google OAuth
      const response = await mockGoogleSignInAPI();
      
      if (response.success) {
        const userData = response.user;
        setUser(userData);
        setIsAuthenticated(true);
        localStorage.setItem('authToken', response.token);
        localStorage.setItem('userData', JSON.stringify(userData));
        return { success: true };
      } else {
        return { success: false, error: response.error };
      }
    } catch (error) {
      return { success: false, error: 'Google sign-in failed. Please try again.' };
    }
  };

  // Mock API functions (replace with real API calls)
  const mockLoginAPI = async (credentials) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (credentials.username === 'demo' && credentials.password === 'password') {
          resolve({
            success: true,
            user: {
              id: 1,
              username: 'demo',
              email: 'demo@example.com',
              name: 'Demo User',
              avatar: null
            },
            token: 'mock-jwt-token'
          });
        } else {
          resolve({
            success: false,
            error: 'Invalid username or password'
          });
        }
      }, 1000);
    });
  };

  const mockSignupAPI = async (userData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          user: {
            id: Date.now(),
            username: userData.username,
            email: userData.email,
            name: userData.name,
            avatar: null
          },
          token: 'mock-jwt-token'
        });
      }, 1000);
    });
  };

  const mockGoogleSignInAPI = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          user: {
            id: Date.now(),
            username: 'google_user',
            email: 'google@example.com',
            name: 'Google User',
            avatar: 'https://via.placeholder.com/150'
          },
          token: 'mock-google-jwt-token'
        });
      }, 1000);
    });
  };

  const value = {
    user,
    isAuthenticated,
    isLoading,
    login,
    signup,
    logout,
    googleSignIn
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
