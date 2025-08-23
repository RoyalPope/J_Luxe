const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-16 pb-8">
        <div className="container mx-auto px-14">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                <div>
                    <h3 className="text-2xl font-bold mb-6 font-playfair text-gold">J Luxe</h3>
                    <p className="text-gray-400 mb-6">Crafting timeless elegance and luxury jewelry pieces for those who appreciate the finer things in life.</p>
                    <div className="flex space-x-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-gold hover:bg-gold hover:text-black transition duration-300 transform hover:scale-110">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-gold hover:bg-gold hover:text-black transition duration-300 transform hover:scale-110">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-gold hover:bg-gold hover:text-black transition duration-300 transform hover:scale-110">
                            <i className="fab fa-pinterest-p"></i>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-gold hover:bg-gold hover:text-black transition duration-300 transform hover:scale-110">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </div>
                </div>
                
                <div>
                    <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
                    <ul className="space-y-3">
                        <li><a href="#" className="text-gray-400 hover:text-gold transition duration-300">Home</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-gold transition duration-300">About Us</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-gold transition duration-300">Collections</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-gold transition duration-300">New Arrivals</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-gold transition duration-300">Contact</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 className="text-lg font-semibold mb-6 text-white">Collections</h4>
                    <ul className="space-y-3">
                        <li><a href="#" className="text-gray-400 hover:text-gold transition duration-300">Necklaces</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-gold transition duration-300">Bracelets</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-gold transition duration-300">Rings</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-gold transition duration-300">Earrings</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-gold transition duration-300">Limited Edition</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 className="text-lg font-semibold mb-6 text-white">Customer Service</h4>
                    <ul className="space-y-3">
                        <li><a href="#" className="text-gray-400 hover:text-gold transition duration-300">FAQ</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-gold transition duration-300">Shipping & Returns</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-gold transition duration-300">Warranty</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-gold transition duration-300">Care Instructions</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-gold transition duration-300">Size Guide</a></li>
                    </ul>
                </div>
            </div>
            
            <hr className="border-gray-800 mb-8" />
            
            <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-500 text-sm mb-4 md:mb-0">© 2024 J Luxe. All rights reserved. Powered by WAC TechX</p>
                <div className="flex space-x-6">
                    <a href="#" className="text-gray-500 text-sm hover:text-gold transition duration-300">Privacy Policy</a>
                    <a href="#" className="text-gray-500 text-sm hover:text-gold transition duration-300">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
