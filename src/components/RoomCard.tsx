import { Link } from "react-router-dom";
import { Wifi, Wind, Tv, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Room } from "@/data/rooms";

const amenityIcons: Record<string, React.ReactNode> = {
  WiFi: <Wifi size={14} />,
  "Air Conditioning": <Wind size={14} />,
  TV: <Tv size={14} />,
  Breakfast: <UtensilsCrossed size={14} />,
};

const RoomCard = ({ room }: { room: Room }) => (
  <div className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-luxury transition-shadow duration-300">
    <div className="overflow-hidden aspect-[4/3]">
      <img
        src={room.images[0]}
        alt={room.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="p-6 space-y-4">
      <h3 className="font-display text-xl font-semibold text-foreground">{room.name}</h3>
      <div className="flex flex-wrap gap-3">
        {["WiFi", "Air Conditioning", "TV", "Breakfast"].map((a) =>
          room.amenities.includes(a) ? (
            <span key={a} className="flex items-center gap-1 text-xs text-muted-foreground">
              {amenityIcons[a]} {a}
            </span>
          ) : null
        )}
      </div>
      <div className="flex items-end justify-between pt-2">
        <div>
          <span className="text-2xl font-bold text-primary">${room.price}</span>
          <span className="text-sm text-muted-foreground"> / night</span>
        </div>
        <Button asChild variant="outline" size="sm">
          <Link to={`/rooms/${room.id}`}>View Details</Link>
        </Button>
      </div>
    </div>
  </div>
);

export default RoomCard;
