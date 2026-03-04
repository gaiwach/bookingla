import { Star } from "lucide-react";

interface ReviewProps {
  name: string;
  rating: number;
  text: string;
  date: string;
}

const ReviewCard = ({ name, rating, text, date }: ReviewProps) => (
  <div className="bg-card rounded-lg p-6 shadow-card space-y-3">
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} className={i < rating ? "fill-primary text-primary" : "text-muted"} />
      ))}
    </div>
    <p className="text-sm text-muted-foreground leading-relaxed italic">"{text}"</p>
    <div className="flex justify-between items-center text-xs text-muted-foreground">
      <span className="font-semibold text-foreground">{name}</span>
      <span>{date}</span>
    </div>
  </div>
);

export default ReviewCard;
