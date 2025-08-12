import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import About from "@/components/sections/about";
import Gallery from "@/components/sections/gallery";
import Testimonials from "@/components/sections/testimonials";
import Contact from "@/components/sections/contact";
import Footer from "@/components/footer";
import BookingModal from "@/components/booking-modal";
import { useState } from "react";

export default function Home() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-spa-cream">
      <Navigation onBookingClick={() => setIsBookingModalOpen(true)} />
      <Hero onBookingClick={() => setIsBookingModalOpen(true)} />
      <Services />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </div>
  );
}
