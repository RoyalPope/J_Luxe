import { useState } from 'react';
import Cform from "../components/Contact/Cform"
import Cinfo from "../components/Contact/Cinfo"
import Connect from "../components/Contact/Connect"
import FAQ from "../components/Contact/FAQ"
import Locations from "../components/Contact/Locations"
import AppointmentModal from "../components/Contact/AppointmentModal"

const Contacts = () => {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  const handleBookAppointment = () => {
    setIsAppointmentModalOpen(true);
  };

  const closeAppointmentModal = () => {
    setIsAppointmentModalOpen(false);
  };

  return (
    <>
      <header className="contact-header pt-32 pb-20 bg-black">
        <div className="container mx-auto px-14 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-playfair">Contact <span className="text-gold">Us</span></h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-200">We're here to assist you with any inquiries about our collections, services, or to schedule a private appointment.</p>
        </div>
      </header>
      
      <div className="bg-gray-900">
        <div className="container mx-auto px-14 py-3">
          <div className="flex items-center text-sm">
            <a href="/" className="text-gray-400 hover:text-gold transition duration-300">Home</a>
            <span className="mx-2 text-gray-600">/</span>
            <span className="text-gold">Contact</span>
          </div>
        </div>
      </div>
      
      <Cinfo onBookAppointment={handleBookAppointment} />
      <Cform />
      <Locations />
      <FAQ />
      <Connect />

      {/* Appointment Modal */}
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={closeAppointmentModal}
      />
    </>
  );
};

export default Contacts;