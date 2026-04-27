import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-8 lg:px-14">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 font-playfair">Contact <span className="text-gold">Us</span></h2>
                <p className="text-gray-300 max-w-2xl mx-auto">Have questions about our collections or need assistance? We're here to help.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="bg-gray-900 p-8 rounded-lg">
                    <form id="contactForm" className="space-y-6">
                        <div>
                            <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-white">Full Name</label>
                            <input type="text" id="fullName" className="w-full p-3 bg-black border border-gray-700 rounded-sm focus:outline-none focus:border-gold text-white" required="" /> 
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Email Address</label>
                            <input type="email" id="email" className="w-full p-3 bg-black border border-gray-700 rounded-sm focus:outline-none focus:border-gold text-white" required="" />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-white">Phone Number</label>
                            <input type="tel" id="phone" className="w-full p-3 bg-black border border-gray-700 rounded-sm focus:outline-none focus:border-gold text-white" required="" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">Message</label>
                            <textarea id="message" rows="5" className="w-full p-3 bg-black border border-gray-700 rounded-sm focus:outline-none focus:border-gold text-white" required=""></textarea>
                        </div>
                        <button type="submit" className="w-full py-3 bg-gold text-black font-semibold rounded-sm hover:bg-gold-dark transition duration-300 transform hover:scale-105">Send Message</button>
                    </form>
                </div>
                
                <div className="flex flex-col justify-between">
                    <div>
                        <h3 className="text-2xl font-bold mb-6 font-playfair text-white">Get in Touch</h3>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold flex items-center justify-center text-black">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div className="ml-4">
                                    <h4 className="font-semibold text-white">Visit Our Store</h4>
                                    <p className="text-gray-400">123 Luxury Avenue, Suite 500<br />New York, NY 10001</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold flex items-center justify-center text-black">
                                    <i className="fas fa-phone"></i>
                                </div>
                                <div className="ml-4">
                                    <h4 className="font-semibold text-white">Call Us</h4>
                                    <p className="text-gray-400">+1 (800) 123-4567</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold flex items-center justify-center text-black">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="ml-4">
                                    <h4 className="font-semibold text-white">Email Us</h4>
                                    <p className="text-gray-400">info@jluxe.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-12">
                        <h3 className="text-2xl font-bold mb-6 font-playfair text-white">Store Hours</h3>
                        <div className="space-y-2 text-white">
                            <div className="flex justify-between">
                                <span>Monday - Friday</span>
                                <span className="text-gold">10:00 AM - 8:00 PM</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Saturday</span>
                                <span className="text-gold">10:00 AM - 6:00 PM</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Sunday</span>
                                <span className="text-gold">12:00 PM - 5:00 PM</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact