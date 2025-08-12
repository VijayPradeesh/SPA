import { Star, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    content: "The hot stone massage was absolutely divine. The ambiance, the skilled therapists, and the attention to detail made this the most relaxing experience I've ever had.",
    name: "Sarah Johnson",
    location: "Los Angeles, CA"
  },
  {
    content: "My couples massage with my partner was the perfect anniversary gift. The private suite was beautiful and the synchronized massage was incredibly relaxing.",
    name: "Michael Chen",
    location: "San Francisco, CA"
  },
  {
    content: "The facial treatment was transformative! My skin has never looked better. The products they use are top-quality and the results speak for themselves.",
    name: "Emma Rodriguez",
    location: "Miami, FL"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-spa-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-spa-primary mb-4">
            What Our Guests Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover why thousands of guests choose Serenity Spa for their wellness journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              data-testid={`testimonial-${index}`}
            >
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="flex text-spa-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed" data-testid={`text-testimonial-content-${index}`}>
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-spa-beige rounded-full flex items-center justify-center">
                    <User className="text-spa-primary" />
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-spa-primary" data-testid={`text-testimonial-name-${index}`}>
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500" data-testid={`text-testimonial-location-${index}`}>
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
