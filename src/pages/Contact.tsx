import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you shortly.");
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary tracking-[0.2em] uppercase text-sm font-medium mb-2">Get in Touch</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">Contact Us</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info & Map */}
          <div className="space-y-8">
            <div className="space-y-4">
              {[
                { icon: MapPin, label: "Address", value: "123 Paradise Beach Road, Phuket, Thailand 83100" },
                { icon: Phone, label: "Phone", value: "+66 123 456 789" },
                { icon: Mail, label: "Email", value: "info@grandhaven.com" },
                { icon: Clock, label: "Front Desk", value: "24/7 Available" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="gold-gradient rounded-lg p-2">
                    <Icon size={18} className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{label}</p>
                    <p className="text-sm text-muted-foreground">{value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-xl overflow-hidden shadow-luxury h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.0!2d98.3!3d7.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNTQnMDAuMCJOIDk4wrAxOCcwMC4wIkU!5e0!3m2!1sen!2sth!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Hotel Location"
              />
            </div>
          </div>

          {/* Form */}
          <div className="bg-card rounded-xl shadow-luxury p-8">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="contactName">Name</Label>
                <Input id="contactName" placeholder="Your name" required />
              </div>
              <div>
                <Label htmlFor="contactEmail">Email</Label>
                <Input id="contactEmail" type="email" placeholder="your@email.com" required />
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="How can we help?" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Tell us more..." rows={5} required />
              </div>
              <Button type="submit" className="w-full gold-gradient border-0">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
