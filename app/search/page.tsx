"use client";

import { useState } from "react";
import SearchFilters from "@/src/components/Filters/filterBar";
import dynamic from "next/dynamic";
import { List, Map as MapIcon } from "lucide-react";

// Dynamically import MapView to avoid SSR issues with Leaflet
const MapView = dynamic(() => import("@/src/components/Map/mapview"), { ssr: false });

export default function SearchPage() {
  const [viewMode, setViewMode] = useState<"list" | "map">("list");

  // Mock data - In a real app, this would come from an API based on searchParams
  const filteredCompanies = [
    { id: 1, name: "SolarTech Nigeria", lat: 6.5244, lng: 3.3792, serviceType: "Installation" },
    { id: 2, name: "EcoEnergy Ltd", lat: 6.6018, lng: 3.3515, serviceType: "Maintenance" },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Find Solar Installers</h1>
        <div className="flex bg-white border rounded-lg p-1">
          <button 
            onClick={() => setViewMode("list")}
            className={`p-2 rounded-md ${viewMode === "list" ? "bg-gray-100 text-yellow-600" : "text-gray-400"}`}
          >
            <List size={20} />
          </button>
          <button 
            onClick={() => setViewMode("map")}
            className={`p-2 rounded-md ${viewMode === "map" ? "bg-gray-100 text-yellow-600" : "text-gray-400"}`}
          >
            <MapIcon size={20} />
          </button>
        </div>
      </div>

      <SearchFilters />

      <div className="mt-8">
        {viewMode === "list" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Map through company cards here */}
            {filteredCompanies.map(c => (
              <div key={c.id} className="p-4 bg-white border rounded-xl shadow-sm">
                <h3 className="font-bold">{c.name}</h3>
                <p className="text-sm text-gray-500">{c.serviceType}</p>
              </div>
            ))}
          </div>
        ) : (
          <MapView companies={filteredCompanies} />
        )}
      </div>
    </div>
  );
}