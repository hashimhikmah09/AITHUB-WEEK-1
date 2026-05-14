"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Search, MapPin, DollarSign, Star, Clock } from "lucide-react";

export default function SearchFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set(key, value);
    else params.delete(key);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border flex flex-wrap gap-4 items-center">
      {/* Location Filter */}
      <div className="flex items-center gap-2 border-r pr-4">
        <MapPin size={18} className="text-gray-400" />
        <select 
          className="bg-transparent text-sm font-medium focus:outline-none"
          onChange={(e) => updateFilter("location", e.target.value)}
          defaultValue={searchParams.get("location") || ""}
        >
          <option value="">All Locations</option>
          <option value="lagos">Lagos</option>
          <option value="abuja">Abuja</option>
          <option value="portharcourt">Port Harcourt</option>
        </select>
      </div>

      {/* Budget Range */}
      <div className="flex items-center gap-2 border-r pr-4">
        <DollarSign size={18} className="text-gray-400" />
        <select 
          className="bg-transparent text-sm font-medium focus:outline-none"
          onChange={(e) => updateFilter("budget", e.target.value)}
          defaultValue={searchParams.get("budget") || ""}
        >
          <option value="">Budget Range</option>
          <option value="0-500k">Under ₦500k</option>
          <option value="500k-2m">₦500k - ₦2M</option>
          <option value="2m+">Over ₦2M</option>
        </select>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <Star size={18} className="text-gray-400" />
        <select 
          className="bg-transparent text-sm font-medium focus:outline-none"
          onChange={(e) => updateFilter("rating", e.target.value)}
          defaultValue={searchParams.get("rating") || ""}
        >
          <option value="">Any Rating</option>
          <option value="4">4+ Stars</option>
          <option value="4.5">4.5+ Stars</option>
        </select>
      </div>
    </div>
  );
}