import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gold mb-4 font-playfair">Oops!</h1>
            <p className="text-gray-300 mb-6">Something went wrong. Please refresh the page and try again.</p>
            <button 
              onClick={() => window.location.reload()} 
              className="px-6 py-3 bg-gold text-black font-semibold rounded-sm hover:bg-gold-dark transition duration-300"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
