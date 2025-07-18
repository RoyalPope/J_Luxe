import React from 'react'

const Contact = () => {
  return (
    <section id="contact" class="py-20 bg-black">
        <div class="container mx-auto px-14">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold mb-4 font-playfair">Contact <span class="text-gold">Us</span></h2>
                <p class="text-gray-300 max-w-2xl mx-auto">Have questions about our collections or need assistance? We're here to help.</p>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div class="bg-gray-900 p-8 rounded-lg">
                    <form id="contactForm" class="space-y-6">
                        <div>
                            <label for="fullName" class="block mb-2 text-sm font-medium">Full Name</label>
                            <input type="text" id="fullName" class="w-full p-3 bg-black border border-gray-700 rounded-sm focus:outline-none focus:border-gold" required="" /> 
                        </div>
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium">Email Address</label>
                            <input type="email" id="email" class="w-full p-3 bg-black border border-gray-700 rounded-sm focus:outline-none focus:border-gold" required="" />
                        </div>
                        <div>
                            <label for="phone" class="block mb-2 text-sm font-medium">Phone Number</label>
                            <input type="tel" id="phone" class="w-full p-3 bg-black border border-gray-700 rounded-sm focus:outline-none focus:border-gold" required="" />
                        </div>
                        <div>
                            <label for="message" class="block mb-2 text-sm font-medium">Message</label>
                            <textarea id="message" rows="5" class="w-full p-3 bg-black border border-gray-700 rounded-sm focus:outline-none focus:border-gold" required=""></textarea>
                        </div>
                        <button type="submit" class="w-full py-3 bg-gold text-black font-semibold rounded-sm hover:bg-gold-dark transition">Send Message</button>
                    </form>
                </div>
                
                <div class="flex flex-col justify-between">
                    <div>
                        <h3 class="text-2xl font-bold mb-6 font-playfair">Get in Touch</h3>
                        <div class="space-y-4">
                            <div class="flex items-start">
                                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-gold flex items-center justify-center text-black">
                                    <i class="fas fa-map-marker-alt"></i>
                                </div>
                                <div class="ml-4">
                                    <h4 class="font-semibold">Visit Our Store</h4>
                                    <p class="text-gray-400">123 Luxury Avenue, Suite 500<br />New York, NY 10001</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-gold flex items-center justify-center text-black">
                                    <i class="fas fa-phone"></i>
                                </div>
                                <div class="ml-4">
                                    <h4 class="font-semibold">Call Us</h4>
                                    <p class="text-gray-400">+1 (800) 123-4567</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-gold flex items-center justify-center text-black">
                                    <i class="fas fa-envelope"></i>
                                </div>
                                <div class="ml-4">
                                    <h4 class="font-semibold">Email Us</h4>
                                    <p class="text-gray-400">info@jluxe.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mt-12">
                        <h3 class="text-2xl font-bold mb-6 font-playfair">Store Hours</h3>
                        <div class="space-y-2">
                            <div class="flex justify-between">
                                <span>Monday - Friday</span>
                                <span class="text-gold">10:00 AM - 8:00 PM</span>
                            </div>
                            <div class="flex justify-between">
                                <span>Saturday</span>
                                <span class="text-gold">10:00 AM - 6:00 PM</span>
                            </div>
                            <div class="flex justify-between">
                                <span>Sunday</span>
                                <span class="text-gold">12:00 PM - 5:00 PM</span>
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