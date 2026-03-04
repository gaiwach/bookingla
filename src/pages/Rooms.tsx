import RoomCard from "@/components/RoomCard";
import { rooms } from "@/data/rooms";
import { useLanguage } from "@/i18n/LanguageContext";

const Rooms = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary tracking-[0.2em] uppercase text-sm font-medium mb-2">{t("rooms.subtitle")}</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">{t("rooms.pageTitle")}</h1>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">{t("rooms.pageDesc")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
