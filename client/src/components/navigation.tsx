import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Waves, Menu, X } from "lucide-react";

interface NavigationProps {
  onBookingClick: () => void;
}

export default function Navigation({ onBookingClick }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md' : 'bg-white/90 backdrop-blur-md'
    } border-b border-spa-beige/30`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Waves className="text-spa-primary text-2xl" />
            <span className="font-serif text-2xl font-semibold text-spa-primary">Serenity Spa</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-gray-700 hover:text-spa-primary transition-colors duration-300"
                data-testid={`nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={onBookingClick}
              className="bg-spa-primary text-white hover:bg-spa-gold transition-colors duration-300 rounded-full px-6 py-2"
              data-testid="button-book-now-nav"
            >
              Book Now
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="md:hidden text-spa-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="text-xl" /> : <Menu className="text-xl" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-spa-beige/30">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left text-gray-700 hover:text-spa-primary transition-colors duration-300"
                data-testid={`nav-mobile-${link.label.toLowerCase()}`}
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={onBookingClick}
              className="w-full bg-spa-primary text-white hover:bg-spa-gold transition-colors duration-300 rounded-full py-3"
              data-testid="button-book-now-mobile"
            >
              Book Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
