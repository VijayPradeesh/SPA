import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    id: "hot-stone",
    name: "Hot Stone Massage",
    description: "Melt away tension with our signature hot stone therapy, combining heated volcanic stones with expert massage techniques.",
    price: "$150",
    duration: "90 min",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
  },
  {
    id: "facial",
    name: "Rejuvenating Facial",
    description: "Restore your skin's natural radiance with our customized facial treatments using premium organic ingredients.",
    price: "$120",
    duration: "75 min",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
  },
  {
    id: "aromatherapy",
    name: "Aromatherapy Session",
    description: "Experience the healing power of essential oils in a personalized aromatherapy journey for mind and body.",
    price: "$100",
    duration: "60 min",
    image: "https://pixabay.com/get/gc675c0e68d0882c66f3e24600dc5932eaef7d9c2472e63fc75da6d0ed2a5b4e2487bc720aa3ae1da331a0c425ca9b45a3156bf7ffd941c5091440547c3ed44db_1280.jpg"
  },
  {
    id: "body-wrap",
    name: "Detox Body Wrap",
    description: "Purify and nourish your skin with our mineral-rich body wrap treatments using natural clay and seaweed.",
    price: "$130",
    duration: "80 min",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
  },
  {
    id: "couples",
    name: "Couples Massage",
    description: "Share a moment of bliss with your loved one in our private couples suite with synchronized massage therapy.",
    price: "$280",
    duration: "90 min",
    image: "https://pixabay.com/get/ge6162f251522134e21e1aa428d78039820b1085f1a13d2593f99c8c800869737571fa1344d0c5cb05bf0c43f0192ef289f924c5e33924f7918ca598136cc815c_1280.jpg"
  },
  {
    id: "meditation",
    name: "Wellness Meditation",
    description: "Find inner peace through guided meditation sessions in our tranquil sanctuary designed for spiritual renewal.",
    price: "$80",
    duration: "45 min",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-spa-primary mb-4">
            Our Signature Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Indulge in our carefully curated treatments designed to restore balance, rejuvenate your spirit, and awaken your senses.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card 
              key={service.id} 
              className="bg-spa-cream rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              data-testid={`card-service-${service.id}`}
            >
              <img 
                src={service.image} 
                alt={service.name} 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="font-serif text-2xl font-semibold text-spa-primary mb-3">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-spa-gold font-semibold text-lg" data-testid={`text-price-${service.id}`}>
                    {service.price}
                  </span>
                  <span className="text-gray-500" data-testid={`text-duration-${service.id}`}>
                    {service.duration}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
