"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

type Company = {
  id: number;
  name: string;
  lat: number;
  lng: number;
  serviceType: string;
};

export default function MapView({
  companies,
}: {
  companies: Company[];
}) {
  return (
    <div className="w-full h-[600px] rounded-2xl overflow-hidden border">

      <MapContainer
        center={[6.5244, 3.3792]}
        zoom={11}
        scrollWheelZoom={true}
        className="w-full h-full"
      >

        {/* Type definitions for react-leaflet may not include the attribution prop in some setups; ignore TS here */}
        {/* @ts-ignore */}
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {companies.map((company) => (
          <Marker
            key={company.id}
            position={[company.lat, company.lng]}
          >
            <Popup>
              <div>
                <h2 className="font-bold">
                  {company.name}
                </h2>

                <p>
                  {company.serviceType}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}

      </MapContainer>

    </div>
  );
}