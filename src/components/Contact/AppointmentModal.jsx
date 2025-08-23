import { useState } from 'react';

const AppointmentModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Appointment booking:', formData);
    alert('Appointment request submitted successfully! We will contact you soon to confirm.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      service: '',
      message: ''
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-75 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-gray-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
        >
          <i className="fas fa-times text-2xl"></i>
        </button>
        
        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white font-playfair mb-2">Book an Appointment</h2>
            <p className="text-gray-300">Schedule a private consultation to explore our exclusive jewelry collection</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 bg-black border border-gray-700 rounded-sm focus:outline-none focus:border-gold text-white"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 bg-black border border-gray-700 rounded-sm focus:outline-none focus:border-gold text-white"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-white">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 bg-black border border-gray-700 rounded-sm focus:outline-none focus:border-gold text-white"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block mb-2 text-sm font-medium text-white">Service Interest</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-black border border-gray-700 rounded-sm focus:outline-none focus:border-gold text-white"
                >
                  <option value="">Select a service</option>
                  <option value="jewelry-consultation">Jewelry Consultation</option>
                  <option value="custom-design">Custom Design</option>
                  <option value="jewelry-appraisal">Jewelry Appraisal</option>
                  <option value="repair-service">Repair Service</option>
                  <option value="gift-selection">Gift Selection</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="date" className="block mb-2 text-sm font-medium text-white">Preferred Date *</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full p-3 bg-black border border-gray-700 rounded-sm focus:outline-none focus:border-gold text-white"
                />
              </div>
              
              <div>
                <label htmlFor="time" className="block mb-2 text-sm font-medium text-white">Preferred Time *</label>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 bg-black border border-gray-700 rounded-sm focus:outline-none focus:border-gold text-white"
                >
                  <option value="">Select a time</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                  <option value="17:00">5:00 PM</option>
                </select>
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">Additional Notes</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                placeholder="Tell us about your preferences, questions, or special requirements..."
                className="w-full p-3 bg-black border border-gray-700 rounded-sm focus:outline-none focus:border-gold text-white"
              ></textarea>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 py-3 bg-gold text-black font-semibold rounded-sm hover:bg-gold-dark transition duration-300 transform hover:scale-105"
              >
                <i className="fas fa-calendar-check mr-2"></i>
                Book Appointment
              </button>
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-3 border border-gray-600 text-gray-300 font-semibold rounded-sm hover:border-gold hover:text-gold transition duration-300"
              >
                Cancel
              </button>
            </div>
          </form>
          
          <div className="mt-8 p-4 bg-gray-800 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-2">What to Expect</h3>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Personalized consultation with our jewelry experts</li>
              <li>• Private viewing of our exclusive collections</li>
              <li>• Expert advice on selection and styling</li>
              <li>• Complimentary refreshments during your visit</li>
              <li>• No pressure sales approach</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
