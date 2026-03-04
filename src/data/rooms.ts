import roomStandard from "@/assets/room-standard.jpg";
import roomSuperior from "@/assets/room-superior.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomSuite from "@/assets/room-suite.jpg";

export interface Room {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  amenities: string[];
  maxGuests: number;
  size: string;
}

export const rooms: Room[] = [
  {
    id: "standard",
    name: "Standard Room",
    description: "A cozy retreat with all the essentials for a comfortable stay. Featuring a queen-size bed, modern furnishings, and a serene ambiance perfect for both business and leisure travelers.",
    price: 120,
    images: [roomStandard],
    amenities: ["WiFi", "Air Conditioning", "TV", "Mini Bar", "Room Service"],
    maxGuests: 2,
    size: "28 m²",
  },
  {
    id: "superior",
    name: "Superior Room",
    description: "Spacious and elegantly appointed, our Superior Room offers twin beds, a private balcony with garden views, and premium amenities for an elevated experience.",
    price: 180,
    images: [roomSuperior],
    amenities: ["WiFi", "Air Conditioning", "TV", "Breakfast", "Balcony", "Room Service"],
    maxGuests: 3,
    size: "35 m²",
  },
  {
    id: "deluxe",
    name: "Deluxe Ocean View",
    description: "Wake up to breathtaking ocean panoramas in our Deluxe room. Featuring a king-size bed, floor-to-ceiling windows, and luxurious gold-accented décor.",
    price: 280,
    images: [roomDeluxe],
    amenities: ["WiFi", "Air Conditioning", "TV", "Breakfast", "Ocean View", "Bathtub", "Room Service", "Minibar"],
    maxGuests: 2,
    size: "45 m²",
  },
  {
    id: "suite",
    name: "Presidential Suite",
    description: "The pinnacle of luxury. A separate living area, panoramic city views, marble bathroom, and personalized butler service. An unforgettable experience.",
    price: 520,
    images: [roomSuite],
    amenities: ["WiFi", "Air Conditioning", "TV", "Breakfast", "City View", "Bathtub", "Butler Service", "Lounge Access", "Minibar"],
    maxGuests: 4,
    size: "85 m²",
  },
];
