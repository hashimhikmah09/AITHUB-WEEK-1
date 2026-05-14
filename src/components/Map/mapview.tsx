"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default marker icons in Next.js
const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

export default function MapView({ companies }: { companies: any[] }) {
  return (
    <div className="h-[600px] w-full rounded-2xl overflow-hidden border shadow-inner">
      <MapContainer center={[6.5244, 3.3792]} zoom={11} style={{ height: "100%", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {companies.map((company) => (
          <Marker key={company.id} position={[company.lat, company.lng]} icon={icon}>
            <Popup>
              <div className="p-1">
                <h3 className="font-bold">{company.name}</h3>
                <p className="text-xs text-gray-500">{company.serviceType}</p>
                <button className="mt-2 text-xs text-yellow-600 font-bold">View Profile</button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}