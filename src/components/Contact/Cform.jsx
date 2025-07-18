const Cform = () => {
  return (
    <section class="py-16 bg-gray-900">
        <div class="container mx-auto px-12">
            <div class="flex flex-col md:flex-row gap-12">
                <div class="md:w-1/2">
                    <h2 class="text-3xl md:text-4xl font-bold mb-6 font-playfair">Send Us a <span class="text-gold">Message</span></h2>
                    <p class="text-gray-200 mb-8">We'd love to hear from you. Fill out the form below and our team will get back to you within 24 hours.</p>
                    
                    <form id="contactForm" class="space-y-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label for="firstName" class="block text-sm font-medium text-gray-200 mb-2">First Name*</label>
                                <input type="text" id="firstName" name="firstName" class="w-full px-12 py-3 rounded-sm input-field text-white focus:outline-none" required="" />
                            </div>
                            <div>
                                <label for="lastName" class="block text-sm font-medium text-gray-200 mb-2">Last Name*</label>
                                <input type="text" id="lastName" name="lastName" class="w-full px-12 py-3 rounded-sm input-field text-white focus:outline-none" required="" />
                            </div>
                        </div>
                        
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-200 mb-2">Email Address*</label>
                            <input type="email" id="email" name="email" class="w-full px-12 py-3 rounded-sm input-field text-white focus:outline-none" required="" />
                        </div>
                        
                        <div>
                            <label for="phone" class="block text-sm font-medium text-gray-200 mb-2">Phone Number</label>
                            <input type="tel" id="phone" name="phone" class="w-full px-12 py-3 rounded-sm input-field text-white focus:outline-none" />
                        </div>
                        
                        <div>
                            <label for="subject" class="block text-sm font-medium text-gray-200 mb-2">Subject*</label>
                            <select id="subject" name="subject" class="w-full px-12 py-3 rounded-sm input-field text-white focus:outline-none" required="">
                                <option value="" disabled="" selected="">Please select</option>
                                <option value="general">General Inquiry</option>
                                <option value="product">Product Information</option>
                                <option value="appointment">Schedule an Appointment</option>
                                <option value="custom">Custom Design Request</option>
                                <option value="support">Customer Support</option>
                            </select>
                        </div>
                        
                        <div>
                            <label for="message" class="block text-sm font-medium text-gray-200 mb-2">Message*</label>
                            <textarea id="message" name="message" rows="5" class="w-full px-12 py-3 rounded-sm input-field text-white focus:outline-none" required=""></textarea>
                        </div>
                        
                        <div class="flex items-start">
                            <input type="checkbox" id="newsletter" name="newsletter" class="mt-1 mr-2" />
                            <label for="newsletter" class="text-sm text-gray-200">Subscribe to our newsletter to receive updates on new collections and exclusive events.</label>
                        </div>
                        
                        <div>
                            <button type="submit" class="w-full px-6 py-4 bg-gold text-black font-bold rounded-sm hover:bg-gold-dark transition">Send Message</button>
                        </div>
                        
                        <p class="text-xs text-gray-400">By submitting this form, you agree to our <a href="#" class="text-gold hover:underline">Privacy Policy</a>.</p>
                    </form>
                </div>
                
                <div class="md:w-1/2 mt-12 md:mt-0">
                    <div class="bg-gray-800 p-8 rounded-lg h-full">
                        <h3 class="text-2xl font-bold mb-6 font-playfair">Private <span class="text-gold">Appointments</span></h3>
                        <p class="text-gray-200 mb-6">Experience the ultimate in personalized service with a private appointment at one of our boutiques. Our expert consultants will guide you through our collections in an intimate setting.</p>
                        
                        <div class="mb-8">
                            <h4 class="text-lg font-semibold mb-4">Services Available:</h4>
                            <ul class="space-y-3">
                                <li class="flex items-start">
                                    <i class="fas fa-check text-gold mt-1 mr-3"></i>
                                    <span class="text-gray-200">Personal styling consultation</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-gold mt-1 mr-3"></i>
                                    <span class="text-gray-200">Custom design services</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-gold mt-1 mr-3"></i>
                                    <span class="text-gray-200">Engagement ring selection</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-gold mt-1 mr-3"></i>
                                    <span class="text-gray-200">Collection preview</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-gold mt-1 mr-3"></i>
                                    <span class="text-gray-200">Jewelry care and maintenance</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div class="mb-8">
                            <h4 class="text-lg font-semibold mb-4">Business Hours:</h4>
                            <ul class="space-y-2">
                                <li class="flex justify-between">
                                    <span class="text-gray-200">Monday - Friday</span>
                                    <span class="text-gray-200">10:00 AM - 7:00 PM</span>
                                </li>
                                <li class="flex justify-between">
                                    <span class="text-gray-200">Saturday</span>
                                    <span class="text-gray-200">11:00 AM - 6:00 PM</span>
                                </li>
                                <li class="flex justify-between">
                                    <span class="text-gray-200">Sunday</span>
                                    <span class="text-gray-200">By appointment only</span>
                                </li>
                            </ul>
                        </div>
                        
                        <a href="#" class="inline-block px-6 py-3 border border-gold text-gold font-bold rounded-sm hover:bg-gold hover:text-black transition">Book an Appointment</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Cform