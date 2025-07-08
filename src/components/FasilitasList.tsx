"use client";
import React from "react";
import {
  Wifi,
  Star,
  Heart,
  Share2,
  Phone,
  MessageCircle,
  MapPin,
} from "lucide-react";

export type FasilitasItem = string | { icon?: string; label: string };

const iconMap: Record<string, React.ElementType> = {
  Wifi,
  Star,
  Heart,
  Share2,
  Phone,
  MessageCircle,
  MapPin,
};

interface FasilitasListProps {
  fasilitas: FasilitasItem[];
}

const FasilitasList: React.FC<FasilitasListProps> = ({ fasilitas }) => {
  return (
    <ul className="grid grid-cols-2 gap-4">
      {fasilitas.map((item, i) => {
        const label = typeof item === "string" ? item : item.label;
        const IconComp =
          typeof item === "object" && item.icon && iconMap[item.icon]
            ? iconMap[item.icon]
            : Wifi;
        return (
          <li key={i} className="flex items-center gap-2 text-[#4E342E]">
            <IconComp className="w-5 h-5" />
            <span>{label}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default FasilitasList;
