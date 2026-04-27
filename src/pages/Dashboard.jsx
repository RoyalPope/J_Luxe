import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const { getCartItemCount } = useCart();
  const [activeTab, setActiveTab] = useState('overview');

  const handleLogout = () => {
    logout();
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'fas fa-home' },
    { id: 'orders', label: 'Orders', icon: 'fas fa-shopping-bag' },
    { id: 'wishlist', label: 'Wishlist', icon: 'fas fa-heart' },
    { id: 'profile', label: 'Profile', icon: 'fas fa-user' },
    { id: 'settings', label: 'Settings', icon: 'fas fa-cog' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                <div className="flex items-center">
                  <div className="p-3 bg-gold rounded-lg">
                    <i className="fas fa-shopping-bag text-black text-xl"></i>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-400 text-sm">Total Orders</p>
                    <p className="text-2xl font-bold text-white">12</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                <div className="flex items-center">
                  <div className="p-3 bg-gold rounded-lg">
                    <i className="fas fa-heart text-black text-xl"></i>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-400 text-sm">Wishlist Items</p>
                    <p className="text-2xl font-bold text-white">8</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                <div className="flex items-center">
                  <div className="p-3 bg-gold rounded-lg">
                    <i className="fas fa-star text-black text-xl"></i>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-400 text-sm">Loyalty Points</p>
                    <p className="text-2xl font-bold text-white">1,250</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Recent Orders</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                  <div>
                    <p className="text-white font-medium">Royal Pendant</p>
                    <p className="text-gray-400 text-sm">Order #JL-2024-001</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gold font-semibold">$1,299</p>
                    <p className="text-green-400 text-sm">Delivered</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                  <div>
                    <p className="text-white font-medium">Elegance Bracelet</p>
                    <p className="text-gray-400 text-sm">Order #JL-2024-002</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gold font-semibold">$899</p>
                    <p className="text-blue-400 text-sm">In Transit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'orders':
        return (
          <div className="space-y-6">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Order History</h3>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((order) => (
                  <div key={order} className="border border-gray-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-white font-medium">Order #JL-2024-{order.toString().padStart(3, '0')}</h4>
                      <span className="px-3 py-1 bg-green-900 text-green-300 text-xs rounded-full">Delivered</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-gray-400">Date</p>
                        <p className="text-white">Dec {order}, 2024</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Total</p>
                        <p className="text-gold font-semibold">${(1200 + order * 100).toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Status</p>
                        <p className="text-green-400">Delivered</p>
                      </div>
                      <div>
                        <button className="text-gold hover:text-gold-light transition-colors">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'wishlist':
        return (
          <div className="space-y-6">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">My Wishlist</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className="bg-gray-800 rounded-lg overflow-hidden">
                    <div className="h-48 bg-gray-700 flex items-center justify-center">
                      <i className="fas fa-gem text-4xl text-gray-500"></i>
                    </div>
                    <div className="p-4">
                      <h4 className="text-white font-medium mb-2">Luxury Item {item}</h4>
                      <p className="text-gold font-semibold mb-3">${(800 + item * 100).toLocaleString()}</p>
                      <div className="flex space-x-2">
                        <button className="flex-1 py-2 bg-gold text-black font-semibold rounded-sm hover:bg-gold-dark transition duration-300 text-sm">
                          Add to Cart
                        </button>
                        <button className="px-3 py-2 text-red-400 hover:text-red-300 transition-colors">
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'profile':
        return (
          <div className="space-y-6">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-6">Profile Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    defaultValue={user?.name || ''}
                    className="w-full px-3 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Username</label>
                  <input
                    type="text"
                    defaultValue={user?.username || ''}
                    className="w-full px-3 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    defaultValue={user?.email || ''}
                    className="w-full px-3 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    className="w-full px-3 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  />
                </div>
              </div>
              <div className="mt-6">
                <button className="px-6 py-3 bg-gold text-black font-semibold rounded-lg hover:bg-gold-dark transition duration-300">
                  Update Profile
                </button>
              </div>
            </div>
          </div>
        );

      case 'settings':
        return (
          <div className="space-y-6">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-6">Account Settings</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                  <div>
                    <h4 className="text-white font-medium">Email Notifications</h4>
                    <p className="text-gray-400 text-sm">Receive updates about orders and promotions</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gold rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gold"></div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                  <div>
                    <h4 className="text-white font-medium">SMS Notifications</h4>
                    <p className="text-gray-400 text-sm">Receive text messages about orders</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gold rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gold"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-white mb-4">Access Denied</h1>
          <Link to="/login" className="text-gold hover:text-gold-light">
            Please log in to access your dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-14 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4 sm:gap-0">
          <div>
            <h1 className="text-4xl font-bold text-white font-playfair">Welcome back, {user.name}!</h1>
            <p className="text-gray-400 mt-2">Manage your account and view your orders</p>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative text-white hover:text-gold-light transition-colors">
              <i className="fas fa-shopping-bag text-xl"></i>
              <span className="absolute -top-2 -right-2 bg-gold text-black rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                {getCartItemCount()}
              </span>
            </Link>
            <button
              onClick={handleLogout}
              className="px-4 py-2 border border-gray-600 text-gray-300 hover:border-red-500 hover:text-red-400 transition-colors rounded-lg"
            >
              <i className="fas fa-sign-out-alt mr-2"></i>
              Logout
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 bg-gray-900 p-1 rounded-lg mb-8 overflow-x-auto whitespace-nowrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-4 py-2 rounded-md transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gold text-black'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              <i className={`${tab.icon} mr-2`}></i>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-96">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
