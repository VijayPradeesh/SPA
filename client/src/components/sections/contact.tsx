import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      content: ["123 Wellness Boulevard", "Serenity Hills, CA 90210"]
    },
    {
      icon: Phone,
      title: "Phone",
      content: ["(555) 123-SERENITY", "(555) 123-7373"]
    },
    {
      icon: Mail,
      title: "Email",
      content: ["hello@serenityspa.com"]
    },
    {
      icon: Clock,
      title: "Hours",
      content: ["Monday - Friday: 9:00 AM - 8:00 PM", "Saturday - Sunday: 8:00 AM - 9:00 PM"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-spa-primary mb-4">
            Visit Our Sanctuary
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to begin your wellness journey? Contact us to schedule your appointment or learn more about our services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start space-x-4" data-testid={`contact-info-${index}`}>
                <div className="w-12 h-12 bg-spa-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <info.icon className="text-white w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-spa-primary text-lg mb-2">{info.title}</h3>
                  <div className="text-gray-600">
                    {info.content.map((line, lineIndex) => (
                      <p key={lineIndex} data-testid={`text-contact-${info.title.toLowerCase()}-${lineIndex}`}>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Contact Form */}
          <Card className="bg-spa-cream p-8 rounded-2xl">
            <CardContent className="p-0">
              <h3 className="font-serif text-2xl font-semibold text-spa-primary mb-6">
                Send us a Message
              </h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-medium">First Name</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="border-spa-beige focus:ring-spa-primary/50 transition-all duration-300"
                              data-testid="input-first-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-medium">Last Name</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="border-spa-beige focus:ring-spa-primary/50 transition-all duration-300"
                              data-testid="input-last-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium">Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            {...field}
                            className="border-spa-beige focus:ring-spa-primary/50 transition-all duration-300"
                            data-testid="input-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium">Phone</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            {...field}
                            className="border-spa-beige focus:ring-spa-primary/50 transition-all duration-300"
                            data-testid="input-phone"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={4}
                            placeholder="Tell us about your wellness goals..."
                            {...field}
                            className="border-spa-beige focus:ring-spa-primary/50 resize-none transition-all duration-300"
                            data-testid="textarea-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full bg-spa-primary hover:bg-spa-gold text-white py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                    data-testid="button-send-message"
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
