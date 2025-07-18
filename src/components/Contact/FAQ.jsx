const FAQ = () => {
  return (
    <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-playfair">Frequently Asked <span className="text-gold">Questions</span></h2>
            
            <div className="max-w-3xl mx-auto">
                {/* <!-- FAQ Item 1 --> */}
                <div className="accordion-item py-4">
                    <button className="accordion-header w-full flex justify-between items-center text-left">
                        <h3 className="text-xl font-semibold">Do you offer international shipping?</h3>
                        <i className="fas fa-plus text-gold transition-transform"></i>
                    </button>
                    <div className="accordion-content pt-4">
                        <p className="text-gray-300">Yes, we offer international shipping to most countries. Shipping rates and delivery times vary depending on the destination. All international orders are shipped with tracking and insurance. Please note that customs duties and taxes may apply, and these are the responsibility of the recipient.</p>
                    </div>
                </div>
                
                {/* <!-- FAQ Item 2 --> */}
                <div className="accordion-item py-4">
                    <button className="accordion-header w-full flex justify-between items-center text-left">
                        <h3 className="text-xl font-semibold">What is your return policy?</h3>
                        <i className="fas fa-plus text-gold transition-transform"></i>
                    </button>
                    <div className="accordion-content pt-4">
                        <p className="text-gray-300">We offer a 30-day return policy for all standard collection items in their original, unworn condition with all original packaging and documentation. Custom pieces are non-returnable. Please contact our customer service team to initiate a return.</p>
                    </div>
                </div>
                
                {/* <!-- FAQ Item 3 --> */}
                <div className="accordion-item py-4">
                    <button className="accordion-header w-full flex justify-between items-center text-left">
                        <h3 className="text-xl font-semibold">Do you offer jewelry repair services?</h3>
                        <i className="fas fa-plus text-gold transition-transform"></i>
                    </button>
                    <div className="accordion-content pt-4">
                        <p className="text-gray-300">Yes, we provide comprehensive repair and maintenance services for all J Luxe pieces. Our expert craftsmen can handle everything from simple cleaning to complex restorations. For pieces purchased from J Luxe, we offer complimentary cleaning and inspection services.</p>
                    </div>
                </div>
                
                {/* <!-- FAQ Item 4 --> */}
                <div className="accordion-item py-4">
                    <button className="accordion-header w-full flex justify-between items-center text-left">
                        <h3 className="text-xl font-semibold">Can I commission a custom piece?</h3>
                        <i className="fas text-gold transition-transform fa-plus"></i>
                    </button>
                    <div className="accordion-content pt-4">
                        <p className="text-gray-300">Absolutely. We specialize in creating bespoke jewelry pieces tailored to your vision. Our design team will work closely with you from initial concept to final creation. To begin the custom design process, please contact us to schedule a consultation with one of our designers.</p>
                    </div>
                </div>
                
                {/* <!-- FAQ Item 5 --> */}
                <div className="accordion-item py-4">
                    <button className="accordion-header w-full flex justify-between items-center text-left">
                        <h3 className="text-xl font-semibold">How do I care for my J Luxe jewelry?</h3>
                        <i className="fas text-gold transition-transform fa-plus"></i>
                    </button>
                    <div className="accordion-content pt-4">
                        <p className="text-gray-300">We recommend gentle cleaning with a soft cloth after each wear. For more thorough cleaning, use mild soap and warm water with a soft brush. Store your pieces separately in the provided J Luxe boxes or pouches to prevent scratching. We offer complimentary professional cleaning at any of our boutiques, and we recommend having your pieces professionally inspected once a year.</p>
                    </div>
                </div>
            </div>
            
            <div className="text-center mt-12">
                <p className="text-gray-300 mb-6">Can't find the answer you're looking for?</p>
                <a href="#" className="inline-block px-8 py-3 bg-gold text-black font-bold rounded-sm hover:bg-gold-dark transition">Contact Customer Support</a>
            </div>
        </div>
    </section>
  )
}

export default FAQ