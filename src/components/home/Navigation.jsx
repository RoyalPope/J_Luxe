import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
   <>
   <nav class="fixed w-full z-10 backdrop-blur-sm">
          <div class="container mx-auto px-14 py-4 flex justify-between items-center">
              <div class="flex items-center">
                  <h1 class="text-3xl font-bold text-gold font-playfair">J Luxe</h1>
              </div>
              <div class="hidden md:flex space-x-8">
                  <Link to="/" class="nav-link font-montserrat text-white hover:text-gold-light transition">Home</Link>
                  <Link to="/Collections" class="nav-link font-montserrat text-white hover:text-gold-light transition">Collections</Link>
                  <Link to="/About" class="nav-link font-montserrat text-white hover:text-gold-light transition">About</Link>
                  <Link to="/Contact" class="nav-link font-montserrat text-white hover:text-gold-light transition">Contact</Link>
              </div>
              <div class="flex items-center space-x-4">
                  <Link to="#" class="text-white hover:text-gold-light transition">
                      <i class="fas fa-search text-lg"></i>
                  </Link>
                  <Link to="#" class="text-white hover:text-gold-light transition">
                      <i class="fas fa-user text-lg"></i>
                  </Link>
                  <Link to="#" class="text-white hover:text-gold-light transition relative">
                      <i class="fas fa-shopping-bag text-lg"></i>
                      <span class="absolute -top-2 -right-2 bg-gold-light text-black rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">0</span>
                  </Link>
                  <button class="md:hidden text-white">
                      <i class="fas fa-bars text-xl"></i>
                  </button>
              </div>
          </div>
      </nav>
        </>
  );
}

export default Navigation