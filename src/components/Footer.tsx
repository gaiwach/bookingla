import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-display text-2xl font-bold mb-4">
            <span className="text-primary">Grand</span>Haven
          </h3>
          <p className="text-secondary-foreground/70 text-sm leading-relaxed">{t("footer.desc")}</p>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold mb-4">{t("footer.quickLinks")}</h4>
          <div className="space-y-2 text-sm">
            <Link to="/" className="block text-secondary-foreground/70 hover:text-primary transition-colors">{t("nav.home")}</Link>
            <Link to="/rooms" className="block text-secondary-foreground/70 hover:text-primary transition-colors">{t("nav.rooms")}</Link>
            <Link to="/contact" className="block text-secondary-foreground/70 hover:text-primary transition-colors">{t("nav.contact")}</Link>
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold mb-4">{t("footer.contact")}</h4>
          <div className="space-y-3 text-sm text-secondary-foreground/70">
            <div className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> 123 Paradise Beach Road</div>
            <div className="flex items-center gap-2"><Phone size={16} className="text-primary" /> +66 123 456 789</div>
            <div className="flex items-center gap-2"><Mail size={16} className="text-primary" /> info@grandhaven.com</div>
          </div>
        </div>
      </div>
      <div className="border-t border-secondary-foreground/10 text-center py-6 text-xs text-secondary-foreground/50">
        © 2026 GrandHaven Hotel. {t("footer.rights")}
      </div>
    </footer>
  );
};

export default Footer;
