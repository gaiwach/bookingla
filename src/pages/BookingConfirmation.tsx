import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const BookingConfirmation = () => {
  const { state } = useLocation();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
      <div className="bg-card rounded-xl shadow-luxury p-10 max-w-md w-full text-center space-y-6">
        <CheckCircle size={64} className="text-primary mx-auto" />
        <h1 className="font-display text-3xl font-bold text-foreground">{t("confirm.title")}</h1>
        <p className="text-muted-foreground">
          {t("confirm.thanks")}{state?.name ? `, ${state.name}` : ""}! {t("confirm.received")}
        </p>
        {state && (
          <div className="bg-muted rounded-lg p-4 text-left space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-muted-foreground">{t("confirm.room")}</span><span className="font-medium">{state.room}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{t("search.checkIn")}</span><span className="font-medium">{state.checkIn}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{t("search.checkOut")}</span><span className="font-medium">{state.checkOut}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{t("detail.nights")}</span><span className="font-medium">{state.nights}</span></div>
            <div className="flex justify-between border-t border-border pt-2 font-bold"><span>{t("detail.total")}</span><span className="text-primary">${state.total}</span></div>
          </div>
        )}
        <div className="flex gap-3">
          <Button asChild variant="outline" className="flex-1"><Link to="/">{t("confirm.home")}</Link></Button>
          <Button asChild className="flex-1 gold-gradient border-0"><Link to="/rooms">{t("confirm.browse")}</Link></Button>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
