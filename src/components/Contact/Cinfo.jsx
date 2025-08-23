import React from 'react';

const Cinfo = ({ onBookAppointment }) => {
  return (
    <section className="py-16 bg-black">
        <div className="container mx-auto px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Contact Card 1 */}
                <div className="contact-card bg-gray-900 p-8 rounded-lg border border-gray-800 text-center">
                    <div className="w-16 h-16 rounded-full bg-gold bg-opacity-20 flex items-center justify-center mb-6 mx-auto">
                        <i className="fas fa-map-marker-alt text-2xl text-gold"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white">Visit Us</h3>
                    <p className="text-gray-200 mb-2">123 Luxury Avenue</p>
                    <p className="text-gray-200 mb-2">Fashion District</p>
                    <p className="text-gray-200 mb-4">New York, NY 10001</p>
                    <a href="#locations" className="text-gold hover:underline">View All Locations</a>
                </div>
                
                {/* Contact Card 2 */}
                <div className="contact-card bg-gray-900 p-8 rounded-lg border border-gray-800 text-center">
                    <div className="w-16 h-16 rounded-full bg-gold bg-opacity-20 flex items-center justify-center mb-6 mx-auto">
                        <i className="fas fa-phone-alt text-2xl text-gold"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white">Call Us</h3>
                    <p className="text-gray-200 mb-2">Customer Service:</p>
                    <p className="text-gold mb-4">+1 (800) 555-LUXE</p>
                    <p className="text-gray-200 mb-2">Private Appointments:</p>
                    <p className="text-gold mb-4">+1 (800) 777-JLUX</p>
                    <p className="text-gray-200 text-sm">Monday - Friday: 9am - 6pm EST</p>
                    <p className="text-gray-200 text-sm">Saturday: 10am - 4pm EST</p>
                </div>
                
                {/* Contact Card 3 */}
                <div className="contact-card bg-gray-900 p-8 rounded-lg border border-gray-800 text-center">
                    <div className="w-16 h-16 rounded-full bg-gold bg-opacity-20 flex items-center justify-center mb-6 mx-auto">
                        <i className="fas fa-envelope text-2xl text-gold"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white">Email Us</h3>
                    <p className="text-gray-200 mb-2">General Inquiries:</p>
                    <p className="text-gold mb-4">info@jluxejewelry.com</p>
                    <p className="text-gray-200 mb-2">Customer Support:</p>
                    <p className="text-gold mb-4">support@jluxejewelry.com</p>
                    <p className="text-gray-200 mb-2">Press &amp; Media:</p>
                    <p className="text-gold">press@jluxejewelry.com</p>
                </div>
            </div>
            
            {/* Appointment Booking Section */}
            <div className="mt-16 text-center">
                <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 max-w-2xl mx-auto">
                    <div className="w-20 h-20 rounded-full bg-gold bg-opacity-20 flex items-center justify-center mb-6 mx-auto">
                        <i className="fas fa-calendar-alt text-3xl text-gold"></i>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white font-playfair">Book a Private Appointment</h3>
                    <p className="text-gray-300 mb-6">Experience our exclusive jewelry collection in a private, personalized setting. Schedule a consultation with our expert jewelers.</p>
                    <button
                        onClick={onBookAppointment}
                        className="px-8 py-3 bg-gold text-black font-semibold rounded-sm hover:bg-gold-dark transition duration-300 transform hover:scale-105"
                    >
                        <i className="fas fa-calendar-check mr-2"></i>
                        Book Appointment
                    </button>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Cinfo;