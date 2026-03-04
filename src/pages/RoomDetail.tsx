import { useParams, Link, useNavigate } from "react-router-dom";
import { rooms } from "@/data/rooms";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Check, Users } from "lucide-react";
import { useState, useMemo } from "react";
import { differenceInDays } from "date-fns";
import { toast } from "sonner";
import { useLanguage } from "@/i18n/LanguageContext";

const RoomDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const room = rooms.find((r) => r.id === id);

  const [form, setForm] = useState({
    name: "", phone: "", email: "",
    checkIn: "", checkOut: "", guests: "1",
  });

  const nights = useMemo(() => {
    if (!form.checkIn || !form.checkOut) return 0;
    const d = differenceInDays(new Date(form.checkOut), new Date(form.checkIn));
    return d > 0 ? d : 0;
  }, [form.checkIn, form.checkOut]);

  const total = room ? nights * room.price : 0;

  if (!room) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold mb-4">{t("detail.notFound")}</h1>
          <Button asChild variant="outline"><Link to="/rooms">{t("detail.back")}</Link></Button>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.checkIn || !form.checkOut || nights < 1) {
      toast.error(t("detail.fillFields"));
      return;
    }
    navigate("/booking-confirmation", {
      state: { room: room.name, total, nights, checkIn: form.checkIn, checkOut: form.checkOut, name: form.name },
    });
  };

  const update = (key: string, value: string) => setForm((p) => ({ ...p, [key]: value }));

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <Link to="/rooms" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8">
          <ArrowLeft size={16} /> {t("detail.back")}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="rounded-xl overflow-hidden shadow-luxury">
              <img src={room.images[0]} alt={room.name} className="w-full aspect-[4/3] object-cover" />
            </div>
            <div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">{room.name}</h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span>{room.size}</span>
                <span className="flex items-center gap-1"><Users size={14} /> {t("detail.upTo")} {room.maxGuests} {t("detail.guestsLabel")}</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">{room.description}</p>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold mb-3">{t("detail.amenities")}</h3>
              <div className="grid grid-cols-2 gap-2">
                {room.amenities.map((a) => (
                  <span key={a} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check size={14} className="text-primary" /> {a}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-3xl font-bold text-primary">
              ${room.price}<span className="text-base font-normal text-muted-foreground"> {t("rooms.perNight")}</span>
            </div>
          </div>

          <div className="bg-card rounded-xl shadow-luxury p-8">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">{t("detail.bookThis")}</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="name">{t("detail.fullName")} *</Label>
                <Input id="name" value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="John Doe" />
              </div>
              <div>
                <Label htmlFor="phone">{t("detail.phone")}</Label>
                <Input id="phone" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+66 123 456 789" />
              </div>
              <div>
                <Label htmlFor="email">{t("detail.email")} *</Label>
                <Input id="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="john@email.com" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="checkIn">{t("search.checkIn")} *</Label>
                  <Input id="checkIn" type="date" value={form.checkIn} onChange={(e) => update("checkIn", e.target.value)} />
                </div>
                <div>
                  <Label htmlFor="checkOut">{t("search.checkOut")} *</Label>
                  <Input id="checkOut" type="date" value={form.checkOut} onChange={(e) => update("checkOut", e.target.value)} />
                </div>
              </div>
              <div>
                <Label htmlFor="guests">{t("detail.numGuests")}</Label>
                <select
                  id="guests"
                  value={form.guests}
                  onChange={(e) => update("guests", e.target.value)}
                  className="w-full border border-border rounded-md px-3 py-2 bg-background text-sm"
                >
                  {Array.from({ length: room.maxGuests }).map((_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1} {t("search.guest")}{i > 0 ? "s" : ""}</option>
                  ))}
                </select>
              </div>

              {nights > 0 && (
                <div className="bg-muted rounded-lg p-4 space-y-2">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>${room.price} × {nights} {nights > 1 ? t("detail.nights") : t("detail.night")}</span>
                    <span>${total}</span>
                  </div>
                  <div className="flex justify-between font-bold text-foreground border-t border-border pt-2">
                    <span>{t("detail.total")}</span>
                    <span className="text-primary text-xl">${total}</span>
                  </div>
                </div>
              )}

              <Button type="submit" className="w-full gold-gradient border-0 text-lg py-6">
                {t("detail.confirm")}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;
