import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import RoomCard from "@/components/RoomCard";
import ReviewCard from "@/components/ReviewCard";
import heroImage from "@/assets/hero-hotel.jpg";
import { rooms } from "@/data/rooms";
import { CalendarDays, Users } from "lucide-react";

const reviews = [
  { name: "Sarah M.", rating: 5, text: "Absolutely stunning hotel. The ocean view room was beyond expectations. Will definitely return!", date: "Feb 2026" },
  { name: "James K.", rating: 5, text: "World-class service and exquisite dining. The staff made our anniversary truly special.", date: "Jan 2026" },
  { name: "Yuki T.", rating: 4, text: "Beautiful property with amazing amenities. The spa was incredibly relaxing. Highly recommended.", date: "Dec 2025" },
];

const Index = () => (
  <div className="min-h-screen">
    {/* Hero */}
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <img src={heroImage} alt="GrandHaven Hotel" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative z-10 text-center px-4 max-w-3xl animate-fade-in-up">
        <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4">Welcome to</p>
        <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
          Grand<span className="text-primary">Haven</span>
        </h1>
        <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 font-light">
          Where luxury meets tranquility. Experience world-class hospitality in paradise.
        </p>
        <Button asChild size="lg" className="gold-gradient border-0 text-lg px-10 py-6">
          <Link to="/rooms">Book Now</Link>
        </Button>
      </div>
    </section>

    {/* Search bar */}
    <section className="container mx-auto px-4 -mt-12 relative z-20">
      <div className="bg-card rounded-xl shadow-luxury p-6 flex flex-col md:flex-row gap-4 items-end">
        <div className="flex-1 w-full">
          <label className="text-xs font-medium text-muted-foreground mb-1 block">Check-in</label>
          <div className="flex items-center gap-2 border border-border rounded-md px-3 py-2">
            <CalendarDays size={16} className="text-primary" />
            <input type="date" className="bg-transparent text-sm text-foreground w-full outline-none" />
          </div>
        </div>
        <div className="flex-1 w-full">
          <label className="text-xs font-medium text-muted-foreground mb-1 block">Check-out</label>
          <div className="flex items-center gap-2 border border-border rounded-md px-3 py-2">
            <CalendarDays size={16} className="text-primary" />
            <input type="date" className="bg-transparent text-sm text-foreground w-full outline-none" />
          </div>
        </div>
        <div className="flex-1 w-full">
          <label className="text-xs font-medium text-muted-foreground mb-1 block">Guests</label>
          <div className="flex items-center gap-2 border border-border rounded-md px-3 py-2">
            <Users size={16} className="text-primary" />
            <select className="bg-transparent text-sm text-foreground w-full outline-none">
              {[1, 2, 3, 4].map((n) => (
                <option key={n} value={n}>{n} Guest{n > 1 ? "s" : ""}</option>
              ))}
            </select>
          </div>
        </div>
        <Button asChild className="gold-gradient border-0 px-8 w-full md:w-auto">
          <Link to="/rooms">Search</Link>
        </Button>
      </div>
    </section>

    {/* Featured Rooms */}
    <section className="container mx-auto px-4 py-24">
      <div className="text-center mb-12">
        <p className="text-primary tracking-[0.2em] uppercase text-sm font-medium mb-2">Accommodation</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Our Finest Rooms</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </section>

    {/* Reviews */}
    <section className="bg-muted py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary tracking-[0.2em] uppercase text-sm font-medium mb-2">Testimonials</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">What Our Guests Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {reviews.map((r) => (
            <ReviewCard key={r.name} {...r} />
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="container mx-auto px-4 py-24 text-center">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Ready for an Unforgettable Stay?</h2>
      <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
        Book your room today and discover the perfect blend of luxury, comfort, and breathtaking views.
      </p>
      <Button asChild size="lg" className="gold-gradient border-0 text-lg px-10 py-6">
        <Link to="/rooms">Book Your Room</Link>
      </Button>
    </section>
  </div>
);

export default Index;
