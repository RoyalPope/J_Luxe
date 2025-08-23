import React, { useState } from 'react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqData = [
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we offer international shipping to most countries. Shipping rates and delivery times vary depending on the destination. All international orders are shipped with tracking and insurance. Please note that customs duties and taxes may apply, and these are the responsibility of the recipient."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for all standard collection items in their original, unworn condition with all original packaging and documentation. Custom pieces are non-returnable. Please contact our customer service team to initiate a return."
    },
    {
      question: "Do you offer jewelry repair services?",
      answer: "Yes, we provide comprehensive repair and maintenance services for all J Luxe pieces. Our expert craftsmen can handle everything from simple cleaning to complex restorations. For pieces purchased from J Luxe, we offer complimentary cleaning and inspection services."
    },
    {
      question: "Can I commission a custom piece?",
      answer: "Absolutely. We specialize in creating bespoke jewelry pieces tailored to your vision. Our design team will work closely with you from initial concept to final creation. To begin the custom design process, please contact us to schedule a consultation with one of our designers."
    },
    {
      question: "How do I care for my J Luxe jewelry?",
      answer: "We recommend gentle cleaning with a soft cloth after each wear. For more thorough cleaning, use mild soap and warm water with a soft brush. Store your pieces separately in the provided J Luxe boxes or pouches to prevent scratching. We offer complimentary professional cleaning at any of our boutiques, and we recommend having your pieces professionally inspected once a year."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for custom orders. We also offer flexible payment plans for select items. All transactions are processed securely with industry-standard encryption."
    },
    {
      question: "Do you offer gift wrapping?",
      answer: "Yes, we offer complimentary luxury gift wrapping for all orders. Each piece comes beautifully packaged in our signature J Luxe boxes with a personalized message card. We also offer premium gift wrapping services for special occasions."
    },
    {
      question: "How can I verify the authenticity of my jewelry?",
      answer: "All J Luxe pieces come with a certificate of authenticity and are engraved with our signature mark. We also provide detailed documentation including materials, craftsmanship details, and care instructions. You can verify authenticity through our online verification system or by visiting any of our boutiques."
    }
  ];

  return (
    <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-playfair">Frequently Asked <span className="text-gold">Questions</span></h2>
            
            <div className="max-w-3xl mx-auto">
                {faqData.map((item, index) => (
                  <div key={index} className="accordion-item py-4 border-b border-gray-800 last:border-b-0">
                    <button 
                      className="accordion-header w-full flex justify-between items-center text-left hover:text-gold transition-colors"
                      onClick={() => toggleItem(index)}
                    >
                      <h3 className="text-xl font-semibold text-white">{item.question}</h3>
                      <i className={`fas fa-chevron-down text-gold transition-transform duration-300 ${
                        openItems.has(index) ? 'rotate-180' : ''
                      }`}></i>
                    </button>
                    <div className={`accordion-content pt-4 overflow-hidden transition-all duration-300 ${
                      openItems.has(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                ))}
            </div>
            
            <div className="text-center mt-12">
                <p className="text-gray-300 mb-6">Can't find the answer you're looking for?</p>
                <a href="#contact" className="inline-block px-8 py-3 bg-gold text-black font-bold rounded-sm hover:bg-gold-dark transition duration-300 transform hover:scale-105">Contact Customer Support</a>
            </div>
        </div>
    </section>
  );
};

export default FAQ;