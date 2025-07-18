import React from 'react'

const Cinfo = () => {
  return (
    <section class="py-16 bg-black">
        <div class="container mx-auto px-12">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* <!-- Contact Card 1 --> */}
                <div class="contact-card bg-gray-900 p-8 rounded-lg border border-gray-800 text-center">
                    <div class="w-16 h-16 rounded-full bg-gold bg-opacity-20 flex items-center justify-center mb-6 mx-auto">
                        <i class="fas fa-map-marker-alt text-2xl text-gold"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-4">Visit Us</h3>
                    <p class="text-gray-200 mb-2">123 Luxury Avenue</p>
                    <p class="text-gray-200 mb-2">Fashion District</p>
                    <p class="text-gray-200 mb-4">New York, NY 10001</p>
                    <a href="#locations" class="text-gold hover:underline">View All Locations</a>
                </div>
                
                {/* <!-- Contact Card 2 --> */}
                <div class="contact-card bg-gray-900 p-8 rounded-lg border border-gray-800 text-center">
                    <div class="w-16 h-16 rounded-full bg-gold bg-opacity-20 flex items-center justify-center mb-6 mx-auto">
                        <i class="fas fa-phone-alt text-2xl text-gold"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-4">Call Us</h3>
                    <p class="text-gray-200 mb-2">Customer Service:</p>
                    <p class="text-gold mb-4">+1 (800) 555-LUXE</p>
                    <p class="text-gray-200 mb-2">Private Appointments:</p>
                    <p class="text-gold mb-4">+1 (800) 777-JLUX</p>
                    <p class="text-gray-200 text-sm">Monday - Friday: 9am - 6pm EST</p>
                    <p class="text-gray-200 text-sm">Saturday: 10am - 4pm EST</p>
                </div>
                
                {/* <!-- Contact Card 3 --> */}
                <div class="contact-card bg-gray-900 p-8 rounded-lg border border-gray-800 text-center">
                    <div class="w-16 h-16 rounded-full bg-gold bg-opacity-20 flex items-center justify-center mb-6 mx-auto">
                        <i class="fas fa-envelope text-2xl text-gold"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-4">Email Us</h3>
                    <p class="text-gray-200 mb-2">General Inquiries:</p>
                    <p class="text-gold mb-4">info@jluxejewelry.com</p>
                    <p class="text-gray-200 mb-2">Customer Support:</p>
                    <p class="text-gold mb-4">support@jluxejewelry.com</p>
                    <p class="text-gray-200 mb-2">Press &amp; Media:</p>
                    <p class="text-gold">press@jluxejewelry.com</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Cinfo