import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const bookingFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(1, "Phone number is required"),
  service: z.string().min(1, "Please select a service"),
  preferredDate: z.string().min(1, "Please select a preferred date"),
  preferredTime: z.string().min(1, "Please select a preferred time"),
  specialRequests: z.string().optional(),
  agreeToTerms: z.boolean().refine(val => val === true, "You must agree to the terms and conditions"),
});

type BookingFormData = z.infer<typeof bookingFormSchema>;

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const services = [
  { value: "hot-stone", label: "Hot Stone Massage - $150 (90 min)" },
  { value: "facial", label: "Rejuvenating Facial - $120 (75 min)" },
  { value: "aromatherapy", label: "Aromatherapy Session - $100 (60 min)" },
  { value: "body-wrap", label: "Detox Body Wrap - $130 (80 min)" },
  { value: "couples", label: "Couples Massage - $280 (90 min)" },
  { value: "meditation", label: "Wellness Meditation - $80 (45 min)" },
];

const timeSlots = [
  { value: "09:00", label: "9:00 AM" },
  { value: "10:00", label: "10:00 AM" },
  { value: "11:00", label: "11:00 AM" },
  { value: "12:00", label: "12:00 PM" },
  { value: "13:00", label: "1:00 PM" },
  { value: "14:00", label: "2:00 PM" },
  { value: "15:00", label: "3:00 PM" },
  { value: "16:00", label: "4:00 PM" },
  { value: "17:00", label: "5:00 PM" },
  { value: "18:00", label: "6:00 PM" },
];

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const { toast } = useToast();
  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      preferredDate: "",
      preferredTime: "",
      specialRequests: "",
      agreeToTerms: false,
    },
  });

  const bookingMutation = useMutation({
    mutationFn: async (data: Omit<BookingFormData, 'agreeToTerms'>) => {
      const response = await apiRequest("POST", "/api/appointments", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Appointment booked successfully!",
        description: "We'll contact you within 24 hours to confirm your appointment.",
      });
      form.reset();
      onClose();
    },
    onError: (error) => {
      toast({
        title: "Error booking appointment",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: BookingFormData) => {
    const { agreeToTerms, ...appointmentData } = data;
    bookingMutation.mutate(appointmentData);
  };

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto" data-testid="modal-booking">
        <DialogHeader>
          <DialogTitle className="font-serif text-3xl font-bold text-spa-primary">
            Book Your Appointment
          </DialogTitle>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">First Name *</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="border-spa-beige focus:ring-spa-primary/50"
                        data-testid="input-booking-first-name"
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
                    <FormLabel className="text-gray-700 font-medium">Last Name *</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="border-spa-beige focus:ring-spa-primary/50"
                        data-testid="input-booking-last-name"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">Email *</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        {...field}
                        className="border-spa-beige focus:ring-spa-primary/50"
                        data-testid="input-booking-email"
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
                    <FormLabel className="text-gray-700 font-medium">Phone *</FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        {...field}
                        className="border-spa-beige focus:ring-spa-primary/50"
                        data-testid="input-booking-phone"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-medium">Select Service *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="border-spa-beige focus:ring-spa-primary/50" data-testid="select-booking-service">
                        <SelectValue placeholder="Choose a service..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.value} value={service.value}>
                          {service.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="preferredDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">Preferred Date *</FormLabel>
                    <FormControl>
                      <Input
                        type="date"
                        min={getTomorrowDate()}
                        {...field}
                        className="border-spa-beige focus:ring-spa-primary/50"
                        data-testid="input-booking-date"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="preferredTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">Preferred Time *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="border-spa-beige focus:ring-spa-primary/50" data-testid="select-booking-time">
                          <SelectValue placeholder="Select time..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {timeSlots.map((slot) => (
                          <SelectItem key={slot.value} value={slot.value}>
                            {slot.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="specialRequests"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-medium">Special Requests</FormLabel>
                  <FormControl>
                    <Textarea
                      rows={3}
                      placeholder="Any allergies, preferences, or special requests..."
                      {...field}
                      className="border-spa-beige focus:ring-spa-primary/50 resize-none"
                      data-testid="textarea-booking-requests"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="agreeToTerms"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="data-[state=checked]:bg-spa-primary data-[state=checked]:border-spa-primary"
                      data-testid="checkbox-booking-terms"
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-sm text-gray-600 cursor-pointer">
                      I agree to the terms and conditions and cancellation policy
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            
            <div className="flex space-x-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1 border-spa-primary text-spa-primary hover:bg-spa-primary/10 transition-colors duration-300"
                data-testid="button-booking-cancel"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={bookingMutation.isPending}
                className="flex-1 bg-spa-primary hover:bg-spa-gold text-white transition-colors duration-300"
                data-testid="button-booking-submit"
              >
                {bookingMutation.isPending ? "Booking..." : "Book Appointment"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
