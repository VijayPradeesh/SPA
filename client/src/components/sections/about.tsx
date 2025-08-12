import { Award } from "lucide-react";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "5000+", label: "Happy Clients" },
  { value: "50+", label: "Treatments" },
  { value: "15+", label: "Awards Won" }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-spa-beige">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-spa-primary mb-6">
              Where Wellness Meets Luxury
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              For over a decade, Serenity Spa has been a haven of tranquility, offering world-class treatments in an atmosphere of pure serenity. Our expert therapists combine ancient healing traditions with modern wellness techniques.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Every detail has been carefully crafted to ensure your journey to wellness is both transformative and memorable. From our sustainably sourced products to our award-winning team, we're committed to your complete well-being.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center" data-testid={`stat-${index}`}>
                  <div className="text-3xl font-bold text-spa-primary" data-testid={`text-stat-value-${index}`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-600" data-testid={`text-stat-label-${index}`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Our Professional Spa Team" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <Award className="text-spa-gold text-2xl" />
                <div>
                  <div className="font-semibold text-spa-primary">Award Winning</div>
                  <div className="text-sm text-gray-600">Best Spa 2023</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
