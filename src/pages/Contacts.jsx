import Cform from "../components/Contact/Cform"
import Cinfo from "../components/Contact/Cinfo"
import Connect from "../components/Contact/Connect"
import FAQ from "../components/Contact/FAQ"
import Locations from "../components/Contact/Locations"
const Contacts = () => {
  return ( 
    <>
   <header class="contact-header pt-32 pb-20">
        <div class="container mx-auto px-4 text-center">
            <h1 class="text-5xl md:text-6xl font-bold mb-6 font-playfair">Contact <span class="text-gold">Us</span></h1>
            <p class="text-xl max-w-2xl mx-auto text-gray-200">We're here to assist you with any inquiries about our collections, services, or to schedule a private appointment.</p>
        </div>
    </header>
    <div class="bg-gray-900">
        <div class="container mx-auto px-4 py-3">
          <div class="flex items-center text-sm">
            <a href="#" class="text-gray-400 hover:text-gold transition">Home</a>
            <span class="mx-2 text-gray-600">/</span>
            <span class="text-gold">Contact</span>
          </div>
        </div>
      </div>
      <Cinfo />
      <Cform />
      <Locations />
      <FAQ />
      <Connect />
      </>

  )
}

export default Contacts