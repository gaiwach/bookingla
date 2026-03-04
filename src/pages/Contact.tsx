import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/i18n/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t("contact.success"));
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary tracking-[0.2em] uppercase text-sm font-medium mb-2">{t("contact.subtitle")}</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">{t("contact.title")}</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-4">
              {[
                { icon: MapPin, label: t("contact.address"), value: "123 Paradise Beach Road, Phuket, Thailand 83100" },
                { icon: Phone, label: t("contact.phone"), value: "+66 123 456 789" },
                { icon: Mail, label: t("contact.email"), value: "info@grandhaven.com" },
                { icon: Clock, label: t("contact.frontDesk"), value: t("contact.available") },
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

          <div className="bg-card rounded-xl shadow-luxury p-8">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">{t("contact.sendMessage")}</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="contactName">{t("contact.name")}</Label>
                <Input id="contactName" placeholder={t("contact.name")} required />
              </div>
              <div>
                <Label htmlFor="contactEmail">{t("contact.email")}</Label>
                <Input id="contactEmail" type="email" placeholder="your@email.com" required />
              </div>
              <div>
                <Label htmlFor="subject">{t("contact.subject")}</Label>
                <Input id="subject" placeholder={t("contact.subject")} />
              </div>
              <div>
                <Label htmlFor="message">{t("contact.message")}</Label>
                <Textarea id="message" placeholder={t("contact.message")} rows={5} required />
              </div>
              <Button type="submit" className="w-full gold-gradient border-0">{t("contact.send")}</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
