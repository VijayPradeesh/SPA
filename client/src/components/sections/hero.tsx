import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface HeroProps {
  onBookingClick: () => void;
}

export default function Hero({ onBookingClick }: HeroProps) {
  const handleScrollToServices = () => {
    const servicesSection = document.querySelector('#services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-spa-primary/40 via-spa-sage/30 to-transparent" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Discover Your
          <span className="block text-spa-beige">Inner Peace</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Escape the ordinary and immerse yourself in a sanctuary of tranquility where wellness meets luxury.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={onBookingClick}
            className="bg-spa-primary hover:bg-spa-gold text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105"
            data-testid="button-book-experience"
          >
            Book Your Experience
          </Button>
          <Button
            variant="outline"
            onClick={handleScrollToServices}
            className="border-2 border-white text-white hover:bg-white hover:text-spa-primary px-8 py-4 rounded-full text-lg font-medium transition-all duration-300"
            data-testid="button-explore-services"
          >
            Explore Services
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown className="text-2xl" />
      </div>
    </section>
  );
}
